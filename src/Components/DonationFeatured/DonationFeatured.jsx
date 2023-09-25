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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {
                danationItems.map((item,idx) => <DonationItem key={idx} donationItem={item}></DonationItem>)
            }
        </div>
    );
};

export default DonationFeatured;