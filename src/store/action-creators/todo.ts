import { Todo, TodoAction, TodoActionTypes } from './../../types/todo';
import axios from 'axios';
import { Dispatch } from 'redux';

export const fetchTodos = (page = 1, limit = 8) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodoActionTypes.FETCH_TODOS})
            const response = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit}
            })
            setTimeout(() => {
                dispatch({type:TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data})
            }, 500);
        } catch (e) {
            dispatch({type: TodoActionTypes.FETCH_TODOS_ERROR, payload: 'Упс! Что-то пошло не так'})
        }
    }
}

export function setTodoPage(page: number): TodoAction{
    return {
        type: TodoActionTypes.SET_TODO_PAGE,
        payload: page
    }
}

export function setItemChecked(itemID: number): TodoAction{   
    return {
        type: TodoActionTypes.SET_ITEM_CHECKED,
        payload: itemID
    }
}

export function createTodo(todo: Todo): TodoAction{   
    return {
        type: TodoActionTypes.CREATE_TODO,
        payload: todo
    }
}