import './App.css'
import { Routes, Route } from "react-router";

import NavBar from "./Components/NavBar.jsx";

import Home from "./pages/Home.jsx";
import RecipeAddDialog from "./pages/RecipeAddDialog.jsx";
import RecipeOverview from "./pages/RecipeOverview.jsx";
import RecipeDetail from "./pages/RecipeDetail.jsx";

function App() {
    return (
        <div className="bg-blue-300 min-h-screen flex flex-col justify-center items-stretch">
            <NavBar/>
            <main className="flex-1 flex flex-col justify-center items-center">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/overview" element={<RecipeOverview/>}/>
                    <Route path="/detail" element={<RecipeDetail/>}/>
                    <Route path="/add" element={<RecipeAddDialog/>}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;