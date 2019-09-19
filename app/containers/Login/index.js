/**
 *
 * Login
 *
 */

import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { MDBRow, MDBCol } from 'mdbreact';
import OnSubmitButton from '../../components/Buttons/onSubmitButton';
import H2 from '../../components/H2';
import InputMdb from '../../components/InputTypes/TextInput';
import './style.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleLoginAndAuthorization = (e) => {
    e.preventDefault();
    let idList = JSON.parse(localStorage.getItem('idList'))

    if (idList) {
      if (!idList.includes(this.state.email)) {
        idList.push(this.state.email);
        localStorage.setItem('idList', JSON.stringify(idList))
        let watchList = []
        localStorage.setItem(this.state.email, JSON.stringify(watchList))

        let chatList = []
        localStorage.setItem(this.state.email, JSON.stringify(chatList))
      }
    }
    else {
      idList = JSON.stringify([this.state.email])
      localStorage.setItem('idList', idList)
      let watchList = []
      localStorage.setItem(this.state.email, JSON.stringify(watchList))

      let chatList = []
      localStorage.setItem(this.state.email, JSON.stringify(chatList))
    }
    localStorage.setItem('token', true)
    localStorage.setItem('currUser', this.state.email)
    this.props.history.push('/home')
  }

  handleChange = (e) => {
    const { target } = e;
    const { id, name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Login</title>
          <meta name="description" content="Description of Login" />
        </Helmet>
        <MDBRow className="login-container">
          <MDBCol >
            <div className='login-col1'>
              <div className='login-col1-div1'><h2>Welcome you <br/> Start Chating </h2></div>
            </div>
          </MDBCol>
          <MDBCol className='login-col2' >
            <form onSubmit={this.handleLoginAndAuthorization}>
              <div>
                <h3 className="h2 text-center mt-1"> Login </h3>
              </div>
              <div>
                <H2>Email Id </H2>
                <InputMdb
                  type="email"
                  name="email"
                  id='email'
                  value={this.state.email}
                  autoFocus
                  placeholder='enter your email id'
                  minLength={3}
                  handleChange={this.handleChange}
                  required
                />
              </div>
              <br />
              <div >
                <H2>Password </H2>
                <InputMdb
                  type="password"
                  name="password"
                  id='password'
                  value={this.state.password}
                  placeholder='Enter your password'
                  minLength={8}
                  handleChange={this.handleChange}
                  required
                  maxLength={20}
                />
              </div>
              <div className="text-center mt-4">
                <OnSubmitButton
                  type='submit'
                  name="Log in"
                  icon="location-arrow"
                  className='ButtonStyleWithBlue'
                />
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </Fragment>
    );
  }
}

export default Login;

