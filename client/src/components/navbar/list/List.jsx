import ListItem from "../listItem/ListItem";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";
import React from "./list.scss";
import { useRef, useState } from "react";

export default function List({list}) {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef();

    const handleClick = (direction) =>{
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50
        if(direction === "left" && slideNumber>0){
            setSlideNumber(slideNumber-1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if(direction === "right" && slideNumber<5){
            setSlideNumber(slideNumber+1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    }
    return (
      <div className="list">
        <span className="listTitle">{list.title}</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className="sliderArrow Left" onClick={()=>handleClick("left")} style={{display: !isMoved && "none"}}/>
            <div className="container" ref={listRef}>
                {list.content.map((item,i) => (
                    <ListItem index={i} item={item}/>
                ))}     
            </div>
            <ArrowForwardIosOutlined className="sliderArrow Right" onClick={()=>handleClick("right")}/>
        </div>
      </div>
    )
}
