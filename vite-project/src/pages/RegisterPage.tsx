import React from 'react'
//components
import Form from '../components/forms/Form'
import Input from '../components/forms/Input'
import SubmitInput from '../components/forms/SubmitInput'
//react hook form
import { useForm } from 'react-hook-form'



interface RegisterFormData {
    email: string,
    username: string,
    password: string,
    userId: string,
}

const registerFormDefaultValues: RegisterFormData = {
    email: '',
    username: '',
    password: '',
    userId: '',
}

const RegisterPage: React.FC = () => {
    const { 
        register,
        handleSubmit,
        formState: { isLoading }
    } = useForm<RegisterFormData>({ defaultValues: registerFormDefaultValues })

    function onSubmit(data: RegisterFormData): void {
        console.log(data)
    }

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="w-[400px]">
                <Form
                    handleSubmit={handleSubmit}
                    onSubmit={onSubmit}
                >
                <h1 className="text-3xl">Register</h1>
                    <Input 
                        type='email'
                        label='email'
                        register={register}
                        required 
                        placeholder="Email..."
                    />
                    <Input 
                        type='text'
                        label='username'
                        register={register}
                        required 
                        placeholder="Username..."
                    />
                    <Input 
                        type='password'
                        label='password'
                        register={register}
                        required 
                        placeholder="Password..."
                    />
                    <SubmitInput isLoading={isLoading} value="Login" />
                </Form>
            </div>
        </div>
    )
}

export default RegisterPage