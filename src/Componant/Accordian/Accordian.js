
import { questions } from "./api";
import React, {useState} from "react";
import "./Accordian.css"
import MyAccordian from "./MyAccordian"
const Accordian = () =>
{       const[data, setdata] = useState(questions)
    return(
        <>{
            data.map((curElem) =>
            { const {id} = curElem;
                return <MyAccordian key={id}{...curElem}/>
            })
        }

           
        </>
    )
}
export default Accordian;