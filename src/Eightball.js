import './Eightball.css';
import { useState } from 'react';
import answerBank from './answerBank';

function Eightball() {
  const [ color, setColor ] = useState('black');
  const [ msg, setMsg ] = useState('think of a question');

  const generateAnswer = (arr) => {
    const randIdx = Math.floor(Math.random() * arr.length);
    return arr[randIdx];
  }

  const handleClick = (e) => {
    // e.target.style.backgroundColor = "red"
    const { msg: message, color: bgColor } = generateAnswer(answerBank);
    setColor(bgColor);
    setMsg(message);
  }

  return (
    <div className="Eightball" style={{backgroundColor: color}} onClick={handleClick}>
      <p className="Eightball-text">{msg}</p>
    </div>
  );
}

export default Eightball;
