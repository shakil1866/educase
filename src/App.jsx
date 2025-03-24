// import React from 'react'
// import Leading from './Leading'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Register from './Register'

// const App = () => {
//   const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <Leading />,
//     },
//     {
//       path: '/Register',
//       element: <Register />,
//     },
//   ])
//   return (
//     <div>
   
//       <RouterProvider router={router} />
//     </div>
//   )
// }

// export default App
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Leading from './Leading';
import Register from './Register';
import Login from './Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Leading />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
