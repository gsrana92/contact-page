import logo from "./logo.svg";
import "./App.css";
import emailjs from "emailjs-com";

function App() {
  return (
    <div class="row no-gutters">
    <div class="contact100-more flex-col-c-m" style={{}}>
    <div class="flex-w size1 p-b-47">
      <div class="txt1 p-r-25">
        <span class="lnr lnr-map-marker"></span>
      </div>

      <div class="flex-col size2">
        <span class="txt1 p-b-20">Address</span>
        <span class="txt2">West Chester , PA 19382 US</span>
      </div>
    </div>

    <div class="dis-flex size1 p-b-47">
      <div class="txt1 p-r-25">
        <span class="lnr lnr-phone-handset"></span>
      </div>

      <div class="flex-col size2">
        <span class="txt1 p-b-20">Lets Talk</span>
        <span class="txt3">+1 407 4509757</span>
      </div>
    </div>

    <div class="dis-flex size1 p-b-47">
      <div class="txt1 p-b-20">
        <span class="lnr lnr-envelope"></span>
      </div>
      <div class="flex-col size2">
        <span class="txt1 p-b-20">Contact</span>
        <span class="txt3">gsrana480@gmail.com</span>
      </div>
    </div>
  </div>
  
      <div class=" row no-gutters container-contact100">
        <div class=" col-md-6 no-gutters wrap-contact100">
          <form class="contact100-form">
            <span class="contact100-form-title">Send Me A Message</span>
            <label class="label-input100" for="first-name">
              Tell me your name *
            </label>
            <div class="wrap-input100 rs1-wrap-input100 validate-input">
              <input
                id="first-name"
                class="input100"
                type="text"
                name="first-name"
                placeholder="First name"
              />
              <span class="focus-input100"></span>
            </div>

            <div class="wrap-input100 rs2-wrap-input100 validate-input">
              <input
                class="input100"
                type="text"
                name="last-name"
                placeholder="Last name"
              />
              <span class="focus-input100"></span>
            </div>

            <label class="label-input100" for="email">
              Enter your email *
            </label>
            <div class="wrap-input100 validate-input">
              <input
                id="email"
                class="input100"
                type="email"
                name="email"
                placeholder="Eg. example@gmail.com"
              />
              <span class="focus-input100"></span>
            </div>

            <label class="label-input100" for="phone">
              Enter phone number *
            </label>
            <div class="wrap-input100">
              <input
                id="phone"
                class="input100"
                type="text"
                name="phone"
                placeholder="Eg. +1 800 000000"
              />
              <span class="focus-input100"></span>
            </div>

            <label class="label-input100" for="message">
              Message *
            </label>
            <div class="wrap-input100 validate-input">
              <textarea
                id="message"
                class="input100 message-textbox"
                name="message"
                placeholder="Write me a message"></textarea>
              <span class="focus-input100"></span>
            </div>

            <div class="container-contact100-form-btn">
              <button class="contact100-form-btn">Send Message</button>
            </div>
          </form>


        </div>
      </div>
    </div>
  );
}

export default App;
