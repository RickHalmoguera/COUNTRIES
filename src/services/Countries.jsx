const API_URL = 'https://restcountries.com/v3.1'

export async function GetAllCountries() {

   
    try{
        const response = await fetch(`${API_URL}/all`)
        const data = await response.json()
        return data
    }catch(error){
        return error
    }
}

export async function GetCountriesByRegion(region) {

    try{
        const response = await fetch(`${API_URL}/region/${region}`)
        const data = await response.json()
        return data
    }catch(error){
        return error
    }
}

export async function GetCountryByName(name) {
   
    try{
        const response = await fetch(`${API_URL}/name/${name}`)
        const data = await response.json()
        return data
    }catch(error){
        return error;
    }
}