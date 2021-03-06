import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemCount = ({stock, title, onAdd,quantityToAdd}) => {
    
    const [counter,setCounter] = useState(1)
    
/*     const [quantityToAdd, setQuantityToAdd] = useState(null) */

    function sumar(){
        counter < stock && setCounter(counter+1)
    }

    function restar(){
        counter > 1 && setCounter(counter-1)
    }

    console.log(quantityToAdd);

  return (
    
    <div>
        <p><strong>stock disponible: </strong>{stock}</p>
        <div className='d-flex justify-content-between p-2'>
            {quantityToAdd ===0 ?(
               <> 
                    <button onClick={restar}>-</button>
                        <p>{counter}</p>
                    <button onClick={sumar}>+</button>
                </>
            ):(
                <></>
            )}

        </div>
        <div className="d-flex justify-content-center ">
            {quantityToAdd === 0 ?(
                <button onClick={()=>onAdd(counter,title)} className="btn btn-outline-dark flex-shrink-0 p-1" type="button">
                    Agregar al carrito
                </button>
                ) : (
                    <></>                    
                )}
        </div>
    </div>
  )
}
export default ItemCount
