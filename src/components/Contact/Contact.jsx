import React, { useEffect, useState, useContext } from 'react'
import { DataContex } from '../../context/DataContext'
import Translation from './Data.json'
import { useForm } from 'react-hook-form'

//import emailjs from '@emailjs/browser'
import './contact.css'

const Contatc = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    console.log('hola')
    console.log(data)
    reset()
  }

  const { idiom } = useContext(DataContex)

  const [content, setContent] = useState(Translation.eng)

  useEffect(() => {
    if (idiom === 'English') {
      setContent(Translation.eng)
    } else if (idiom === 'Español') {
      setContent(Translation.esp)
    }
  }, [idiom])

  //////////////////
  //const form = useRef()

  //const sendEmail = (e) => {
  //  e.preventDefault()

  //  emailjs
  //    .sendForm(
  //      'service_jbpuget',
  //      'template_m77v2j9',
  //      form.current,
  //      'zWIe9raD79SJa5bTv'
  //    )
  //    .target.reset()
  //}
  //////////////////
  return (
    <div className='container__contact'>
      <div className='contact'>
        <h1>{content.contact}</h1>
      </div>

      <div className='container__map'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2380.566971547256!2d-2.2190840845040505!3d53.368904280722866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4d32bd300a3f%3A0x3f6552f4a0169ce7!2s20%20Mableden%20Cl%2C%20Heald%20Green%2C%20Cheadle%2C%20Reino%20Unido!5e0!3m2!1ses!2sar!4v1664828888881!5m2!1ses!2sar'
          width='800'
          height='250'
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          title='myFrame'
        ></iframe>
      </div>

      <div className='form-react'>
        <form
          className='contact__me__form'
          onSubmit={handleSubmit(onSubmit)}
          autoComplete='off'
        >
          <div className='form-control-'>
            <div className='form-control'>
              <label>{content.name}</label>
              <input
                placeholder='Write here...'
                {...register('example', {
                  required: true,
                  maxLength: 20
                })}
              />
              {errors.example?.type === 'required' && (
                <small>{content.error}</small>
              )}
              {errors.example?.type === 'maxLength' && (
                <small>Name field must be less than 15 characters</small>
              )}
            </div>

            <div className='form-control'>
              <label>{content.company}</label>
              <input placeholder='Write here...' {...register('compañia')} />
            </div>

            <div className='form-control'>
              <label>{content.position}</label>
              <input placeholder='Write here...' {...register('posicion')} />
            </div>

            <div className='form-control'>
              <label>{content.email}</label>

              <input
                placeholder='Write here...'
                {...register('exampleRequired', {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                  }
                })}
              />
              {errors.exampleRequired?.type === 'required' && (
                <small>{content.error}</small>
              )}
              {errors.exampleRequired?.type === 'pattern' && (
                <small>Invalid e-mail format</small>
              )}
            </div>

            <div className='form-control'>
              <label>{content.telefono}</label>
              <input placeholder='Write here...' {...register('telefono')} />
            </div>
          </div>

          <div className='form-control content'>
            <label>{content.help}</label>
            <textarea
              name='content'
              className='form-area'
              placeholder='Message'
              {...register('content', { required: true })}
            />
            {errors.content && <small>{content.error}</small>}
          </div>

          <div className='form-control-button'>
            <input type='submit' value='Send' />
          </div>
        </form>
      </div>

      {/*<div className='contact__container  grid'>
        <div className='contact__content'>
          <h3 className='contact__title'>Talk to me</h3>

          <div className='contact__info'>
            <div className='contact__card'>
              <i className='bx bx-mail-send contact__card-icon'></i>

              <h3 className='contact__card-title'>Email</h3>
              <span className='contact__card-data'>info@carbobasic.co.uk</span>

              <a
                href='mailto:info@carbobasic.co.uk'
                className='contact__button'
                rel='noopener noreferrer'
                target='_blank'
              >
                Write me{' '}
                <i className='bx bx-right-arrow-alt contact__button-icon'></i>
              </a>
            </div>

            <div className='contact__card'>
              <i className='bx bxl-whatsapp contact__card-icon'></i>

              <h3 className='contact__card-title'>Phone number</h3>
              <span className='contact__card-data'>+447438389980</span>

              <a
                href='https://walink.co/7ae88b'
                className='contact__button'
                rel='noopener noreferrer'
                target='_blank'
              >
                Write me{' '}
                <i className='bx bx-right-arrow-alt contact__button-icon'></i>
              </a>
            </div>
          </div>
        </div>

        <div className='contact__content'>
          <h3 className='contact__title'>Write me your project</h3>

          <form ref={form} onSubmit={sendEmail} className='contact__form'>
            <div className='contact__form-div'>
              <label className='contact__form-tag'>Name</label>
              <input
                type='text'
                name='name'
                className='contact__form-input'
                placeholder='Insert your name'
              />
            </div>

            <div className='contact__form-div'>
              <label className='contact__form-tag'>Mail</label>
              <input
                type='email'
                name='email'
                className='contact__form-input'
                placeholder='Insert your email'
              />
            </div>

            <div className='contact__form-div contact__form-area'>
              <label className='contact__form-tag'>Project</label>
              <textarea
                name='project'
                cols='30'
                rows='10'
                className='contact__form-input'
                placeholder='Write your project'
              ></textarea>
            </div>
            <button className='button button--flex'>Send Message</button>
          </form>
        </div>
      </div>*/}

      <div className='contact__cont'>
        <div className='carb__contact'>
          <h1>{content.Enquiries.title}</h1>
          <p>
            {content.Enquiries.p1}
            <a
              href='https://walink.co/7ae88b'
              className='contact__button'
              rel='noopener noreferrer'
              target='_blank'
            >
              {content.Enquiries.p2}
            </a>{' '}
            {content.Enquiries.p3}
          </p>
        </div>

        <div className='carb__contact'>
          <h1>{content.office.title}</h1>
          <p>{content.office.p1}</p>
        </div>

        <div className='carb__contact'>
          <h1>{content.jobs.title}</h1>
          <p>
            {content.jobs.p1}
            <a
              href='mailto:info@carbobasic.co.uk'
              className='contact__button'
              rel='noopener noreferrer'
              target='_blank'
            >
              {content.jobs.p2}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contatc
