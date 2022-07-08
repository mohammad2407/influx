import React from 'react'
import "./todo.css"
export const Todos = () => {

    const todos = [
        {
            title:"Lets play the cricket",
            author:"Rouden"
        },
        {
            title:"task with drop down menu",
            author:"by bob"
        },
        {
            title:"badge on the right task",
            author:"by nob"
        },

        {
            title:"badge on the right task",
            author:"by nob"
        }
    ]
  return (
    <div className='container-todo'>
        {
            todos.map((item, index) =>{
                return <>
                <div className='todo-row' key = {index}>
                    <div className='todo-styling' >
                         {
                            index%2 ==0 ? <div className='blue'></div> : <div className='orange'></div>
                        }

                        <div className='check'>
                            <input type="checkbox"  />
                        </div>
                    </div>

                    <div className='todo-title'>{item.title}</div>
                </div>
                </>
            })
        }
    </div>
  )
}
