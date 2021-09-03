import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react';
import profil from "../../img/khaled.png";
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
                    <img src={profil} alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Khaled Lakehal</h1>
                    <h3> <span ref={textRef}></span> Web Developer</h3>
                </div>
                <a href="#portfolio">
                    <img src={down} alt="" />
                </a>
            </div>
        </div>
    )
}