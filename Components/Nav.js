import React from 'react'
import Sav from './Sav'

const Nav = (props) => {
  
  // console.log(props.marks)
  return (
    <div className='bg-red-700'>Your Marks Is : {props.mark+39}
    <Sav/>
    </div>
  )
}

export default Nav