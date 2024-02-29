import { useEffect, useState } from 'react';
import './Apibox.css'

export default function Apibox(){

    let[Text, setText] = useState('');
    let [showResult, setShowResult] = useState(false);

    const url = "https://api.quotable.io/random?minLength=100&maxLength=150";

    //API CALL FUNCTION
    const newText = async ()=>{
        let res = await fetch(url);
        let jsonRes = await res.json();
        setText({content: jsonRes.content});
    };

    //useEffect hook 
    useEffect(()=>{
        async function firstText(){
            let res = await fetch(url);
            let jsonRes = await res.json();
            setText({content: jsonRes.content});
        } 
        firstText();
    }, []);


    //Timer 
    let [Time, setTime] = useState(10);

    let reducedTime = () => {
        const timer = setInterval(() => {
            setTime(prevTime => {
                const newTime = prevTime - 1;
                if (newTime <= 0) {
                    clearInterval(timer);
                    calculateTypingSpeed();
                }
                return newTime;
            });
        }, 1000);
    };
    

//type 2
    // let reducedTime = ()=>{
    //     const timer = setInterval(() => {
    //         if(Time >= 0) {
    //             setTime(Time => Time - 1)
    //         } else {
    //             clearInterval(timer);
    //             calculateTypingSpeed();
    //         }
    //     }, 1000);
    // };

// type 3

    // let reducedTime = () => {
    //     const timer = setInterval(() => {
    //         setTime(prevTime => prevTime - 1); 

    //         if (Time <= 0) {
    //             clearInterval(timer); 
    //             calculateTypingSpeed();
    //         }
    //     }, 1000);
    // };

// type 4
    // let reducedTime = () => {
    //     if (Time >= 0) {
    //         timer = setInterval(() => {
    //             setTime(Time => Time - 1);
    //         }, 1000);
    //     } else {
    //         clearInterval(timer);
    //         calculateTypingSpeed();
    //     }
    // };
    

    // Handle typing
    let [typeTxt,settypeTxt] = useState('');
    let handleTyping = (event) => {
        let { value } = event.target;
        settypeTxt(value);
    };

    // Calculate typing speed
    let [typingSpeed, setTypingSpeed] = useState(null);

    const calculateTypingSpeed = () => {
        const timeTakenInSeconds = 10;
        const wordCount = typeTxt.trim().split(/\s+/).length;
        const typingSpeed = Math.round((wordCount / timeTakenInSeconds) * 60);
        setTypingSpeed(typingSpeed);
        setShowResult(true);
    };

    let a =0;

    return(
        <div>
        <h1>StorM Type</h1>

        <div className="box1">
            <h3> {Text.content}</h3>
        </div>

        <div className='opts'>
            <button onClick={reducedTime}>Start</button>
            <h3>Time: {Time} </h3>
        </div>

        {Time === 0 && (
            <div className="result">
                <h2>Typing Speed Result:</h2>
                <p>Your typing speed is: {typingSpeed} WPM</p>
            </div>
        )}



        <h4  contentEditable = "true" className='userBox' onChange={handleTyping} value={typeTxt}> </h4 >


    </div>
    );
}