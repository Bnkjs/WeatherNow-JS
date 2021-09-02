import '../styles/globals.css'
import '../components/Header/Header.scss'
import '../components/SearchBar/SearchBar.scss'
import '../components/NavBar/NavBar.scss'
import '../components/WeatherResult/WeatherResult.scss'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
