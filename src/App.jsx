import AddTodoForm from './components/addTodoForm'
import TodoList from './components/todoList'


function App() {


  return (
    <div className='container mx-auto max-w-md h-screen py-6'>
        <div className='flex flex-col p-4 border rounded-lg shadow-lg h-full bg-teal-900'>
          <div className='py-4'>
            <h1 className='text-2xl font-bold mb-4 text-center text-white '>
                Bryan's Todo List
            </h1>
            <AddTodoForm/>
          </div>
          <div className=''>
            <TodoList/>
          </div>
        </div>
    </div>
  )
}

export default App
