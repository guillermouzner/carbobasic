import React, { useEffect, useState, useContext } from 'react'
import './home.css'
import milton from '../../assets/Milton.png'
import Translation from './Data.json'
import { DataContex } from '../../context/DataContext'

const Home = () => {
  const { idiom } = useContext(DataContex)

  const [content, setContent] = useState({})

  useEffect(() => {
    if (idiom === 'English') {
      setContent(Translation.eng)
    } else if (idiom === 'Español') {
      setContent(Translation.esp)
    }
  }, [idiom])

  return (
    <div className='container__home'>
      <div className='container__img'>
        <img src={milton} alt='home' />
        <div className='container__p'>
          <p>
            {content.title} <span>{content.title_span}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
