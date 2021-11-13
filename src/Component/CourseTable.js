import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Table} from 'react-bootstrap';

// import components
import Card from "./UI/Card";

//import styles
import classes from './Caret.module.css'

const CourseTable = () => {

    const [courses, setCourses] = useState([]);
    const [sortASC, setSortASC] = useState(false);

    const getDta = () => {
        axios.get('https://api.most.technology/course/').then(response => response.data).then((data) => {
            setCourses(prevState => {
                return sorter([...prevState, ...data.data], sortASC);
            });
            // pass data response to state
        })
            .catch(function (error) {
                console.log(error);
            });
    }
    useEffect(() => getDta(), [])

    const sorter = (items, asc=true) => {
        return items.sort((a, b) => {
            const sortK = asc ? 1 : -1
            if (a.title < b.title) {
                return 1 * sortK;
            } else if (a.title > b.title) {
                return -1 * sortK;
            }
            return 0;
        });
    }

    const changeOrder = () => {
        setCourses(prevState => {
            const newSort = !sortASC;
            setSortASC(newSort)
            return sorter(courses, newSort)
        });
    };

    return (
        <Card>
            <Table responsive striped bordered hover>
                <thead>
                <tr>
                    <th onClick={changeOrder}>
                        Title
                        <span className={sortASC ? classes.headerSortUp : classes.headerSortDown}></span>
                    </th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {courses.map((item) => (<tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.start}</td>
                    <td>{item.end}</td>
                    <td>{item.price}</td>
                </tr>))}
                </tbody>
            </Table>
        </Card>
    )
};

export default CourseTable;