import { Index } from "./pages/Index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { World } from "./pages/World";
import { AppLayout } from "./components/Layout/AppLayout";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children:[
        {
          path: '/', // Root paths should start with '/'
          element: <Index />,
        },
        {
          path:'/About',
          element: <About/>,
        },
        {
          path:'/Contact',
          element: <Contact/>,
        },
        {
          path:'/World',
          element: <World/>,
        },
      ],

    },
    
  ]);

  return <RouterProvider router={router} />;
};

export default App; 