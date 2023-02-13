import {SyntheticEvent, useState} from 'react'
import './SearchBar.css';


type SearchMoviesProps = {
    searchMovies: (searchTerm: string) => void
  }


const SearchBar = (props: SearchMoviesProps) => {
    const {searchMovies} = props
    const [searchTerm, setSearchTerm] = useState('')

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value)
    }

    const handleOnClick = () => {
      searchMovies(searchTerm)
    }

    return (
        <div className="ui-searchbar-wrapper">
          <input
            placeholder='Search'
            value={searchTerm}
            onChange = {handleOnChange}
          />
          <button onClick = {handleOnClick}>Search</button>
        </div>
    );
};

export default SearchBar;