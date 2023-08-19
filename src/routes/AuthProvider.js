import Login from './Login';

export default function AuthProvider (routes,isLoggedIn){
  return routes.map(route=> ({
    ...route, element: route.isProtected && !isLoggedIn ? <Login /> : route.element
  }) )
};
