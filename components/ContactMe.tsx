"use client"
import React from 'react'
import {PhoneIcon, MapPinIcon,EnvelopeIcon} from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    name: string
    email: string
    subject: string
    message: string
  }


type Props = {}

export default function ContactMe({}: Props) {
    const {
        register,
        handleSubmit,
      } = useForm<Inputs>()

      const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:rashisood1975@gmail?subject=${formData.subject}&body= Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    };
    
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl  '>
            Contact
        </h3>

        <div className='flex flex-col space-y-10 xs:space-y-8 xxs:space-y-2 xxs:-mt-[90px] xs:-mt-[150px]'>
            <h4 className='text-4xl font-semibold text-center xxs:mt-0  xs:text-base xs:mt-[250px] xl:mt-[50px]'>
                I have got just what you need. {" "}
                <span className='decoration-[#F7AB0A]/50 underline'>Let's Talk.</span>
            </h4>

            <div className='space-y-10 xs:space-y-5'>
                {/* <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>+123456789</p>
                </div> */}

                <div className='flex items-center space-x-5 justify-center xxs: mt-0 xs:mt-[30px]'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl xs:text-xl'>rashisood6175@gmail.com</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl xs:text-xl'>Ludhiana, Punjab</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto xs:w-[80vw]'>
                <div className='flex space-x-2 xs:flex-col xs:space-x-0 xs:space-y-2'>
                    <input 
                    {...register('name')} 
                    placeholder='Name' 
                    className='contactInput' 
                    type="text" /> 

                    <input 
                    {...register('email')} 
                    placeholder='Email' 
                    className='contactInput' 
                    type="text" />

                </div>
                <input 
                {...register('subject')} 
                placeholder='Subject' 
                className='contactInput' 
                type="text" />

                <textarea 
                {...register('message')} 
                placeholder='Message'
                className='contactInput' />

                <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-sm text-black font-bold text-lg'>
                    Submit</button>
            </form>
        </div>
    </div>
  )
}