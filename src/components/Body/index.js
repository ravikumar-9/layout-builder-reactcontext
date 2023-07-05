// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      console.log(showContent, showLeftNavbar, showRightNavbar)

      const isShowLeftNavbar = () => {
        if (showLeftNavbar === true) {
          return (
            <div className="left-navbar">
              <h1 className="left-navbar-menu">Left Navbar Menu</h1>
              <ul className="left-nav-items">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          )
        }
        return null
      }

      const isShowContent = () => {
        if (showContent === true) {
          return (
            <div className="content-container">
              <h1 className="content-heading">Content</h1>
              <p className="content">Lorem ipsum </p>
            </div>
          )
        }
        return null
      }

      const isShowRightNavbar = () => {
        if (showRightNavbar === true) {
          return (
            <div className="right-navbar">
              <h1 className="right-navbar-text">Right Navbar</h1>
              <p className="box">Ad 1</p>
              <p className="box">Ad 2</p>
            </div>
          )
        }
        return null
      }

      return (
        <div className="body-container">
          {isShowLeftNavbar(showLeftNavbar)}
          {isShowContent()}
          {isShowRightNavbar()}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
