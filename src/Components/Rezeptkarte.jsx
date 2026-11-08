import '../App.css';

export default function Rezeptkarte() {
    return (
        <div className="w-60 bg-white p-5 flex flex-col items-center">
            <h1 className="p-1">Nudelsalat</h1>
            <img src="../../public/assets/Nudelsalat.jpg" alt="Rezeptbild" className="w-50 p-1"/>
            <p className="p-1">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                no sea takimata sanctus est Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua.
            </p>
        </div>
    )
}