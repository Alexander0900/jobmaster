import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AUTHENTICATION } from "../config";
import { Title } from "../components/Title";
import { SubmitButton } from "../components/SubmitButton";
import { HelperContainer } from "../components/HelperContainer";
import { UserContext } from "../contexts/UserContext";

export const SignIn = () => {
  const { updateUserData } = useContext(UserContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post(AUTHENTICATION, data);
      updateUserData(response.data);
      setErr(null);
      navigate("/ads");
    } catch (err) {
      setErr(err.response.data.message);
    } finally {
      setLoading(false);
      reset();
    }
  };

  return (
    <>
      <Title>Войти</Title>
      <Form
        style={{ maxWidth: "850px", margin: "auto" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form.Label>Email адрес</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          {...register("email", {
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Введите корректный email",
            },
          })}
        />
        <HelperContainer>
          {errors?.email && (
            <p className="text-danger">{errors?.email?.message || "Error!"}</p>
          )}
        </HelperContainer>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            type="password"
            placeholder="пароль"
            {...register("password", {
              required: true,
              minLength: {
                value: 1,
                message: "Введите более 1 символа",
              },
            })}
          />
          <HelperContainer>
            {errors?.password && (
              <p className="text-danger">
                {errors?.password?.message || "Error!"}
              </p>
            )}
          </HelperContainer>
          <div style={{ height: 20 }}>
            <p className="text-danger">{err}</p>
          </div>
        </Form.Group>

        <SubmitButton loading={loading}>Войти</SubmitButton>
        <Button variant="link" onClick={() => navigate("/signup")}>
          Зарегестрироваться
        </Button>
      </Form>
    </>
  );
};
