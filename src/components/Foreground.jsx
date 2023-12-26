import React, { useEffect, useRef, useState } from 'react';
import Card from './Card';
import { DataContextProvider } from './../context/DataContext';

function Foreground() {
    const ref = useRef(null);
    const [cardContents, setCardContent] = useState([
        {
            id: 1,
            heading: "Welcome !!!",
            content: "This is your sample note. Create more by clicking on the + icon at the top."
        },
        {
            id: 2,
            heading: "Quote",
            content: "Learn everything that is good from others, but bring it in, and in your own way absorb it; do not become others. - Swami Vivekananda"
        }
    ]);

    const [isFormOpen, setFormOpen] = useState(false);
    const [newHeading, setNewHeading] = useState('');
    const [newContent, setNewContent] = useState('');

    useEffect(() => {
        const storedCardContents = JSON.parse(localStorage.getItem('cardContents'));
        if (storedCardContents) {
            setCardContent(storedCardContents);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cardContents', JSON.stringify(cardContents));
    }, [cardContents]);

    const updateContent = (id, heading, content) => {
        setCardContent((prev) =>
            prev.map((prevValue) =>
                prevValue.id === id ? { ...prevValue, heading, content } : prevValue
            )
        );
    };

    const createContent = () => {
        setCardContent((prev) => [
            { id: Date.now(), heading: newHeading, content: newContent },
            ...prev
        ]);
        setFormOpen(false);
        setNewHeading('');
        setNewContent('');
    };

    const deleteCard = (id) => {
        setCardContent((prev) => prev.filter((prevValue) => prevValue.id !== id));
    };

    const handlePlusClick = () => {
        setFormOpen(true);
    };
    const handleClose = () => {
        setFormOpen(false);
    }
    return (
        <DataContextProvider value={{ cardContents, updateContent, createContent, deleteCard }}>
            <div ref={ref} className='fixed top-0 left-0 z-[3] w-full min-h-screen bg-gray-800/50 p-5   '>
                <div className='fixed top-0 left-0 z-[3] p-5'>
                    <div
                        className='bg-blue-500 text-white w-10 h-10 text-center rounded-full p-2 cursor-pointer'
                        onClick={handlePlusClick}
                    >
                        +
                    </div>
                </div>

                {isFormOpen && (
                    <div className='fixed top-1/2 left-1/2 transform w-[70vw] h-[40vh] -translate-x-1/2 -translate-y-1/2 bg-zinc-600 text-white p-5 rounded-md z-[4] flex-row'>
                        <label htmlFor='heading'>Heading:</label>
                        <input
                            type='text'
                            id='heading'
                            value={newHeading}
                            onChange={(e) => setNewHeading(e.target.value)}
                            placeholder='Heading...'
                            className='w-full border text-black'
                        />
                        <label htmlFor='content'>Content:</label>
                        <textarea
                            id='content'
                            value={newContent}
                            onChange={(e) => setNewContent(e.target.value)}
                            placeholder='Content...'
                            className='w-full border h-[20vh] text-black'
                        />
                        <div className='flex'>
                            <button className='relative w-full text-center bottom-0' onClick={createContent}>Create</button>
                            <button className='relative w-full text-center bottom-0' onClick={handleClose}>Close</button>
                        </div>
                    </div>
                )}

                {cardContents.map((card) => (
                    <Card key={card.id} reference={ref} card={card} />
                ))}
            </div>
        </DataContextProvider>
    );
}

export default Foreground;
