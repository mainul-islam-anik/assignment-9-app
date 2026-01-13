import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import Services from '../Pages/Services/Services';
import MyProfile from '../Pages/MyProfile/MyProfile';
import Error from '../Pages/Error/Error';
import Details from '../Pages/Details/Details';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import AuthLayout from '../Pages/AuthLayout.jsx/AuthLayout';
import PrivateRoute from '../Pages/PrivateRoute/PrivateRoute';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children:[
        {
            index: true,
            loader: ()=>fetch('/petServices.json'),
            path: "/",
            Component: Home
        },
        {
          path: '/services',
          loader: ()=>fetch('/petServices.json'),
          
          Component: Services
        },
        {
          path: '/details/:id',
          loader: ()=>fetch('/petServices.json'),
          element: <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        },
        {
          path: '/myProfile',
        //   loader: ()=>fetch('/allAppsData.json'),
          Component: MyProfile
        }
    ]
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
        {
            path: "/auth/login",
            Component: Login
        },
        {
            path: "/auth/register",
            Component: Register
        }
    ]
  }
]);