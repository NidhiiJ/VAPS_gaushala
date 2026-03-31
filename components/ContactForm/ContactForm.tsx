'use client';

import { useState, useCallback } from 'react';
import { StaggerContainer, StaggerItem, Reveal } from '@/components/Reveal';
import { sendEmail } from '@/utils/sendEmail';
import './ContactForm.scss';

export interface FormValues {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

const initialValues: FormValues = {
  name: '',
  phone: '',
  email: '',
  subject: '',
  message: '',
};

// ── SVG Icons ────────────────────────────────────────────────

function LocationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

// ── Component ────────────────────────────────────────────────

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = useCallback((e: { target: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement }) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(async (e: { preventDefault(): void }) => {
    e.preventDefault();
    setError(false);
    try {
      await sendEmail(values);
      setSubmitted(true);
      setValues(initialValues);
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      setError(true);
    }
  }, [values]);

  return (
    <section className="cf-section">
      <div className="cf-grid">

        {/* Info Cards */}
        <StaggerContainer className="cf-info" staggerDelay={0.1} initialDelay={0.05}>
          <StaggerItem>
            <div className="cf-card">
              <div className="cf-card__icon cf-card__icon--location">
                <LocationIcon />
              </div>
              <h3 className="cf-card__title">Visit Our Gaushala</h3>
              <p className="cf-card__body">
                Suri Prem Jeevraksha Kendra Sansthan,<br />
                Near Bus Stand, Sirohi,<br />
                Rajasthan 307001, India
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="cf-card">
              <div className="cf-card__icon cf-card__icon--phone">
                <PhoneIcon />
              </div>
              <h3 className="cf-card__title">Call Us</h3>
              <p className="cf-card__body">
                Phone: <a href="tel:+919876543210">+91 98765 43210</a><br />
                Alternate: <a href="tel:+919876543211">+91 98765 43211</a><br />
                Available 8 AM – 8 PM IST
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="cf-card">
              <div className="cf-card__icon cf-card__icon--email">
                <EmailIcon />
              </div>
              <h3 className="cf-card__title">Email Us</h3>
              <p className="cf-card__body">
                General Inquiries:<br />
                <a href="mailto:info@suripremjrk.org">info@suripremjrk.org</a><br />
                <br />
                Donations:<br />
                <a href="mailto:donate@suripremjrk.org">donate@suripremjrk.org</a>
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="cf-card">
              <div className="cf-card__icon cf-card__icon--clock">
                <ClockIcon />
              </div>
              <h3 className="cf-card__title">Visiting Hours</h3>
              <p className="cf-card__body">
                Monday – Saturday: 8:00 AM – 6:00 PM<br />
                Sunday: 9:00 AM – 1:00 PM<br />
                <br />
                <em className="cf-card__note">Open on all major festivals &amp; occasions</em>
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Contact Form */}
        <Reveal variant="fade-up" delay={0.15}>
          <div className="cf-form-wrap">
            <h2 className="cf-form-wrap__heading">Send Us a Message</h2>
            <p className="cf-form-wrap__sub">
              Fill in the form below and our team will get back to you within 24 hours.
            </p>

            <form className="cf-form" onSubmit={handleSubmit}>
              <div className="cf-form__row">
                <div className="cf-form__group">
                  <label className="cf-form__label">Full Name <span className="cf-form__required">*</span></label>
                  <input
                    className="cf-form__input"
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="cf-form__group">
                  <label className="cf-form__label">Phone Number <span className="cf-form__required">*</span></label>
                  <input
                    className="cf-form__input"
                    type="tel"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                    required
                  />
                </div>
              </div>

              <div className="cf-form__group">
                <label className="cf-form__label">Email Address <span className="cf-form__required">*</span></label>
                <input
                  className="cf-form__input"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Invalid Email')}
                  onInput={e => (e.target as HTMLInputElement).setCustomValidity('')}
                />
              </div>

              <div className="cf-form__group">
                <label className="cf-form__label">Subject <span className="cf-form__required">*</span></label>
                <select
                  className="cf-form__select"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select a topic</option>
                  <option>General Inquiry</option>
                  <option>Donation / Sponsorship</option>
                  <option>Volunteer Opportunities</option>
                  <option>Gau Daan</option>
                  <option>Visit Request</option>
                  <option>Partnership / Collaboration</option>
                  <option>Media / Press</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="cf-form__group">
                <label className="cf-form__label">Your Message</label>
                <textarea
                  className="cf-form__textarea"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className={`cf-form__submit${submitted ? ' cf-form__submit--sent' : ''}`}
              >
                {submitted ? 'Message Sent! ✓' : (
                  <>Send Message <ArrowIcon /></>
                )}
              </button>
              {error && (
                <p className="cf-form__error">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
