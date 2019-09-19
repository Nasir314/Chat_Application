/**
 *
 * ChatWindow
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { MDBRow, MDBCol } from 'mdbreact';
import { Scrollbars } from 'react-custom-scrollbars';
import DateFormat from 'dateformat';
import girl from '../../images/g.jpg';
import nasirImg from '../../images/nasir.png';
import Header from '../Header/Loadable';
import './style.css'
let chatList = [];

class ChatWindow extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      userChat: '',
      chatList: JSON.parse(localStorage.getItem(localStorage.getItem('currUser'))),
      tempAuthToken: true,
      bottom: 0,
      isConnected: false
    };
    this.socket = null
  }

  componentDidMount() {
    this.socket = new WebSocket("wss://echo.websocket.org");
    this.socket.onopen = (e) => {
      this.setState({
        isConnected: true
      })
    };

    this.socket.onmessage = (event) => {
      let data = {
        'socketID': this.socket.id,
        'id': 'ISUSER',
        'msg': event.data,
        // 'time': DateFormat(new Date(new Date()), "yyyy-mm-dd h:MM:ss TT").slice(10, 15) + DateFormat(new Date(new Date()), "yyyy-mm-dd h:MM:ss TT").slice(18, 22)
        'time': new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
      }

      this.setState({ chatList: [...this.state.chatList, data] });
      // this.customRef.scrollTop=this.customRef.scrollHeight;
    };

    this.socket.onclose = (event) => {
      if (event.wasClean) {
        console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
      }
      else {
        console.log('[close] Connection died');
      }
    };

    this.socket.onerror = (error) => {
      console.log(`[error] ${error.message}`);
    };
  }

  handleChatList = ev => {
    if (this.state.isConnected) {
      if (this.state.userChat.length !== 0) {
        ev.preventDefault();
        let data = {
          'socketID': this.socket.id,
          'id': 'ISOWNER',
          'msg': this.state.userChat,
          // 'time': DateFormat(new Date(new Date()), "yyyy-mm-dd h:MM:ss TT").slice(10, 15) + DateFormat(new Date(new Date()), "yyyy-mm-dd h:MM:ss TT").slice(18, 22)
          'time': new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
        }

        this.socket.send(this.state.userChat);
        this.setState({ userChat: '' });
        this.setState({ chatList: [...this.state.chatList, data] });
        // this.customRef.scrollTop=this.customRef.scrollHeight;
      }
    }
    else {

    }
  }

  componentDidUpdate = () => {
    this.customRef.scrollTop = this.customRef.scrollHeight;
  }

  handleScrollFrame = (values) => {
    const { bottom } = values;
    this.setState({ bottom });
  }

  handleStartChat = (e) => {
    e.preventDefault();
    this.setState({ tempAuthToken: true })
  }

  handleChange = (e) => {
    var k = e.target.name;
    this.setState({ [k]: e.target.value });
  };

  render() {
    let custom_col = 10;
    return (
      <div style={{ border: '1px solid transparent' }}>
        <Header liveChat={this.state.chatList} />
        <Helmet>
          <title>ChatWindow</title>
          <meta name="description" content="Description of ChatWindow" />
        </Helmet>
        <br />

        <div className='chat-window'>
          <div id='chatId' className='chat-window-2' ref={c => { this.customRef = c }} >
            <div className='connection-message'>
              {this.state.isConnected ?
                'Connected, start chating'
                :
                'Trying to connect you...'
              }
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ border: 'none', wordBreak: 'break-word' }} className='userMainDiv'>
                <div>
                  <img src={girl} style={{ height: '40px', width: '40px', margin: '5px', borderRadius: '100%' }} />
                </div>
                <div id='user' style={{ border: 'none' }} className='userdiv'>
                  Welcome You.
                    <div className='userTime'>
                    {DateFormat(new Date(new Date()), "yyyy-mm-dd h:MM:ss TT").slice(10, 15) + DateFormat(new Date(new Date()), "yyyy-mm-dd h:MM:ss TT").slice(18, 22)}
                  </div>
                </div>
              </div>
            </div>

            {this.state.chatList.map((chatdata, i) =>
              chatdata.id === 'ISUSER' ?
                <div key={i} style={{ textAlign: 'left' }}>
                  <div style={{ border: 'none', wordBreak: 'break-word' }} className='userMainDiv'>
                    <div>
                      <img src={girl} style={{ height: '40px', width: '40px', margin: '5px', borderRadius: '100%' }} />
                    </div>
                    <div id='user' style={{ border: 'none' }} className='userdiv'>
                      {chatdata.msg}
                      <div className='userTime'>
                        {chatdata.time}
                      </div>
                    </div>
                  </div>
                </div>
                :
                <div key={i} style={{ textAlign: 'right' }}>
                  <div style={{ border: 'none', wordBreak: 'break-word' }} className='ownerMainDiv'>
                    <div id='owner' style={{ border: 'none' }} className='ownerdiv'>
                      {chatdata.msg}
                      <div className='ownerTime'>
                        {chatdata.time}
                      </div>
                    </div>
                    <div>
                      <img src={nasirImg} style={{ height: '40px', width: '40px', margin: '5px', borderRadius: '100%' }} />
                    </div>
                  </div>
                </div>
            )
            }
          </div>

          <form onSubmit={this.handleChatList}>
            <MDBRow className='input-button'>
              <MDBCol xs={custom_col} sm={custom_col} md={custom_col} lg={custom_col} style={{ border: 'none' }}>
                <input className='input1' type='text' name='userChat' placeholder='Type a message' value={this.state.userChat}
                  autoFocus={true} onChange={this.handleChange}
                  disabled = {!this.state.isConnected}
                />
              </MDBCol>
              <br />
              <MDBCol>
                <button type='submit' className={this.state.userChat.length !== 0 ? 'sendChatIcon' : 'sendChatIcon1'} disabled={this.state.userChat.length !== 0 ? false : true}>
                  {/* <i className='fa fa-send'> </i>  */}
                  <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
                    <path fill="#FFF" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
                  </svg>
                </button>
              </MDBCol>
            </MDBRow>
            <br />
          </form>
        </div>
      </div>
    );
  }
}
export default ChatWindow;
