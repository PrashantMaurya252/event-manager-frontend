import { useState } from "react"
import { useForm } from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"


const Auth = () => {
    const [selectedForm,setSelectedForm] = useState("login")

    const signupSchema =yup.object({
        username:yup.string().required("Username is required"),
        email:yup.string().email().required("email is required"),
        password:yup.string().min(6,"password must be 6 characters long").required("password is required")
    })

    const loginSchema =yup.object({
        
        email:yup.string().email().required("email is required"),
        password:yup.string().min(6,"password must be 6 characters long").required("password is required")
    })

    const schema = selectedForm === 'login' ? loginSchema : signupSchema

    const {register,handleSubmit,formState:{errors}} = useForm({
        resolver:yupResolver(schema)
    })

    const handleSignUp=(data)=>{
        console.log("form",data)
    }
    const handleLogin=(data)=>{
        console.log("form",data)
    }
  return (
    <div className="w-full flex h-screen">
        <div className="w-[50%] h-full flex justify-center items-center">

            <div className="flex flex-col border-[2px] border-blue-700 w-[50%] h-fit rounded-lg">
                <h1 className="text-center font-semibold text-xl mt-2">{selectedForm === "login" ? "Login":"Sign Up"}</h1>

                {selectedForm === "login" ? (
                    <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col w-full px-4 my-[30px]">
                   

                    <div className="flex flex-col items-start justify-center w-full gap-1">
                        <label className="text-sm font-semibold">Email</label>
                        <input type="text" {...register("email")} className="w-full px-2 py-1 border-[2px] border-blue-600 rounded-sm" placeholder="Email"/>
                        <p className="text-sm text-red-500">{errors?.email?.message}</p>
                    </div>

                    <div className="flex flex-col items-start justify-center w-full gap-1">
                        <label className="text-sm font-semibold">Password</label>
                        <input type="text" {...register("password")} className="w-full px-2 py-1 border-[2px] border-blue-600 rounded-sm" placeholder="Password"/>
                        <p className="text-sm text-red-500">{errors?.password?.message}</p>
                    </div>

                    <buttn className="w-full text-center text-lg font-semibold bg-blue-600 text-white py-1 mt-4 rounded-lg">Login</buttn>
                    <div className="w-full flex justify-end items-center p-2">
                        <span className="text-sm">Creat an account? <span className="text-blue-600 font-bold cursor-pointer" onClick={()=>setSelectedForm("signup")}>Signup</span></span>
                    </div>
                </form>
                ):(
                    <form onSubmit={handleSubmit(handleSignUp)} className="flex flex-col w-full px-4 my-[30px]">
                    <div className="flex flex-col items-start justify-center w-full gap-1">
                        <label className="text-sm font-semibold">Username</label>
                        <input type="text" {...register("username")} className="w-full px-2 py-1 border-[2px] border-blue-600 rounded-sm" placeholder="Name"/>
                        <p className="text-sm text-red-500">{errors?.username?.message}</p>
                    </div>

                    <div className="flex flex-col items-start justify-center w-full gap-1">
                        <label className="text-sm font-semibold">Email</label>
                        <input type="text" {...register("email")} className="w-full px-2 py-1 border-[2px] border-blue-600 rounded-sm" placeholder="Email"/>
                        <p className="text-sm text-red-500">{errors?.email?.message}</p>
                    </div>

                    <div className="flex flex-col items-start justify-center w-full gap-1">
                        <label className="text-sm font-semibold">Password</label>
                        <input type="text" {...register("password")} className="w-full px-2 py-1 border-[2px] border-blue-600 rounded-sm" placeholder="Password"/>
                        <p className="text-sm text-red-500">{errors?.password?.message}</p>
                    </div>

                    <buttn className="w-full text-center text-lg font-semibold bg-blue-600 text-white py-1 mt-4 rounded-lg">SignUp</buttn>
                    <div className="w-full flex justify-end items-center p-2">
                        <span className="text-sm">Already have an account? <span className="text-blue-600 font-bold cursor-pointer" onClick={()=>setSelectedForm("login")}>Login</span></span>
                    </div>
                </form>
                )}
                
            </div>
        </div>
        <div className="w-[50%] h-full">
            <img src="/images/auth-page.jpg" alt="banner" className="w-full h-full object-cover"/>
        </div>
    </div>
  )
}

export default Auth