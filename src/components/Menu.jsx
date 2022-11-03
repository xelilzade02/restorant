import React from 'react'

const Menu = () => {
    return (
        <div className='Menu'>
            <p>Our menu</p>
            <div className="menu-cards">
                <div className="menu-card">
                    <div className="menu-card-image">
                        <img className='menu-card-hamburger' src="./abstract-1238247_1920.png" alt="" />
                        <img className='ellipse' src="./Ellipse5.png" alt="" />
                        <p className='menu-card-price text-black'>420</p>
                    </div>
                    <span>Hamburger maxi</span>
                    <span>The thickest <br />
                        possible layer of meat</span>
                        <button>order</button>
                </div>
                <div className="menu-card">
                    <div className="menu-card-image">
                        <img className='menu-card-hamburger' src="./abstract-1238247_1920.png" alt="" />
                        <img className='ellipse' src="./Ellipse5.png" alt="" />
                        <p className='menu-card-price text-black'>420</p>
                    </div>
                    <span>Hamburger maxi</span>
                    <span>The thickest <br />
                        possible layer of meat</span>
                        <button>order</button>
                </div>
                <div className="menu-card">
                    <div className="menu-card-image">
                        <img className='menu-card-hamburger' src="./abstract-1238247_1920.png" alt="" />
                        <img className='ellipse' src="./Ellipse5.png" alt="" />
                        <p className='menu-card-price text-black'>420</p>
                    </div>
                    <span>Hamburger maxi</span>
                    <span>The thickest <br />
                        possible layer of meat</span>
                        <button>order</button>
                </div>
            </div>

        </div>
    )
}

export default Menu