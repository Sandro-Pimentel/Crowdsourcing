'use client'

import LoginSidebarImage from "@/app/login/components/LoginSidebarImage"
import Button from "@/components/Button"
import Select from "@/components/Select"
import TextArea from "@/components/TextArea"
import TextInput from "@/components/TextInput"
import { Span } from "next/dist/trace"
import React from "react"
import { twMerge } from "tailwind-merge"

type ProblemCreateState = {
    title?: string,
    description?: string,
    uf?: string, 
    city?: string,
    neighborhood?: string,
    imageUrl?: string,
    pix?: string,
    votingPeriod?: string
}

export default function ProblemCreate() {
    const labelStyle = 'text-base text-black text-2xl'
    const defaultLabelClasses = 'block font-bold text-black text 2xl'
    const mergedLabelClasses = twMerge(labelStyle, defaultLabelClasses)
    
    const [state, setState] = React.useState<ProblemCreateState>({
        city: '',
        description: '',
        imageUrl: '', 
        neighborhood: '',
        pix: '',
        title: '',
        uf: '',
        votingPeriod: ''
    })

    const handleCrateState = (updatedValues: ProblemCreateState) => {
        console.log(updatedValues)
        setState((previousState) => ({
            ...previousState,
            ...updatedValues
        }))
    }

    return (
        <main>
            <div className="flex h-screen-navbar">
                <LoginSidebarImage/>
                <div className="flex flex-1 justify-center pl-10 pr-10 pb-10 overflow-auto">
                    <div className="mt-20 max-w-[588px] w-[100%]">
                        <TextInput
                        onChange={(event) => handleCrateState({title: event.target.value})}
                        value={state.title} 
                        labelClassNames={labelStyle} label="Título da Ação" placeholder="Título da Ação"/>
                        <TextArea 
                        onChange={(event) => handleCrateState({description: event.target.value})}
                        value={state.description} 
                        labelClassNames={labelStyle} rows={4} label="Descrição do problema" className="resize-none" />

                        <div className="flex flex-col">
                            <label className={`${mergedLabelClasses}`}> Localização </label>
                            <div className="flex gap-2 mex-w-[100%]">
                                <TextInput 
                                onChange={(event) => handleCrateState({uf: event.target.value})}
                                value={state.uf} 
                                label="" placeholder="Estado - UF"/>
                                <TextInput 
                                onChange={(event) => handleCrateState({city: event.target.value})}
                                value={state.city} 
                                label="" placeholder="Cidade"/>
                                <TextInput 
                                onChange={(event) => handleCrateState({neighborhood: event.target.value})}
                                value={state.neighborhood} 
                                label="" placeholder="Bairro"/>
                            </div>
                        </div>

                        <TextInput
                        label="Carregue sua imagem"
                        labelClassNames={`${labelStyle} mb-0px`}
                        placeholder="Insira o link aqui"
                        iconLeft="uil:image-upload"
                        onChange={(event) => handleCrateState({imageUrl: event.target.value})}
                        value={state.imageUrl} 
                        subDescription = {
                            <span className="block mb-2 text-sm fon-[400]"> 
                                Coloque no campo abaixo o <strong>link</strong> para sua imagem, ela será utilizada como capa da sua ação, a resolução mínima para não perder muita qualidade é de 800x400px.
                            </span>
                        }
                        />

                        <TextInput
                        onChange={(event) => handleCrateState({pix: event.target.value})}
                        value={state.pix} 
                        label="Chave Pix"
                        labelClassNames={`${labelStyle} mb-0px`}
                        subDescription = "Insira a chave pix de quem ficará responsável por receber as doações e dar vida a solução encontrada, seja pessoa física ou jurídica."
                        />

                        <Select
                        onChange={(event) => handleCrateState({votingPeriod: event.target.value})}
                        value={state.votingPeriod} 
                        label="Período de votação"
                        labelClassNames={`${labelStyle} mb-0`} 
                        subdescription="Escolha por quanto tempo as pessoas vão poder votar em uma solução para o teu problema. O período de arreca"
                        options={[
                            {value:"3", text:"3 dias"},
                            {value:"7", text:"7 dias"},
                            {value:"15", text:"15 dias"},
                            {value:"20", text:"20 dias"}
                        ]}/>
                        <div className="flex flex-col gap-[10px] pb-10">
                            <Button className="rounded-[10px] pt-[24px] pb-[24px]">Enviar</Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}