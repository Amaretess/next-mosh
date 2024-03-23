"use-client"
import { useEffect, useState } from "react"
import userService from "../services/user-service";
import { CanceledError } from "axios";

export interface User {
    id: number;
    name: string;
}

const getUsers = () => {
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        const { request, cancel } = userService.getAll<User>()
            request.then(({data: allUsers}) => {
                setUsers(allUsers)
            }).catch((err) => {
                if (err instanceof CanceledError) return;
            })
            return () => cancel();
    }, [])

    return { users }
}

export default getUsers;