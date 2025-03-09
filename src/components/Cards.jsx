import React from 'react'
import Potato from '../assets/potato.jpg'

const Cards = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-40 mx-auto mt-[-3rem] bg-white' src={Potato} alt="" />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p>$149</p>
                    <div>
                        <p>500 GB Storage</p>
                        <p>1 Granted User</p>
                        <p>Send up to 2 GB</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards