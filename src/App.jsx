import './App.css'
import Kochbuch from "./Components/Kochbuch.jsx";
import Header from "./Components/Header.jsx";

function App() {
    return (
        <div id="main" className="bg-blue-300 h-full">
            <Header />
            <Kochbuch/>
        </div>
    );
}

export default App;