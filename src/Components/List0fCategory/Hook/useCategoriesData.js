import { useEffect, useState } from 'react'

export const useCategoriesData = () => {
    const [ categories, setCategory] = useState([])
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://petgram-server-clgg.vercel.app/categories')
         .then(response => response.json())
         .then(response => {
            setCategory(response)
            setLoading(false)
         })
      },[])
  
    return { categories, loading }
}
