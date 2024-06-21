import {create} from "zustand";

const useTodoStore = create (set => ({
    todos: [],
    addTodo: (text) => set((state) => ({todos: [...state.todos, {text, complete: false, id: Date.now() }]})),
    editTodo: (id, todo) => set((state) => ({todos: state.todos.find(t => t.id === id ? [...state.todos, {text, complete: false, id: Date.now() }] : t)})),
    removeTodo: (id) => set((state) => ({todos: state.todos.filter(t => t.id !== id)})),
    //reversed the property completed value 
    toggleTodo: (id) => set((state) => ({todos: state.todos.map (t => t.id === id ? {...t, completed: !t.completed}: t)}) )

})) 

export default useTodoStore


