import React from 'react'
//components
import Form from '../components/forms/Form'
import Input from '../components/forms/Input'
import SubmitInput from '../components/forms/SubmitInput'
import HyperLink from '../components/HyperLink'
import ErrorMessage from '../components/ErrorMessage'
//react hook form
import { useForm } from 'react-hook-form'
//utils
import insertDataInLocalStorage from '../utils/local-storage/insertDataInLocalStorage'
//axios
import axios from 'axios'



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
        setError,
        formState: { isLoading, errors }
    } = useForm<RegisterFormData>({ defaultValues: registerFormDefaultValues })

    function createUserId(): string {
        return 'usr' + Date.now().toString(36) + Math.random().toString(36).substr(2)
    }

    async function onSubmit(data: RegisterFormData): Promise<void> {
        try {
            const response = await axios.post('http://localhost:3001/register', { ...data, userId: createUserId(), config: { theme: 'light' } })
            if(response.status === 200) {
                insertDataInLocalStorage('userData', { ...response.data, isLogged: true })
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
                    <SubmitInput isLoading={isLoading} value="Register" />
                    <HyperLink linkPath="/login" innerText="Already have an account?" />
                    <ErrorMessage errors={errors} />
                </Form>
            </div>
        </div>
    )
}

export default RegisterPage