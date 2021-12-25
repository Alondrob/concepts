import React from 'react'
import {useNavigae, useNavigate} from 'react-router-dom'
const About = ()=> {
    let navigate = useNavigate();

    return (
        <div>
            This website is created by me !!!
            <button onClick={() => {navigate("/form")} }> go to form page</button>
        </div>
    )
}

export default About;