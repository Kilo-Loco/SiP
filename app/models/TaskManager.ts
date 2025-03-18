export interface TaskManager {
    createTask(title: string): number;
    listTasks(): string[];
    clearCache(): number;
}

class TaskManagerImpl implements TaskManager {
    private taskCache: string[]

    constructor() {
        this.taskCache = [];
    };

    createTask(title: string): number {
        return this.taskCache.push(title);
    }

    listTasks(): string[] {
        return [...this.taskCache];
    }

    clearCache(): number {
        this.taskCache = [];
        return this.taskCache.length;
    }
}

export const createTaskManager = () => new TaskManagerImpl();