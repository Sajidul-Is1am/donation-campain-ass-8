import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData, useParams } from "react-router-dom";
import './DontationDetails.css'
const DonationDetails = () => {
    const { donationId } = useParams();
    const intId = parseInt(donationId)
    const DonationData = useLoaderData();

    const detailsItem = DonationData.find(data => data.id === intId)
    const { id, price, picture, title, description, text_button_bg_color } = detailsItem

    const handleDonate = () => {
        const totaldonate = []

        const donateDataLs = JSON.parse(localStorage.getItem('donateDetails'))


        if (!donateDataLs) {
            totaldonate.push(detailsItem);
            localStorage.setItem('donateDetails', JSON.stringify(totaldonate))

            toast.success('🦄 Succesfully Added!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else {
            const isExist = donateDataLs.find(item => item.id === id);
            if (!isExist) {
                totaldonate.push(...donateDataLs, detailsItem);
                localStorage.setItem('donateDetails', JSON.stringify(totaldonate))
                toast.success('🦄 Succesfully Added!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            else {
                toast.warn('🦄 This is Already Exist!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }

        }

    }

    return (
        <div className="px-11 md:px-20 lg:px-32 md:mb-16">
            <div className="card">
                <div className="relative">
                    <figure className=""><img className="w-full h-auto rounded-3xl" src={picture} alt="card picture" />
                    </figure>
                    <div className="donationBtnOverlay py-2 md:py-8 pl-9 bottom-0 absolute rounded-b-3xl">

                        <button onClick={handleDonate} className={`text-left p-2 md:p-4 text-lg md:text-xl font-semibold text-white rounded`} style={{ backgroundColor: `${text_button_bg_color}` }}>Donate{price}</button>

                    </div>
                </div>

                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                {/* Same as */}
                <ToastContainer />

                <div className="pt-14">
                    <h2 className='text-2xl md:text-4xl font-bold'>{title}</h2>
                    <p className="text-justify py-6 text-sm md:text-base font-normal text-[#0B0B0BB3]">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default DonationDetails;