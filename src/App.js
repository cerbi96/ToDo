import React from "react";
import "./App.css";
import Header from "./Components/Top/index";
import Input from "./Components/Bottom/index";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Input />
        </header>
      </div>
    );
  }
}

export default App;
