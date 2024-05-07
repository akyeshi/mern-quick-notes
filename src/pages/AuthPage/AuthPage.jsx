import { useState } from 'react';
import LoginForm from "../../components/LoginForm/LoginForm"
import SignUpForm from "../../components/SignUpForm/SignUpForm"

export default function AuthPage({ setUser }) {

  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <main>
      <h1>AuthPage</h1>
      {/* click button to flip the 'showSignUp' state value, base on its value, render button text accordingly  */}
      <button onClick={() => setShowSignUp(!showSignUp)} >{showSignUp ? 'Log In' : 'Sign Up'}</button>

      {/* based on the value of the 'showSignUp' state variable, render form accordingly */}
      {showSignUp ?
        <SignUpForm setUser={setUser} />
        :
        <LoginForm setUser={setUser} />
      }
    </main>
  )
}