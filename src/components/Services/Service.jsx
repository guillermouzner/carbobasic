import React, { useEffect, useState, useContext } from 'react'
import { DataContex } from '../../context/DataContext'
import Translation from './Data.json'
import './service.css'
import Cyrogenic from '../../assets/service-cyrogenic.png'
import Petrochemical from '../../assets/service-petrochemical.png'
import OilGas from '../../assets/service-oil&gas.png'

const Service = () => {
  const { idiom } = useContext(DataContex)

  const [content, setContent] = useState(Translation.eng)

  useEffect(() => {
    if (idiom === 'English') {
      setContent(Translation.eng)
    } else if (idiom === 'Español') {
      setContent(Translation.esp)
    }
  }, [idiom])
  return (
    <div className='container__service'>
      <div className='service'>
        <h1>{content.services}</h1>
      </div>

      <div className='description__service'>
        <p>
          <span style={{ color: '#094e78' }}>Carbo</span>
          <span style={{ color: '#5fb453' }}>basic</span>
          {content.description__service.content1}
        </p>
        <p>
          {content.description__service.content2}
          <span style={{ color: '#094e78' }}>Carbo</span>
          <span style={{ color: '#5fb453' }}>basic</span>
          {content.description__service.content3}
        </p>
        <p>
          <span style={{ color: '#094e78' }}>Carbo</span>
          <span style={{ color: '#5fb453' }}>basic</span>
          {content.description__service.content4}
        </p>
        <p>{content.description__service.content5}</p>
      </div>

      <div className='service__card'>
        <div className='card__service'>
          <img src={Cyrogenic} alt='Cyrogenic' />
          <div>
            <h1>{content.cyrogenic.title}</h1>
            <p>{content.cyrogenic.content}</p>
          </div>
        </div>
        <div className='card__service'>
          <img src={Petrochemical} alt='Petrochemical' />
          <div>
            <h1>{content.petrochemical.title}</h1>
            <p>{content.petrochemical.content}</p>
          </div>
        </div>
        <div className='card__service'>
          <img src={OilGas} alt='OilGas' />
          <div>
            <h1>{content.oilgas.title}</h1>
            <p>{content.oilgas.content}</p>
          </div>
        </div>
        <div className='card__service'>
          <img src={OilGas} alt='Nuclear' />
          <div>
            <h1>{content.nuclear.title}</h1>
            <p>{content.nuclear.content}</p>
          </div>
        </div>
        <div className='card__service'>
          <img src={OilGas} alt='Hydrogen' />
          <div>
            <h1>{content.hydrogen.title}</h1>
            <p>{content.hydrogen.content}</p>
          </div>
        </div>
        <div className='card__service'>
          <img src={OilGas} alt='Energy from Waste' />
          <div>
            <h1>{content.energy.title}</h1>
            <p>{content.energy.content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
