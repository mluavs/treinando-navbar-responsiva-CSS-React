import { Component } from "react";
import "./navbar.styles.css"
import Imagem from '../assets/logozin.png'

class Navbar extends Component {
   state = { clicked: false }; 
   handleClick = () => {
    this.setState({clicked: !this.state.clicked})
   }
    
   
   render(){
        return(
            <>
            <nav id="navContainer">
                <a href='index.html'>
                    <img src={Imagem} />
                </a>
                <div>
                    <ul id="navLista" className={this.state.clicked ? "#navLista active" : "#navLista" }>
                        <li><a className="active" href="index.html">Home</a></li>
                        <li><a href="index.html">Shop</a></li>
                        <li><a href="index.html">Blog</a></li>
                        <li><a href="index.html">About</a></li>
                        <li><a href="index.html">Contact</a></li>
                    </ul>
                </div>
                <div id="mobile" onClick={this.handleClick}>
                    <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </nav>
            </>
        )
    }
    }
    

export default Navbar