import PRoutes from "./PRoutes";
import { db } from './firebase'
import { Outlet } from "react-router-dom";
import { createContext, useContext, useEffect, useState } from "react";
import Drumber from "./Component/Drumer";
export const userContext = createContext({})
function App() {
  const [user, setUser] = useState()

  useEffect(() => {
    const u = localStorage.getItem('user')
    setUser(JSON.parse(u))
  }, [])
  return (
    <div className="App">
      {/* <userContext.Provider value={{ state: { user, setUser } }}>
        <PRoutes/>
      </userContext.Provider> */}
    <div className="d-flex justify-content-center"><h1>LN_WEBWORKS</h1></div>
    <div className="d-flex justify-content-center"><h4>DRUMMER</h4></div>
    <Drumber/>
    </div>
  );
}

export default App;
