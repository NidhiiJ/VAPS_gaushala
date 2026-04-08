'use client';

import { StaggerContainer, StaggerItem } from '@/components/Reveal';
import './InfoCards.scss';

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

export default function InfoCards() {
  return (
    <StaggerContainer className="ic-grid" staggerDelay={0.1} initialDelay={0.05}>
      <StaggerItem>
        <div className="ic-card">
          <div className="ic-card__icon ic-card__icon--location">
            <LocationIcon />
          </div>
          <h3 className="ic-card__title">Visit Our Gaushala</h3>
          <p className="ic-card__body">
            Suri Prem Jiv Raksha Kendra Sansthan,<br />
            Near Bamanwadji Tirth<br />
            Post Office - Parlai, Pindwada, Sirohi-307022 <br />
            Rajasthan 307001, India
          </p>
        </div>
      </StaggerItem>

      <StaggerItem>
        <div className="ic-card">
          <div className="ic-card__icon ic-card__icon--phone">
            <PhoneIcon />
          </div>
          <h3 className="ic-card__title">Call Us</h3>
          <p className="ic-card__body">
            Phone: <a href="tel:+919636104084">+91 96361 04084</a><br />
            Alternate: <a href="tel:+919377031530">+91 93770 31530</a><br />
            Available 8 AM – 8 PM IST
          </p>
        </div>
      </StaggerItem>

      <StaggerItem>
        <div className="ic-card">
          <div className="ic-card__icon ic-card__icon--email">
            <EmailIcon />
          </div>
          <h3 className="ic-card__title">Email Us</h3>
          <p className="ic-card__body">
            General Inquiries:<br />
            <a href="mailto:info@suripremjrk.org">panjrapoleparlai@gmail.com</a><br />
            {/* <br />
            Donations:<br />
            <a href="mailto:donate@suripremjrk.org">donate@suripremjrk.org</a> */}
          </p>
        </div>
      </StaggerItem>

      <StaggerItem>
        <div className="ic-card">
          <div className="ic-card__icon ic-card__icon--clock">
            <ClockIcon />
          </div>
          <h3 className="ic-card__title">Visiting Hours</h3>
          <p className="ic-card__body">
            Monday – Saturday: 8:00 AM – 6:00 PM<br />
            Sunday: 9:00 AM – 1:00 PM<br />
            <br />
            <em className="ic-card__note">Open on all major festivals &amp; occasions</em>
          </p>
        </div>
      </StaggerItem>
    </StaggerContainer>
  );
}
