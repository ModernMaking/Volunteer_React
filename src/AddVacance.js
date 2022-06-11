import React from "react"
import { Component } from "react"

export class AddVacance extends React.Component {
    constructor(props) {
      super(props)
      this.state = { value: '', tags:'' }
  
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
  
    handleChange(event) {
      this.setState({ value: event.target.value })

    if (event.target.value.indexOf("водитель")>-1)
    {
        this.setState({tags: "водитель"})
    }

    if (event.target.value.indexOf("водитель автобуса")>-1)
    {
        this.setState({tags: "водитель категории D"})
    }

    if (event.target.value.indexOf("водитель грузовика")>-1)
    {
        this.setState({tags: "водитель категории С"})
    }

    if (event.target.value.indexOf("детский")>-1)
    {
        this.setState({tags: "работа с детьми"})
    }

    if (event.target.value.indexOf("собак")>-1)
    {
        this.setState({tags: "работа с животными"})
    }

      
    }
  
    handleSubmit(event) {
      alert('Отправленное имя: ' + this.state.value)
      event.preventDefault()
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          
          <label>
            Описание:
            <textarea
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label><br></br>
          <label>
            Теги:
            <input
            value={this.state.tags}
              type="text"/>
          </label>



          <input type="submit" value="Отправить" />
        </form>
      )
    }
  }