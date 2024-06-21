import React from 'react'
import useTodoStore from '../../store/todoStore'
import TodoItem from '../todoItem'
import { AnimatePresence } from 'framer-motion'

const TodoList = () => {

    const todos = useTodoStore(state => state.todos)

  return (
    <AnimatePresence>
        <ul >
            {todos.map(todo =>(
              <div className=" text-white">
                <TodoItem key={todo.id} todo={todo}/>
              </div>
            ))}
        </ul>
    </AnimatePresence>
  )
}

export default TodoList