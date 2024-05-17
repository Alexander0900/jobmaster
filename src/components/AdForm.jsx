import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Title } from '../components/Title';
import { SubmitButton } from '../components/SubmitButton';
import { HelperContainer } from '../components/HelperContainer';

export const AdForm = () => {
    const [err, setErr] = useState(null);
    const [loading, setLoading] = useState(false);
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();
    const onSubmit = (data) => {
        // setLoading(true);
console.log(data)
        // axios
        //     .post(REGISTRATION, data)
        //     .then((response) => {
        //         navigate('/signin');
        //     })
        //     .catch((err) => {
        //         setErr(err.response.data.message);
        //     })
        //     .finally(() => setLoading(false));
        // reset();
    };
    return (
        
        <>
        <Title>Разместить объявление</Title>
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
            <Form.Group className='mb-3' controlId='requirements'>
                <Form.Label>Требования</Form.Label>
                <Form.Control
                    {...register('requirements', {
                        required: 'required!',
                        minLength: {
                            value: 1,
                            message: 'Min 1 symbols',
                        },
                    })}
                    type='text'
                    placeholder='введите необходимые требования..'
                />
                <HelperContainer>
                    {errors?.username && (
                        <p className='text-danger'>
                            {errors?.username?.message || 'Error!'}
                        </p>
                    )}
                </HelperContainer>
            </Form.Group>
            <Form.Group className='mb-3' controlId='salary'>
                <Form.Label>Оплата</Form.Label>
                <Form.Control
                    {...register('salary', {
                        required: 'required!',
                        minLength: {
                            value: 1,
                            message: 'Min 1 symbols',
                        },
                    })}
                    type='text'
                    placeholder='введите оплату...'
                />
                <HelperContainer>
                    {errors?.username && (
                        <p className='text-danger'>
                            {errors?.username?.message || 'Error!'}
                        </p>
                    )}
                </HelperContainer>
            </Form.Group>
            <Form.Group className='mb-3' controlId='City'>
                <Form.Label>Город</Form.Label>
                <Form.Control
                    {...register('City', {
                        required: 'required!',
                        minLength: {
                            value: 1,
                            message: 'Min 1 symbols',
                        },
                    })}
                    type='text'
                    placeholder='введите свой город...'
                />
                <HelperContainer>
                    {errors?.username && (
                        <p className='text-danger'>
                            {errors?.username?.message || 'Error!'}
                        </p>
                    )}
                </HelperContainer>
            </Form.Group>
            <SubmitButton loading={loading}>Отправить</SubmitButton>
        </Form>
    </>
    );
};
