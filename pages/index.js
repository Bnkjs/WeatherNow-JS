import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Header } from '../components/Header/Header'
import { Navbar } from '../components/NavBar/NavBar'
import { WeatherResult } from '../components/WeatherResult/WeatherResult'
export default function Home() {
  return (<div id="container-app">
      <Navbar/>
      <Header/>
      <WeatherResult/>
  </div>
  )  
}
