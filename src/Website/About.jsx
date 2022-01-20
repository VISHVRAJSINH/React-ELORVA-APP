import React from "react";

import web from "../Website/Image/home.svg";
import Common from "./Common";

const About =() =>
{
    return (
               <>
                <Common 
                name="welcome to About page" 
                imgsrc={web}
                visit="/contact"
                btname="Contact now"    
                />
               </>

  );
};

export default About;