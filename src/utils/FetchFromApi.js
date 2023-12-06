import axios from "axios"
const URL = 'https://youtube-v31.p.rapidapi.com'
const options = {params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key':  import.meta.env.VITE_YT_CLONE_API_KEY,
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