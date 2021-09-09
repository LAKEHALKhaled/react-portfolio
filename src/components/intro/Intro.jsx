import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react';
// import profil from "../../img/khaled.png";
import down from "../../img/down.png";

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor:true,
            backDelay:1500,
            backSpeed:60,
            strings: ["Front End","Back End","Full Stack"],

        })
    }, []);

    return (
        <div className="intro" id ="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="https://i.ibb.co/sjynxsY/khaled.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Khaled Lakehal</h1>
                    <h3> <span ref={textRef}></span> Web Developer</h3>
                    <div className="brand">
                    <p> Skilled in both front-end and back-end technologies such as <strong>HTML</strong> , <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong> and <strong>Node.js</strong> with strengths in learning, problem-solving and creativity, i'm so excited to continue leveraging my skills as part of a fast-paced, quality-driven team to build better experiences on the web.</p>
                    </div>
                </div>
                <a href="#portfolio">
                    <img src={down} alt="" />
                </a>
            </div>
        </div>
    )
}
