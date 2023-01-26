import React from "./listItem.scss"
import {Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined} from "@material-ui/icons"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListItem({index, item}) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers:{
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWViOTAyN2I3ZWI1ZDE0ZTgyMGJiZCIsImlzQWRtaW4iOiJ0cnVlIiwiaWF0IjoxNjQ0OTkzNTE5LCJleHAiOjE2NDU1OTgzMTl9.xAGxPi5l1aIev0e4NEPJWt5xPKCEN7eUmI3pM4y99AY"
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);
  
  return (
    <Link to={{pathname:"/watch", movie:movie}}> 
    <div
     className="listItem"
     style={{left: isHovered && index * 225 -50 + index * 2.5}}
     onMouseEnter={()=>setIsHovered(true)}
     onMouseLeave={()=>setIsHovered(false)}
     >
      <img src={movie.image} alt=""
      />
      {isHovered && (
      <>
      <video src={movie.trailer} autoPlay={true} loop />
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow className="icon"/>
          <Add className="icon"/>
          <ThumbUpAltOutlined className="icon"/>
          <ThumbDownAltOutlined className="icon"/>
        </div>
        <div className="itemInfoTop">
          <span>{movie.duration}</span>
          <span className="limit">{movie.limit}</span>
          <span>{movie.year}</span>
        </div>
        <div className="desc">
         {movie.description}
        </div>
        <div className="genre">{movie.genre}</div>
      </div>
      </>
      )}
    </div>
    </Link>
  );
}
