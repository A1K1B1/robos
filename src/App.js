import React,{Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll'
// import { Robots }from './Robots';
import './App.css'


class App extends Component{
    constructor(){
        super()
        this.state={
            Robots:[],
            searchfield:''
        }
    
    }
     componentDidMount(){
         fetch('https://jsonplaceholder.typicode.com/users')
         .then(response=>response.json())
         .then(users=>this.setState({Robots:users}))
         }

 
          onSearchChange=(event)=>{
              this.setState({searchfield:event.target.value})
              

                
          }

    render()
    {
        const{ Robots,searchfield}=this.state;
        const Fr=Robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
          })
          return !Robots.length?
               <h1>Loading....</h1>:
        (

        <div className='tc'>      
            <h1 className='f1'>ROBOFRIENDS</h1> 
            <SearchBox searchchange={this.onSearchChange} />
            <Scroll>
             <CardList  Robots={Fr}/>
             </Scroll>
             </div>

    );}
    }

export default App;