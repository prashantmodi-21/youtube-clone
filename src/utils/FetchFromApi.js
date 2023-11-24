import axios from "axios"
const URL = 'https://youtube-v31.p.rapidapi.com'
const options = {params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'e6b18c4d91msh07a867471a62da8p144295jsn99e08db295e7',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }}
export const FetchApi = async(query)=>{
  try {
    const { data } = await axios.get(`${URL}/${query}`, options)
    return data
  } catch (error) {
    console.log("Failed to Load Resources")
  }
}