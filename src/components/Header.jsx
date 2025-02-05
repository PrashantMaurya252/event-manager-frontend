import React from 'react'
import { useLocation } from 'react-router-dom'

const Header = () => {

    const location = useLocation()

    const navItems =[
        {id:1,label:"All Events",path:"/"},
        {id:2,label:"My events",path:"my-events"},
        {id:3,label:"Create Event",path:"create-event"},
    ]
  return (
    <div className='h-[100px] w-full flex justify-end items-center border-b-[4px] border-blue-500 gap-3'>
        {navItems?.map((item,index)=>(
            <span key={index} className={`text-lg font-semibold pb-1 ${location.pathname === item.path ? "border-b-[3px] border-blue-600":""} cursor-pointer`}>{item.label}</span>
        ))}
    </div>
  )
}

export default Header