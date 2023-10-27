import axios from "axios";
import React, { useState } from "react";

const Card = ({id}) => {
    const [name, setName] = useState('')

    const API_URL = "https://jsonplaceholder.typicode.com/users"
    const fetchApi = async()=>{
        const response = await axios.get(API_URL)
        setName(response)
    }
    fetchApi()

    return ( 
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <div>
                <img alt='' src={`https://robohash.org/${id}100x200`}/>
            </div>
            <div>
                {/* <h2>{name}</h2>
                <p>{email}</p> */}
            </div>

        </div>
     );
}
 
export default Card;