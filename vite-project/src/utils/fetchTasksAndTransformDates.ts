import { Task } from "../types/Task";
import axios from "axios";

export default async function fetchTasksAdnTransformDatea(url: string): Promise<Task[]> {
    try {
        const response = await axios(url)
        response.data.forEach((task: Task) => {
            task.date = new Date(task.date)
        })
        return response.data
    } catch(err: any) {
        throw new Error(err)
    }
}