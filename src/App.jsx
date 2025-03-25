import GlobalStyle from "./style/GlobalStyle"
import { BrowserRouter, Routes, Route } from "react-router"
import Header from '../src/components/Header'
import styled from "styled-components"
function App() {
  return (
      <BrowserRouter>
        <GlobalStyle />
        <Header />
      </BrowserRouter>
  )
}
export default App
