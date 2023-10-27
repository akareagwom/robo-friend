import axios from "axios";
import React, { useEffect, useState } from "react";

const Card = ({id}) => {
    const [users, setUsers] = useState([])

    const API_URL = "https://jsonplaceholder.typicode.com/users"
    const IMAGE_URL = `https://robohash.org/${id}100x200`

    const fetchApi = ()=>{
        fetch(API_URL)
        .then(response => {
          return response.json()
        })
        .then(data => {
          setUsers(data)
        })
        
    }
    useEffect (()=>{
        fetchApi();
    },[])

    return (
        <>
        {users.map(user => (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">     
        <div>
            <div key={user.id}>
                <img alt='' src={IMAGE_URL}/>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                
                </div>
        </div>

        </div>
          ))}
        </> 
     );
}
 
export default Card;