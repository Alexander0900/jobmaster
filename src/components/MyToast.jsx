import { Toast } from "react-bootstrap";

export const MyToast = ({
  open,
  onClose,
  title,
  description,
  variant = "Primary",
}) => {
  return (
    <Toast
      bg={variant.toLowerCase()}
      style={{ position: "absolute", top: "30px", right: "30px" }}
      onClose={onClose}
      show={open}
      delay={60000}
      autohide
    >
      <Toast.Header closeButton={true}>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">{title}</strong>
      </Toast.Header>
      <Toast.Body>{description}</Toast.Body>
    </Toast>
  );
};
