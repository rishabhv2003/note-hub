import React, { useRef } from 'react'
import Card from './Card'
import { useData } from './../context/DataContext'

function Foreground() {
    const ref = useRef(null);
    return (
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full bg-gray-800/50 p-5'>
            <Card reference={ref} />
        </div>
    )
}

export default Foreground
