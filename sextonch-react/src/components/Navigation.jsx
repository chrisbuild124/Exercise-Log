import {Link} from 'react-router-dom'

function Navigation(){
    return (
        <nav>
            <Link to="/">Home Page</Link> {/*a now Link: This makes it a SPI*/}
            <Link to="/create-exercise">create exercise</Link> {/*href now to to make SPI*/}
        </nav>
    )
}

export default Navigation
