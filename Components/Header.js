'use client '
import React from 'react'
import Nav from './Nav'

const Header = (props) => {
  //  console.log(props.mark)
  return (
    <div className='bg-gray-700'>Topper Marks is : {props.mark+40}
    <Nav mark = {props.mark}/>
    </div>
  )
}

export default Header