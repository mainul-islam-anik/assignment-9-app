import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import Services from '../Pages/Services/Services';
import MyProfile from '../Pages/MyProfile/MyProfile';
import Error from '../Pages/Error/Error';
// import AppDetails from '../Pages/AppDetails/AppDetails';
// import AllApps from '../Pages/AllApps/AllApps';
// import Installation from '../Pages/Installation/Installation';


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
        // {
        //   path: '/appDetails/:id',
        //   loader: ()=>fetch('/allAppsData.json'),
        //   errorElement: <ErrorApp></ErrorApp>,
        //   Component: AppDetails
        // },
        {
          path: '/myProfile',
        //   loader: ()=>fetch('/allAppsData.json'),
          Component: MyProfile
        }
    ]
  },
]);