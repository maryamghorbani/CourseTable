import React, {useEffect, useState} from 'react';
import axios from "axios";

// import components
import Card from "./UI/Card";

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
        <Card>{responseData.size}</Card>
    )
};

export default Table;