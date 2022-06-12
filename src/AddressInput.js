import { AddressSuggestions } from 'react-dadata';
import React, { useState } from 'react';
import 'react-dadata/dist/react-dadata.css';
import { Component } from 'react';
class AddressInput extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = { value: '' }
        this.addressChanged = this.addressChanged.bind(this)
    }

    addressChanged(event)
    {
        this.setState({value: event.target.value})
    }
    
    
    render()
    {
    return(<AddressSuggestions token="89a56710c527db41cf71fe7709babb90a72f2beb" value={this.state.value} onChange={this.addressChanged} >
              </AddressSuggestions>)
    }
}

export default AddressInput;