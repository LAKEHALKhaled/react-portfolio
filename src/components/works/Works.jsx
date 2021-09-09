import './works.scss'
import arrow from "../../img/arrow.png";
import GitHubIcon from '@material-ui/icons/GitHub';
import { useState } from "react";
export default function Works() {
const [currentSlide, setCurrentSlide] = useState(0)
    const data =[
        {
            id: "1",
            // icon: {GitHubIcon},
            title: "Life Manager (70%)",
            link: "https://mighty-inlet-79534.herokuapp.com/",
            git: "https://github.com/LAKEHALKhaled/personal-strategic-planner",
            desc: "A platform where people can have a great personal development progress" ,
            img: "https://i1.wp.com/www.oxbridgeacademy.edu.za/blog/wp-content/uploads/2017/03/Operations-Manager.jpg?fit=740%2C516&ssl=1",
         },
         {
        id: "2",
        // icon: {GitHubIcon},
        title: "MERN Restaurant Website (5%)",
        desc: "A template website, can be easy changed to any kind of E-comerce restaurant advanced website" ,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR34qSmH7p3itrhdczeCXBko-etbvkjyHmG1Q&usqp=CAU",
        },
            
        {
    id: "3",
    // icon: {GitHubIcon},
    title: "delivery App Clone (5%)",
    desc: "A clone of a delivery app only for local restaurant",
    
    img: "http://www.restaurantconsultingfirm.com/blog/wp-content/uploads/2016/09/Food-Delivery-App.jpg",
        },
    ]
    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide>0 ? currentSlide-1 : 2)
        : setCurrentSlide(currentSlide<data.length-1 ? currentSlide +1 : 0);
    }

    return (
        <div className="works" id="works">
            <h1 className="title">Current work</h1>
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d) =>(
                <div className="container">
                    <div className="item">
                        <div className="left">
                        <div className="leftContainer">
                            {/* <div className="imgContainer"> */}
                            <a href={d.git} target="_blank" rel="noreferrer">
                            <GitHubIcon className="imgContainer" />
                            </a>
                            
                            {/* </div> */}
                            <h2>{d.title}</h2>
                            <div className="desc">
                                {d.desc}
                            </div>
                            {/* <span>Projects</span> */}
                        </div>
                        </div>
                        <a href={d.link} target="_blank" rel="noreferrer">
                        <div className="right">
                           
                            <img src={d.img} alt="" />
                      
                        </div>
                        </a>
                    </div>
                    
                </div>))}
            </div>
            <img src={arrow} className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src={arrow} className="arrow right" alt="" onClick={()=>handleClick()}/>
        </div>
    )
}
