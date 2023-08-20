import { useCounte } from "./hooks/useConuter";

function CounterFunction() {
    const { valorAtual, increment, decrement } = useCounte();

    
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