import '../App.css';

export default function Header() {
    return (
        <div id="header" className="flex-no-wrap relative sticky top-0 flex w-full items-center justify-between bg-neutral-100 py-4">
            <div id="nav" className="flex w-full flex-wrap items-center justify-between px-6">
                <li>Rezepte Übersicht</li>
                <li>Rezepte Detail</li>
                <li>Neues Rezept erstellen</li>
            </div>
        </div>
    )
}