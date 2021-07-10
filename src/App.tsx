import React from "react"
import logo from "./logo.svg"
import "./App.css"
import styled, { ThemeProvider } from "styled-components"
import { AnimateSharedLayout } from "framer-motion"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./pages/Home"
import Hermes from "./pages/Hermes"
import Notepool from "./pages/Notepool"
import Wikigraph from "./pages/Wikigraph"
import theme from "./theme"

function App() {
    return (
        <AnimateSharedLayout type="crossfade">
            <BrowserRouter>
                <Switch>
                    <ThemeProvider theme={theme}>
                        <Route path="/" exact component={Home} />
                        <Route path="/hermes" exact component={Hermes} />
                        <Route path="/notepool" exact component={Notepool} />
                        <Route path="/wikigraph" exact component={Wikigraph} />
                    </ThemeProvider>
                </Switch>
            </BrowserRouter>
        </AnimateSharedLayout>
    )
}

export default App
