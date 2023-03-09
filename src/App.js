import axios from "axios"
import {useEffect , useState} from "react"
import City from "./City"


function App() {
  const KEY = "4aed6dda1f0d60d793a922be00a7cc23"
  const [search,setSearch] = useState("istanbul")
  const [city, setCity] = useState()

  useEffect(() => {
    async function getWeather() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${KEY}&units=metric`);
        console.log(response)
        setCity(response.data)
      } catch (error) {
        console.error(error);
      }
    }getWeather()
  }, [search])
  

  return (
    <div className="App flex justify-center h-screen min-w-[400px] bg-gradient-to-r from-[#74EBD5] to-[#9FACE6]">
      <div className="main mt-8 ">
        <input 
        type="text" 
        placeholder="Search City"
        onKeyDown={(e) => setSearch(e.target.value)} 
        className="outline-lime-300 text-2xl p-6 font-md text-center bg-gradient-to-r from-[#D3CCE3] to-[#E9E4F0] opacity-60 tracking-widest  h-[40px] rounded-lg border-solid border-2  border-yellow-100 ml-2" />
        {city && <City city={city} />} 
      </div>
    </div>
  );
}

export default App;
