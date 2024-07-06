import React from "react";
import Clase from "./compClase";
import Form from "./form";

const CardForm = ({ form, handleChange, onSubmit }) =>(  
  <div className="row">
    <div className="col-sm">
      <Clase {...form} />
    </div>
    <div className="col-sm">
      <Form onSubmit={onSubmit} handleChange={handleChange} form={form} />
    </div>
  </div>
)

export default CardForm