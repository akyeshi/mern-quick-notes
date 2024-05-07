
// <SignUpForm> component as class component (rather functional component)
import { Component } from 'react';
import { signUp } from '../../utilities/users-services';
/*
Unlike with a function component that can define multiple pieces of state by 
using the useState hook multiple times, a class component’s state is always 
a single object assigned to a state property on the instance of the component.
*/

export default class SignUpForm extends Component {

  // how to initialize class component state 

  /* method 1: constructor method 
  constructor() {
    super(); 
    this.state = {
      name: '', 
      email: '', 
      password: '', 
      confirm: '', 
      error: ''
    }; 
  } */

  // method 2: class fields approach to define a public instance field (cool kids)
  // internally, the class field syntax is converted into the constructor method approach 
  // class component's state object adding properties/attributes 
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleSubmit = async (evt) => {
    evt.preventDefault(); // prevent form from being submitted to the server 
    // alert(JSON.stringify(this.state));
    try {
      /* method 1: create required formData 
      const formData = {
        name: this.state.name, 
        email: this.state.email, 
        password: this.state.password
      }; */

      /* method 2: create required formData 
      const formData = {...this.state }; 
      delete formData.error; 
      delete formData.confirm; */

      // method 3: create required formData (modern syntax)
      const { name, email, password } = this.state;
      const formData = { name, email, password };
      const user = await signUp(formData); // users-services signUp() returns a jwt token
      console.log('user logged out from handleSubmit: ', user);
      // {"name":"jim","email":"kim@gmail.com","_id":"6636b594744ff86699d8c869","createdAt":"2024-05-04T22:24:20.694Z","updatedAt":"2024-05-04T22:24:20.694Z","__v":0}
      this.props.setUser(user); // how to access prop in class component 

    } catch {
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }

  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });

  }

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            <label>Email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <label>Confirm</label>
            <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            <button type="submit" disabled={disable}>SIGN UP</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    )
  }
}