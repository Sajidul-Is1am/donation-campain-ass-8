import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import DonationItem from "../../Components/DonationItem/DonationItem";

const DonationFeatured = ({ inputValue }) => {


    const inputValueUpperCase = inputValue.toUpperCase()

    console.log(inputValueUpperCase);

    const [danationItems, setDonationItems] = useState([]);
    const [dispayDoantion,setDisplayDonation] = useState([])
    const catagoryItemUppercase = danationItems.filter(catagory => catagory.category.toUpperCase() === inputValueUpperCase)
    useEffect(() => {
        fetch('donationCatagory.json')
            .then(res => res.json())
            .then(data => setDonationItems(data))
    }, [])

    useEffect(()=>{
        if(catagoryItemUppercase == ''){
            setDisplayDonation(danationItems)
        }
        else{
            setDisplayDonation(catagoryItemUppercase)
        }
    },[catagoryItemUppercase,danationItems])
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-11 md:px-20 lg:px-32 lg:my-28 my-12">

            {
                dispayDoantion.map((item, idx) => <DonationItem key={idx} donationItem={item}></DonationItem>)
            }
        </div>
    );

};

DonationFeatured.propTypes = {
    inputValue: PropTypes.string
}

export default DonationFeatured;