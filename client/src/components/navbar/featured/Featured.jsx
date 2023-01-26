import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import axios from "axios";
import { useEffect, useState } from "react"
import "./featured.scss"

export default function Featured({type, setGenre}) {
    const [content, setContent] = useState({});

    useEffect(()=>{
        const getRandomContent = async ()=>{
            try{
                const res = await axios.get(`/movies/random?type=${type}`,
                {
                    headers:{
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWViOTAyN2I3ZWI1ZDE0ZTgyMGJiZCIsImlzQWRtaW4iOiJ0cnVlIiwiaWF0IjoxNjQ0OTkzNTE5LCJleHAiOjE2NDU1OTgzMTl9.xAGxPi5l1aIev0e4NEPJWt5xPKCEN7eUmI3pM4y99AY"
                    },
                }
                );
                setContent(res.data[0]);
            }catch(err){
                console.log(err);
            }
        };
        getRandomContent();
    },[type]);
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movies" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre" onChange={(e) => setGenre(e.target.value)}>
                    <option>Genre</option>
                    <option value="action">Action</option>
                    <option value="comedy">Comedy</option>
                    <option value="horror">Horror</option>
                    <option value="crime">Crime</option>
                    <option value="mystery">Mystery</option>
                    <option value="romance">Romance</option>
                    <option value="thriller">Thriller</option>
                    <option value="sci-fic">Sci-fic</option>
                    <option value="animation">Animation</option>
                    <option value="adventure">Acdventure</option>
                    <option value="documentary">Documentary</option>
                    <option value="fantacy">Fantacy</option>
                    <option value="history">History</option>
                </select>
            </div>
        )}
        <img src={content.image} alt="" />
        
        <div className="info">
            <img src={content.imageTitle} alt="" />
            <span className="description">
               {content.description}
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="moreInfo">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>
        </div>
      
    </div>
  )
}
