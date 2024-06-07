import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { Title } from "../components/Title";
import { SubmitButton } from "../components/SubmitButton";
import { HelperContainer } from "../components/HelperContainer";
import axios from "axios";
import { CREATE_ADS } from "../config";
import { UserContext } from "../contexts/UserContext";
import { MyToast } from "./MyToast";

export const AdForm = () => {
  const [isOpenNotification, setIsOpenNotification] = useState(false);
  const [isOpenNotificationError, setIsOpenNotificationError] = useState(false);
  const { userData } = useContext(UserContext);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await axios.post(CREATE_ADS, data, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      });
      setIsOpenNotification(true);
      setErr(null);
    } catch (err) {
      setErr(err.response.data.message);
      setIsOpenNotificationError(true);
    } finally {
      setLoading(false);
      reset();
    }
  };

  return (
    <>
      <MyToast
        open={isOpenNotificationError}
        onClose={() => setIsOpenNotification(false)}
        title="Извините, произошла ошибка"
        description={err}
        variant="Danger"
      />

      <MyToast
        open={isOpenNotification}
        onClose={() => setIsOpenNotification(false)}
        title="Объявление создано успешно"
        description="Чтобы посомтреть обявления перейдите на страницу обявлений"
      />

      <Title>Разместить объявление</Title>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        style={{ maxWidth: "850px", margin: "auto" }}
      >
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Имя</Form.Label>
          <Form.Control
            {...register("username", {
              required: "обязательное поле!",
              minLength: {
                value: 5,
                message: "минимально 5 символов",
              },
            })}
            type="text"
            placeholder="введите ваше имя..."
          />
          <HelperContainer>
            {errors?.username && (
              <p className="text-danger">
                {errors?.username?.message || "Error!"}
              </p>
            )}
          </HelperContainer>
        </Form.Group>

        <Form.Group className="mb-3" controlId="mobile">
          <Form.Label>Номер телефона</Form.Label>
          <Form.Control
            {...register("mobile", {
              required: "обязательно поле!",
              minLength: {
                value: 1,
                message: "минимально 1 сивол",
              },
            })}
            type="text"
            placeholder="введите номер телефона..."
          />
          <HelperContainer>
            {errors?.mobile && (
              <p className="text-danger">
                {errors?.mobile?.message || "Error!"}
              </p>
            )}
          </HelperContainer>
        </Form.Group>

        <Form.Group className="mb-3" controlId="adTitle">
          <Form.Label>Заголовок объявления</Form.Label>
          <Form.Control
            {...register("adTitle", {
              required: "обязательно поле!",
              minLength: {
                value: 5,
                message: "минимально 5 сиволов",
              },
            })}
            type="text"
            placeholder="введите свой город..."
          />
          <HelperContainer>
            {errors?.adTitle && (
              <p className="text-danger">
                {errors?.adTitle?.message || "Error!"}
              </p>
            )}
          </HelperContainer>
        </Form.Group>

        <Form.Group className="mb-3" controlId="requirements">
          <Form.Label>Требования</Form.Label>
          <Form.Control
            as="textarea"
            {...register("requirements", {
              required: "обязательное поле!",
              minLength: {
                value: 1,
                message: "Минимально 1 символ",
              },
            })}
            type="text"
            placeholder="введите необходимые требования.."
          />
          <HelperContainer>
            {errors?.requirements && (
              <p className="text-danger">
                {errors?.requirements?.message || "Error!"}
              </p>
            )}
          </HelperContainer>
        </Form.Group>

        <Form.Group className="mb-3" controlId="salary">
          <Form.Label>Оплата, BYN</Form.Label>
          <Form.Control
            {...register("salary", {
              required: "обязательно поле!",
              minLength: {
                value: 1,
                message: "минимально 1 сивол",
              },
            })}
            type="number"
            placeholder="введите оплату..."
          />
          <HelperContainer>
            {errors?.salary && (
              <p className="text-danger">
                {errors?.salary?.message || "Error!"}
              </p>
            )}
          </HelperContainer>
        </Form.Group>

        <Form.Group className="mb-3" controlId="city">
          <Form.Label>Город</Form.Label>
          <Form.Control
            {...register("city", {
              required: "обязательно поле!",
              minLength: {
                value: 1,
                message: "минимально 1 сивол",
              },
            })}
            type="text"
            placeholder="введите свой город..."
          />
          <HelperContainer>
            {errors?.city && (
              <p className="text-danger">{errors?.city?.message || "Error!"}</p>
            )}
          </HelperContainer>
        </Form.Group>
        <SubmitButton loading={loading}>Отправить</SubmitButton>
      </Form>
    </>
  );
};
