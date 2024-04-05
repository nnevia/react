'use client'
import { updateTodo } from '@/lib/actions'
import { Todo } from './TodoList'
import React, { useOptimistic, useTransition } from 'react'

const Checkbox = ({todo}: {todo: Todo}) => {

  const [optimisticTodo, addOptimisticTodo] = useOptimistic(todo,
    (state: Todo, completed: boolean) => ({...state, completed})
  )

  // const [isPending, startTransition] = useTransition()
  return (
    <input 
      type='checkbox'
      checked={optimisticTodo.completed}
      id='completed'
      name='completed'
      onChange={async () => {
        addOptimisticTodo(!todo.completed)
        await updateTodo(todo)
      }}
      className='min-w-[2rem] min-h-[2rem]'
    />
  )
}

export default Checkbox