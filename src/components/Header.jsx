import React,{useState} from 'react'
import logo from './../assets/Image/logo.png'
import user from './../assets/Image/user.png'
import { HiHome, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2"
import { HiPlus, HiSearch, HiDotsVertical } from "react-icons/hi"
import HeaderItem from './HeaderItem'


function Header() {
    const [toggle, setToggle] = useState( )
    const menu = [
        {
            name: 'HOME',
            icon: HiHome
        },
        {
            name: 'SEARCH',
            icon: HiSearch
        },
        {
            name: 'WATCH LIST',
            icon: HiPlus
        },
        {
            name: 'ORIGINALS',
            icon: HiStar
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle
        },
        {
            name: 'SERIES',
            icon: HiTv
        },
    ]

    return (
        <div className='flex items-center gap-8 justify-between p-5'>
            <div className='flex gap-8  items-center '>
                < img src={logo} className='w-[60px] md:w-[85px] object-cover rounded-full' alt="logo" />

                <div className='hidden md:flex gap-8 text-white'>
                    {menu.map((item) => (
                        <HeaderItem name={item.name} Icon={item.icon} />
                    ))}
                </div>
                <div className='flex md:hidden gap-5 text-white'>
                    {menu.map((item, index) => index < 3 && (
                        <HeaderItem name={''} Icon={item.icon} />
                    ))}

                    <div className='md:hidden text-white' onClick={()=>setToggle(!toggle)}>
                        <HeaderItem name={''} Icon={HiDotsVertical} />
                        {toggle?<div className='absolute bg-white-100 text-white border-[1px] rounded-md p-3 px-5 py-4'>
                            {menu.map((item, index) => index > 2&& (
                                <HeaderItem name={item.name} Icon={item.icon} />
                            ))}
                        </div>:null}
                    </div>
                </div>

            </div>
            <img src={user} className='rounded-full border-gray-800 w-[60px]' alt="" />
        </div>
    )
}

export default Header
