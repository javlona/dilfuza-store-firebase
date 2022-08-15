import React from 'react'
import { signInWithGoogle } from '../Firebase'

function SignIn() {
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  )
}

export default SignIn