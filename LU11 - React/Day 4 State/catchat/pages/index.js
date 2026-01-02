"use client"
import  {useState} from 'react';

export default function Home() {
  const [text, setText] = useState('');

  //TODO convert to tailwind
  //TODO combine this example with the next
  //   Include both parts as one example part 1 and 2
    //THis example i too close to HW assignent
  return (
      <div style={{ padding: '10px' }}>
        <input
            type="text"
            style={{ height: '40px', padding: '0 10px' }}
            placeholder="Type words for Cats"
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
        <div style={{ fontSize: '42px', padding: '10px' }}>
          {text
              .split(' ')
              .map((word) => word && '😺')
              .join(' ')}
        </div>
      </div>
  );
}

//How do do this in vanilla JS
//1. Find the input element in DOM
//2. Add an event listener for 'input' events
//3. Get the value
//4. Find the display element in DOM (<p>)
//5. Update the output text with the input value

