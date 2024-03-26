import React from 'react'

const InputForm = ({label,}) => {
  return (
    <div className='flex flex-col py-1'>
        <label htmlFor="" className='text-xs'>{label}</label>
        <input 
            type="text" 
            id=''
            className='outline-none p-2 rounded-md bg-[#e8f0fe]'
        />
    </div>
  )
}

export default InputForm