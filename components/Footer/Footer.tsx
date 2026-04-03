import Image from 'next/image';
import './Footer.scss';

const orgLinks   = ['About Us', 'Our Mission', 'Our Team', 'Gallery'];
const involveLinks = ['Donate', 'Volunteer', 'Gau Daan', 'Sponsor a Cow'];
const contactLinks = ['Rajasthan, India', 'info@gaushala.org', '+91 98765 43210', 'Visit Us'];

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
            {orgLinks.map((link) => (
              <li key={link}><a href="#">{link}</a></li>
            ))}
          </ul>
        </div>

        {/* Get Involved */}
        <div className="footer-col">
          <h4>Get Involved</h4>
          <ul>
            {involveLinks.map((link) => (
              <li key={link}><a href="#">{link}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            {contactLinks.map((link) => (
              <li key={link}><a href="#">{link}</a></li>
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
