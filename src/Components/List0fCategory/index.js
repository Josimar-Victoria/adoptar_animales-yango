import React, { useEffect, useState } from 'react'
import { useCategoriesData } from './Hook/useCategoriesData'
import { Category } from '../Category'
import { Item, List } from './styles'


export const ListOfCategory = () => {

    const [showFixed, setShowFixed] = useState(false)

    const { categories , loading } = useCategoriesData()

    useEffect(() => {
        const onScroll = (e) => {
            const newShowFixed = window.scrollY > 240
            showFixed !== newShowFixed && setShowFixed(newShowFixed)
        }
        document.addEventListener('scroll', onScroll)

        return () => document.removeEventListener('scroll', onScroll)
    })

    const renderList = (fixed) => (
        <List fixed={fixed}>
        {
           categories.map(category => 
           <Item key={category.id}>
            <Category {...category}/>
           </Item>)
        }
   </List>
    )
      if(loading) {
         return <h1>cargando ....</h1>
      }
    return (
       <>  
         {renderList()}
         { showFixed && renderList(true)}
       </>
    )
}
