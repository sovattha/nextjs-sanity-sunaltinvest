import { Alert } from '@mui/material'
import axios from 'axios'
import { useState } from 'react'

import { contact } from '~/data/index'

import { Heading } from '../../components/common/Heading'

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: '',
  })

  const [alertMessage, setAlertMessage] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const API_URL = 'https://api.sunaltinvest.com/v1/submit'

  const showAlert = (message, severity) => {
    setAlertMessage(<Alert severity={severity}>{message}</Alert>)
    setTimeout(() => {
      setAlertMessage(null)
    }, 5000) // Auto-hide alert after 5 seconds (adjust as needed)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(API_URL, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: false,
      })

      if (response.status === 200) {
        showAlert('Votre message a été envoyé avec succès.', 'success')
      } else {
        showAlert("Un problème est survenu lors de l'envoi.", 'error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      showAlert(`Un problème est survenu lors de l'envoi`, 'error')
    }
  }

  return (
    <div
      className="contact"
      id="contact-section"
      data-aos="fade-up-right"
      data-aos-duration="1000"
    >
      <div className="container">
        <Heading title="Contactez-nous" />
        <p>
          Nous sommes là pour vous aider à réaliser votre projet de transition
          énergétique. Vous souhaitez obtenir plus d&apos;informations, discuter de
          vos besoins spécifiques ou planifier une consultation, n&apos;hésitez pas à
          nous contacter. Ensemble, nous pouvons créer un avenir plus durable.
        </p>

        {alertMessage}

        <div className="content flexsb">
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="flex">
                <input
                  type="text"
                  name="nom"
                  placeholder="Nom"
                  data-aos="flip-left"
                  value={formData.nom}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  data-aos="flip-right"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <input
                type="text"
                name="sujet"
                placeholder="Sujet"
                data-aos="flip-up"
                value={formData.sujet}
                onChange={handleChange}
              />
              <textarea
                name="message"
                id=""
                cols={30}
                rows={10}
                placeholder="Message"
                data-aos="flip-down"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button
                type="submit"
                className="button-primary"
                data-aos="zoom-in-up"
              >
                Envoyez
              </button>
            </form>
          </div>
          <div className="left">
            {contact.map((item, index) => (
              <div className="contactBox" data-aos="zoom-in" key={index}>
                {item.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
