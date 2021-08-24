import './works.scss'
import mobile from "../../img/mobile.png";
import arrow from "../../img/arrow.png";
import { useState } from "react"
export default function Works() {
const [currentSlide, setCurrentSlide] = useState(0)
    const data =[
        {
            id: "1",
            icon: {mobile},
            title: "wiw Design",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing" ,
            img: "",
         },
         {
        id: "2",
        icon: {mobile},
        title: "waw Design",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing" ,
        img: "",
        },
            
        {
    id: "3",
    icon: {mobile},
    title: "wow Design",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing" ,
    img: "",
        },
    ]
    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide>0 ? currentSlide-1 : 2)
        : setCurrentSlide(currentSlide<data.length-1 ? currentSlide +1 : 0);
    }

    return (
        <div className="works" id="works">
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d) =>(
                <div className="container">
                    <div className="item">
                        <div className="left">
                        <div className="leftContainer">
                            <div className="imgContainer">
                                <img src={d.icon} alt="" />
                            </div>
                            <h2>{d.title}</h2>
                            <p>
                                {d.desc}
                            </p>
                            <span>Projects</span>
                        </div>
                        </div>
                        <div className="right">
                            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
                        </div>
                    </div>
                    
                </div>))}
            </div>
            <img src={arrow} className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src={arrow} className="arrow right" alt="" onClick={()=>handleClick()}/>
        </div>
    )
}
