import { createTaskManager } from '@/app/models/TaskManager';
import type { TaskManager } from '@/app/models/TaskManager';

describe('TaskManagerImpl', () => {
    let sut: TaskManager;

    beforeEach(() => {
        sut = createTaskManager();
    });

    test('Can add a task', () => {
        const task = 'Task';
        const result = sut.createTask(task);
        expect(result).toBe(1);
        expect(sut.listTasks()).toEqual([task]);
    });

    test('Can list a single task', () => {
        const task = 'Task';
        sut.createTask(task);
        const result = sut.listTasks();
        expect(result).toEqual([task]);
    })

    test('Can list multiple tasks', () => {
        const tasks = ['Task 1', 'Task 2', 'Task 3'];

        tasks.forEach((task) => sut.createTask(task));

        expect(sut.listTasks().length).toBe(tasks.length);
        expect(sut.listTasks()).toEqual(tasks);
    });

    test('Can clear cache', () => {
        const task1 = 'Task 1';
        const task2 = 'Task 2';
        const clearedCacheCount = sut.clearCache();
        expect(clearedCacheCount).toBe(0);
        expect(sut.listTasks()).toEqual([]);
    });
});