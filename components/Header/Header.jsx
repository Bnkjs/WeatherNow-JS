import { SearchBar } from '/components/SearchBar/SearchBar' 

export const Header = ()=> {
  return( <>
      <header>
        <h1 className="header-title">WeatherNow</h1>
        <p className='header-content'>La méteo? D'accord.. <br />Mais de quelle ville? </p>
        <SearchBar/>
      </header>
    </>
  )
}