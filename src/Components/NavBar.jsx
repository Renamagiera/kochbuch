import '../App.css';
import {NavLink} from "react-router";
import {useState, useRef, useEffect} from "react";


export default function NavBar() {

    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleOpen = () => {
        setOpen(!open);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        }

        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open]);

    return (
        <div ref={dropdownRef} className="sticky top-0">
            <nav className="bg-blue-400 shadow-lg mx-6 mt-4 py-3 relative">
                <div className="flex text-2xl mx-5 md:text-lg">
                    <div className="mr-auto md:hidden">
                        <button onClick={handleOpen} className="button-style">Menü</button>
                    </div>
                    <div className="hidden md:flex items-center justify-start mr-auto">
                        <NavLink to="/" className="button-style">Home</NavLink>
                        <NavLink to="/overview" className="button-style">Übersicht</NavLink>
                        <NavLink to="/detail" className="button-style">Detail</NavLink>
                        <NavLink to="/add" className="button-style">Rezepte Hinzufügen</NavLink>
                    </div>
                    <div className="ml-auto">
                        <button className="button-style">Anmelden</button>
                    </div>
                </div>
            </nav>
            {open ? (
                <div className="bg-blue-400 shadow-lg mx-6 w-3/5 absolute sm:w-2/5">
                    <div className="flex flex-col justify-center">
                        <NavLink to="/" onClick={handleOpen} className="button-style">Home</NavLink>
                        <NavLink to="/overview" onClick={handleOpen} className="button-style">Übersicht</NavLink>
                        <NavLink to="/detail" onClick={handleOpen} className="button-style">Detail</NavLink>
                        <NavLink to="/add" onClick={handleOpen} className="button-style">Rezepte Hinzufügen</NavLink>
                    </div>
                </div>
            ) : null}
        </div>
    )
}