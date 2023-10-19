'use client'
import Image from 'next/image'
import LoginSidebarImage from './components/LoginSidebarImage'
import Card from '@/components/Card'
import Button from '@/components/Button'
import TextInput from '@/components/TextInput'
import { Icon } from '@iconify/react/dist/iconify.js'
import LoginForm from './components/LoginForm'

export default function Home() {
  return (
    <main className="flex h-screen">
        <LoginSidebarImage/>
        <div className='flex-1 flex items-center justify-center'>
          <LoginForm />
        </div>
    </main>
  )
}