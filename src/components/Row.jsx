import { Form } from "react-bootstrap";
import dayjs from "dayjs";

export const Row = ({
  _id,
  username,
  email,
  registrationDate,
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
      <td>{dayjs(registrationDate).format("DD.MM.YYYY / HH:mm")}</td>
      <td>{isBlock ? "blocked" : "active"}</td>
    </tr>
  );
};
