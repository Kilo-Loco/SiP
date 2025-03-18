export type TaskManager = {
    createTask: (title: string) => number;
    listTasks: () => string[];
    clearCache: () => number;
};

// Function-based implementation
export const createTaskManager = (): TaskManager => {
    let taskCache: string[] = [];

    return {
        createTask: (title: string): number => taskCache.push(title),
        listTasks: (): string[] => [...taskCache],
        clearCache: (): number => {
            taskCache = [];
            return taskCache.length;
        }
    };
};