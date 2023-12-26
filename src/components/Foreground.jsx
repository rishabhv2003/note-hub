import React, { useRef, useState } from 'react'
import Card from './Card'
import { DataContextProvider } from './../context/DataContext'

function Foreground() {
    const ref = useRef(null);
    const [cardContents, setCardContent] = useState([
        {
            id: Date.now(),
            heading: "Welcome !!!",
            content: "This is your sample note. Create more by clicking on the + icon at the top."
        }
    ]);
    const updateContent = (id, heading, content) => {
        setCardContent((prev) =>
            prev.map((prevValue) =>
                prevValue.id === id ? { ...prevValue, heading, content } : prevValue
            )
        );
    };
    const createContent = (heading, content) => {
        setCardContent((prev) => [{ id: Date.now(), heading, content }, ...prev]);
    }
    const deleteCard = (id) => {
        setCardContent((prev) => prev.filter((prevValue) => prevValue.id !== id));
    }
    return (
        <DataContextProvider value={{ cardContents, updateContent, createContent, deleteCard }}>
                <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-screen bg-gray-800/50 p-5'>
                    {
                        cardContents.map((card) => (
                            <Card key={card.id} reference={ref} card={card} />
                        ))
                    }
                </div>
        </DataContextProvider>
    )
}

export default Foreground
