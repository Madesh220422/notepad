import React from 'react'
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import { HashRouter,Route,Routes } from 'react-router-dom'
import NoteName from './pages/Notepage'
import './App.css'
function App() {
  return (
    <>
    <div className='container dark'>
      <div className='app'>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<NotesListPage />} />
          <Route path="/note/:id" element={<NoteName />} />
        </Routes>
      </HashRouter>
      </div>
      </div>
    </>
  )
}

export default App