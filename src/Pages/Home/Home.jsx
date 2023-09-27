
import { useState } from "react";
import DonationFeatured from "../../Components/DonationFeatured/DonationFeatured";
import Banner from "../../Components/Header/Banner";






const Home = () => {
    const [inputValue,setInputValue] = useState('')

    const hanldeSearch = e => {
        e.preventDefault()
        let searchValue = e.target.inputValue.value;
        setInputValue(searchValue)
        
    }

    return (
        <div>
            <Banner hanldeSearch={hanldeSearch}></Banner>
            <DonationFeatured inputValue={inputValue}></DonationFeatured>
        </div>
    );
};

export default Home;