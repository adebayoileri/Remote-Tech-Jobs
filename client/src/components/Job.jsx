import React from 'react'
import {
    Typography,
    Button
} from "@material-ui/core"
const jobs = [
    {
        "id": 1,
        "title" :"FullStack developer",
        "Salary":"N3000",
        "location": "Remote"
    },
    {
        "id": 2,
        "title" :" Laravel developer",
        "Salary":"N32000",
        "location": "Remote"
    },
    {
        "id": 3,
        "title" :"Frontend developer",
        "Salary":"N4000",
        "location": "Remote"
    }
]

export default function Job() {
    return (
        <div>
            {
                jobs && jobs.map((job)=>(
                <div key={job.id} style={{
                    display:"flex",
                    flexDirection: "row",
                    alignSelf: "auto",
                    alignItems: "stretch",
                    flexWrap: "wrap",
                    padding: "25px",
                    margin: "auto",
                    marginBottom: "15px",
                    width: "75%",
                    border: "2px solid blue"
                }}>
                    <Typography variant="h6">{job.title}</Typography>
                </div>
                )) 
            }  
        </div>
    )
}
