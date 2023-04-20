import axios from "axios";

export default async function apiCall(req, res) {
    const apiKey = process.env.NEXT_PUBLIC_NASA_API_KEY
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;


try {
    const response = await axios.get(url)
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
