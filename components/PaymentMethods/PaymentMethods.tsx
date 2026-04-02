'use client';

import { useState, useCallback } from 'react';
import { Reveal } from '@/components/Reveal';
import './PaymentMethods.scss';

// ── Data ─────────────────────────────────────────────────────────────────────

const TABS = ['Scan & Pay', 'UPI Transfer', 'Bank Transfer'] as const;
type Tab = (typeof TABS)[number];

const UPI = {
  id:       'surip93275@barodampay',
  merchant: ['Suri Prem Jiv Raksha', 'Kendra Sansthan'],
  mobile:   '12345 67890',
};

const BANKS = [
  { bank: 'State Bank of India', type: 'Savings Account',  account: '55310200000233' },
  { bank: 'Bank of Baroda',      type: 'Current Account',  account: '32051513222'     },
];

// ── Tab icons ─────────────────────────────────────────────────────────────────

const TAB_ICONS: Record<Tab, React.ReactNode> = {
  'Scan & Pay': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7"/>
      <rect x="14" y="3" width="7" height="7"/>
      <rect x="14" y="14" width="7" height="7"/>
      <rect x="3" y="14" width="7" height="7"/>
    </svg>
  ),
  'UPI Transfer': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="2"/>
      <line x1="2" y1="10" x2="22" y2="10"/>
    </svg>
  ),
  'Bank Transfer': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="3 6 12 3 21 6"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="5" y1="10" x2="5" y2="18"/>
      <line x1="10" y1="10" x2="10" y2="18"/>
      <line x1="14" y1="10" x2="14" y2="18"/>
      <line x1="19" y1="10" x2="19" y2="18"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  ),
};

// ── Copy button ───────────────────────────────────────────────────────────────

interface CopyBtnProps {
  value:     string;
  id:        string;
  copied:    string | null;
  onCopy:    (value: string, id: string) => void;
}

function CopyBtn({ value, id, copied, onCopy }: CopyBtnProps) {
  const done = copied === id;
  return (
    <button
      type="button"
      className={`pm-copy-btn${done ? ' pm-copy-btn--done' : ''}`}
      onClick={() => onCopy(value, id)}
      aria-label={done ? 'Copied' : `Copy ${value}`}
    >
      {done ? (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      ) : (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="9" y="9" width="13" height="13" rx="2"/>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
        </svg>
      )}
      {done ? 'Copied' : 'Copy'}
    </button>
  );
}

// ── QR pane ───────────────────────────────────────────────────────────────────

function QRPane() {
  return (
    <div className="pm-qr">
      <div className="pm-qr__frame">
        <img src="/QR_code.png" width="180" height="180" alt="QR Code for donation" />
      </div>
      <p className="pm-qr__caption">Scan with any UPI app to donate</p>
      <p className="pm-qr__apps">Google Pay · PhonePe · Paytm · BHIM</p>
    </div>
  );
}

// ── UPI pane ──────────────────────────────────────────────────────────────────

function UPIPane({ copied, onCopy }: { copied: string | null; onCopy: (v: string, k: string) => void }) {
  return (
    <div className="pm-upi">
      <div className="pm-field">
        <span className="pm-field__label">UPI ID</span>
        <div className="pm-field__row pm-field__row--accent">
          <span className="pm-field__value">{UPI.id}</span>
          <CopyBtn value={UPI.id} id="upi-id" copied={copied} onCopy={onCopy} />
        </div>
      </div>

      <div className="pm-divider" role="separator" aria-hidden="true" />

      <div className="pm-field">
        <span className="pm-field__label">Merchant Name</span>
        <div className="pm-field__row">
          <span className="pm-field__value pm-field__value--multiline">
            {UPI.merchant.map((line, i) => <span key={i}>{line}</span>)}
          </span>
        </div>
      </div>

      <div className="pm-divider" role="separator" aria-hidden="true" />

      <div className="pm-field">
        <span className="pm-field__label">Mobile Number</span>
        <div className="pm-field__row pm-field__row--accent">
          <span className="pm-field__value">{UPI.mobile}</span>
          <CopyBtn value={UPI.mobile.replace(/\s/g, '')} id="upi-mobile" copied={copied} onCopy={onCopy} />
        </div>
      </div>
    </div>
  );
}

// ── Bank pane ─────────────────────────────────────────────────────────────────

function BankPane({ copied, onCopy }: { copied: string | null; onCopy: (v: string, k: string) => void }) {
  return (
    <div className="pm-bank">
      <p className="pm-bank__entity">Suri Prem Jiv Raksha Kendra Sansthan</p>
      {BANKS.map((acc, i) => (
        <div key={i} className="pm-bank__card">
          <div className="pm-bank__card-header">
            <span className="pm-bank__name">{acc.bank}</span>
            <span className="pm-bank__type">{acc.type}</span>
          </div>
          <div className="pm-bank__account-row">
            <span className="pm-bank__account">{acc.account}</span>
            <CopyBtn value={acc.account} id={`bank-${i}`} copied={copied} onCopy={onCopy} />
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export interface PaymentMethodsProps {
  /** true (default) = full dark section wrapper; false = panel only for embedding */
  standalone?: boolean;
}

export default function PaymentMethods({ standalone = true }: PaymentMethodsProps) {
  const [active, setActive]   = useState<Tab>('Scan & Pay');
  const [copied, setCopied]   = useState<string | null>(null);

  const handleCopy = useCallback((value: string, id: string) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    });
  }, []);

  const panel = (
    <div className="pm-panel">

      {/* Tab bar */}
      <nav className="pm-tabs" role="tablist" aria-label="Payment method">
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={active === tab}
            aria-controls={`pm-pane-${tab.replace(/\s+/g, '-').toLowerCase()}`}
            className={`pm-tab${active === tab ? ' pm-tab--active' : ''}`}
            onClick={() => setActive(tab)}
          >
            <span className="pm-tab__icon">{TAB_ICONS[tab]}</span>
            <span className="pm-tab__label">{tab}</span>
          </button>
        ))}
      </nav>

      {/* Pane */}
      <div
        className="pm-content"
        role="tabpanel"
        id={`pm-pane-${active.replace(/\s+/g, '-').toLowerCase()}`}
        aria-label={active}
        key={active}
      >
        {active === 'Scan & Pay'    && <QRPane />}
        {active === 'UPI Transfer'  && <UPIPane  copied={copied} onCopy={handleCopy} />}
        {active === 'Bank Transfer' && <BankPane copied={copied} onCopy={handleCopy} />}
      </div>

      {/* 80G strip */}
      <div className="pm-badge">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
        All donations are eligible for 80G tax exemption
      </div>

    </div>
  );

  if (!standalone) return panel;

  return (
    <section className="pm-section" aria-labelledby="pm-heading">
      <div className="pm-section__inner">

        <Reveal variant="fade-up">
          <p className="pm-section__overline">Payment Methods</p>
          <h2 className="pm-section__heading" id="pm-heading">How to Donate</h2>
          <p className="pm-section__subtext">
            Choose the most convenient method. All donations are eligible for 80G tax exemption.
          </p>
          <div className="pm-section__rule" aria-hidden="true" />
        </Reveal>

        <Reveal variant="fade-up" delay={0.15}>
          {panel}
        </Reveal>

      </div>
    </section>
  );
}
