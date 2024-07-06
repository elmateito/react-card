import React from "react"
import CardForm from "../comps/cardForm.js"
import url from '../config'

export default class PageForm extends React.Component{
    state={
        form:{
            name:'',
            descri:'',
            img:''
        }
    }
    handleChange = (e) => {
        this.setState({ 
            form: {...this.state.form,
                [e.target.name]: e.target.value }
        });
      };
    handleSubmit = async (e) => {
        e.preventDefault()
        this.props.navigate('/data')
        try{
            let response = {
                method: 'POST',
                body: JSON.stringify(this.state.form),
                headers: {
                    'Aceppt': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
            let res = await fetch(`${url}/info`, response)
            let data = await res.json()
            console.log(data)
        }
        catch(error){
            console.log(error)
        }
      }
    render(){
        return  <CardForm
                onSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                form={this.state.form}/>
    }
}