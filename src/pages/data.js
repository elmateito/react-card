import React from 'react'
import Tarjeta from '../comps/compClase'
import Button from '../comps/compBtn'
import useFetch from '../hook/hook'
import url from '../config'

const Inicio = () => {
    const data = useFetch(`${url}/info`)
    return(
      <div className='flex justify-center w-full flex-wrap'>
          {data.map((item, index)=>( //data arr
                <Tarjeta key={index} name={item.name} descri={item.descri} img={item.img}/>
          ))}
          <Button/>
      </div>
    )
}

export default Inicio