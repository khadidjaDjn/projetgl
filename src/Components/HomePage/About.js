import './about.css'

const About = () => {
    return (
        <div className="about">
            <div className="content">
                <h1>about us</h1>
                <p>Discover the heart of <span>mouhami dz</span>.</p>
                <p>
                 As a beacon of legal expertise, we are more than practitioners—we are your dedicated partners in navigating the complexities of the legal landscape. Our unwavering commitment to justice, integrity, and personalized client care sets us apart. At <span>mouhamidz</span>, your legal journey finds its ally, ensuring a steadfast pursuit of a just tomorrow.
                </p>
            </div>
            <div className="aboutImg">
                <img src="./hammer.png" className='hammer1'></img>
                <img src="./hammer2.png" className='hammer2'></img>
            </div>

        </div>
      );
}
 
export default About;