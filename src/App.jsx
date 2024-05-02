import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from './Components/Signin';
import SignUp from './Components/SignUp';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <AppProvider> */}
          <Routes>
            <Route element={<SignIn />} path='/' />
            <Route element={<SignUp />} path='/signup' />
            {/* <Route path="/dashboard" component={Dashboard} /> */}
          </Routes>
        {/* </AppProvider> */}
      </BrowserRouter>

    </div>
  )
}

export default App;