import { useEffect, useState } from "react";

const Donation = () => {
    const [danationItem,setDonationItem] = useState([]);

    useEffect(() =>{
        fetch('donationCatagory.json')
        .then(res => res.json())
        .then(data => setDonationItem(data))
    },[])
    return (
        <div>
                 
        </div>
    );
};

export default Donation;