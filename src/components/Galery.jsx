import React from 'react'

const Galery = () => {
    return (
        <div className='galery' >
            <p>Gallery of <span>Dishes</span>  </p>

            <div className="galery-img">
                <div className="galery-img-left ">
                    <img src="./table-71380_1280.png "alt="" />
                    <img src="./goulash-6054124_19201.png " alt="" />
                    <img src="./coffee-3120750_19201.png  "  alt="" />
                </div>
                <div className="galery-img-right">
                    <img src="./goulash-6054124_19201.png" alt="" />
                    <img src="./coffee-3120750_19201.png" alt="" />
                    <img src="./table-71380_1280.png"  alt="" />
                </div>



            </div>
        </div>
    )
}

export default Galery