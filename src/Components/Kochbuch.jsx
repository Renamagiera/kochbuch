import '../App.css';
import Rezeptkarte from "./Rezeptkarte.jsx";

export default function Kochbuch() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">Kochbuch</h1>
            <Rezeptkarte/>
        </div>
    )
}