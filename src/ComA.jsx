import React,{useState,useEffect} from "react";
import axios from "axios";

const ComA =() =>
{ const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();

   useEffect(() => {
       async function getData(){
           const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            setName(res.data.name);
            setMoves(res.data.moves.length);
                
        }
        getData();
   });
    return (<>
        
        <h>You choos {num} value <br/></h>
        <h>Your Name Is{name} value <br/></h>
        <h>hi i am {moves} value <br/></h>
        <select
        value={num}
        onChange={(event)=>{
            setNum(event.target.value);
            
        }}>

            <option value='1'>1</option>
            <option value='12'>12</option>
            <option value='100'>100</option>
            <option value='7'>7</option>
            <option value='4'>4</option>
            <option value='6'>6</option>

        </select>
    </>)
}

export default ComA;