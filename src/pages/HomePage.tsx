import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
    return (
        <div>
            <h1>Hello</h1>
            <Link to="/todo">Simple ToDo List Page</Link >
            <br/>
            <Link to="/user">Simple User CRUD Page</Link >
        </div>
    )
}