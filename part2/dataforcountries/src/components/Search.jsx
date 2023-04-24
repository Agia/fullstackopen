/* eslint-disable react/prop-types */
const Search = ({ value, onChange }) => {
  
  return (
    <fieldset>
        <label htmlFor='search'>Search Country: </label>
        <input
          type='search'
          id='search'
          value={value}
          onChange={onChange}
        />
      </fieldset>
  )
}

export default Search;