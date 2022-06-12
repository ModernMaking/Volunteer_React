import React from "react"
import { Component } from "react"

import MSelect, { MultiSelect } from './MSelect';

export class AddVolunteer extends React.Component {
    constructor(props) {
      super(props)
      this.state = { value: '', tags:'' }
  
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
  
    handleChange(event) {
      this.setState({ value: event.target.value })

    if (event.target.value.indexOf("торгушка")>-1)
    {
      alert("Сработало автоопределение адреса. Мы знаем адрес торгушки.")
        this.setState({value: " Ворошиловский торговый центр: ул. Рабоче-Крестьянская, 9б"})
    }

    
    if (event.target.value.indexOf("поликек")>-1)
    {
      alert("Сработало автоопределение адреса. Мы знаем адрес политеха.")
        this.setState({value: "Волгоградский государственный технический университет: пр. Ленина, 28"})
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
            Фамилия:
            <input type="text"/>
          </label>
          <br></br>
       
          <label>
            Имя:
            <input type="text"/>
          </label>
          <br></br>

          <label>
            Отчество:
            <input type="text"/>
          </label>
          <br></br>

          <label>
            Дата рождения:
            <input type="date" max="2008-01-01"/>
          </label>
            <br/>
            <label>
            Адрес (если не хотите рассекречивать место проживания, пишите ближайшие объекты):<br></br>
            <textarea
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <MSelect name="Выберите свои навыки" options={[
            { label: "Водитель", value: "driver" },
            { label: "Работа с детьми", value: "childs" },
            { label: "Работа с животными", value: "animals" },
          ]}></MSelect>
          <div>
      
    </div>
          
          <br></br>
         



          <input type="submit" value="Отправить" />
        </form>
      )
    }
  }