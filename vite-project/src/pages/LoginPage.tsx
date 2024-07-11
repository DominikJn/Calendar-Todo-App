import React from 'react'
//components
import Form from '../components/forms/Form'
import Input from '../components/forms/Input'
import SubmitInput from '../components/forms/SubmitInput'
import HyperLink from '../components/HyperLink'
import ErrorMessage from '../components/ErrorMessage'
//react hook form
import { useForm } from 'react-hook-form'
//axios
import axios from 'axios'
import insertDataInLocalStorage from '../utils/local-storage/insertDataInLocalStorage'



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
        setError,
        formState: { isLoading, errors }
    } = useForm<LoginFormData>({ defaultValues: loginFormDefaultValues })

    async function onSubmit(data: LoginFormData): Promise<void> {
        try {
            const response = await axios.post('http://localhost:3001/login', data)
            if(response.status === 200) {
                insertDataInLocalStorage('userData', { ...response.data, isLogged: true })
                insertDataInLocalStorage('isDarkMode', response.data.config.isDarkMode)
                location.replace('/')
            }
        } catch(err: any) {
            setError('root', { type: 'custom', message: err.response.data.message })
        }
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
                    <HyperLink linkPath="/register" innerText="New to our website?" />
                    <ErrorMessage errors={errors} />
                </Form>
            </div>
        </div>
    )
}

export default LoginPage