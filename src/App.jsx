import './App.css'
import ReactGA from 'react-ga4'
import { linksData } from './Links'

// ReactGA.initialize(import.meta.env.VITE_TRACKING_ID)

export default function App() {
  const copyText = async (e, link) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(link);
      console.log('Link copied to clipboard');
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
  }

  return (
    <>
      <img id="backgroundTemplate" src="/background.jpg" alt="" />

      <div className="container">
        <h1>Shubham Lal</h1>

        <p className="about">
          <span>Hello, I&apos;m Shubham, a Junior Developer with over 2+ year of experience.</span>
          <span>Currently, I am working as Freelance Developer at <a href="https://ubix.agency" target="_blank" rel="noreferrer">Ubix Agency</a>.</span>
          <span>Below are some of the useful links. Do check those out.</span>
        </p>

        <div className="links">
          {linksData.map((item, i) => (
            <a key={i} className="tile" href={item.link} target="_blank" rel="noreferrer">
              <div className="icon">
                {item.icon}
              </div>
              <p>{item.title}</p>
              <div className="tile-share-button" onClick={(e) => copyText(e, item.link)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  className="bi bi-clipboard" viewBox="0 0 16 16">
                  <path
                    d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                  <path
                    d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
