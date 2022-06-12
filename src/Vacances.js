import VacanceCard from "./VacanceCard";
import React from "react";
import { Component } from "react";
import MapBasics from "./MapBasics";

class TabContent extends React.Component {
    render() {
      const { title, content } = this.props;
  
      return (
        <div className="tabcontent">
          <h3>{title}</h3>
          <p>{content}</p> 
        </div>
      );
    }
  }
  
  class Tabs extends React.Component {
    state = {
      active: null,
    }
  
    openTab = e => this.setState({
      active: +e.target.dataset.index,
    });
  
    render() {
      const { items } = this.props;
      const { active } = this.state;
  
      return (
        <div>
          <div className="tab">
            {items.map((n, i) => (
              <button
                className={`tablinks ${i === active ? 'active' : ''}`}
                onClick={this.openTab}
                data-index={i}
              >{n.title}</button>
            ))}
          </div>
          {items[active] && <TabContent {...items[active]} />}
        </div>
      );
    }
  }

export default function Vacances()
{
    const mapState = { center: [55.76, 37.64], zoom: 10 };
    return(
        <div>
            <div>
         <VacanceCard name="even1" text="..ggggttgtgggr" img="main.png"/>
         <VacanceCard name="even1" text="..ggggttgtgggr" img="main.png"/>
         <VacanceCard name="even1" text="..ggggttgtgggr" img="main.png"/>
         <VacanceCard name="even1" text="..ggggttgtgggr" img="main.png"/>
         <VacanceCard name="even1" text="..ggggttgtgggr" img="main.png"/>
         <VacanceCard name="even1" text="..ggggttgtgggr" img="main.png"/>
         <VacanceCard name="even1" text="..ggggttgtgggr" img="main.png"/>
         <VacanceCard name="even1" text="..ggggttgtgggr" img="main.png"/>
         <VacanceCard name="even1" text="..ggggttgtgggr" img="main.png"/>
         <VacanceCard name="even1" text="..ggggttgtgggr" img="main.png"/>
         <VacanceCard name="even1" text="..ggggttgtgggr" img="main.png"/>
         <VacanceCard name="even1" text="..ggggttgtgggr" img="main.png"/>
         <VacanceCard name="even1" text="..ggggttgtgggr" img="main.png"/>
         <VacanceCard name="even1" text="..ggggttgtgggr" img="main.png"/>
         <VacanceCard name="even1" text="..ggggttgtgggr" img="main.png"/>
         <VacanceCard name="even1" text="..ggggttgtgggr" img="main.png"/>
         <VacanceCard name="even1" text="..ggggttgtgggr" img="main.png"/>
         <VacanceCard name="even1" text="..ggggttgtgggr" img="main.png"/>
         <VacanceCard name="even1" text="..ggggttgtgggr" img="main.png"/>
         <VacanceCard name="even1" text="..ggggttgtgggr" img="main.png"/>
         <VacanceCard name="even1" text="..ggggttgtgggr" img="main.png"/>
         </div>
        <MapBasics></MapBasics>
    </div>
    )
   
}