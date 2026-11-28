import { useEffect, useState } from 'react'

export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        try {
            const stored = localStorage.getItem(key)
            return stored ? JSON.parse(stored) : initialValue
        } catch (error) {
            return initialValue
        }
    })

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.error('Sauvegarde impossible :', error)
        }
    }, [key, value])

    return [value, setValue]
}