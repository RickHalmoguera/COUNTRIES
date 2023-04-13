import { useEffect, useState,useRef } from "react"
import { Link } from 'react-router-dom'
import * as API from '../services/Countries'

export function Cards(props) {
    const [countriesData, setCountriesData] = useState([])
    const [filter, setFilter] = useState('All')
    const optionRef = useRef()
    const searchRef = useRef()

    const handleChange = () =>{
        setFilter(optionRef.current.value)
    }

    const handleSearch = () =>{
        setFilter(searchRef.current.value)
    }
    useEffect(() => {
        if(props.filter ==='All' || filter === '') {
            API.GetAllCountries().then(setCountriesData)
        } else if(filter ==='Africa' || filter ==='Asia' || filter ==='Europe' || filter ==='America' || filter ==='Oceania') {
            API.GetCountriesByRegion(filter).then(setCountriesData)
        } else {
            API.GetCountryByName(filter).then(setCountriesData)
        }
    }, [filter]);
    
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
                <h1>Sorry no found by the name "{filter}"</h1>
            </div>
        )
    }
  
  return (
    <>
        
        <div className="search">
            <input onChange={handleSearch} className="search__input" type="text" placeholder="Search for a country..."  ref={searchRef}/>
            <select onChange={handleChange} className="search__select" id="region" ref={optionRef} >
                <option label="Filter by region"></option>
                <option value="All">All</option>
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="America">America</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
        <div className="cards">  
            {countriesData.map((country) => (
                <Link key={country.name.common}to={`/country/${country.name.common}`}>
                    <div className="card" >
                        <img className="card__image" src={country.flags.png} alt={country.name.common} />
                        <div  className="card__text">
                            <h2 className="card__text__name">{country.name.common} <span className="card__text__info"></span></h2>
                            <p className="card__text__tag">Population: <span className="card__text__info"> {country.population.toLocaleString("en-US")}</span></p>
                            <p className="card__text__tag">Region: <span className="card__text__info">{country.region}</span></p>
                            <p className="card__text__tag">Capital: <span className="card__text__info">{country.capital}</span></p>
                        </div>
                    </div>
                </Link>
                
            ))}
        </div>
    </>
  )
}
