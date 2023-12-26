import React, { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AiOutlineSave } from 'react-icons/ai';
import { useData } from '../context/DataContext';
import { AiOutlineEdit } from "react-icons/ai";
function Card({ reference, card }) {
    const [cardState, setCardState] = useState({
        heading: card.heading,
        content: card.content,
    });
    const [isEditing, setIsEditing] = useState(false);
    const { deleteCard, updateContent } = useData();

    const handleDeleteClick = () => {
        deleteCard(card.id);
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        updateContent(card.id, cardState.heading, cardState.content);
        setIsEditing(false);
    };

    const handleCancelClick = () => {
        setCardState({
            heading: card.heading,
            content: card.content,
        });
        setIsEditing(false);
    };

    const handleHeadingChange = (e) => {
        setCardState({ ...cardState, heading: e.target.value });
    };

    const handleContentChange = (e) => {
        setCardState({ ...cardState, content: e.target.value });
    };

    return (
        <motion.div
            drag
            dragConstraints={reference}
            whileDrag={{ scale: 1.2 }}
            className='relative w-60 min-h-80 rounded-[45px] bg-zinc-600/60 text-white px-8 py-5 overflow-hidden'
        >
            {isEditing ? (
                <>
                    <input
                        type='text'
                        value={cardState.heading}
                        onChange={handleHeadingChange}
                        className='text-xl bg-zinc-600/60 border w-full border-gray-400 p-2 mb-2 rounded'
                    />
                    <textarea
                        value={cardState.content}
                        onChange={handleContentChange}
                        rows={1}
                        className='text-sm w-full h-80 mb-10 bg-zinc-600/60 border border-gray-400 p-2 rounded'
                    />
                </>
            ) : (
                <>
                    <div className='w-full flex align-center justify-center'>
                        <h1 className='text-xl'>{cardState.heading}</h1>
                    </div>
                    <p className='text-sm leading-tight mt-5 mb-10 break-words'>{cardState.content}</p>
                </>
            )}
            <div className='footer bg-sky-600 absolute bottom-0 px-8 w-full left-0'>
                <div className='flex items-center justify-between h-[3.5rem]'>
                    <span
                        className='w-8 h-8 text-2xl rounded-full flex items-center justify-center transition duration-300 ease-in-out hover:bg-gray-700 hover:text-white'
                        onClick={handleDeleteClick}
                    >
                        <AiOutlineDelete />
                    </span>
                    <span
                        className='w-8 h-8 text-2xl rounded-full flex items-center justify-center transition duration-300 ease-in-out hover:bg-gray-700 hover:text-white'
                        onClick={isEditing ? handleSaveClick : handleEditClick}
                    >
                        {isEditing ? <AiOutlineSave /> : <AiOutlineEdit />}
                    </span>
                </div>
            </div>
        </motion.div>
    );
}

export default Card;
