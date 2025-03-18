interface TaskManager {
    createTask(title: string): number;
    listTasks(): string[];
}

class TaskManagerImpl implements TaskManager {
    taskCache: string[]

    constructor() {
        this.taskCache = [];
    };

    createTask(title: string): number {
        return this.taskCache.push(title);
    }

    listTasks(): string[] {
        return this.taskCache;
    }

    clearCache(): number {
        this.taskCache = [];
        return this.taskCache.length;
    }
}

const _TaskManagerImpl = new TaskManagerImpl();

export default _TaskManagerImpl;