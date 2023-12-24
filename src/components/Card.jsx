import React from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { motion } from "framer-motion";
import { AiOutlineEdit } from "react-icons/ai";
function Card({ reference }) {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.2 }} className='relative w-60 h-80 rounded-[45px] bg-zinc-600/60 text-white px-8 py-5 overflow-hidden'>
            <div className='w-full flex align-center justify-center'>
                <h1 className='text-xl'>Heading</h1>
            </div>
            <p className='text-sm leading-tight mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <div className='footer bg-sky-600 absolute bottom-0 px-8 w-full left-0'>
                <div className='flex items-center justify-between h-[3.5rem]'>
                    <span className='w-8 h-8 text-2xl rounded-full flex items-center justify-center transition duration-300 ease-in-out hover:bg-gray-700 hover:text-white'>
                        <AiOutlineDelete />
                    </span>
                    <span className='w-8 h-8 text-2xl rounded-full flex items-center justify-center transition duration-300 ease-in-out hover:bg-gray-700 hover:text-white'>
                        <AiOutlineEdit />
                    </span>
                </div>
            </div>
        </motion.div>
    )
}

export default Card
