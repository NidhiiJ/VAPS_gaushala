import Image from 'next/image';
import './Footer.scss';

const orgLinks = [
  { label: 'About Us', href: '/overview' },
  { label: 'Timeline', href: '/timeline' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Certifications', href: '/certifications' },
];

const involveLinks = [
  { label: 'Donate', href: '/donate' },
  { label: 'Volunteers', href: '/volunteers' },
  { label: 'Contact Us', href: '/contact' },
];

// const mediaLinks = [
//   { label: 'Certifications', href: '/certifications' },
//   { label: 'Publications', href: '/publications' },
// ];

const contactLinks: { label: string; href?: string }[] = [
  { label: 'Rajasthan, India' },
  { label: 'info@gaushala.org', href: 'mailto:info@gaushala.org' },
  { label: '+91 98765 43210', href: 'tel:+919876543210' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Brand */}
        <div className="footer-brand">
          <Image
            src="/logo/logo.png"
            alt="Suri Prem Jiv Raksha Kendra Sansthan"
            width={50}
            height={50}
            className="footer-logo"
            unoptimized
          />
          <p>
            Dedicated to the protection and welfare of cows and all living beings, rooted in the
            values of Ahimsa and Seva.
          </p>
          <div className="footer-social">
            {['f', 'in', '▶'].map((icon) => (
              <a key={icon} href="#" className="footer-social-icon">{icon}</a>
            ))}
          </div>
        </div>

        {/* Organisation */}
        <div className="footer-col">
          <h4>Organisation</h4>
          <ul>
            {orgLinks.map(({ label, href }) => (
              <li key={label}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </div>

        {/* Get Involved & Media */}
        <div className="footer-col">
          <h4>Get Involved</h4>
          <ul>
            {involveLinks.map(({ label, href }) => (
              <li key={label}><a href={href}>{label}</a></li>
            ))}
          </ul>
          {/* <h4 style={{ marginTop: '1.25rem' }}>Media Room</h4> */}
          {/* <ul>
            {mediaLinks.map(({ label, href }) => (
              <li key={label}><a href={href}>{label}</a></li>
            ))}
          </ul> */}
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            {contactLinks.map(({ label, href }) => (
              <li key={label}>{href ? <a href={href}>{label}</a> : <span>{label}</span>}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; 2026 Suri Prem Jiv Raksha Kendra Sansthan. All rights reserved.</span>
        <span>Made with ❤ by <a href="https://www.flayk.in" target='_blank' className="flayk-link">Flayk Solutions</a></span>
      </div>
    </footer>
  );
}
