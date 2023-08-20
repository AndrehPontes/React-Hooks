import { useState } from "react";

export function useCounte () {
    const [valorAtual, setValorAtual] = useState (7);

    const increment = () => {
        setValorAtual(prevCount => prevCount + 1)
    };

    const decrement = () => {
        setValorAtual(prevCount => prevCount + 1)
    };

    return {
        valorAtual,
        increment,
        decrement
    }

}