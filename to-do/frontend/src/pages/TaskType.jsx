import React from 'react'
import { useParams } from 'react-router-dom'

const TaskType = () => {
    const { type } = useParams();
  return (
    <div>TaskType
        {type}
    </div>
  )
}

export default TaskType