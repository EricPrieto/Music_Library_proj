import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import TitleBar from './TitleBar/TitleBar';
import SongTable from './SongTable/SongTable';




class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            songs:[],


        }
    }

componentDidMount(){
    this.getMusic();
}

async getMusic(){
    let response = await axios.get("http://127.0.0.1:8000/music/");
    this.setState({
        songs:response.data
    });

}

  

render() {
    return (
        <div className="container-fluid">
            <TitleBar />
            <SongTable songs={this.state.songs} />

        </div>
        )
    }
}

export default App;