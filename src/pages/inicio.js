import React from 'react'
import Button from '../comps/compBtn'

export default class Inicio extends React.Component{
  render(){
    return(
      <div className='flex justify-center items-center flex-col mt-10'>
        <h1 className='text-6xl font-bold text-stone-500 mt-20 mb-10 font-mono'>API - CARDS</h1>
        {/* <button className='bg-violet-400 w-20 h-12 rounded text-large font-semibold m-2' onClick={this.handleClick}>Acerca de</button> */}
        <div className='flex'>
          <Button/>
        </div>
      </div>
    )
  }
}