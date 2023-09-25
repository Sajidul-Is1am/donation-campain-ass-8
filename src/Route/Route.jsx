import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";

import Statistic from "../Pages/Statistic/Statistic";
import Donation from "../Pages/Donation/Donation";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";
import ErrorMessage from "../Pages/ErrorMessage/ErrorMessage";
const Route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorMessage></ErrorMessage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/donation',
                element: <Donation></Donation>
            
            },
            {
                path:'/statistic',
                element:<Statistic></Statistic>
            },
            {
                path:'/doncationfeatured/:donationId',
                loader:() => fetch('/donationCatagory.json'),
                element:<DonationDetails></DonationDetails>
            }
        ]
    },
]);

export default Route;