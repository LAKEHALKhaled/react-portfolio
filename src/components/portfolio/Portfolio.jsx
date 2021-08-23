import './portfolio.scss';
import { useState, useEffect } from 'react';
import calories from '../../img/calories.jpeg';
import PortfolioList from '../portfolioList/PortfolioList';

export default function Portfolio() {

    const[selected, setSelected] = useState("featured")
    const list =[
        {
            id:"featured",
            title:"Featured",
        },
        {
            id:"front",
            title:"Front End",
        },
        {
            id:"back",
            title:"Back End",
        },
        {
            id:"full",
            title:"Full Stack",
        },
        {
            id:"design",
            title:"Design",
        },
    ]
    return (
        <div className="portfolio" id="portfolio"> 
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=>(
                <PortfolioList
                 title = {item.title} 
                 active={selected===item.id} 
                 setSelected={setSelected}
                 id={item.id}
                 />
                ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src={calories} alt="" />
                    <h3>Calorie-Hunter</h3>
                </div>
                <div className="item">
                    <img src={calories} alt="" />
                    <h3>Calorie-Hunter</h3>
                </div>
                <div className="item">
                    <img src={calories} alt="" />
                    <h3>Calorie-Hunter</h3>
                </div>
                <div className="item">
                    <img src={calories} alt="" />
                    <h3>Calorie-Hunter</h3>
                </div>
                <div className="item">
                    <img src={calories} alt="" />
                    <h3>Calorie-Hunter</h3>
                </div>
            </div>
        </div>
    )
}
