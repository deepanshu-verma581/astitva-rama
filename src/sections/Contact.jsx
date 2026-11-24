import { useState } from 'react'
import { ArrowRight, Phone, Mail, MapPin, Clock } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: '', message: '' })
  const [submitting, setSubmitting] = useState(false)

  const submit = async event => {
    event.preventDefault()
    const nextErrors = {}
    if (!values.name.trim()) nextErrors.name = 'Please enter your full name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }
    if (!values.subject.trim()) nextErrors.subject = 'Please enter a subject.'
    if (!values.message.trim()) nextErrors.message = 'Please enter a message.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL
    if (!scriptUrl) {
      setStatus({
        type: 'error',
        message: 'Submission could not be configured. Please add the Google Apps Script Web App URL.',
      })
      return
    }

    setSubmitting(true)
    setStatus({ type: '', message: '' })
    try {
      const response = await fetch(scriptUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ ...values, timestamp: new Date().toISOString() }),
      })
      const result = await response.json()
      if (!response.ok || result.status !== 'success') {
        throw new Error(result.message || 'The submission could not be saved.')
      }
      setValues({ name: '', email: '', phone: '', subject: '', message: '' })
      setStatus({
        type: 'success',
        message: 'Thank you. Your information has been submitted successfully.',
      })
    } catch {
      setStatus({
        type: 'error',
        message: 'We could not submit your message. Please check the connection and try again.',
      })
    } finally {
      setSubmitting(false)
    }
  }

  const update = ({ target }) => {
    setValues(previous => ({ ...previous, [target.name]: target.value }))
  }

  return (
    <section className="section section-tinted" id="contact">
      <div className="section-container">
        <SectionHeading eyebrow="Get in Touch" title="Contact Us" align="center" />
        <div className="contact-grid">
          <div className="contact-info">
            <h3>We are here to listen</h3>
            <p>Reach out with questions or to request a consultation.</p>
            <div className="contact-line">
              <Phone /><div><span>Phone</span><strong>Phone number placeholder</strong></div>
            </div>
            <div className="contact-line">
              <Mail /><div><span>Email</span><strong>Email address placeholder</strong></div>
            </div>
            <div className="contact-line">
              <MapPin /><div><span>Address</span><strong>Address placeholder</strong></div>
            </div>
            <div className="contact-line">
              <Clock /><div><span>Working Hours</span><strong>Working hours placeholder</strong></div>
            </div>
          </div>
          <form className="contact-form" onSubmit={submit} noValidate>
            <div className="form-row">
              <label>
                Full Name
                <input name="name" value={values.name} onChange={update} />
                {errors.name && <small>{errors.name}</small>}
              </label>
              <label>
                Email Address
                <input name="email" type="email" value={values.email} onChange={update} />
                {errors.email && <small>{errors.email}</small>}
              </label>
            </div>
            <div className="form-row">
              <label>
                Phone Number
                <input name="phone" value={values.phone} onChange={update} />
              </label>
              <label>
                Subject
                <input name="subject" value={values.subject} onChange={update} />
                {errors.subject && <small>{errors.subject}</small>}
              </label>
            </div>
            <label>
              Message
              <textarea name="message" rows="5" value={values.message} onChange={update} />
              {errors.message && <small>{errors.message}</small>}
            </label>
            <button className="button button-primary" type="submit" disabled={submitting}>
              {submitting ? 'Submitting...' : 'Submit'} <ArrowRight size={16} />
            </button>
            {status.message && (
              <p className={`form-notice ${status.type}`} role="status">
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
