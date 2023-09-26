import DonationFeatured from "../DonationFeatured/DonationFeatured";

const CustiomHook = ({inputValue}) => {
    console.log(inputValue);
    return (
        <div>
              <DonationFeatured inputValue={inputValue}></DonationFeatured>
        </div>
    );
};

export default CustiomHook;