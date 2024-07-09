import React from 'react'
//components
import Form from '../components/forms/Form'
import Input from '../components/forms/Input'
import SubmitInput from '../components/forms/SubmitInput'
//react hook form
import { useForm } from 'react-hook-form'



interface LoginFormData {
    email: string,
    password: string,
}

const loginFormDefaultValues: LoginFormData = {
    email: '',
    password: '',
}

const LoginPage: React.FC = () => {
    const { 
        register,
        handleSubmit,
        formState: { isLoading }
    } = useForm<LoginFormData>({ defaultValues: loginFormDefaultValues })

    function onSubmit(data: LoginFormData): void {
        console.log(data)
    }

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="w-[400px]">
                <Form
                    handleSubmit={handleSubmit}
                    onSubmit={onSubmit}
                >
                <h1 className="text-3xl">Login</h1>
                    <Input 
                        type='text'
                        label='email'
                        register={register}
                        required 
                        placeholder="Email..."
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

export default LoginPage