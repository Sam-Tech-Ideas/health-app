import React from 'react'

const ActionButton = ({title, onClick, className}) => {
  return (
    <button className= {'hover:text-white rounded-md hover:bg-transparent border duration-300 ease-out bg-blue-500  px-3 py-1 text-white'} onClick={onClick}>
        {title}
</button>
  )
}

export default ActionButton