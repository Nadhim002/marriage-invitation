import React, { useEffect, useState } from "react";
import "./index.css";

import en from "./locales/en.json";
import ta from "./locales/ta.json";
import { daysBetween, buildGoogleCalendarLink } from "./utils";

const EVENT = {
  date: "2025-12-25",
  titleLeft: "Abdul Rasheed",
  titleRight: "Arshiya",
  venueName: "Rukra Mahal, Erode",
  mapLink:
    "https://maps.app.goo.gl/NhS2TUBbvrRKpREV8",
};

function App() {
  const [locale, setLocale] = useState("en");
  const L = locale === "en" ? en : ta;
  const [daysLeft, setDaysLeft] = useState(daysBetween(EVENT.date));

  useEffect(() => {
    const id = setInterval(
      () => setDaysLeft(daysBetween(EVENT.date)),
      1000 * 60 * 30
    );
    return () => clearInterval(id);
  }, []);

  const gcal = buildGoogleCalendarLink({
    dateStr: EVENT.date,
    title: `${EVENT.titleLeft} & ${EVENT.titleRight}`,
    details: L.calendarDetails,
    location: EVENT.venueName,
  });

  return (
    <div className="invitation-root">
      <div className="locale-toggle-fixed">
        <button
          className="lang-toggle"
          style={{background: 'none', border: 'none', padding: '0 8px', marginLeft: 8, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px'}}
          aria-label={locale === 'en' ? 'Switch to Tamil' : 'Switch to English'}
          onClick={() => setLocale(locale === 'en' ? 'ta' : 'en')}
        >
          <span style={{
            fontSize: '22px',
            fontWeight: locale === 'en' ? '700' : '400',
            color: locale === 'en' ? '#2e7d32' : '#bbb',
            background: locale === 'en' ? '#e8f5e9' : 'transparent',
            borderRadius: '6px',
            padding: '2px 6px',
            transition: 'color .2s,font-weight .2s,background .2s'
          }}>A</span>
          <span style={{
            fontSize: '22px',
            fontWeight: locale === 'ta' ? '700' : '400',
            color: locale === 'ta' ? '#2e7d32' : '#bbb',
            background: locale === 'ta' ? '#e8f5e9' : 'transparent',
            borderRadius: '6px',
            padding: '2px 6px',
            transition: 'color .2s,font-weight .2s,background .2s'
          }}>அ</span>
        </button>
      </div>
      <div className="card" role="main" aria-label={L.inviteFor}>
        <div className="topbar">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
            <div className="blessing" aria-hidden>
              بسم الله الرحمن الرحيم
            </div>
            <div className="intro-english">(WITH ALLAH'S BLESSINGS)</div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', alignItems: 'center', marginTop: '10px' }}>
          <div className="family-invite">{L.familyInvite}</div>

          <div className="names" aria-label={`${EVENT.titleLeft}`}>{EVENT.titleLeft}</div>
          <div className="amp" aria-hidden>&amp;</div>
          <div className="names" aria-label={`${EVENT.titleRight}`}>{EVENT.titleRight}</div>

          <div className="details">
            {new Date(EVENT.date).toLocaleDateString(
              locale === 'en' ? 'en-US' : 'ta-IN',
              { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' }
            )}
          </div>

          <div className="countdown" aria-live="polite">
            {daysLeft > 0 ? `${daysLeft} ${L.daysLeft}` : L.todayMessage}
          </div>

          <div className="venue">{EVENT.venueName}</div>

          <div className="meta-row" style={{marginTop: '18px'}}>
            <a
              className="meta-button"
              href={gcal}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={L.addToCalendar}
            >
              <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10h5v5H7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {L.addToCalendarShort}
            </a>

            <a
              className="meta-button"
              href={EVENT.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={L.openMap}
            >
              <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 10c0 6-9 11-9 11S3 16 3 10a9 9 0 1 1 18 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {L.map}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
