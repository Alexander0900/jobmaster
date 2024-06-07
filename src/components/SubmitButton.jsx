import { Button } from "react-bootstrap";
import { Loader } from "./Loader";

export const SubmitButton = ({
  children,
  loading,
  variant = "primary",
  type = "submit",
  onClick = undefined,
}) => {
  return (
    <Button onClick={onClick} variant={variant} type={type}>
      {!loading ? (
        children
      ) : (
        <>
          <Loader />
          Загрузка...
        </>
      )}
    </Button>
  );
};
