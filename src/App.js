import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import React, { Component } from 'react'
import News from './components/News';
import {

  BrowserRouter as Router,
  Routes,
  Route,
  

} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {

  // constructor() {
  //   super()
  //   this.state = {
  //     mode:''
  //   }
  // }
  pageSize = 12;
  apiKey = process.env.REACT_APP_NEWS_API;



  constructor(props) { 
    super(props);
    this.state = {
      mode:'light'
    }
  }
  toggleMode =()=> { 
    if (this.state.mode === 'dark') {
      this.setState({
        mode: 'light'
      })
      console.log('mode toggled - light')
     
    }
    else { 
      this.setState({
        mode:'dark'
      })
    }
    console.log('mode toggled - dark')
    this.forceUpdate();

  }
 
  state= {
    progress:10
  }
  setProgress=(progress)=> {

    this.setState({
      
      progress:progress
    })

  }
  render() {
    console.log("render");

    return (
      <div>
        <Router>

          <Navbar mode={this.state.mode} toggleMode={ this.toggleMode} />
          <LoadingBar
            color='#f11946'
            progress={ this.state.progress}
        
      />

          <Routes>
            <Route exact path='/' element={<News mode={this.state.mode} key='general' setProgress={this.setProgress} apiKey={ this.apiKey} country={'in'} category='general' />}></Route>
          <Route exact path='/business' element={<News key='business' apiKey={ this.apiKey}  mode={ this.state.mode}setProgress={this.setProgress}  pageSize={this.pageSize} country={'in'} category='business' />}></Route>
          <Route exact path='/entertainment' element={<News key='entertainment'   apiKey={ this.apiKey} mode={ this.state.mode}setProgress={this.setProgress} pageSize={this.pageSize} country={'in'} category='entertainment' />}></Route>
          <Route exact path='/health' element={<News key='health' pageSize={this.pageSize}   apiKey={ this.apiKey} mode={ this.state.mode} setProgress={this.setProgress} country={'in'} category='health' />}></Route>
          <Route exact path='/science' element={<News key='science' pageSize={this.pageSize} apiKey={ this.apiKey}  mode={ this.state.mode} setProgress={this.setProgress} country={'in'} category='science' />}></Route>
          <Route exact path='/sports' element={<News key='sports' pageSize={this.pageSize}  apiKey={ this.apiKey} mode={ this.state.mode} setProgress={this.setProgress}  country={'in'} category='sports' />}></Route>
          <Route exact path='/technology' element={<News key='technology' pageSize={this.pageSize}  apiKey={ this.apiKey}  mode={ this.state.mode} setProgress={this.setProgress} country={'in'} category='technology' />}></Route>




          </Routes>
        
        </Router>
      </div>
    )
  }
}
