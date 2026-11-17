import '../App.css';
import {NavLink} from "react-router";

export default function NavBar() {
    return (
        <nav className="bg-blue-400 shadow-lg rounded-2xl sticky top-0 mx-6 mt-4 py-3">
            <div className="flex text-lg mx-5">
                <div className="mr-auto flex items-center justify-start">
                    <NavLink to="/" className="button-style">Home</NavLink>
                    <NavLink to="/overview" className="button-style">Übersicht</NavLink>
                    <NavLink to="/detail" className="button-style">Detail</NavLink>
                    <NavLink to="/add" className="button-style">Rezepte Hinzufügen</NavLink>
                </div>
                <div className="">
                    <button className="button-style">Anmelden</button>
                </div>
            </div>
        </nav>
    )
}