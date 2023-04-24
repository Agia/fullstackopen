/* eslint-disable react/prop-types */
const Info = ({ country }) => {

  return (
    <div className="info">
      <h2>{country.name.common}</h2>
      <img
        src={country.flags.png}
        alt={country.flags.alt}
        width="150px"
        height="100px"
      />
        <div className="stats">
          <p><strong>Capital City: </strong>{country.capital}</p>
          <p><strong>Area: </strong>{country.area}</p>
        </div>

      <h3>Languages</h3>
      <div>
        {
          Object.entries(country.languages).map(([key, language]) => {
            return <li key={key}>{language}</li>
          })
        }
      </div>
    </div>
  )
}

export default Info