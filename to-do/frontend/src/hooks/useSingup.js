
import { useState } from 'react'
import {useAuthContext} from './useAuthContext'


export const useSingup = () => {
    const { dispatch} = useAuthContext()
    const [ error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
}