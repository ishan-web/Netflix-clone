import { useEffect, useState } from "react";
import Featured from "../../components/navbar/featured/Featured";
import List from "../../components/navbar/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import axios from "axios";

const Home = function( {type} ){
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect( function(){

        const getRandomLists = async function(){
            try{
                const res = await axios.get(
                    `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
                    {
                        headers:{
                            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWViOTAyN2I3ZWI1ZDE0ZTgyMGJiZCIsImlzQWRtaW4iOiJ0cnVlIiwiaWF0IjoxNjQ0OTkzNTE5LCJleHAiOjE2NDU1OTgzMTl9.xAGxPi5l1aIev0e4NEPJWt5xPKCEN7eUmI3pM4y99AY"
                        },
                    }
                );
                 setLists(res.data);
                } catch (err) {
                    console.log(err);
            }
        };
        getRandomLists();
    }, [type, genre]);
    
    return (
        <div className="home">
          <Navbar />
          <Featured type={type} setGenre={setGenre} />
          {lists.map((list) => (
            <List list={list} />
          ))}
        </div>
      );
};

export default Home;