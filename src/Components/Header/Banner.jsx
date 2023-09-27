import PropTypes from 'prop-types';
import './Banner.css'

const Banner = ({hanldeSearch}) => {
  

    
    
    return (
        <div className="bg-topBanner grid  justify-center items-center">
            <div className='text-center'>
                <h1 className="md:text-5xl text-2xl font-bold">I Grow By Helping People In Need</h1>
                <div className="join my-10">
                    <form onSubmit={ hanldeSearch} className='flex'>
                        <div>
                            <div>
                                <input name='inputValue' className="input input-bordered join-item md:pr-14" placeholder="Search here...." />
                            </div>
                        </div>
                        <div className="indicator">
                            <button type='submit' className="btn join-item bg-[#FF444A] text-white">Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes={
    hanldeSearch:PropTypes.func
}
export default Banner;