import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Header } from '../components/Header/Header'
import { SearchBar } from '../components/SearchBar/SearchBar' 
import { Navbar } from '../components/NavBar/NavBar'
export default function Home() {
  return (<div id="container-app">
      <Navbar/>
      <Header/>
  </div>
  )  
}
