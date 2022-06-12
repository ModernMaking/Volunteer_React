import React from "react"
import { Component } from "react"

import MSelect, { MultiSelect } from './MSelect';
import { AddressSuggestions } from 'react-dadata';
import AddressInput from "./AddressInput";

export class AddVolunteer extends React.Component {
    constructor(props) {
      super(props)
      this.state = { value: '', tags:'', address:'' }

      
  
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.addressChange = this.addressChange.bind(this)
    }

    printAddress()
    {
      console.log(this.state.address)
    }
  
    addressChange(event)
    {
      alert(event.target.value)
      this.setState({address: event.target.value})
    }

    handleChange(event) {
      this.setState({ value: event.target.value })

    if (event.target.value.indexOf("торгушка")>-1)
    {
      alert("Сработало автоопределение адреса. Мы знаем адрес торгушки.")
        this.setState({value: " Ворошиловский торговый центр: ул. Рабоче-Крестьянская, 9б"})
        this.setState({address: "Волгоград, ул. Рабоче-Крестьянская, 9б"})
    }

    
    if (event.target.value.indexOf("поликек")>-1)
    {
      alert("Сработало автоопределение адреса. Мы знаем адрес политеха.")
        this.setState({value: "Волгоградский государственный технический университет: пр. Ленина, 28"})
        this.setState({address: "Волгоград, пр. Ленина, 28"})
    }
  
   
    }
  
    handleSubmit(event) {
      alert('Отправленное имя: ' + this.state.value)
      event.preventDefault()
    }
  
    render() {

      const addressInput =  <AddressInput/>//<AddressSuggestions token="89a56710c527db41cf71fe7709babb90a72f2beb" value={this.state.address} onChange={this.addressChange} > </AddressSuggestions>
    
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
           {addressInput}
          </label>
          <br/>
          
          <MSelect name="Выберите свои навыки" options={[
            { label: "Водитель", value: "driver" },
            { label: "Работа с детьми", value: "childs" },
            { label: "Работа с животными", value: "animals" },
          ]}></MSelect>
          <div>
      
    </div>
          
          <br></br>
         



          <input type="submit" value="Отправить" onClick={this.printAddress} />
        </form>
      )
    }
  }