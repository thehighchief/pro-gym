import { Outlet } from "react-router-dom"

const NavBar = () => {

  return (
    <div >
        <div >

            <header>Pro Gym</header>

        </div> 

        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default NavBar