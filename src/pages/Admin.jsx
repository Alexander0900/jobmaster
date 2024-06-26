import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ALL_USERS, DELETE_USERS, UPDATE_USER } from "../config";
import { TableUsers } from "../components/TableUsers";
import { Toolbar } from "../components/Toolbar";
import { Loader } from "../components/Loader";
import { UserContext } from "../contexts/UserContext";
import { UseIsUserAuth } from "../hooks/UseIsUserAuth";

export const Admin = () => {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [isAll, setAll] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const selectAll = (state) => setAll(state);
  const isUserAuth = UseIsUserAuth();
  const { userData, updateUserData } = useContext(UserContext);

  const handleLogout = () => {
    updateUserData({
      token: null,
      email: null,
      username: null,
      roles: null,
    });

    navigate("/ads");
  };

  const handleTable = ({ _id, email }) => {
    !selectedUsers.some((el) => el._id === _id)
      ? setSelectedUsers([...selectedUsers, { _id, email }])
      : setSelectedUsers(selectedUsers.filter((el) => el._id !== _id));
  };

  const getUsers = async () => {
    if (!isUserAuth) navigate("/signin");

    setLoading(true);

    try {
      const response = await axios.post(
        ALL_USERS,
        { email: userData.email },
        {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        }
      );
      setUsers(response.data);
    } catch (err) {
      navigate("/signin");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (selectedUsers.length === 0) return;
    if (!isUserAuth) {
      navigate("/signin");
      return;
    }

    setLoading(true);

    try {
      await axios.delete(DELETE_USERS, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
        data: {
          emails: selectedUsers.reduce((acc, el) => [...acc, el.email], []),
        },
      });
      await getUsers();
    } catch (err) {
      navigate("/signin");
    } finally {
      setLoading(false);
    }

    const isSelectedUserAuth = selectedUsers.find(
      (user) => user.email === userData.email
    );

    if (isSelectedUserAuth) {
      handleLogout();
    }

    setSelectedUsers([]);
    setAll(false);
  };

  const handleStatus = async (status) => {
    if (selectedUsers.length === 0) return;
    if (!isUserAuth) {
      navigate("/signin");
      return;
    }

    setLoading(true);

    try {
      await axios.put(
        UPDATE_USER,
        {
          emails: selectedUsers.reduce((acc, el) => [...acc, el.email], []),
          status: status,
        },
        {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        }
      );
      await getUsers();
    } catch (err) {
      navigate("/signin");
    } finally {
      setLoading(false);
    }

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

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
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
    </>
  );
};
