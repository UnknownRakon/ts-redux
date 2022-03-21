import { TodoState, TodoAction, TodoActionTypes } from './../../types/todo';


const initialState: TodoState = {
    todos: [],
    loading: false,
    error: null,
    page: 1,
    limit: 8
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
    switch (action.type){
        case TodoActionTypes.FETCH_TODOS:
            return {...state, loading: true}
        case TodoActionTypes.FETCH_TODOS_SUCCESS:
            return {...state, loading: false, todos: action.payload }
        case TodoActionTypes.FETCH_TODOS_ERROR:
            return {...state, loading: false, error: action.payload }
        case TodoActionTypes.SET_TODO_PAGE:
            return {...state, page: state.page + action.payload }
        case TodoActionTypes.SET_ITEM_CHECKED:
            const index = state.todos.findIndex(todo => todo.id === action.payload)
            const newArray = [...state.todos]
            newArray[index].completed = !newArray[index].completed
            return {...state, todos: newArray}
        case TodoActionTypes.CREATE_TODO:
            return {...state, todos: [action.payload, ...state.todos]}
        default: 
            return state
    }
}