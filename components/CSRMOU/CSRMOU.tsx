import { Reveal } from '@/components/Reveal';
import './CSRMOU.scss';

export default function CSRMOU() {
  return (
    <section className="csr-mou">
      <div className="csr-mou__inner">
        <Reveal variant="fade-up" className="csr-mou__card">
          <div className="csr-mou__grid">
            {/* Left: text */}
            <div className="csr-mou__left">
              <div className="csr-mou__ribbon">
                <span className="csr-mou__ribbon-star">✦</span>
                Newly Signed Partnership
              </div>
              <h2>A Landmark MOU with Avi Renewables Pvt. Ltd.</h2>
              <p>
                We are delighted to share that we have recently entered into a{' '}
                <strong>Memorandum of Understanding</strong> with Avi Renewables Private Limited
                — a commitment that marks a significant step forward in strengthening our
                infrastructure and expanding our ability to serve injured and sick animals.
              </p>
              <p className="csr-mou__note">
                Together, we are building a future where advanced veterinary care reaches every
                animal that needs it.
              </p>
            </div>

            {/* Right: partner panel */}
            <div className="csr-mou__partners">
              <div className="csr-mou__partner-row">
                <div className="csr-mou__logo csr-mou__logo--a">SP</div>
                <div className="csr-mou__partner-info">
                  <div className="csr-mou__partner-name">Suri Prem Jeev Raksha Kendra</div>
                  <div className="csr-mou__partner-role">Implementing Partner</div>
                </div>
              </div>

              <div className="csr-mou__sep">
                <div className="csr-mou__handshake">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 17l-5-5 5-5" />
                    <path d="M13 7l5 5-5 5" />
                  </svg>
                </div>
                <span>MOU Signed</span>
              </div>

              <div className="csr-mou__partner-row">
                <div className="csr-mou__logo csr-mou__logo--b">AR</div>
                <div className="csr-mou__partner-info">
                  <div className="csr-mou__partner-name">Avi Renewables Pvt. Ltd.</div>
                  <div className="csr-mou__partner-role">CSR Partner</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
