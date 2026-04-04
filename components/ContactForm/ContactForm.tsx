'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { Reveal } from '@/components/Reveal';
import { sendEmail } from '@/utils/sendEmail';
import InfoCards from '@/components/InfoCards/InfoCards';
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

        {/* Side Image (hidden on mobile) */}
        <div className="cf-side-image">
          <Image
            src="/images/contact.jpg"
            alt="Gaushala Gate"
            fill
            className="cf-side-image__img"
            sizes="(max-width: 900px) 0px, 40vw"
          />
          {/* <div className="cf-side-image__overlay" /> */}
        </div>

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

      {/* Info Cards — 2×2 grid below the form */}
      <div className="cf-infocards">
        <InfoCards />
      </div>
    </section>
  );
}
