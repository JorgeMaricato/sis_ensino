import React from 'react';
import './App.css';

import Login from './Login';
import Aluno from './Aluno';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        strapi_url:'http://localhost:1337',
        jwt: null,
      }

  }

  get_jwt = (new_value) => {
    this.setState({jwt: new_value});
  }

  render () {
      if (this.state.jwt == null)
        return (
          <Login strapi_url={this.state.strapi_url} get_jwt={this.get_jwt.bind(this)} />
        );
      else
        return (
          <Aluno strapi_url={this.state.strapi_url} jwt={this.state.jwt}/>
        );

  };
}

export default App;
