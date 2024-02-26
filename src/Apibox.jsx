import { useEffect, useState } from 'react';
import './Apibox.css'

export default function(){

    let[Text, setText] = useState({});

    const url = "https://api.quotable.io/random?minLength=100&maxLength=150";

    //API CALL FUNCTION
    const newText = async ()=>{
        let res = await fetch(url);
        let jsonRes = await res.json();
        console.log (jsonRes);
        setText({content: jsonRes.content});
    };

    //useEffect hook 
    useEffect(()=>{
        async function firstText(){
            let res = await fetch(url);
            let jsonRes = await res.json();
            console.log (jsonRes);
            setText({content: jsonRes.content});
        } 
        firstText();
    }, []);

    //Timer 
    let [Time,setTime] = useState(30);
    let reducedTime = ()=>{
        setTimeout(()=>{
            Time = Time-1;
        },1000);
        setTime(Time)
    };



    return(
        <div>
        <h1>StorM Type</h1>

        <div className="box1">
            <h3> {Text.content}</h3>
        </div>

        <div className='opts'>
            <button onClick={(newText,reducedTime)}>Start</button>
            <h3>Time: {Time} </h3>
        </div>

    </div>
    );
}