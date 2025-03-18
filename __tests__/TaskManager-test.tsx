import _TaskManagerImpl from '@/app/models/TaskManager';

describe('TaskManagerImpl', () => {

    beforeEach(() => {
        _TaskManagerImpl.clearCache();
    });

    test('Can add a task', () => {
        // Given
        const task = 'Help Famlee';
        const sut = _TaskManagerImpl;

        // When
        const taskCount = sut.createTask(task);

        // Then
        expect(taskCount).toEqual(1);
    });

    test('Can list a single task', () => {
        // Given
        const task = 'Help Famlee';
        const sut = _TaskManagerImpl;

        // When
        const newTaskList = sut.createTask(task);

        // And
        const listedTasks = sut.listTasks();

        // Then
        expect(listedTasks).toEqual([task]);
    })

});