import React, {useEffect, useState} from 'react';
import axios from "axios";

// import components
import Card from "./UI/Card";

import 'bootstrap/dist/css/bootstrap.css';
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

    return (<Card>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Title</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {console.log(responseData)}
            {responseData.map((item) => (<tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.start}</td>
                <td>{item.end}</td>
                <td>{item.price}</td>
                <td/>
            </tr>))}
            </tbody>
        </Table>
    </Card>)
};

export default Table;