import GlobalStyle from "./style/GlobalStyle"
import { BrowserRouter, Routes, Route } from "react-router"
import Header from '../src/components/Header'
import OnDisplay from "./components/OnDisplay"
import axios from "axios"
import { useEffect, useState } from "react"



function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
      axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies')
      .then(res => setMovies(res.data))
      .catch(error => error.data)
  }, [])

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<OnDisplay movies = {movies}/>}></Route>
      </Routes>

    </BrowserRouter>
  )
}
export default App
