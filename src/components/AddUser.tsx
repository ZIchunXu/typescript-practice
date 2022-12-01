import React from "react";
import { NewFormProps, User } from "../types/types";
import { UserList } from "./UserList";
export const AddUser : React.FC<NewFormProps> = ({addUser, users, currentUser, editing}) => {
    const handleCreate = (event: any) => {
        event.preventDefault();
        if (event.target.name.value === "" || event.target.info.value === "") return;
        const user: User = {id: editing && currentUser ? currentUser.id : users.length + 1, name: JSON.stringify(event.target.name.value), info: JSON.stringify(event.target.info.value)}
        addUser(user);
        event.target.name.value = ""
        event.target.info.value = ""
    }
    return (
        <form onSubmit={(event) => handleCreate(event)}>
            <label>Name:</label>
            <input name="name"/>
            <label>Info:</label>
            <input name="info"/>
            <button>{editing ? "Edit User" : "Add User"}</button>
        </form>
    )
}