"use client"
import {useState} from 'react';
import HighlightButton from '@/components/HighlightButton';

export default function Home() {

    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');

    const handleDisplayClick = () => {
        if (inputText.trim() !== '') {
            setOutputText(inputText);
        } else {
            setOutputText('idk');
        }
    };

    // TODO make the UI more look like a name tag
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black py-6">
            <h1 className="text-2xl font-bold mb-4">Hello, My name is ___</h1>

            <input
                type="text"
                className="border rounded py-2 px-3 mb-4"
                placeholder="Enter name here"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />

            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
                onClick={handleDisplayClick}
            >
                Display Name
            </button>

            <div className="p-4 border rounded shadow-md bg-white">
                <p className="text-lg">Hello, My Name is {outputText}</p>
            </div>

            <HighlightButton buttonText="Highlight Me!"/>
        </div>
    );
}