import Image from 'next/image'
import LoginSidebarImage from './components/LoginSidebarImage'
import Card from '@/components/Card'
import Button from '@/components/Button'

export default function Home() {
  return (
    <main className="flex h-screen">
        <LoginSidebarImage/>
        <div className='flex-1 flex items-center justify-center'>
            <Card>
              <Button
                variant="primary"  
                className="rounded-md">
                Entrar
              </Button>
              <Button
                iconLeft="uil:facebook-f"
                variant="secondary"  
                className="rounded-md">
                Entrar com Facebook
              </Button>
              <Button
                iconLeft="uil:fe:google"
                variant="secondary"  
                className="rounded-md">
                Entrar com Google
              </Button>
            </Card>
        </div>
    </main>
  )
}