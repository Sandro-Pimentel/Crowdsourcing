'use client'

import Button from "@/components/Button"
import Card from "@/components/Card"
import TextInput from "@/components/TextInput"
import { Icon } from "@iconify/react/dist/iconify.js"

const LoginForm = () => {
    return (
        <Card className="border-[#121212]">
        <TextInput
        label="E-mail"
        labelClassNames="text-black"
        placeholder="E-mail"
        type="email"
        iconLeft="uil:envelope-alt"></TextInput>
        
        <TextInput
        label="Senha"
        labelClassNames="text-black"
        placeholder="Senha"
        type="password"
        iconLeft="uil:key-skeleton-alt"></TextInput>

        <div className="mb-6 text-left">
          <a href="" className="text-sub text-sm underline"> Esqueci a senha </a>
        </div>

        <div className="flex flex-col gap-[10px]">
          <Button 
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
            iconLeft="fe:google"
            variant="secondary"  
            className="rounded-md">
            Entrar com Google
          </Button>
        </div>

        <div className="mt-[24px]">
          <span className="cursor-pointer flex gap-2 items-center underline">
            <Icon icon="ild:plus-square"/>
            Quero criar uma conta
          </span>
        </div>
      </Card>
    )
}

export default LoginForm