import "./App.css";
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstName:'',
      lastName : '',
      email : '',
      phone : '',
      message : '',
      sent: false

    }
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
  }
  handleFirstName = (e) => {
    this.setState({
      firstName: e.target.value
    })
  }

  handleLastName = (e) => {
    this.setState({
      lastName: e.target.value
    })
  }

  handleEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handlePhone = (e) => {
    this.setState({
      phone: e.target.value
    })
  }

  handleMessage = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      firstName : this.state.firstName,
      lastName : this.state.lastName,
      email : this.state.email,
      phone : this.state.phone,
      message : this.state.message
    }
    axios.post('/api/forma', data)
    .then(res => {
      this.setState({
        sent: true
      }, this.resetForm())
    }).catch(()=>{
      console.log('message not sent')
    })
  }

  resetForm = () => {
    this.setState({
      firstName: '',
      lastName:'',
      email:'',
      phone:'',
      message:'',
    })
    setTimeout(() => {
      this.setState({
        sent: false
      })
    }, 3000)
  }




  render(){
    return (
      <section>
        <div class="container">
          <div class="contactinfo">
            <div>
              <h2>Contact Info</h2>
              <div>
              <ul class="info">
                <li>
                  <span>
                    <img src="location.png" alt='location' width="100" height="50" />
                  </span>
                  <span>
                    835 Pump House Ln
                    <br />
                    West Chester, PA
                    <br />
                    19382
                  </span>
                </li>
                <li>
                  <span>
                    <img src="mail.png" alt='mail' width="100" height="50"></img>{" "}
                  </span>
                  <span>gsrana480@gmail.com</span>
                </li>
                <li>
                  <span>
                    <img src="call.png" alt='call' height="40" width="100" />
                  </span>
                  <span>407-450-9757</span>
                </li>
              </ul>
              </div>
              <ul class="sci">
                <li>
                  <a href='https://www.facebook.com/profile.php?id=100010821227821'> 
                  <img src="facebook.png" alt='facebook' width="30" height="30" />
                  </a>
                </li>
                <li>
                  <a href='https://twitter.com/gsrana480'> 
                  <img src="twitter.png" alt='twitter' width="30" height="30" />
                  </a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/gsrana1/'> 
                  <img src="linkedin.png" alt='linkedin' width="30" height="30" />
                  </a>
                </li>
                <li>
                  <a href='https://github.com/gsrana92'> 
                  <img src="github.png" alt='github' width="30" height="30" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <form onSubmit = {this.handleSubmit}>
          <div class="contactForm">
            <h2>Send a message</h2>
            <div class="formBox">
              <div class="inputBox w50">
                <input type="text" name="" value={this.state.firstName} onChange={this.handleFirstName} required />
                <span>First Name</span>
              </div>
              <div class="inputBox w50">
                <input type="text" name="" value={this.state.lastName} onChange={this.handleLastName} required />
                <span>Last Name</span>
              </div>
              <div class="inputBox w50">
                <input type="text" name="" value={this.state.email} onChange={this.handleEmail} required />
                <span>Email</span>
              </div>
              <div class="inputBox w50">
                <input type="text" name="" value={this.state.phone} onChange={this.handlePhone} required />
                <span>Mobile Number</span>
              </div>
              <div class="inputBox w50">
                <textarea name="" value={this.state.message} onChange={this.handleMessage} required></textarea>
                <span>Write your message here...</span>
              </div>
              <div class="inputBox w100">
                <input type="submit" value="Send" />
              </div>
              <div className = {this.state.sent ? 'msg msgAppear':'msg'}>Message has been sent</div>

            </div>
          </div>
          </form>
        </div>
      </section>
    );

  }

}

export default App;
