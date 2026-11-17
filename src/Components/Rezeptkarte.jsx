import '../App.css';

export default function Rezeptkarte() {
    return (
        <div className="bg-white p-5 flex flex-col w-11/12 shadow-lg rounded-2xl mb-5 md:px-20 xl:w-9/12">
            <h1 className="p-1 py-4 font-bold text-2xl text-center">Polnische Gurkensuppe</h1>
            <hr className="border-1 border-blue-200"/>
            <div className="flex flex-col lg:flex-row lg:flex-wrap">
                <div className="sm:basis-2/5">
                    <img src="/assets/gurkensuppe.jpeg" alt="Rezeptbild" className="p-4 object-cover object-center"/>
                    <div id="description" className="p-4">
                        <div className="flex gap-1">
                            <h2 className="font-bold">Zubereitungszeit: </h2>
                            <p>40 Minuten</p>
                        </div>
                        <div>
                            <h2 className="font-bold">Hinweise: </h2>
                            <p className="">
                                Wichtig ist, dass für die Suppe eingelegte Gurken in Milchsäure-Lake benötigt werden
                                (nicht
                                Essig).
                            </p>
                        </div>
                    </div>
                </div>
                <div id="ingredients" className="p-4 sm:basis-1/5">
                    <h2 className="font-bold pb-3">Zutaten</h2>
                    <ol className="ingredients-style">
                        <li>420 g Gurken (Abtropfgewicht)</li>
                        <li>450 g Kartoffeln</li>
                        <li>1 Möhre</li>
                        <li>1-2 Knoblauchzehen</li>
                        <li>100 g Sahne</li>
                        <li>1 TL Gemüsebrühe</li>
                        <li>1 TL Salz</li>
                        <li>Pfeffer</li>
                        <li>Muskat</li>
                    </ol>
                </div>
                <div id="instructions" className="p-4 sm:basis-2/5">
                    <h2 className="font-bold pb-3">Zubereitung</h2>
                    <div className="p-1">
                        <ul className="instructions-style">
                            <li>
                                <h2>Schritt 1</h2>
                                <p>
                                    Die Gurken-Packung öffnen und die Lake unbedingt aufbewahren! Gurken grob raspeln.
                                    Die Kartoffeln schälen und in kleine Würfel schneiden.
                                </p>
                            </li>
                            <li>
                                <h2>Schritt 2</h2>
                                <p>
                                    Die Gurken und Kartoffeln müssen in zwei separaten Töpfen gekocht werden.
                                    Die Gurken in der Gurken-Lake kochen. Die Kartoffeln in Wasser mit einem Teelöffel
                                    Salz und einem Teelöffel Gemüsebrühe kochen. Beides für etwa 20 Minuten
                                    köcheln lassen.
                                </p>
                            </li>
                            <li>
                                <h2>Schritt 3</h2>
                                <p>
                                    Nach dem Kochen die Gurken ohne das Kochwasser zu den Kartoffeln geben. Es kann
                                    etwas vom Wasser aufgehoben werden, falls die Säure nachher nicht ausreicht.
                                    Eine Möhre schälen und fein hineinraspeln. Sahne hinzufügen und die Suppe kurz
                                    aufkochen lassen.
                                </p>
                            </li>
                            <li>
                                <h2>Schritt 4</h2>
                                <p>
                                    Die Hitze runternehmen.
                                    Den gepressten Knoblauch dazugeben. Mit etwas Salz, Pfeffer und Muskatnuss
                                    abschmecken.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}