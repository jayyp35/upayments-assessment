import React from 'react'
import { useNavigate } from 'react-router'

function Header() {
    const navigate = useNavigate()
    return (
        <div className='p-5 rounded-lg flex justify-between bg-white text-3xl italic font-bold w-full'>
            <div className='cursor-pointer' onClick={()=>navigate("/")}>UPayments Store</div>
            <div>Register</div>
        </div>
    )
}

export default Header