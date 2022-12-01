export interface Task {
    id: number;
    title: string;
    completed: boolean;
}
export interface User {
    id: number;
    name: string;
    info: string;
}

export interface ListProps {
    users : User[];
    handleEdit : (user : User) => void;
    handleDelete : (user : User) => void;
}

export interface NewFormProps {
    users : User[];
    addUser : (user : User) => void;
    editing: boolean;
    currentUser: User | undefined;
}