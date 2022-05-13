import React, { useState } from 'react'

const ItemCount = ({stock}) => {
    
    const [counter,setCounter] = useState(1)

    function sumar(){
        counter < stock && setCounter(counter+1)
    }

    function restar(){
        counter > 1 && setCounter(counter-1)
    }

  return (
    
    <div>
        <p><strong>stock disponible: </strong>{stock}</p>
        <div className='d-flex justify-content-between p-2'>
            <button onClick={restar}>-</button>
            <p>{counter}</p>
            <button onClick={sumar}>+</button>
        </div>
    </div>
  )
}
export default ItemCount

