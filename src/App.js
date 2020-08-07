import React from 'react';
import UserList from './components/UserList';
import UserAddForm from './components/UserAddForm';
import PostList from './components/PostList';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: '#e4e6e6',
      colorText: 'black',
      users: [],
      posts: [],
      //viewPage: false,
      lastUsers: []
    };
    this.space = 'users';
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        data = data.filter(user => user.id < 4);
        data.forEach(user => {
          user.isGoldClient = false;
        });
        this.setState({users: data});
        this.setState({lastUsers: data});
      })

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
      data = data.filter(post => post.id < 4);
      this.setState({posts: data});
      })
      .catch((Error) => {
        console.log(Error)
      });
  }

  onDeleteClick = (prop) => {
    var index = 0;
    this.state.lastUsers.forEach(user => {
      index++;
      if (user.name ===  prop) {
        this.state.lastUsers.splice(index-1, 1);
      }
    });
    this.setState({lastUsers : this.state.users})
 
  }
  

  changeColor(event) {
    this.setState({background: event.target.value});
  }

  changeTextColor(event) {
    this.setState({colorText: event.target.value});
  }

  changeView(event, par) {
    // switch(par) {
    //   case "users" :
    //     if(par === this.space ) {
    //       this.setState({ viewPage: false });
    //       this.space = null;
    //       this.setState({lastUsers : this.state.users})
    //     }
    //     else
    //       {console.log(this.space);
    //       this.setState({ viewPage: true});
    //       this.space = par;
    //       this.setState({lastUsers : this.state.users})
    //     }
    //     break;
    //   case "posts" :
    //     if(par === this.space ) {
    //       this.setState({ viewPage: false });
    //       this.space = null;
    //     }
    //     else
    //       {
    //       this.setState({ viewPage: true});
    //       this.space = par;
    //     }
    //       break;
    //   default :
    //       this.space = null;
    //       this.setState({ viewPage: false});
    //       break;
    // }
    this.setState({lastUsers : this.state.users});
    this.space = par;
  }
  
  getMaxId(users) {
    let maxId = 0;

    users.forEach(user => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });

    return maxId;
  }

  submitAddForm(event, name, email, salary, imag, isGoldClient) {
    event.preventDefault();
    this.setState(prevState => {
      return {
        users: [
          ...prevState.users,
          {
            id: this.getMaxId(prevState.users) + 1,
            name,
            email,
            salary,
            imag,
            isGoldClient
          }
        ]
      }
    });
  }

  render() {
    return(
      <div className="app" style={{background: this.state.background, color: this.state.colorText}}>
        <Navbar bg="dark" variant="dark" fixed="top" className="nav">
          <Navbar.Brand href="#home"><img src="assets/images/logo.png" alt="" width= '40px' height= '35px'/> Admin panel</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav>
              <input type="button" 
                onClick={(event) => this.changeView(event, "users")} 
                value="users" 
                className="bg-info"/> 
            </Nav>
            <input type="button" 
              onClick={(event) => this.changeView(event, "posts")}
              value="posts" 
              className="bg-info"/>
            <input type="color" 
              onChange={(event) => this.changeColor(event)}
              className="bg-info"/>
            <Nav>
              <input type="color" 
                onChange={(event) => this.changeTextColor(event)}
                className="bg-info"/>
            </Nav>
          </Nav>
        </Navbar>
        <div className="container">
          <div className="row">
            <UserAddForm submitAddForm={(event, name, email, salary, imag, isGoldClient) => this.submitAddForm(event, name, email, salary, imag, isGoldClient)}/>
          </div>
          <div className="row pl-3">
            { (this.space === 'users') ? <UserList users={this.state.lastUsers} parentFunction={this.onDeleteClick}/>
                :<PostList posts={this.state.posts}/>
                // : (this.space === 'posts') ? <PostList posts={this.state.posts}/>
                // : <UserList users={this.state.lastUsers} parentFunction={this.onDeleteClick}/>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
