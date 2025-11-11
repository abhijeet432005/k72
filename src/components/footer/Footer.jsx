import React, { useEffect, useState } from 'react'
import { BiGlobe } from 'react-icons/bi'

const Footer = () => {
    const [Time, setTime] = useState({
        hr: new Date().getHours(),
        min: new Date().getMinutes(),
        sec: new Date().getSeconds()
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setTime({
                hr: new Date().getHours(),
                min: new Date().getMinutes(),
                sec: new Date().getSeconds()
            })
        }, 1000);

        return () => clearInterval(interval)
    })
    return (
        <div className="flex flex-col justify-between p-3 w-full overflow-hidden">

            <div className="w-full flex flex-col lg:flex-row justify-between">
                <div className="flex gap-4 uppercase font-[font-2] text-5xl lg:text-[3.5vw] leading-[3vw]">
                    <h1 className="border  px-4 lg:px-10 pt-8 pb-5 lg:pt-4 lg:pb-2 rounded-full ">fb</h1>
                    <h1 className="border px-4 lg:px-10 pt-8 pb-5 lg:pt-4 lg:pb-2 rounded-full">ig</h1>
                    <h1 className="border px-4 lg:px-10 pt-8 pb-5 lg:pt-4 lg:pb-2 rounded-full">in</h1>
                    <h1 className="border px-4 lg:px-10 pt-8 pb-5 lg:pt-4 lg:pb-2 rounded-full">be</h1>
                </div>


                <div className='mt-15 lg:mt-0'>
                    <h1 className="border w-fit uppercase lg:leading-[3vw] leading-[12vw] p-4 lg:px-10 lg:pt-2 lg:pb-2 rounded-full text-6xl lg:text-[3.5vw]">Contact</h1>
                </div>

            </div>

            <div className="w-full flex flex-col lg:flex-row justify-between lg:items-center">
                <div className="flex flex-col items-start lg:flex-row lg:items-center gap-[2vw]">
                    <div className="flex gap-2 items-end">
                        <BiGlobe className="text-4xl mb-1" />
                        <h1 className='font-thin text-[1.5rem]'>Montreal_{`${Time.hr} : ${Time.min} : ${Time.sec}`}</h1>
                    </div>
                    <h1 className="text-[0.9rem] uppercase">Politique de confidentialité</h1>
                    <h1 className="text-[0.9rem] uppercase">Avis de confidentialité</h1>
                    <h1 className="text-[0.9rem] uppercase">Rapport éthique</h1>
                    <h1 className="text-[0.9rem] uppercase">options de consentment</h1>
                </div>

                <div>
                    <h1 className="lg:text-[1.5vw] text-4xl mt-10 lg:mt-0 font-[font-2] text-center uppercase">Retour en haut</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer