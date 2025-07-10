import React, { Fragment, useEffect, useRef, useState } from 'react';
import logo from '/MoonAI-logo.png';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import projectCards from '../../shared/ui/cards';

// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";


import './Header.css';

const Header = () => {

  const [ burgerMenuActive, setBurgerMenuActive ] = useState(false);
  const toggleBurgerMenu = () => setBurgerMenuActive(!burgerMenuActive);

  const burgerButtonRef = useRef(null);
  const burgerMenuRef = useRef(null);
  

  useEffect(() => {

    const handleClickOutside = (e) => {
      if(!burgerMenuActive) return;
      if(
        burgerMenuRef.current && 
        burgerButtonRef.current &&
        !burgerMenuRef.current.contains(e.target) && 
        !burgerButtonRef.current.contains(e.target)) 
      setBurgerMenuActive(false);
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [burgerMenuActive]);

  
  const navRoutes = [
    {label: <AnchorLink offset={80} href='#Our Projects' onClick={() => { setBurgerMenuActive(false) }}>Our Projects</AnchorLink>},
    {label: <AnchorLink offset={80} href="#contributors" onClick={() => { setBurgerMenuActive(false) }}>Contributors</AnchorLink>},
    {label: <AnchorLink offset={80} href="#contact" onClick={() => { setBurgerMenuActive(false) }}>Contacts</AnchorLink>},
  ];
  
  return (
    <section className='header-section'>

      <nav>
        <AnchorLink href='#header'>
          <img className='logo' src={logo} alt='Moon AI organization logo' width={80}/>
        </AnchorLink>

        <button ref={burgerButtonRef} 
          className="burger-button" 
          onClick={toggleBurgerMenu} >
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
          {navRoutes.map((route, index) =>
          Object.hasOwn(route, 'url')
          ? ( <span key={index}>
              <Link to={route.url}>
                {route.label}
              </Link>
            </span> )
          : (<span key={index}>
              {route.label}
            </span>)
          )}
        </div>
      </nav>

      <div ref={burgerMenuRef} className={`burger-menu ${burgerMenuActive ? 'active' : ''}`}>
        {navRoutes.map((route, index) =>
        Object.hasOwn(route, 'url')
        ? ( <span className={burgerMenuActive ? 'burger-menu-item' : ''} key={index}>
            <Link to={route.url}>
              {route.label}
            </Link>
          </span> )
        : (<span className={burgerMenuActive ? 'burger-menu-item' : ''} key={index}>
            {route.label}
          </span>)
        )}
      </div>

      <header id='header' className="header">

        <h1 className="header-title">
          Moon AI
        </h1>

        <p className="header-subtitle">
          An open-source organization dedicated to developing AI tools for lunar astronomical calculations.
        </p>

        <h2 id='Our Projects' offset={80} class="text-3xl mt-12 font-extrabold text-white sm:text-4xl">Our Projects</h2>
        <div className='our-projects-info-wrapper'>

          <div className='our-projects-info-inner'>
            {projectCards.map((cardObject, index) => (
              <div key={index} className="card">
                <img className='card-img' src={cardObject.img} alt='MoonAI project image'/>
                <h3 className='card-h3'>{cardObject.title}</h3>
              </div>
            ))}
          </div>

          <Link to={'/moon_ai_tools'}>
            <button class="mt-8 py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white ">
              View all Projects
            </button>
          </Link>
        </div>
        
      </header>
    </section>
  );
};

export default Header;
