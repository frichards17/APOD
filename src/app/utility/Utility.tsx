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
        console.log("response not ok")
        return null;
      }
  
      const data: apod = await res.json();
  
      console.log("successfully fetched apod")
      console.log(data)
      return data;
    } catch (err) {
      console.log("apod fetch ERROR")
      console.log(err)
      return null;
    }
  };