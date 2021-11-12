import React, {useEffect, useState} from 'react';
import axios from "axios";

// import components

const Table = () => {

    const [responseData , setResponseData] = useState([]);
    const getDta = () => {
        axios.get('https://api.most.technology/course/')
            .then((response) => {
                const myData = response.data;
                setResponseData(myData);
                // pass data response to state
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    useEffect(() => getDta(), [])

    return (
        <div>{responseData.size}</div>
    )
};

export default Table;