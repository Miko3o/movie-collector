import {useState} from 'react'
import './SearchBar.css';


type SearchMoviesProps = {
    searchMovies: any
  }


const SearchBar = (props: SearchMoviesProps) => {
    const {searchMovies} = props
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <div className="search">
        <input
          placeholder='Search'
          value={searchTerm}
          onChange = {(e) => setSearchTerm(e.target.value)}
        />
        <button onClick = {() => searchMovies(searchTerm)}>Search</button>
        </div>
    );
};

export default SearchBar;