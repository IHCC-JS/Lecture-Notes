import {useState, useEffect} from 'react';
import Image from "next/image";
import catPic from '../assets/Cat_1.png'

export function CatCounter({currentCatCount}) {
    const [cats, setCats] = useState([]);
    const names = [
        'Sir Meows-a-Lot',
        'Fluffy McFlufferton',
        'Whiskerface Jones',
        'Purrfect Storm',
        'Meowzart',
        'Clawsome Dancer',
        'Pawcific Rim',
        'Napoleon Dynamite Purr',
        'Sir Pounce-a-Lot',
        "Mittens O'Malley",
    ];

    //TODO move image into array
    useEffect(() => {
        const newName = names[currentCatCount];
        setCats(prevCats => [...prevCats, {name: newName}]);
    }, [currentCatCount]);

    return (
        <div>
            {cats.map((cat, index) => (
                <div key={index}>
                    <Image src={catPic} alt="" width={70} height={100}/>
                    <span>{cat.name}</span>
                </div>
            ))}
        </div>
    );
}


{cats.map((cat, index) => (

))}