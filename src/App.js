import { RouterProvider, createBrowserRouter , Outlet } from 'react-router-dom';
import './App.scss';
//pages
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
//components
import Navbar from "./components/Navbar/Navbar.jsx"
import Footer from "./components/Footer/Footer.jsx";

function App() {
  function Layout(){
    return(
      <>
      <Navbar />
      <Outlet />
      <Footer />
      </>
    )
  }
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/about",
          element:<About />
        }
      ]
    },
    {
      path:"/signup",
      element:<SignUp />
    },
    {
      path: "/signin",
      element: <SignIn />
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
