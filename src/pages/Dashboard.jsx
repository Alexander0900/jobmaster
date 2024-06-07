import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ALL_USERS, DELETE_USERS, UPDATE_USER } from "../config";
import { TableUsers } from "../components/TableUsers";
import { Toolbar } from "../components/Toolbar";
import { Loader } from "../components/Loader";
import { UserContext } from "../contexts/UserContext";
import { UseIsUserAuth } from "../hooks/UseIsUserAuth";

export const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [isAll, setAll] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const selectAll = (state) => setAll(state);
  const isUserAuth = UseIsUserAuth();
  const { userData } = useContext(UserContext);

  const handleTable = ({ _id, email }) => {
    !selectedUsers.some((el) => el._id === _id)
      ? setSelectedUsers([...selectedUsers, { _id, email }])
      : setSelectedUsers(selectedUsers.filter((el) => el._id !== _id));
  };

  const getUsers = () => {
    if (!isUserAuth) navigate("/signin");

    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };

    setLoading(true);

    //use async await
    axios
      .post(ALL_USERS, { email: userData.email }, config)
      .then((response) => setUsers(response.data))
      .catch((err) => navigate("/signin"))
      .finally(() => setLoading(false));
  };

  const handleDelete = () => {
    if (selectedUsers.length === 0) return;
    if (!isUserAuth) {
      navigate("/signin");
      return;
    }

    setLoading(true);

    axios
      .delete(DELETE_USERS, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
        data: {
          emails: selectedUsers.reduce((acc, el) => [...acc, el.email], []),
        },
      })
      .then((response) => getUsers())
      .catch((err) => navigate("/signin"))
      .finally(() => setLoading(false));

    const isAuthorizedUser = selectedUsers.find(
      (selectedUser) => selectedUser.email === userData.email
    );

    if (isAuthorizedUser) {
      sessionStorage.removeItem("userData");
      navigate("/signin");
    }

    setSelectedUsers([]);
    setAll(false);
  };

  const handleStatus = (status) => {
    if (selectedUsers.length === 0) return;
    if (!isUserAuth) {
      navigate("/signin");
      return;
    }

    const body = {
      emails: selectedUsers.reduce((acc, el) => [...acc, el.email], []),
      status: status,
    };

    setLoading(true);

    axios
      .put(UPDATE_USER, body, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((response) => {
        getUsers();
      })
      .catch((err) => {
        navigate("/signin");
      })
      .finally(() => setLoading(false));

    setSelectedUsers([]);
    setAll(false);
  };

  useEffect(() => {
    isAll
      ? setSelectedUsers(
          users.reduce(
            (acc, elem) => [...acc, { _id: elem._id, email: elem.email }],
            []
          )
        )
      : setSelectedUsers([]);
  }, [isAll, users]);

  useEffect(() => getUsers(), []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Toolbar
        handleDelete={handleDelete}
        handleStatus={handleStatus}
        loading={loading}
      />
      <div style={{ height: "50px" }}>
        {loading && <Loader animation="border" size="lg" />}
      </div>
      {!!users.length && (
        <TableUsers
          users={users}
          handleTable={handleTable}
          selectedUsers={selectedUsers}
          isAll={isAll}
          selectAll={selectAll}
        />
      )}
    </div>
  );
};
