import { useState } from "react";
import SelectedDonation from "../../Components/SelectedDonation/SelectedDonation";

const Donation = () => {
    const donetedItems = JSON.parse(localStorage.getItem('donateDetails'));

    const [doneted, setDoneted] = useState(4)

    return (
        <>
            <div className="grid md:grid-cols-2 gap-6 px-11 md:px-20 lg:px-32">
                {
                    donetedItems.slice(0, doneted).map(item => <SelectedDonation key={item.id} selectedItem={item}></SelectedDonation>)
                }

            </div>
            <div className={`flex justify-center pt-10 pb-40$`}><button onClick={() => setDoneted(donetedItems.length)} className={`btn btn-success text-white ${doneted === donetedItems.length && 'hidden'}`}>See All</button></div>
        </>
    );
};

export default Donation;