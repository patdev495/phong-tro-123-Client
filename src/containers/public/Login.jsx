import React from 'react'
import { InputForm,Button } from '../../components'
const Login = () => {
  return (
    <div className='bg-white w-full max-w-600 pt-[30px] px-[30px] pb-[100px] rounded-md shadow-md mt-3'>
      <h3 className='font-semibold text-2xl'>ĐĂNG NHẬP</h3>
      <div className='flex flex-col gap-5'>
        <InputForm label="SỐ ĐIỆN THOẠI"/>
        <InputForm label="MẬT KHẨU"/>
        <Button text={'ĐĂNG NHẬP'} bgColor={'bg-secondary1'} textColor={'text-white'} />
      </div>

      <div className='flex justify-between items-center mt-6 text-blue-600'>
        <small className='hover:text-[red] cursor-pointer'>Bạn quên mật khẩu?</small>
        <small className='hover:text-[red] cursor-pointer'>Tạo tài khoản mới?</small>
      </div>
    </div>
  )
}

export default Login
