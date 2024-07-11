import React, { useState } from 'react'
//react-calendar
import Calendar from 'react-calendar';
//css
import './CalendarPage.css'
//utils
import getDataFromLocalStorage from '../../utils/local-storage/getDataFromLocalStorage'
import fetchTasksAdnTransformDatea from '../../utils/fetchTasksAndTransformDates';
import formatDDMMYYYY from '../../utils/formatDDMMYYYY';
import toLocalISOString from '../../utils/toLocalISOString';
//types
import { UserData } from '../../types/UserData';
//tanstack query
import { useQuery } from '@tanstack/react-query';
//types
import { Task } from '../../types/Task';
//components
import LoadingScreen from '../../components/LoadingScreen';
//context
import { useAppContext } from '../../context/AppContextProvider';



interface TaskDates {
  [key: string]: number
}

const CalendarPage: React.FC = () => {
  const userData: UserData = getDataFromLocalStorage('userData')
  const { toggleModal } = useAppContext()
  const [tasks, setTasks] = useState<Task[]>([])
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const query = useQuery({ 
    queryKey: ['tasks'],
    queryFn: async () => {
      const data = await fetchTasksAdnTransformDatea(`http://localhost:3001/getTasksDisplayInfo/${userData.userId}`)
      setTasks(data)
      return data
    }
  })

  const taskDates: TaskDates = tasks.reduce((acc: TaskDates, task: Task) => {
    const date = formatDDMMYYYY(new Date(task.date))
    acc[date] = (acc[date] || 0) + 1
    return acc
  }, {})

  function checkForDateInTasks(date: Date): Task | undefined {
    return tasks.find((task: Task) => toLocalISOString(task.date) === toLocalISOString(date))
  }

  function handlePlusClick(date: Date): void {
    toggleModal()
    setSelectedDate(date)
  }

  function handleTileContent(date: Date): React.ReactElement {
    const taskCount = taskDates[formatDDMMYYYY(date)] || 0
    if(checkForDateInTasks(date)) {
      for(let task of tasks) {
        if(toLocalISOString(task.date) === toLocalISOString(date)) {
          return (<>
            <p className='tile-title'>{task.title}</p>
            {taskCount > 1 && <p className='more'>+{taskCount-1} more...</p>}
            <div className='show-modal' onClick={()=>handlePlusClick(date)}>+</div>
          </>)
        }
      }
    }
    return <div className='show-modal' onClick={()=>handlePlusClick(date)}>+</div>
  }

  function highlightTasks(date: Date): string {
    return checkForDateInTasks(date) ? 'highlight' : '' 
  }



  if(query.isLoading) return <LoadingScreen />
  if(query.isError) return <div>{query.error.message}</div>

  return (
    <Calendar
      view='month'
      locale='en-EN'
      tileContent={({ date }) => handleTileContent(date)}
      tileClassName={({ date }) => highlightTasks(date)}
    />
  )
}

export default CalendarPage