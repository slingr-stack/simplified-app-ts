import { Action } from "../../../framework/model/Action";
import AppDataSource from "../../dataSources/MainDb";
import { Task } from "../../entities/Task";

@Action({
    type: 'entity',
    entity: Task
})
export class Stats {
    async execute() {
        let stats = {
            toDo: 0,
            inProgress: 0,
            done: 0
        };
        let tasks = await AppDataSource.getRepository(Task).find();
        tasks.forEach(task => {
            stats[task.status] = (stats[task.status] || 0) + 1;
        })
        return stats;
    }
}