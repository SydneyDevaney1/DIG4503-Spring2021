import React from 'react'
import Market from '../Market'
import Data from './data.json'


//function Card(props) {
 // return <p onClick={() => props.clickMe()}>{props.id}: {props.content}</p>
//}

class MarketList extends React.Component{


    constructor(props)
    {
      super(props)
      console.log(Data.items)
      this.state = {
        items : Data.items.map((v, i) => {
          v.id = i
          return v
          }
        
        ),
  
      }
    }

    clickMe(id){
      console.log("hi" + id)
      console.log(this.state.items)
      let items = this.state.items.filter((v) => v.id !== id)
      console.log(items)
      this.setState({items:items})
    }
  
render(){
    return(
    
    this.state.items.map((v,i) =>
      <Market key={v.id} clickMe={() => this.clickMe(v.id)} id={v.id} content={v.content} title={v.title}/>
    )
     
    );
  }
}


export default MarketList;