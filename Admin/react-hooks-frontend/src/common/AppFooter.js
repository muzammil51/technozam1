import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';

class AppFooter extends Component {
  render() {
    return (
      <footer id="footer" class="footer" style={{backgroundColor:"white"}}>
        <div class="copyright">
          &copy; <strong><span>Q-Tech</span></strong> All Rights Reserved
        </div>
        <div class="credits">
          Designed by Q-Tech team.
        </div>
      </footer>
    )
  }
}

export default AppFooter;