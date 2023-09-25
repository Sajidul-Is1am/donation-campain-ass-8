import './Banner.css'

const Banner = () => {
    return (
        <div className="bg-topBanner grid justify-center items-center">
            <div className='text-center'>
                <h1 className="md:text-5xl font-bold">I Grow By Helping People In Need</h1>
                <div className="join my-10">
                    <div>
                        <div>
                            <input className="input input-bordered join-item md:pr-14" placeholder="Search here...." />
                        </div>
                    </div>
                    <div className="indicator">
                        <button className="btn join-item bg-[#FF444A] text-white">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;