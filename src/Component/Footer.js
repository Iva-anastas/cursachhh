import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <div className='main-footer bg-dark footer mt-auto py-3 bg-light'>
        <div className='text-center'>
          <p className='col-sm'>
            &copy;{new Date().getFullYear()} IVANINA | All right reserved
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
