import React from "react"
import Clase from "./compClase"
import Button from "./compBtn"

const Container = () => {
    <React.Fragment>
        {this.state.data.map((item)=>{
              return(
                  <Clase name={item.name} descri={item.descri} img={item.img}/>
              )
            })}
            <Button/>
    </React.Fragment>
}

export default Container