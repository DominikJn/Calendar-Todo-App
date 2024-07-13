import { Task } from "../types/Task";
import api from "./api";



export default async function fetchTasksAdnTransformDates(url: string): Promise<Task[]> {
    try {
        const response = await api.get(url)
        response.data.forEach((task: Task) => {
            task.date = new Date(task.date)
        })

        return response.data
    } catch(err: any) {
        throw new Error(err)
    }
}