import {useState} from 'react';

export default function HighLightButton(props) {

    const [isHighlighted, setIsHighlighted] = useState(false);


    // Could do this with pure css but wanted to show more events
    return (
        <button
            className={`mt-6 py-2 px-4 rounded font-bold ${
                isHighlighted ? 'bg-yellow-400 text-gray-800' : 'bg-gray-300 text-gray-700'
            }`}
            onMouseEnter={() => setIsHighlighted(true)}
            onMouseLeave={() => setIsHighlighted(false)}
        >
            {isHighlighted ? "I'm Highlighted!" : props.buttonText}
        </button>
    );
}