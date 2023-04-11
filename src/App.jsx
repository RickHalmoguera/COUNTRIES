import { useState, useRef } from 'react'
import { Cards } from './components/Cards'

function App() {
  const [filter, setFilter] = useState('All')
  const optionRef = useRef()
  const searchRef = useRef()

  const handleChange = () =>{
    setFilter(optionRef.current.value)
  }

  const handleSearch = () =>{
    setFilter(searchRef.current.value)
  }
  return (
    <>
      <div className="header">
        <h1 className="header__title">Where in the world?</h1>
      </div>
      
      <div className="search">
        <input onChange={handleSearch} className="search__input" type="text" placeholder="Search for a country..."  ref={searchRef}/>
        <label htmlFor='region'>Filter by Region</label>
          <select onChange={handleChange} className="search__select" id="region" ref={optionRef} >
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="America">America</option>
            <option value="Oceania">Oceania</option>
          </select>
      </div>
      <Cards filter={filter}/>
    </>
  )
}

export default App
