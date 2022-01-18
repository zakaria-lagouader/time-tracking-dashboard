import React from 'react'
import { useGetState, useGetTimeframe } from '../AppContext'
import { MenuIcon } from './icons'

interface CardProps {
    title: string;
    icon: JSX.Element,
    color: string
}

function Card({ title, icon, color }: CardProps) {

    const state = useGetState(title);
    const timeframe = useGetTimeframe();

    const data = state?.timeframes[timeframe]; 

    return (
        <div className="rounded-xl overflow-hidden w-full pt-[50%] md:pt-[100%] relative cursor-pointer">
            <div className={`absolute top-0 left-0 w-full h-full rounded-xl grid grid-rows-6 ${color}`}>
                <div className="px-4 flex items-center">
                    <div className="flex-1"></div>
                    {icon}
                </div>
                <div className="row-span-5 bg-dark-blue hover:opacity-95 transition-all rounded-t-xl p-4">
                    <div className="flex items-center justify-between mb-8">
                        <p>{title}</p>
                        <MenuIcon />
                    </div>
                    <div className="flex items-center justify-between md:block">
                        <p className="text-4xl md:text-6xl font-light mb-2">{data?.current}hrs</p>
                        <p className="text-pale-blue text-sm">Last Week - {data?.previous}hrs</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
