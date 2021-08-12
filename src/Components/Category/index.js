import React from 'react'
import { Anchor, Image } from './styles'

export const Category = ({cover, path, emoji}) => {
    return (
        <div>
             <Anchor href={path}>
                 <Image src={cover} alt="img"/>
                 {emoji}
             </Anchor>
        </div>
    )
}
