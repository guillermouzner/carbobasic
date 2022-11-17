import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'
import Translation from './Data.json'
import { DataContex } from '../../context/DataContext'

const Navbar = () => {
  const { idiom, setIdiom } = useContext(DataContex)

  const [Toggle, showMenu] = useState(false)

  // const [language, setLanguage] = useState(idiom);

  const [content, setContent] = useState({})

  useEffect(() => {
    if (idiom === 'English') {
      setContent(Translation.eng)
    } else if (idiom === 'Español') {
      setContent(Translation.esp)
    }
  }, [idiom])

  return (
    <>
      <div className='header'>
        <div>
          <nav className='nav container'>
            <Link to='/' className='nav__logo'>
              {content.Title}
            </Link>

            <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
              <ul className='nav__list grid'>
                <li className='nav__item'>
                  <NavLink end to='/' className='nav__link'>
                    <i className='uil uil-user nav__icon'></i> {content.home}
                  </NavLink>
                </li>
                <li className='nav__item'>
                  <NavLink to='/about' className='nav__link'>
                    <i className='uil uil-user nav__icon'></i> {content.about}
                  </NavLink>
                </li>

                <li className='nav__item'>
                  <NavLink to='/services' className='nav__link'>
                    <i className='uil uil-briefcase-alt nav__icon'></i>{' '}
                    {content.services}
                  </NavLink>
                </li>

                <li className='nav__item'>
                  <NavLink to='/projects' className='nav__link'>
                    <i className='uil uil-scenery nav__icon'></i>{' '}
                    {content.projects}
                  </NavLink>
                </li>

                <li className='nav__item'>
                  <NavLink to='/contact' className='nav__link'>
                    <i className='uil uil-message nav__icon'></i>{' '}
                    {content.contact}
                  </NavLink>
                </li>
                <li className='nav__item'>
                  <NavLink to='/blog' className='nav__link'>
                    <i className='uil uil-message nav__icon'></i> {content.blog}
                  </NavLink>
                </li>
              </ul>

              <i
                className='uil uil-times nav__close'
                onClick={() => showMenu(!Toggle)}
              ></i>
            </div>

            <div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
              <i className='uil uil-apps'></i>
            </div>
          </nav>
        </div>
        <div className={Toggle ? 'idioms show-menu' : 'idioms'}>
          <select
            value={idiom}
            onChange={(e) => {
              setIdiom(e.target.value)
            }}
          >
            <option>English</option>
            <option>Español</option>
          </select>
        </div>
      </div>
    </>
  )
}

export default Navbar
