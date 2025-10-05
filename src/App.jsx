import { useEffect, useState } from "react";
import "./index.css";

import en from "./locales/en.json";
import ta from "./locales/ta.json";
import { daysBetween, buildGoogleCalendarLink } from "./utils";
import { SlCalender } from "react-icons/sl";
import { PiMapPinAreaLight } from "react-icons/pi";

const EVENT = {
  date: "2025-12-25",
  titleLeft: "Abdul Rasheed",
  titleRight: "Arshiya",
  venueName: "Rukra Mahal, Erode",
  mapLink: "https://maps.app.goo.gl/NhS2TUBbvrRKpREV8",
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
          style={{
            background: "none",
            border: "none",
            padding: "0 8px",
            marginLeft: 8,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
          aria-label={locale === "en" ? "Switch to Tamil" : "Switch to English"}
          onClick={() => setLocale(locale === "en" ? "ta" : "en")}
        >
          <span
            style={{
              fontSize: "22px",
              fontWeight: locale === "en" ? "700" : "400",
              color: locale === "en" ? "#2e7d32" : "#bbb",
              background: locale === "en" ? "#e8f5e9" : "transparent",
              borderRadius: "6px",
              padding: "2px 6px",
              transition: "color .2s,font-weight .2s,background .2s",
            }}
          >
            A
          </span>
          <span
            style={{
              fontSize: "22px",
              fontWeight: locale === "ta" ? "700" : "400",
              color: locale === "ta" ? "#2e7d32" : "#bbb",
              background: locale === "ta" ? "#e8f5e9" : "transparent",
              borderRadius: "6px",
              padding: "2px 6px",
              transition: "color .2s,font-weight .2s,background .2s",
            }}
          >
            அ
          </span>
        </button>
      </div>
      <div className="card" role="main" aria-label={L.inviteFor}>
        <div className="topbar">
          <div
            style={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <div
              className="blessing flex"
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: 24,
                fontWeight: 700,
              }}
              aria-hidden
            >
              بسم الله الرحمن الرحيم
            </div>
            <div className="intro-english">(WITH ALLAH'S BLESSINGS)</div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <div className="family-invite">{L.familyInvite}</div>

          <div
            style={{ fontFamily: "cursive" }}
            className="names"
            aria-label={`${EVENT.titleLeft}`}
          >
            {EVENT.titleLeft}
          </div>
          <div className="amp" aria-hidden>
            &amp;
          </div>
          <div
            style={{ fontFamily: "cursive" }}
            className="names"
            aria-label={`${EVENT.titleRight}`}
          >
            {EVENT.titleRight}
          </div>

          <div className="details">
            {new Date(EVENT.date).toLocaleDateString(
              locale === "en" ? "en-US" : "ta-IN",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
                weekday: "long",
              }
            )}
          </div>

          <div className="countdown" aria-live="polite">
            {daysLeft > 0 ? `${daysLeft} ${L.daysLeft}` : L.todayMessage}
          </div>

          <div className="venue">{EVENT.venueName}</div>

          <div className="meta-row" style={{ marginTop: "18px" }}>
            <a
              className="meta-button"
              href={gcal}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={L.addToCalendar}
            >
              <SlCalender />
              {L.addToCalendarShort}
            </a>

            <a
              className="meta-button"
              href={EVENT.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={L.openMap}
            >
              <PiMapPinAreaLight />
              {L.map}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
//https://uiverse.io/anand_4957/moody-ladybug-99
