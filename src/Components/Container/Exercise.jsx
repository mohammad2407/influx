import React from 'react'
import styled from "styled-components"
import { Messages } from '../messages/Messages'
import { Todos } from '../Todos/Todos'
import "./Exercis.css"

const ContainerDiv = styled.div`
    width:90%;
    display:flex;
    flex-wrap:wrap;
`
export const Exercise = () => {
  return (
    <div className='ContainerDiv'>  
    <div className='todo-component'>

      <Todos />
    </div>

      <div className='message-component'>
      <Messages />
      </div>

    </div>
  )
}



