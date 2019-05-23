import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if (this.props.data) {
      var name = this.props.data.name;

      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

        <div className="row section-head" style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>

          <div className="ten columns" style={{ display: "flex", alignItems: "center", flexDirection: "column" }} >

            <p className="lead">{message}</p>
            <a href="https://api.whatsapp.com/send?phone=573166226698&text=Hello,%20I%20saw%20your%20CV%20webpage%20and%20I%20want%20to%20talk%20with%20you">
              <button>LET'S CHAT</button>
            </a>
          </div>

        </div>


      </section >
    );
  }
}

export default Contact;
