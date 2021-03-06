import React from 'react'
import './index.css'

class Market extends React.Component{
render(){
    return(
      
      
      
      <div className = "item">
      <span className="close"
      onClick={() => this.props.clickMe()}>&times;</span>
      <h3>{this.props.title}</h3>
      <p>{this.props.content}</p>
      </div>
   
    
    )
  }
}


export default Market