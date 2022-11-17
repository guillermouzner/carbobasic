import React, { useState, useEffect, useContext } from 'react'
import { DataContex } from '../../context/DataContext'
import Translation from './Data.json'

import './portfolio.css'
import Industries from '../../assets/industries-color.png'
import Project from '../../assets/projects-color.png'
import Service from '../../assets/services-color.png'
import Expertise from '../../assets/expertise-color.png'

const Projects = () => {
  const { idiom } = useContext(DataContex)
  const [content, setContent] = useState(Translation.eng)

  const [toggleState, setToggleState] = useState(0)
  const [toggleStateA, setToggleStateA] = useState(5)
  useEffect(() => {
    if (idiom === 'English') {
      setContent(Translation.eng)
    } else if (idiom === 'Español') {
      setContent(Translation.esp)
    }
  }, [idiom])
  const toggleTab = (index) => {
    setToggleState(index)
  }

  const toggleTabA = (index) => {
    setToggleStateA(index)
  }
  return (
    <div className='container__project'>
      <div className='project'>
        <h1>{content.projects}</h1>
      </div>

      <div className='card__general'>
        <div className='card__projects'>
          <img src={Industries} alt='industries' />
          <div className='box-content'>
            <div className='content'>
              <h3 className='title'>{content.industries.title}</h3>
              <span className='services__button' onClick={() => toggleTab(1)}>
                {content.industries.viewMore}{' '}
                <i className='uil uil-arrow-right services__button-icon'></i>
              </span>
            </div>
          </div>
        </div>

        <div className='card__projects'>
          <img src={Project} alt='Project' />
          <div className='box-content'>
            <div className='content'>
              <h3 className='title'>{content.project.title}</h3>
              <span className='services__button' onClick={() => toggleTab(2)}>
                {content.project.viewMore}{' '}
                <i className='uil uil-arrow-right services__button-icon'></i>
              </span>
            </div>
          </div>
        </div>

        <div className='card__projects'>
          <img src={Service} alt='Service' />
          <div className='box-content'>
            <div className='content'>
              <h3 className='title'>{content.services.title}</h3>
              <span className='services__button' onClick={() => toggleTab(3)}>
                {content.services.viewMore}{' '}
                <i className='uil uil-arrow-right services__button-icon'></i>
              </span>
            </div>
          </div>
        </div>

        <div className='card__projects'>
          <img src={Expertise} alt='Expertise' />
          <div className='box-content'>
            <div className='content'>
              <h3 className='title'>{content.expertise.title}</h3>
              <span className='services__button' onClick={() => toggleTab(4)}>
                {content.expertise.viewMore}{' '}
                <i className='uil uil-arrow-right services__button-icon'></i>
              </span>
            </div>
          </div>
        </div>

        <div className='card__projects'>
          <img src={Expertise} alt='Expertise' />
          <div className='box-content'>
            <div className='content'>
              <h3 className='title'>{content.clients.title}</h3>
              <span className='services__button' onClick={() => toggleTab(5)}>
                {content.clients.viewMore}{' '}
                <i className='uil uil-arrow-right services__button-icon'></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          toggleState === 1 ? 'services__modal active-modal' : 'services__modal'
        }
      >
        <div className='services__modal-content'>
          <i
            onClick={() => toggleTab(0)}
            className='uil uil-times services__modal-close'
          ></i>

          <h3 className='services__modal-title'>{content.industries.modal}</h3>

          <ul className='services__modal-services grid'>
            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.industries.content.p1.p1}</span>
                {content.industries.content.p1.p2}
              </p>
            </li>

            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.industries.content.p2}</span>
              </p>
            </li>
            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.industries.content.p3}</span>
              </p>
            </li>
            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.industries.content.p4}</span>
              </p>
            </li>
            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.industries.content.p5}</span>
              </p>
            </li>
            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.industries.content.p6}</span>
              </p>
            </li>
            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.industries.content.p7}</span>
              </p>
            </li>
            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.industries.content.p8}</span>
              </p>
            </li>
            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.industries.content.p9}</span>
              </p>
            </li>
            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.industries.content.p10}</span>
              </p>
            </li>
            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.industries.content.p11}</span>
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={
          toggleState === 2 ? 'services__modal active-modal' : 'services__modal'
        }
      >
        <div className='services__modal-content'>
          <i
            onClick={() => toggleTab(0)}
            className='uil uil-times services__modal-close'
          ></i>

          <h3 className='services__modal-title'>{content.project.modal}</h3>

          <ul className='services__modal-services grid'>
            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.project.content.p1}</span>
              </p>
            </li>
            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.project.content.p2}</span>
              </p>
            </li>
            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.project.content.p3}</span>
              </p>
            </li>
            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.project.content.p4}</span>
              </p>
            </li>
            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.project.content.p5}</span>
              </p>
            </li>
            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.project.content.p6}</span>
              </p>
            </li>
            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.project.content.p7}</span>
              </p>
            </li>
            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.project.content.p8}</span>
              </p>
            </li>
            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.project.content.p9}</span>
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={
          toggleState === 3 ? 'services__modal active-modal' : 'services__modal'
        }
      >
        <div className='services__modal-content'>
          <i
            onClick={() => toggleTab(0)}
            className='uil uil-times services__modal-close'
          ></i>

          <h3 className='services__modal-title'>{content.services.modal}</h3>

          <ul className='services__modal-services grid'>
            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.services.content.p1}</span>
              </p>
            </li>
            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.services.content.p2}</span>
              </p>
            </li>
            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.services.content.p3.p1}</span>
                {content.services.content.p3.p2}
              </p>
            </li>
            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.services.content.p4}</span>
              </p>
            </li>
            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.services.content.p5.p1}</span>
                {content.services.content.p5.p2}
              </p>
            </li>
            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.services.content.p6}</span>
              </p>
            </li>
            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.services.content.p7}</span>
              </p>
            </li>
            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.services.content.p8.p1}</span>
                {content.services.content.p8.p2}
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={
          toggleState === 4 ? 'services__modal active-modal' : 'services__modal'
        }
      >
        <div className='services__modal-content'>
          <i
            onClick={() => toggleTab(0)}
            className='uil uil-times services__modal-close'
          ></i>

          <h3 className='services__modal-title'>{content.expertise.modal}</h3>

          <ul className='services__modal-services grid'>
            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.expertise.content.p1.p1}</span>
                {content.expertise.content.p1.p2}
              </p>
            </li>

            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.expertise.content.p2}</span>
              </p>
            </li>
            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.expertise.content.p3}</span>
              </p>
            </li>

            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.expertise.content.p4.p1}</span>
                {content.expertise.content.p4.p2}
              </p>
            </li>

            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.expertise.content.p5}</span>
              </p>
            </li>
            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.expertise.content.p6.p1}</span>
                {content.expertise.content.p6.p2}
              </p>
            </li>

            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.expertise.content.p7}</span>
              </p>
            </li>
            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.expertise.content.p8}</span>
              </p>
            </li>
            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.expertise.content.p9}</span>
              </p>
            </li>
            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.expertise.content.p10}</span>
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={
          toggleState === 5 ? 'services__modal active-modal' : 'services__modal'
        }
      >
        <div className='services__modal-content'>
          <i
            onClick={() => toggleTab(0)}
            className='uil uil-times services__modal-close'
          ></i>

          <h3 className='services__modal-title'>{content.clients.modal}</h3>

          <ul className='services__modal-services grid'>
            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.clients.content.p1}</span>
              </p>
            </li>

            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.clients.content.p2}</span>
              </p>
            </li>
            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.clients.content.p3}</span>
              </p>
            </li>
            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.clients.content.p4}</span>
              </p>
            </li>
            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.clients.content.p5}</span>
              </p>
            </li>
            <li className='services__modal-service'>
              <i className='uil uil-check-circle services__modal-icon'></i>
              <p className='services__modal-info'>
                <span>{content.clients.content.p6}</span>
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className='project__record'>
        <h1>{content.proyectsRecord}</h1>
      </div>

      <div className='project__record-content'>
        <div>
          <h1>
            carbo<span>basic</span>
          </h1>
        </div>

        <div className='portfolio__container'>
          <div className='carb__project'>
            <p>
              <span>{content.carbobasic.p1.year}</span>{' '}
              {content.carbobasic.p1.p1}
            </p>
          </div>
          <div className='carb__project'>
            <p>
              <span>{content.carbobasic.p2.year}</span>{' '}
              {content.carbobasic.p2.p1}
            </p>
          </div>
          <div className='carb__project'>
            <p>
              <span>{content.carbobasic.p3.year}</span>{' '}
              {content.carbobasic.p3.p1}
            </p>
          </div>
          <div className='carb__project'>
            <p>
              <span>{content.carbobasic.p4.year}</span>{' '}
              {content.carbobasic.p4.p1}
            </p>
          </div>
          <div className='carb__project'>
            <p>
              <span>{content.carbobasic.p5.year}</span>{' '}
              {content.carbobasic.p5.p1}
            </p>
          </div>
          <div className='carb__project'>
            <p>
              <span>{content.carbobasic.p6.year}</span>{' '}
              {content.carbobasic.p6.p1}
            </p>
          </div>
          <div className='carb__project'>
            <p>
              <span>{content.carbobasic.p7.year}</span>{' '}
              {content.carbobasic.p7.p1}
            </p>
          </div>
        </div>

        <div className='milton__proyects'>
          <h1>
            milton <span>avila</span>
          </h1>

          <div className='portfolio__tabs'>
            <div
              className={
                toggleStateA === 5
                  ? 'portfolio__button active'
                  : 'portfolio__button'
              }
              onClick={() => toggleTabA(5)}
            >
              {content.tge.working}
            </div>

            <div
              className={
                toggleStateA === 6
                  ? 'portfolio__button active'
                  : 'portfolio__button'
              }
              onClick={() => toggleTabA(6)}
            >
              {content.evangelista.working}
            </div>

            <div
              className={
                toggleStateA === 7
                  ? 'portfolio__button active'
                  : 'portfolio__button'
              }
              onClick={() => toggleTabA(7)}
            >
              {content.other.working}
            </div>
          </div>
        </div>
      </div>

      <div className='portfolio__sections'>
        <div
          className={
            toggleStateA === 5
              ? 'portfolio__content portfolio__content-active'
              : 'portfolio__content'
          }
        >
          <div className='portfolio__container'>
            <div className='carb__project'>
              <p>
                <span>{content.tge.p1.year}</span> {content.tge.p1.p1}
              </p>
            </div>
            <div className='carb__project'>
              <p>
                <span>{content.tge.p2.year}</span> {content.tge.p2.p1}
              </p>
            </div>
            <div className='carb__project'>
              <p>
                <span>{content.tge.p3.year}</span> {content.tge.p3.p1}
              </p>
            </div>
            <div className='carb__project'>
              <p>
                <span>{content.tge.p4.year}</span> {content.tge.p4.p1}
              </p>
            </div>
            <div className='carb__project'>
              <p>
                <span>{content.tge.p5.year}</span> {content.tge.p5.p1}
              </p>
            </div>
            <div className='carb__project'>
              <p>
                <span>{content.tge.p6.year}</span> {content.tge.p6.p1}
              </p>
            </div>
            <div className='carb__project'>
              <p>
                <span>{content.tge.p7.year}</span> {content.tge.p7.p1}
              </p>
            </div>
            <div className='carb__project'>
              <p>
                <span>{content.tge.p8.year}</span> {content.tge.p8.p1}
              </p>
            </div>
            <div className='carb__project'>
              <p>
                <span>{content.tge.p9.year}</span> {content.tge.p9.p1}
              </p>
            </div>
            <div className='carb__project'>
              <p>
                <span>{content.tge.p10.year}</span> {content.tge.p10.p1}
              </p>
            </div>
            <div className='carb__project'>
              <p>
                <span>{content.tge.p11.year}</span> {content.tge.p11.p1}
              </p>
            </div>
            <div className='carb__project'>
              <p>
                <span>{content.tge.p12.year}</span> {content.tge.p12.p1}
              </p>
            </div>
          </div>
        </div>

        <div
          className={
            toggleStateA === 6
              ? 'portfolio__content portfolio__content-active'
              : 'portfolio__content'
          }
        >
          <div className='portfolio__container'>
            <div className='carb__project'>
              <p>
                <span>{content.evangelista.p1.year}</span>{' '}
                {content.evangelista.p1.p1}
              </p>
            </div>
            <div className='carb__project'>
              <p>
                <span>{content.evangelista.p2.year}</span>{' '}
                {content.evangelista.p2.p1}
              </p>
            </div>
            <div className='carb__project'>
              <p>
                <span>{content.evangelista.p3.year}</span>{' '}
                {content.evangelista.p3.p1}
              </p>
            </div>
            <div className='carb__project'>
              <p>
                <span>{content.evangelista.p4.year}</span>{' '}
                {content.evangelista.p4.p1}
              </p>
            </div>
            <div className='carb__project'>
              <p>
                <span>{content.evangelista.p5.year}</span>{' '}
                {content.evangelista.p5.p1}
              </p>
            </div>
            <div className='carb__project'>
              <p>
                <span>{content.evangelista.p6.year}</span>{' '}
                {content.evangelista.p6.p1}
              </p>
            </div>
            <div className='carb__project'>
              <p>
                <span>{content.evangelista.p7.year}</span>{' '}
                {content.evangelista.p7.p1}
              </p>
            </div>
            <div className='carb__project'>
              <p>
                <span>{content.evangelista.p8.year}</span>{' '}
                {content.evangelista.p8.p1}
              </p>
            </div>
            <div className='carb__project'>
              <p>
                <span>{content.evangelista.p9.year}</span>{' '}
                {content.evangelista.p9.p1}
              </p>
            </div>
          </div>
        </div>

        <div
          className={
            toggleStateA === 7
              ? 'portfolio__content portfolio__content-active'
              : 'portfolio__content'
          }
        >
          <div className='portfolio__container'>
            <div className='carb__project'>
              <p>
                <span>{content.other.p1.year}</span> {content.other.p1.p1}
              </p>
            </div>
            <div className='carb__project'>
              <p>
                <span>{content.other.p2.year}</span> {content.other.p2.p1}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
