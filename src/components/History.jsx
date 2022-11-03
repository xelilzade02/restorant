import React from 'react'
import CountUp from 'react-countup'

const History = () => {
    return (
        <div className='History' >
            <div className="history-left-side">
                <p>Our <span>History</span> </p>
                <p>Like any other distinctive place, we have <br />
                    our own, special history. The idea of the restaurant came <br />
                    the founders are surprised. While walking through the forest <br />
                    , the creator of our restaurant got stuck hundreds <br />
                    of kilometers from the nearest settlement. Away <br />
                    from civilization and communication, they had to for a while <br />
                    to equip yourself with a simple life, to get and cook <br />
                    your own food.</p>

                <div className="counts">
                    <div className="count">
                        <CountUp end={93} />
                        <p>Drinks</p>
                    </div>
                    <div className="count">
                        <CountUp end={206} />
                        <p>Meal</p>
                    </div>
                    <div className="count">
                        <CountUp end={71} />
                        <p>Snacks</p>
                    </div>
                </div>





            </div>
            <div className="history-right-side">
                <img src="./history-right-side.png" alt="" />
            </div>
        </div>
    )
}

export default History