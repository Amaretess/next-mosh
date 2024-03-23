import { ToDo } from "../components/ToDoCard";
import apiClient from "../services/api-client";

const getToDos = async () => {
    const res = await fetch(apiClient + "/todos");
    const toDos: ToDo[] = await res.json();

    return toDos;
}


export default getToDos; 

