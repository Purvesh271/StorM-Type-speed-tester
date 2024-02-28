import './Typebox.css'
import Apibox from './Apibox';


export default function Typebox(){

    return(
        <div>
            <h4  contentEditable = "true" className='userBox' onChange={handleTyping} value={text}> </h4 >
            
        </div>
    );
}