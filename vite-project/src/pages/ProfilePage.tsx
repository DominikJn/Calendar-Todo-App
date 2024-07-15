import React from 'react'
//react hook form
import { useForm } from "react-hook-form";
//components
import Form from '../components/forms/Form';
import Input from '../components/forms/Input';
import SubmitInput from '../components/forms/SubmitInput';
import Fieldset from '../components/forms/Fieldset';
//utils
import getDataFromLocalStorage from '../utils/local-storage/getDataFromLocalStorage';
//toastify
import { toast } from "react-toastify";
//utils
import api from '../utils/api';
import insertDataInLocalStorage from '../utils/local-storage/insertDataInLocalStorage';

interface ProfileData {
    name: string,
    password: string
}

const ProfilePage: React.FC = () => {
    const userData = getDataFromLocalStorage('userData')
    let initialProfileData = {
        name: userData.name,
        password: ''
    }
    const {
        register,
        handleSubmit,
        setError,
        setValue,
        formState: { isLoading, errors },
    } = useForm<ProfileData>({ defaultValues: initialProfileData });

    async function onSubmit(data: ProfileData): Promise<void> {
        console.log(initialProfileData)
        try {
            if(JSON.stringify(data) === JSON.stringify(initialProfileData)) {
                toast.warn('Havent made any changes!')
            }else {
                const response = await api.put('users/profile', data)
                insertDataInLocalStorage('userData', response.data)
                setValue('name', response.data.name)
                setValue('password', '')
                toast.success('Changes saved!')
            }
        } catch(err: any) {
            setError("root", { type: "custom", message: err.response.data.message });
            const errorMessage: string = errors.root?.message || 'Write a title at least!'
            toast.error(errorMessage, { position: "top-center" })
        }
    }

    return (
        <div className='w-1/2'>
            <h1 className='text-center text-5xl text-blue font-bold my-10'>Change Profile Information</h1>
            <Form handleSubmit={handleSubmit} onSubmit={onSubmit}>
                <Fieldset legend='Username'>
                    <Input
                        type="text"
                        label="name"
                        register={register}
                        required
                    />
                </Fieldset>
                <Fieldset legend='Password'>
                    <Input
                        type="text"
                        label="password"
                        register={register}
                        placeholder='Type new password...'
                    />
                </Fieldset>
                <SubmitInput isLoading={isLoading} value="Save changes" />
            </Form>
        </div>
    )
}

export default ProfilePage