import GlobalStyle from "./style/GlobalStyle"
import { BrowserRouter, Routes, Route } from "react-router"
import Header from '../src/components/Header'
import OnDisplay from "./components/OnDisplay"
import axios from "axios"
import { useEffect, useState } from "react"
import Schedules from "./components/Schedules"
import Seats from "./components/Seats"
import OrderCompleted from "./components/OrderCompleted"



function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
      axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies')
      .then(res => setMovies(res.data))
      .catch(error => alert(error.data))
  }, [])

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<OnDisplay movies = {movies}/>}></Route>
        <Route path="/sessoes/:idFilme" element = {<Schedules />} />
        <Route path="/assentos/:idSessao" element =  {<Seats />}/>
        <Route path="/sucesso" element = {<OrderCompleted />}/>
      </Routes>

    </BrowserRouter>
  )
}
export default App
