import React from 'react'

const home = () => {

const todos=[
  { id: 1, text: 'Complete project proposal', completed: false },
  { id: 2, text: 'Review code changes', completed: true },
  { id: 3, text: 'Schedule team meeting', completed: true },
  { id: 4, text: 'Update documentation', completed: false }
]

  return (
    <>
    <main className=' h-[100vh] '>
<div className=' h-[85vh]'>
    <div className=' h-[15%] flex justify-center items-center text-[3rem]'>
       <h1>TODO TASK</h1>
    </div>
    <div className=' h-[85%] flex flex-col justify-center items-center'>
   <div className=' h-14 w-full mt-4 flex justify-center items-center'>
    <input type="text" name="" id="" placeholder='Search' className=' w-[40%] h-[95%] text-[1.5rem] p-3 rounded-xl  outline outline-purple-500' />
   </div>

   <div className=" mt-4 h-full w-full p-6 bg-purple-50 rounded-lg">
      
      <div className="space-y-4">
        {todos.map(todo => (
          <div 
            key={todo.id} 
            className={`p-4 rounded-lg shadow-sm flex justify-between items-center ${
              todo.completed ? 'bg-purple-200' : 'bg-white'
            }`}
          >
            <span className={`${todo.completed ? 'line-through text-purple-500' : 'text-gray-800'}`}>
              {todo.text}
            </span>
            <div className="flex space-x-2">
              <button 
                className={`px-3 py-1 rounded-md ${
                  todo.completed 
                  ? 'bg-purple-200 text-purple-700 hover:bg-purple-300' 
                  : 'bg-purple-600 text-white hover:bg-purple-700'
                } transition-colors`}
              >
                {todo.completed ? 'Undo' : 'Complete'}
              </button>

              
              <button 
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>
</div>

<div className='border-2 border-green-500 h-[15vh]'>
    bottom
</div>
    </main>
    
    </>
  )
}

export default home