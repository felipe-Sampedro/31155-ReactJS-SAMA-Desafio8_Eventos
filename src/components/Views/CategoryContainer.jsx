import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { catalogo } from '../../Config'
import ItemList from '../ItemList/ItemList'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

const CategoryContainer = () => {

    const{categoryId} = useParams()
    const [prods, setProds] = useState([])
    const group = catalogo.filter((prod)=>prod.categoryId == (categoryId))


    useEffect(() => {
        const promesaf = new Promise((resolve,reject) =>{
            setTimeout(() => {
                resolve(group)
            }, 2000);
        })
        
        promesaf.then((res)=>setProds(res))
        .catch((err)=>console.log(err))

      return () => {

      }
    }, [categoryId])
    


  return (
    <div>
        {prods ? <ItemListContainer prods={prods}/> : <h1>cCargando...</h1>}
        {prods ?  <ItemList productos={prods}/> : <h1>cCargando...</h1>}
    </div>
  )
}

export default CategoryContainer