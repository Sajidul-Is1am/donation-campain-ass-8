import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";

import Statistic from "../Pages/Statistic/Statistic";
import Donation from "../Pages/Donation/Donation";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";
const Route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
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
                path:'/donationfeatured',
                loader:() => fetch('donationCatagory.json'),
                element:<DonationDetails></DonationDetails>
            }
        ]
    },
]);

export default Route;