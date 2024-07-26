'use client'
import Header from '@/Components/Header'
import React, { useState } from 'react'

const page = () => {
  const [marks, setmarks] = useState(300)
  return (
    <div className='bg-green-500'>Your Imaginary Marks : {marks+50}
    <Header mark = {marks}/>
    </div>
  )
}

export default page