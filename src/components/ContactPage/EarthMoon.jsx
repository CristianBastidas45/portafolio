import './style/EarthMoon.css'

const EarthMoon = () => {
    return (
        <div className='solar-system-body'>
            <div className='solar-system'>

                <div id='sun'></div>

                <div className='orbit mercury-orbit'></div>
                <div className='mercury-spin'>
                    <div id='mercury'></div>
                </div>

                <div className='orbit venus-orbit'></div>
                <div className='venus-spin'>
                    <div id='venus'></div>
                </div>

                <div className='orbit earth-orbit'></div>
                <div className='earth-spin'>
                    <div className='orbit moon-orbit'></div>
                    <div className='moon-spin'>
                        <div id='moon'></div>
                    </div>

                    <img id='earth' src="https://codetheworld.io/wp-content/uploads/2023/12/earth_small_150.jpg" />
                </div>

                <div className='orbit mars-orbit'></div>
                <div className='mars-spin'>
                    <div id='mars'> </div>
                </div>
            </div>
        </div>
    )
}

export default EarthMoon