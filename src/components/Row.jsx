import { Form } from "react-bootstrap";
import { formatDate } from "../utils/formatDate";

export const Row = ({
  _id,
  username,
  email,
  registrationDate,
  lastLogin,
  isBlock,
  handleTable,
  checked,
}) => {
  return (
    <tr>
      <td>
        <Form.Check
          type={"checkbox"}
          _id={_id}
          onChange={() => handleTable({ _id, email })}
          checked={checked}
        />
      </td>
      <td>{_id}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{formatDate(new Date(registrationDate))}</td>
      <td>
        {lastLogin ? formatDate(new Date(lastLogin)) : "no login attempts"}
      </td>
      <td>{isBlock ? "blocked" : "active"}</td>
    </tr>
  );
};
