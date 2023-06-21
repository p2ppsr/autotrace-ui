import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Trace from './pages/Trace'
import Transfer from './pages/Transfer'
import Receive from './pages/Receive'
import Header from './pages/Header'
import RepairRequest from './pages/RepairRequest'
import RepairResponse from './pages/RepairResponse'
import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#333333'
        },
        secondary: {
            main: '#DB7640'
        }
    }
})

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Router>
                    <div>
                        <Header />
                        <div>
                            <Routes>
                                <Route exact path='/' element={<Home />} />
                                <Route exact path='/Register' element={<Register />} />
                                <Route exact path='/Trace' element={<Trace />} />
                                <Route exact path='/Transfer' element={<Transfer />} />
                                <Route exact path='/Receive' element={<Receive />} />
                                <Route exacte path='/RepairRequest' element={<RepairRequest />} />
                                <Route exacte path='/RepairResponse' element={<RepairResponse />} />
                                <Route path='*' element={<Home />} />
                            </Routes>
                        </div>
                    </div>
                </Router>
            </CssBaseline>
        </ThemeProvider>
    )
}

export default App
