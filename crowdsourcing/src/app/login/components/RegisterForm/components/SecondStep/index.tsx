'use client'

import Button from "@/components/Button"
import TextInput from "@/components/TextInput"
import { RegisterFormState } from "../.."

type SecondStepProps = {
    state: RegisterFormState,
    handleChangeState: (updatedValues: RegisterFormState) => void,
}

const SecondStep = ({state, handleChangeState}: SecondStepProps) => {
    return (
        <>
            <TextInput label="Nome Completo" onChange={(event) => handleChangeState({fullName: event.target.value})}
            placeholder="Nome Completo" type="text" iconLeft="uil:user"
            value={state.fullName}
            />
            <TextInput label="Data de Nascimento" onChange={(event) => handleChangeState({dateOfBirth: event.target.value})}
            labelClassNames="text-black" placeholder="DD/MM/AAAA" 
            type="date " iconLeft="uil:calendar-alt"
            value={state.dateOfBirth?.toString()}
            />
            <TextInput label="Celular" onChange={(event) => handleChangeState({cellphone: event.target.value})}
            labelClassNames="text-black" placeholder="(00) 9 0000-0000" type="text" iconLeft="uil:key-skeleton-alt"
            value={state.cellphone}
            />

            <div className="mt-[24px]">
                <Button className="rounded-md w-[100%]"> Próximo </Button>
            </div>
        </>
    )
}

export default SecondStep