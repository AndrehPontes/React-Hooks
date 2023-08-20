import { useState } from "react";

function CounterFunction() {
    const [valorAtual, setValorAtual] = useState(0);

    const increment = () => {
        setValorAtual(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setValorAtual(prevCount => prevCount - 1);
    };

    return (
        <div>
            <h2>Contador Usando hook useState</h2>
            <p>Contagem: {valorAtual}</p>
            <button onClick={decrement}>Decrementar</button>
            <button onClick={increment}>Incrementar</button>
            
        </div>
    )
}

export default CounterFunction