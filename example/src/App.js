import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  render() {
    return (
      <div>
        <h2>Click to add coin</h2>
        <button onClick={() => {
          const items = this.state.items;
          items.push("items");//could put function here
          this.setState({items: items});
        
        }}> Click me!</button>
        <div> 
          {
            this.state.items.map(function(item, index) {
              return <p key={index}>{item}</p>
            })
          }
        </div>

      </div>
    )
  }
}

export default App;
