"use client"
import { useState } from 'react';
import { CatCounter } from "@/component/CatCounter";

export default function Home() {
    const [currentCatCount, setCurrentCatCount] = useState(0);

    const handleAddCat = () => {
        setCurrentCatCount(prevCount => prevCount + 1);
    };
    //TODO change this to cat display or something.
    //TODO why
    return (
        <div>
            <h1>Crazy Cat Counter</h1>
            <p>Current Cats: {currentCatCount}</p>
            <button onClick={handleAddCat}>
                Add 🐱
            </button>

            <CatCounter currentCatCount={currentCatCount} />
        </div>
    );
}