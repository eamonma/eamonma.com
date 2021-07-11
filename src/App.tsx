import { AnimateSharedLayout } from "framer-motion"
import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import "./App.css"
import Hermes from "./pages/Hermes"
import Home from "./pages/Home"
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
