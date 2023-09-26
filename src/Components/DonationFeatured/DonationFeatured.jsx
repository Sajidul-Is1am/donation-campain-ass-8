import { useEffect, useState } from "react";
import DonationItem from "../../Components/DonationItem/DonationItem";

const DonationFeatured = () => {
    const [danationItems,setDonationItems] = useState([]);

    useEffect(() =>{
        fetch('donationCatagory.json')
        .then(res => res.json())
        .then(data => setDonationItems(data))
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-11 md:px-20 lg:px-32 lg:my-28 my-12">
            {
                danationItems.map((item,idx) => <DonationItem key={idx} donationItem={item}></DonationItem>)
            }
        </div>
    );
};                

export default DonationFeatured;