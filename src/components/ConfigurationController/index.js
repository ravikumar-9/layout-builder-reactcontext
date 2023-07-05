// Write your code here
import ConfigurationContent from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContent.Consumer>
    {value => {
      const {
        showLeftNavbar,
        showRightNavbar,
        showContent,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      console.log(showLeftNavbar, showRightNavbar, showContent)

      const onChangeShowContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftContent = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeRightContent = () => {
        onToggleShowRightNavbar()
      }

      return (
        <nav className="Controller-section">
          <h1 className="layout-heading">Layout</h1>
          <ul className="checkboxes-container">
            <li className="checkbox-container">
              <input
                type="checkbox"
                id="content"
                checked={showContent}
                className="inputs"
                onChange={onChangeShowContent}
              />
              <label htmlFor="content" value="content" className="labels">
                Content
              </label>
            </li>
            <li className="checkbox-container">
              <input
                type="checkbox"
                id="leftNavbar"
                checked={showLeftNavbar}
                className="inputs"
                onChange={onChangeLeftContent}
              />
              <label htmlFor="leftNavbar" value="leftNavbar" className="labels">
                Left Navbar
              </label>
            </li>
            <li className="checkbox-container">
              <input
                type="checkbox"
                id="rightNavbar"
                checked={showRightNavbar}
                className="inputs"
                onChange={onChangeRightContent}
              />
              <label
                htmlFor="rightNavbar"
                value="rightNavbar"
                className="labels"
              >
                Right Navbar
              </label>
            </li>
          </ul>
        </nav>
      )
    }}
  </ConfigurationContent.Consumer>
)

export default ConfigurationController
