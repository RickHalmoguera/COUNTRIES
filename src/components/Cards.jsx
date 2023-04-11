import { useEffect, useState } from "react"
import * as API from '../services/Countries'

export function Cards(props) {
    const [countriesData, setCountriesData] = useState([])
    

    useEffect(() => {
        if(props.filter ==='All' || props.filter === '') {
            API.GetAllCountries().then(setCountriesData)
        } else if(props.filter ==='Africa' || props.filter ==='Asia' || props.filter ==='Europe' || props.filter ==='America' || props.filter ==='Oceania') {
            API.GetCountriesByRegion(props.filter).then(setCountriesData)
        } else {
            API.GetCountryByName(props.filter).then(setCountriesData)
        }
    }, [props.filter]);
    
    if(countriesData.length === 0) {
        return (
            <>
                <h1>Loading...</h1>
            </>
        )
    }

    if (countriesData.status === 404) {
        return (
            <div className="cards">
                <h1>Sorry no found by the name "{props.filter}"</h1>
            </div>
        )
    }
  
  return (
    <div className="cards">  
        {countriesData.map((country) => (
            <div className="card" key={country.name.common}>
                <img className="card__image" src={country.flags.png} alt={country.name.common} />
                <div  className="card__text">
                    <h2 className="card__text__name">{country.name.common} <span className="card__text__info"></span></h2>
                    <p className="card__text__tag">Population: <span className="card__text__info"> {country.population.toLocaleString("en-US")}</span></p>
                    <p className="card__text__tag">Region: <span className="card__text__info">{country.region}</span></p>
                    <p className="card__text__tag">Capital: <span className="card__text__info">{country.capital}</span></p>
                </div>
            </div>
            
        ))}
    </div>
  )
}
