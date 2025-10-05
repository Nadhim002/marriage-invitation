
import './index.css'

function App() {
  return (
    <div className="invitation-root">
      <div className="card">
        {/* decorative leaves */}
        <svg className="leaf top-right" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <g fill="none" fillRule="evenodd">
            <path d="M20 140 C40 90, 120 70, 160 40 C150 80, 100 120, 60 150 C40 160, 20 150, 20 140Z" fill="#b7e8a6" />
            <path d="M30 130 C50 100, 110 90, 150 60" stroke="#4a9616" strokeWidth="2" fill="none"/>
          </g>
        </svg>

        <svg className="leaf bottom-left" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <g fill="none" fillRule="evenodd">
            <path d="M180 60 C160 110, 80 130, 40 160 C50 120, 100 80, 140 50 C160 40, 180 50, 180 60Z" fill="#c9f3b6" />
            <path d="M170 70 C150 100, 100 110, 60 140" stroke="#4a9616" strokeWidth="2" fill="none"/>
          </g>
        </svg>

        <div className="small-muted" style={{fontSize: '16px'}}>بسم الله الرحمن الرحيم</div>
        <div className="intro-english">(WITH ALLAH'S BLESSINGS)</div>
        <div className="small-muted" style={{marginTop:12}}>Assalamualaikum warahmatullahi wabarakatuh</div>

        <div className="family-invite">Shafieullah and family warmly invite<br/>you to their Son's Nikkah</div>

        <div className="names">Abdul Rasheed</div>
        <div className="amp">&amp;</div>
        <div className="names">Arshiya</div>

        <div className="details">December 25, 2025 Thursday</div>
        <div className="details" style={{marginTop:8}}>11:30am - 12:30pm</div>
        <div className="details" style={{marginTop:8}}>Rukra Mahal, Erode</div>
      </div>
    </div>
  )
}

export default App
