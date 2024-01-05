import apod from "../type/apod";

export const fetchAPOD = async (date: string) => {
    if (!date) return null;
  
    const key: string = process.env.NASA_API_KEY || ""
  
    try {
      const url = "https://api.nasa.gov/planetary/apod?" + new URLSearchParams({
        api_key: key,
        date: date || "",
        thumbs: 'True'
      })
  
      const res = await fetch(url)
  
      if (!res.ok) {
        console.log("APOD response not ok")
        console.log(`APOD reponse ${res.status}`)
        return null;
      }
  
      const data: apod = await res.json();
  
      console.log(`APOD fetch for ${date}`)
      return data;
    } catch (err) {
      console.log("APOD fetch ERROR")
      console.log(err)
      return null;
    }
  };