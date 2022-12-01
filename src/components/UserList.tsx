import React from "react";
import { ListProps } from "../types/types";
export const UserList : React.FC<ListProps> = ({users, handleEdit, handleDelete}) => {
    return (
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Info</td>
                </tr>
            </thead>
            <tbody>
                {users.length > 0 ? users.map((user) => <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.info}</td>
                    <td>
                        <button onClick={() => handleEdit(user)}>Edit</button>
                        <button onClick={() => handleDelete(user)}>Delete</button>
                    </td>
                </tr>) : <h1>Empty User List</h1>
                }
            </tbody>
        </table>
    )
}