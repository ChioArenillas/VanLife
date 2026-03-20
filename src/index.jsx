import { createRoot } from "react-dom/client"
import App from "./App"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./About"


const root = createRoot(document.getElementById("root"))
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/" element={<About/>}/>
        </Routes>
    </BrowserRouter>
)


