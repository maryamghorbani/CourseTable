import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Table} from 'react-bootstrap';

// import components
import Card from "./UI/Card";

//import styles
import classes from './Caret.module.css'

const CourseTable = () => {

    const [responseData, setResponseData] = useState([]);
    const Courses = responseData.map((item) => item);
    const [sortIcon, setSortIcon] = useState(false);

    const getDta = () => {
        axios.get('https://api.most.technology/course/').then(response => response.data).then((data) => {
            setResponseData(data.data);
            // pass data response to state
        })
            .catch(function (error) {
                console.log(error);
            });
    }
    useEffect(() => getDta(), [])

    const changeOrder = () => {
        Courses.sort((a, b) => {
            setSortIcon(!sortIcon);
            console.log("a:", a.title, "b:", b.title)
            if (a.title < b.title) {
                return -1;
            }
            if (a.title > b.title) {
                return 1;
            }
            return 0;
        });
    };

    return (<Card>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th onClick={changeOrder}>
                    Title
                    <span className={sortIcon ? classes.headerSortUp : classes.headerSortDown}></span>
                </th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {responseData.map((item) => (<tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.start}</td>
                <td>{item.end}</td>
                <td>{item.price}</td>
            </tr>))}
            </tbody>
        </Table>
    </Card>)
};

export default CourseTable;