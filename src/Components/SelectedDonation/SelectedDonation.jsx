
const SelectedDonation = ({ selectedItem }) => {
    const { price, category, category_bg_color, title, picture, text_button_bg_color, card_bg_color } = selectedItem
    return (
        <div>
            <div style={{ backgroundColor: `${card_bg_color}` }} className="card lg:card-side bg-base-100" >
                <figure><img className="h-full" src={picture} alt="Album" /></figure>
                <div className="card-body text-left">
                    <div>
                        <button className="p-2 rounded-md" style={{ backgroundColor: `${category_bg_color}`, color: `${text_button_bg_color}` }}>{category}</button>
                    </div>
                    <h2 className="card-title">{title}</h2>
                    <p style={{color:`${text_button_bg_color}`}} className="font-semibold text-sm">{price}</p>
                    <div className="card-actions justify-start">
                        <button style={{backgroundColor:`${text_button_bg_color}`}} className="btn btn-primary text-base font-semibold border-none text-white">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectedDonation;