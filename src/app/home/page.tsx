"use client";

import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/Navbar'
import Feed from '@/components/Feed'

export default function Home() {
  return (
    <div className='ml'>
      
      <Feed></Feed>
    </div>
  )
}
