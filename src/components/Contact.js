import React from 'react';
import './Contact.css';


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?inc=name,picture")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Remarque : il est important de traiter les erreurs ici
        // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
        // des exceptions provenant de réels bugs du composant.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement…</div>;
    } else {
      return (
        <div className="Contact" >
          <img className="avatar" src="https://randomuser.me/api/portraits/thumb/men/99.jpg" alt="user avatar"/>
          <div>
            <div className="name">xXx-JeanMichelPasContent-xXx</div>
            <div className="status">
              <div className="status-online"></div>
              <div className="status-text">Online</div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Contact;