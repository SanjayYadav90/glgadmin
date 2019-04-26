import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/static/images/logo.png'

class LeftMenu extends Component {
  render(){
    return(
      <div className="sidebar">
          <div className="sidebar-inner">
            {/* ### $Sidebar Header ### */}
            <div className="sidebar-logo">
              <div className="peers ai-c fxw-nw">
                <div className="peer peer-greed">
                  <Link className="sidebar-link td-n" to="/">
                    <div className="peers ai-c fxw-nw">
                      <div className="peer">
                        <div className="logo">
                          <img src={logo} alt />
                        </div>
                      </div>
                      <div className="peer peer-greed">
                        <h5 className="lh-1 mB-0 logo-text">Adminator</h5>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="peer">
                    <div className="mobile-toggle sidebar-toggle">
                        <a href className="td-n">
                          <i className="ti-arrow-circle-left" />
                        </a>
                    </div>
                </div>
              </div>
            </div>
            {/* ### $Sidebar Menu ### */}
            <ul className="sidebar-menu scrollable pos-r">
              <li className="nav-item mT-30 active">
                <Link className="sidebar-link" to="/">
                  <span className="icon-holder">
                    <i className="c-blue-500 ti-home" />
                  </span>
                  <span className="title">Dashboard</span>
                </Link>
              </li>
              <li className="nav-item">
                <a className="sidebar-link" href="email.html">
                  <span className="icon-holder">
                    <i className="c-brown-500 ti-email" />
                  </span>
                  <span className="title">Email</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="sidebar-link" href="compose.html">
                  <span className="icon-holder">
                    <i className="c-blue-500 ti-share" />
                  </span>
                  <span className="title">Compose</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="sidebar-link" href="calendar.html">
                  <span className="icon-holder">
                    <i className="c-deep-orange-500 ti-calendar" />
                  </span>
                  <span className="title">Calendar</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="sidebar-link" href="chat.html">
                  <span className="icon-holder">
                    <i className="c-deep-purple-500 ti-comment-alt" />
                  </span>
                  <span className="title">Chat</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="sidebar-link" href="charts.html">
                  <span className="icon-holder">
                    <i className="c-indigo-500 ti-bar-chart" />
                  </span>
                  <span className="title">Charts</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="sidebar-link" href="forms.html">
                  <span className="icon-holder">
                    <i className="c-light-blue-500 ti-pencil" />
                  </span>
                  <span className="title">Forms</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="sidebar-link" href="ui.html">
                  <span className="icon-holder">
                    <i className="c-pink-500 ti-palette" />
                  </span>
                  <span className="title">UI Elements</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="dropdown-toggle" href="javascript:void(0);">
                  <span className="icon-holder">
                    <i className="c-orange-500 ti-layout-list-thumb" />
                  </span>
                  <span className="title">Tables</span>
                  <span className="arrow">
                    <i className="ti-angle-right" />
                  </span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="sidebar-link" href="basic-table.html">Basic Table</a>
                  </li>
                  <li>
                    <a className="sidebar-link" href="datatable.html">Data Table</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="dropdown-toggle" href="javascript:void(0);">
                  <span className="icon-holder">
                    <i className="c-purple-500 ti-map" />
                  </span>
                  <span className="title">Maps</span>
                  <span className="arrow">
                    <i className="ti-angle-right" />
                  </span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="google-maps.html">Google Map</a>
                  </li>
                  <li>
                    <a href="vector-maps.html">Vector Map</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="dropdown-toggle" href="javascript:void(0);">
                  <span className="icon-holder">
                    <i className="c-red-500 ti-files" />
                  </span>
                  <span className="title">Pages</span>
                  <span className="arrow">
                    <i className="ti-angle-right" />
                  </span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="sidebar-link" href="blank.html">Blank</a>
                  </li>                 
                  <li>
                    <a className="sidebar-link" href="404.html">404</a>
                  </li>
                  <li>
                    <a className="sidebar-link" href="500.html">500</a>
                  </li>
                  <li>
                    <a className="sidebar-link" href="signin.html">Sign In</a>
                  </li>
                  <li>
                    <a className="sidebar-link" href="signup.html">Sign Up</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="dropdown-toggle" href="javascript:void(0);">
                <span className="icon-holder">
                    <i className="c-teal-500 ti-view-list-alt" />
                </span>
                <span className="title">Multiple Levels</span>
                <span className="arrow">
                    <i className="ti-angle-right" />
                </span>
                </a>
                <ul className="dropdown-menu">
                  <li className="nav-item dropdown">
                    <a href="javascript:void(0);">
                      <span>Menu Item</span>
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a href="javascript:void(0);">
                      <span>Menu Item</span>
                      <span className="arrow">
                        <i className="ti-angle-right" />
                      </span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="javascript:void(0);">Menu Item</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Menu Item</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
      </div>
    );
  }
}

export default LeftMenu;