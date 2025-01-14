import { useState } from 'react'
import { LoginForm } from './components/LoginForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-ecoblue to-ecoblue-light p-4">
      <LoginForm />
    </div>
    </>
  )
}

export default App
