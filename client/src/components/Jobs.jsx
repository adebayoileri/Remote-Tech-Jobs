import React, { Component } from 'react'
import Job from "./Job";
const jobs = [
    {
        "title" :"FullStack developer",
        "Salary":"N3000",
        "location": "Remote"
    },
    {
        "title" :" Laravel developer",
        "Salary":"N32000",
        "location": "Remote"
    },
    {
        "title" :"Frontend developer",
        "Salary":"N4000",
        "location": "Remote"
    }
]
export default class Jobs extends Component {
    render() {
        return (
          <Job />
        )
    }
}
