
import './App.css'
import AuthRoute from './AuthRoute'
import Header from './components/Header'
import Home from './pages/Home'
import Private from './pages/Private'
import UserDetail from './pages/UserDetail'
import Users from './pages/Users'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {


  return (
    <>
    <BrowserRouter> {/* Al usar react-router-dom tenemos que meter dento de BrowserRouter la app para que funcione */}
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:userId' element={<UserDetail />} />
        <Route path='/private' element={
          <AuthRoute>
            <Private />
          </AuthRoute>
        }/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
