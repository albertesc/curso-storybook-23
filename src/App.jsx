import { useState } from 'react'
import { Button } from "./components/Button/Button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Button 
        typeButton="primary"
        onClick={() => setCount((count) => count + 1)}
        label={`count is ${count}`} 
      />
    </>
  )
}

export default App
