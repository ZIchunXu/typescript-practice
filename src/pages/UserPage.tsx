import React , {useContext, useState, useRef}from "react";
import { User } from "../types/types";
import { UserList } from "../components/UserList";
import { AddUser } from "../components/AddUser";
import { Link } from "react-router-dom";
export default function UserPage () {
    const [users, setUsers] = useState<User[]>([]);
    const [editing, setEdit] = useState(false);
    const [currentUser, setCurrent] = useState<User>();
    const addUser = (user : User) => {
        if (editing) {
            setUsers(users.map((item) => item.id === user.id ? user : item))
            setEdit(false);
        } else {
            setUsers([...users, user]);
        }
    }
    const handleEdit= (user : User) => {
        setCurrent(user);
        setEdit(true);
    }
    const handleDelete= (user : User) => {
        setUsers(users.filter((item) => item.id !== user.id))
    }
    return (
        <div>
            <h1>User CRUD Page</h1>
            <UserList users = {users} handleEdit = {handleEdit} handleDelete = {handleDelete}/>
            <AddUser addUser = {addUser} users = {users} currentUser = {currentUser} editing = {editing} />
            <Link to="/">Back To Home</Link>
        </div>
    )
}