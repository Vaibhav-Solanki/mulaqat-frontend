import Login from './Login';
import SidebarWithHeader from './NavBar';

export default function AuthProvider (routes,isLoggedIn){
  return routes.map(route=>{
    const element = route.navbar ? <SidebarWithHeader>{route.element}</SidebarWithHeader> : route.element
    route.element = route.isProtected && !isLoggedIn ? <Login /> : element
    return route
  }  )
};
