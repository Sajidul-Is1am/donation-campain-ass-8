import { useLoaderData, useParams } from "react-router-dom";
import './DontationDetails.css'
const DonationDetails = () => {
    const { donationId } = useParams();
    const intId = parseInt(donationId)
    const DonationData = useLoaderData();

    const detailsItem = DonationData.find(data => data.id === intId)
    const { id, price, picture, title, description, text_button_bg_color } = detailsItem

    return (
        <div className="px-11 md:px-20 lg:px-32">
            <div className="card">
                <div className="relative">
                    <figure className=""><img className="w-full h-auto rounded-3xl" src={picture} alt="card picture" />
                    </figure>
                    <div className="donationBtnOverlay py-8 pl-9 bottom-0 absolute rounded-b-3xl">
                        <button className={`text-left p-4 text-xl font-semibold text-white rounded`} style={{ backgroundColor: `${text_button_bg_color}` }}>Donate{price}</button>
                    </div>
                </div>





                <div className="pt-14">
                    <h2 className='text-4xl font-bold'>{title}</h2>
                    <p className="text-justify py-6 text-base font-normal">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default DonationDetails;