import React, { Component } from 'react';
import stories from "./data.json";
import Selection from "./Selection";
import Recordatory from "./Recordatory";


const historical = []
class Story extends Component {
    constructor(props){
        super(props);
        this.state = {
            selection : 0,  
            selectionLetter : ""         
        }
    }

    componentDidMount(){
        stories.push(stories.shift());       
    }

    componentDidUpdate(prevProps, prevState) {
        stories.push(stories.shift());
        stories.push(stories.shift());

        historical.push(this.state.selectionLetter);

        if(historical.length == 5){
            alert("Muchas gracias por jugar");
            window.location.replace('');
        }
        
    }

    handleClick = (event) => {
        console.log(stories.lenght)
        if (event.target.id == "A"){
            this.setState({selection : 0, selectionLetter : "A"})
        }else{
            this.setState({selection : 1, selectionLetter : "B"})
        }
    }
    
    render (){
        return (
            <div className = "layout">
                <h1 className = "historia">{stories[this.state.selection].historia}</h1>                
                <div className = "opciones">
                    <Selection storyId="A" storyOption={stories[this.state.selection].opciones.a} handleClick={this.handleClick}/>
                    <Selection storyId="B" storyOption={stories[this.state.selection].opciones.b} handleClick={this.handleClick}/>
                </div>
                <Recordatory lastSelection={this.state.selectionLetter} historical={historical.map(
            (event, index) => (
              <li key={index}>{event}</li>
            ),
            stories[this.state.selection].id
          )}/>
            </div>
        )
    }
}

export default Story;