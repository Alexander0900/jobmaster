import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { REGISTRATION } from '../config';
import { Title } from '../components/Title';
import { SubmitButton } from '../components/SubmitButton';
import { HelperContainer } from '../components/HelperContainer';

export const SignUp = () => {
    const navigate = useNavigate();
    const [err, setErr] = useState(null);
    const [loading, setLoading] = useState(false);

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const onSubmit = (data) => {
        setLoading(true);

        axios
            .post(REGISTRATION, data)
            .then((response) => {
                navigate('/signin');
            })
            .catch((err) => {
                setErr(err.response.data.message);
            })
            .finally(() => setLoading(false));
        reset();
    };

    return (
        <>
            <Title>Регистрация</Title>
            <Form
                onSubmit={handleSubmit(onSubmit)}
                style={{ maxWidth: '850px', margin: 'auto' }}
            >
                <Form.Group className='mb-3' controlId='username'>
                    <Form.Label>Имя</Form.Label>
                    <Form.Control
                        {...register('username', {
                            required: 'required!',
                            minLength: {
                                value: 1,
                                message: 'Min 1 symbols',
                            },
                        })}
                        type='text'
                        placeholder='введите ваше имя...'
                    />
                    <HelperContainer>
                        {errors?.username && (
                            <p className='text-danger'>
                                {errors?.username?.message || 'Error!'}
                            </p>
                        )}
                    </HelperContainer>
                </Form.Group>
                <Form.Group className='mb-3' controlId='email'>
                    <Form.Label>Email адрес</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='name@example.com'
                        {...register('email', {
                            required: true,
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message:
                                    'Entered value does not match email format',
                            },
                        })}
                    />
                    <HelperContainer>
                        {errors?.email && (
                            <p className='text-danger'>
                                {errors?.email?.message || 'Error!'}
                            </p>
                        )}
                    </HelperContainer>
                </Form.Group>
                <Form.Group className='mb-3' controlId='password'>
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Пароль'
                        {...register('password', {
                            required: true,
                            minLength: {
                                value: 1,
                                message: 'min length is 1',
                            },
                        })}
                    />
                    <HelperContainer>
                        {errors?.password && (
                            <p className='text-danger'>
                                {errors?.password?.message || 'Error!'}
                            </p>
                        )}
                    </HelperContainer>
                    <div style={{ height: 15 }}>
                        <p className='text-danger'>{err}</p>
                    </div>
                </Form.Group>

                <SubmitButton loading={loading}>Зарегистрироваться</SubmitButton>
                <Button variant="link" onClick={() => navigate('/signin')}>Уже есть аккаунт?</Button>
            </Form>
        </>
    );
};
