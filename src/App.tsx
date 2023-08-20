import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterFunction from './counter-fn'
import { ExampleUseEfect } from './exampleUseEfect'

function App() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://chakra-ui.com" target="_blank">
          <img src="data:image/jpeg;base64,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" className="ChakraUI" alt="Chakra UI" />
        </a>
      </div>
      <h1>Projeto de Ensino de Programação</h1>
      <h2>Vite + React + TypeScript e chakra Ui</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          O contatdor é {count}
        </button>
      </div>
      <p className="read-the-docs">
      Clique nos logotipos Vite e React para saber mais
      </p>
      <div>
        <CounterFunction />
      </div>
      <p className="read-the-docs">
       Exemplo de um ciclo de vida de um componente utilzizando useEffect
      </p>
      <div>
        {isVisible && <ExampleUseEfect/>}
        <button onClick={()=>{setIsVisible(!isVisible)}}>clique aqui para esconder</button>
      </div>
    </>
  )
}

export default App
