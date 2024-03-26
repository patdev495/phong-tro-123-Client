import React from 'react'

const Button = ({ text, textColor, bgColor,IcAfter,onClick}) => {
  return (
    <button
        type='button'
        onClick={onClick}
        className={` py-2 px-4 ${textColor} ${bgColor} outline-none rounded-md hover:underline items-center gap-1 flex items-center justify-center`}
    >
        <span>{text}</span>
        <span>{IcAfter && <IcAfter/>}</span>
    </button>
  )
}

export default Button