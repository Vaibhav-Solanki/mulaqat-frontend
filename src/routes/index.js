import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

import authProvider from './AuthProvider';
import { app } from '../firebase/index'

import Home from './Home';
import Dashboard from './Dashboard'
import SidebarWithHeader from './NavBar';

export default function Routes () {
  const auth = getAuth(app);

  const [user, loading, error] = useAuthState(auth);

  const router = createBrowserRouter(authProvider([
    {
      path: "/",
      element: <Home/>,
      isProtected: true,
      navbar:true
    }, {
      path: "/dashboard",
      element: <Dashboard />,
      isProtected: true,
      navbar:true
    }
  ], user));

  return <RouterProvider router={router} />

}


