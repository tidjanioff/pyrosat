import { useState, useEffect } from 'react'
import Map from './components/Map'
import Loader from './components/Loader'
import Header from './components/Header'
import Logo from './components/Logo'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)
  const [showLanding, setShowLanding] = useState(true) 

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()
      setEventData(events)
      setLoading(false)
    }
    fetchEvents()
  }, [])

  if (showLanding) {
    return <LandingPage onEnter={() => setShowLanding(false)} /> 
  }

  return (
    <div>
      <Header />
      <Logo />
      { !loading ? <Map eventData={eventData} /> : <Loader /> }
      <Footer />
    </div>
  )
}

export default App
