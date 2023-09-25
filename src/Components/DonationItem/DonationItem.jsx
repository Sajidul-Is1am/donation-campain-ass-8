import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const DonationItem = ({ donationItem }) => {
    const { picture, title, category, category_bg_color, card_bg_color, text_button_bg_color, } = donationItem
    return (
        <div>
            <Link to={'/donationfeatured'}>
                <div className="card shadow-xl " style={{ backgroundColor: `${card_bg_color}` }}>
                    <figure><img src={picture} alt="card picture" /></figure>
                    <div className="card-body">
                        <p className="p-2 w-auto" style={{ backgroundColor: `${category_bg_color}`, color: `${text_button_bg_color}` }}><Link to={'/'}>{category}</Link></p>
                        <h2 className='card-title' style={{ color: `${text_button_bg_color}` }}>{title}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};
DonationItem.propTypes = {
    donationItem: PropTypes.object.isRequired
}
export default DonationItem;