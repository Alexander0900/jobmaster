import { Form, Table } from "react-bootstrap";
import { Row } from "./Row";
import { Title } from "./Title";

export const TableUsers = ({
  users,
  handleTable,
  selectedUsers,
  isAll,
  selectAll,
}) => {
  return (
    <>
      <Title>Пользователи</Title>
      <Table bordered hover responsive>
        <thead>
          <tr>
            <th>
              <Form.Check
                type={"checkbox"}
                id={`default-checkbox`}
                checked={isAll}
                onChange={() => selectAll(!isAll)}
              />
            </th>
            <th>ID</th>
            <th>Имя пользователя</th>
            <th>Email</th>
            <th>Дата регистрации</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <Row
              key={user._id}
              {...user}
              handleTable={handleTable}
              checked={selectedUsers.some((el) => el._id === user._id)}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
};
