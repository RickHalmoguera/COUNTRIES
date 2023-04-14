import { useParams, Link} from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa";

import { useEffect, useState } from "react"
import * as API from '../services/Countries'

export function MoreInfo() {
    const params = useParams()
    const [countryData, setCountryData] = useState([])

    useEffect(() => {
      API.GetCountryByName(params.country).then(setCountryData)
    }, [])
    
  if(countryData.length === 0) {
    return (
        <>
            <h1>Loading...</h1>
        </>
    )
  }
  return (
    <div className="moreInfo">
      {console.log(countryData)}
      <Link to={'/'}>
        <div className="button">
          <FaArrowLeft/> 
          <span>Back</span>
        </div>
      </Link>
      
      <div className="country">
        <img className="country__image" src={countryData[0].flags.png} alt={countryData[0].name.common}/>
        <div className='country__info__column1'>
          <h1>{countryData[0].name.common}</h1>
          <p className="column__tag">Native Name: <span className="column__data">{countryData[0].name.official}</span></p>
          <p className="column__tag">Population: <span className="column__data">{countryData[0].population.toLocaleString("en-US")}</span> </p>
          <p className="column__tag">Region: <span className="column__data">{countryData[0].region}</span> </p>
          <p className="column__tag">Sub Region: <span className="column__data">{countryData[0].subregion}</span> </p>
          <p className="column__tag">Capital: <span className="column__data">{countryData[0].capital}</span> </p>
        </div>
        <div className='info__column2'>
          <p className="column__tag">Top Level Domain: <span className="column__data">{countryData[0].tld}</span>  </p>
          <p className="column__tag">Currencies: <span className="column__data">{Object.values(countryData[0].currencies)[0].name}</span> </p>
          <p className="column__tag">Languages: <span className="column__data">{Object.values(countryData[0].languages).join(', ')}</span></p>
        </div>
      </div>
    </div>
  )
}
 