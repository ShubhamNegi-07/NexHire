import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'
import './App.css'

function App() {
  return (
    <>
    <h1>Welcome to the app </h1>

    <SignedOut>
      <SignInButton mode='model'/>
      <button>Login</button>
    </SignedOut>

    <SignIn>
      <SignOutButton />
    </SignIn>

    <UserButton/>
    </>
  )
}

export default App