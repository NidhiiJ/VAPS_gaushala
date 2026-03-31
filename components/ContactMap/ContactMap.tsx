import { Reveal } from '@/components/Reveal';
import './ContactMap.scss';

function ExternalLinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" x2="21" y1="14" y2="3" />
    </svg>
  );
}


export default function ContactMap() {
  return (
    <section className="cmap-section">
      <Reveal variant="fade-up">
        <div className="cmap-wrap">
          <div className="cmap-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.0561508166893!2d73.0073281!3d24.827753299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3942c8dbaaaaaaab%3A0x8741d49205ed91bf!2sSuri%20Prem%20Jiv%20Raksha%20Kendra%20Sansthan!5e0!3m2!1sen!2sin!4v1774947659415!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Suri Prem Jiv Raksha Kendra Sansthan"
            />
            <div className="cmap-map__overlay">
              <a
                href="https://www.google.com/maps/search/Suri+Prem+Jeevraksha+Kendra+Sirohi+Rajasthan"
                target="_blank"
                rel="noopener noreferrer"
                className="cmap-placeholder__btn"
              >
                <ExternalLinkIcon />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
