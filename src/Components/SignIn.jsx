// frontend/src/SignIn.js
import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSignIn = async () => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      history.push("/dashboard");
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div class="w-full max-w-md">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 mb-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 mb-2"
        />
        <button
          onClick={handleSignIn}
          className="w-full bg-blue-500 text-white p-2"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

export default SignIn;