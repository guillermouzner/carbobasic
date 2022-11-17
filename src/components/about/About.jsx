import React, { useEffect, useState, useContext } from 'react'
import { DataContex } from '../../context/DataContext'
import Translation from './Data.json'
import './about.css'

import OurMision from '../../assets/mission.jpg'
import OurVision from '../../assets/vission.jpg'
import OurValues from '../../assets/values.jpg'
import Milton from '../../assets/milton-me.webp'

const About = () => {
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
    <div className='container__about'>
      <div className='about'>
        <h1>About</h1>
        <span className='about__subtitle'>Carbobasic</span>
      </div>

      <div className='description__about'>
        <p>
          <span style={{ color: '#094e78' }}>
            {content.description__about.carbo}
          </span>
          <span style={{ color: '#5fb453' }}>
            {content.description__about.basic}
          </span>
          {content.description__about.p1}
        </p>
        <p>{content.description__about.p2}</p>
        <p>
          {content.description__about.p3.p1}
          <span style={{ color: '#094e78' }}>
            {content.description__about.p3.p2}
          </span>
          <span style={{ color: '#5fb453' }}>
            {content.description__about.p3.p3}
          </span>
          {content.description__about.p3.p4}
        </p>
        <p>
          {content.description__about.p4.p1}
          <span style={{ color: '#094e78' }}>
            {content.description__about.p4.p2}
          </span>
          <span style={{ color: '#5fb453' }}>
            {content.description__about.p4.p3}
          </span>
          {content.description__about.p4.p4}
        </p>
      </div>

      <div className='about__card'>
        <div className='card__mission'>
          <img src={OurMision} alt='mision' width='150px' />
          <p>
            <h1>{content.card__mission.our_mission.title}</h1>
            {content.card__mission.our_mission.mission.p1}
            <span style={{ color: '#094e78' }}>
              {content.card__mission.our_mission.mission.p2}
            </span>
            {content.card__mission.our_mission.mission.p3}
            <span style={{ color: '#5fb453' }}>
              {content.card__mission.our_mission.mission.p4}
            </span>
            {content.card__mission.our_mission.mission.p5}
          </p>
        </div>

        <div className='card__mission'>
          <p>
            <h1>{content.card__mission.our_vision.title}</h1>
            {content.card__mission.our_vision.vision.p1}
            <span style={{ color: '#094e78' }}>
              {content.card__mission.our_vision.vision.p2}
            </span>
            {content.card__mission.our_vision.vision.p3}
            <span style={{ color: '#5fb453' }}>
              {content.card__mission.our_vision.vision.p4}
            </span>
            {content.card__mission.our_vision.vision.p5}
            <span style={{ color: '#094e78' }}>
              {content.card__mission.our_vision.vision.p6}
            </span>
            <span style={{ color: '#5fb453' }}>
              {content.card__mission.our_vision.vision.p7}
            </span>
            {content.card__mission.our_vision.vision.p8}
            <span style={{ color: '#094e78' }}>
              {content.card__mission.our_vision.vision.p9}
            </span>
            {content.card__mission.our_vision.vision.p10}
          </p>
          <img src={OurVision} alt='mision' width='150px' />
        </div>

        <div className='card__mission'>
          <img src={OurValues} alt='mision' width='150px' />
          <p>
            <h1>{content.card__mission.our_values.title}</h1>
            <span style={{ color: '#094e78' }}>
              {content.card__mission.our_values.values.p1}
            </span>
            <span style={{ color: '#5fb453' }}>
              {content.card__mission.our_values.values.p2}
            </span>
            {content.card__mission.our_values.values.p3}
            <span style={{ color: '#5fb453' }}>
              {content.card__mission.our_values.values.p4}
            </span>
            {content.card__mission.our_values.values.p5}
            <span style={{ color: '#094e78' }}>
              {content.card__mission.our_values.values.p6}
            </span>
            {content.card__mission.our_values.values.p7}
            <span style={{ color: '#5fb453' }}>
              {content.card__mission.our_values.values.p8}
            </span>
            {content.card__mission.our_values.values.p9}
            <span style={{ color: '#094e78' }}>
              {content.card__mission.our_values.values.p10}
            </span>
            {content.card__mission.our_values.values.p11}
            <span style={{ color: '#5fb453' }}>
              {content.card__mission.our_values.values.p12}
            </span>
            {content.card__mission.our_values.values.p13}
            <span style={{ color: '#094e78' }}>
              {content.card__mission.our_values.values.p1}
            </span>
            <span style={{ color: '#5fb453' }}>
              {content.card__mission.our_values.values.p2}
            </span>
            {content.card__mission.our_values.values.p14}
            <span style={{ color: '#094e78' }}>
              {content.card__mission.our_values.values.p15}
            </span>
            {content.card__mission.our_values.values.p16}
          </p>
        </div>
      </div>

      <div className='about__me'>
        <h1>Meet Me</h1>
        <span className='about__subtitle'>Milton Avila</span>
      </div>

      <div className='about__card'>
        <div className='card__aboutMe'>
          <img src={Milton} alt='me' width='150px' />
          <p>
            <h1>{content.meet_me.whoiam.title}</h1>
            {content.meet_me.whoiam.content}
          </p>
        </div>

        <div className='description__about-me'>
          <h1>{content.meet_me.mywork.title}</h1>

          <p>{content.meet_me.mywork.content1}</p>

          <p>{content.meet_me.mywork.content2}</p>
          <p>
            {content.meet_me.mywork.content3.p1}
            <span style={{ color: '#094e78' }}>Carbo</span>
            <span style={{ color: '#5fb453' }}>basic</span>
            {content.meet_me.mywork.content3.p2}
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
