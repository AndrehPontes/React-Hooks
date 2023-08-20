import { useState, useEffect } from "react";

export function ExampleUseEfect() {
    const [value, setValue] = useState('initial valuwe');
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        console.log("Hello from useEffect");

        return () => {
            console.log("Hello from desctrution")
        }
    }, [])

    return (
        <div>
            <h2>Ciclo de vida de um componente com UseEffect</h2>
            <input
               type="text"
               value={value}
               onChange={(e) => setValue(e.target.value)}
            />
            
            <input
               type="checkbox"
               checked={checked}
               onChange={(e) => setChecked(e.target.checked)}
            />
        </div>
    )
}
