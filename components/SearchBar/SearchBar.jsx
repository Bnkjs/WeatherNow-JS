
export const SearchBar = (handleFunc) => {
  return(<div id='searchBar'>
     <form className="search-input">
       <input type="text" name='user-search' id='user-search' />
     </form>
     <button onClick={handleFunc}>Rechercher</button>
  </div>)
}