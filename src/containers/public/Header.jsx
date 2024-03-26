import React, { useCallback } from 'react'
import logo from '../../assets/logo.svg'
import { Button } from '../../components'
import icons from '../../utils/icon'
import { useNavigate } from 'react-router-dom'
import { path } from '../../utils/constant'

const {CiCirclePlus} = icons
const Header = () => {
  const navigate = useNavigate()
  const goLogin = useCallback(() => {
    navigate(path.LOGIN)
  })
  return (
    <div className='w-1100 flex items-center justify-between bg-red-400'>
      <img 
        src={logo} 
        alt="OK" 
        className='w-[240px] h-[70px]'
      />

      <div className='flex items-center gap-1'>
        <span>Phòng trọ 123 xin chào!</span>
        <Button text='Đăng kí' bgColor='bg-[#3961fb]' textColor='text-white' onClick={goLogin}/>
        <Button text='Đăng nhập' bgColor='bg-[#3961fb]' textColor='text-white'/>
        <Button text='Đăng tin mới' bgColor='bg-secondary2' textColor='text-white' IcAfter={CiCirclePlus}/>
      
      </div>

    </div>
    
  )
}

export default Header
