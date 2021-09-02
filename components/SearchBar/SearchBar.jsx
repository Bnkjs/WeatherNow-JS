
export const SearchBar = ({inputChange, handleFunc}) => {
  return(<div id='searchBar'>
     <form id="form-weather">
       <input 
        type="text" 
        name='search-input' 
        placeholder='Paris, Antalya, Lomé...' 
        className='search-input' 
        onChange={inputChange} 
       />
     </form>
     <button onClick={handleFunc}>Rechercher</button>
  </div>)
}