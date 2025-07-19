import { Link } from "react-router-dom";

const  About = () => {
    return (
        <div>
            <h1>About Page</h1>
            <p>This is the about page of our application.</p>
            <Link to="/"> home</Link>
        </div>
    )
}

export default About;