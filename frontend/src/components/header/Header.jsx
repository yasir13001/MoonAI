import React, { useEffect, useState } from 'react';
import logo from '/MoonAI-logo.png';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";


import './Header.css';

const Header = () => {

  const [ toolsBlockActive, setToolsBlockActive ] = useState(false);
  const [ burgerMenuActive, setBurgerMenuActive ] = useState(false);
  
  const toggleMoonAITools = (state, setState) => {
    setState(!state);   
  }
  
  const navRoutes = [
    'Moon AI Tools ⬇',
    <AnchorLink href="#contributors">Contributors</AnchorLink>,
    <AnchorLink href="#contact">Contacts</AnchorLink>,
  ];
  const toolsArray = [
    { tool: 'Moon Report Generator', url: 'moon_report_generator'},
    { tool: 'Moon Data API', url: 'moon_data_api'},
    { tool: 'Shopping Assistant', url: 'shopping_assistant'},
    { tool: 'Another One Assistant', url: 'another_one_assistant'},
  ]
  const burgerMenuItems = [
    ...toolsArray,
    {label: <AnchorLink href="#contributors">Contributors</AnchorLink>},
    {label: <AnchorLink href="#contact">Contacts</AnchorLink>}
  ]

  useEffect(() => {
    // removing by the buttons but when change rez needed
    if(toolsBlockActive === true) setBurgerMenuActive(false);
    if(burgerMenuActive === true) setToolsBlockActive(false);
  }, [toolsBlockActive, burgerMenuActive]);
  
  return (
    <section className='header-section'>

      <nav>
        <img className='logo' src={logo} alt='Moon AI organization logo' width={80}/>

        <button className="burger-button" onClick={() => toggleMoonAITools(burgerMenuActive, setBurgerMenuActive)}>
          <motion.span
              className="burger-line"
              initial={{ rotate: 0, y: 0 }}
              animate={{ rotate: burgerMenuActive ? 45 : 0, y: burgerMenuActive ? 9.2 : 0  }}
          ></motion.span>
          <motion.span
              className="burger-line"
              initial={{ opacity: 1 }}
              animate={{ opacity: burgerMenuActive ? 0 : 1 }}
          ></motion.span>
          <motion.span
              className="burger-line"
              initial={{ rotate: 0, y: 0 }}
              animate={{ rotate: burgerMenuActive ? -45 : 0, y: burgerMenuActive ? -9.2 : 0  }}
          ></motion.span>
        </button>

        <div className='nav-routes'>
          {navRoutes.map((route, index) => (
            route === 'Moon AI Tools ⬇'
              ? <span key={index} onClick={() => toggleMoonAITools(toolsBlockActive, setToolsBlockActive)}>
                  {route}
                </span> 
              : <span key={index}>{route}</span>
            ))}
        </div>
      </nav>
      
      <div className={`nav-moon-ai-tools ${burgerMenuActive ? 'active' : ''}`}>
        {burgerMenuItems.map((tool, index) => 
          Object.hasOwn(tool, 'tool')
          ? ( <span className='tools' key={index}>
              <Link to={tool.url}>
                {tool.tool}
              </Link>
            </span> )
          : (<span className='tools' key={index}>
              {tool.label}
            </span>)
          )}
      </div>

      <div className={`nav-moon-ai-tools ${toolsBlockActive ? 'active' : ''}`}>
        {toolsArray.map((tool, index) => (
          <span className='tools' key={index}>
            <Link to={tool.url}>
              {tool.tool}
            </Link>
          </span>
        ))}
      </div>

      <header className="header">
        <h1 className="header-title">
          Moon AI
        </h1>
        <p className="header-subtitle">
          An open-source organization dedicated to developing AI tools for lunar astronomical calculations.
        </p>
      </header>
    </section>
  );
};

export default Header;
