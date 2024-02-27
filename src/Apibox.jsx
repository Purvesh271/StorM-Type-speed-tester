import { useEffect, useState } from 'react';
import './Apibox.css'

export default function Apibox(){

    let[Text, setText] = useState({});

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
    let [Time,setTime] = useState(30);
    let reducedTime = ()=>{
        const timer = setInterval(() => {
            if(Time >= 0) {
                setTime(Time => Time - 1)
            } else {
                clearInterval(timer);
            }
        }, 1000);
    };



    return(
        <div>
        <h1>StorM Type</h1>

        <div className="box1">
            <h3> {Text.content}</h3>
        </div>

        <div className='opts'>
            <button onClick={reducedTime}>Start</button>
            <h3>Time: {Time >= 0 ? Time : 0} </h3>
        </div>

    </div>
    );
}