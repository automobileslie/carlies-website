import ProfilePhoto from './Images/profilePhoto.jpg';

export default function About() {
    return(
        <div className="about-page">
            <h1 className="heading">Carlie Anglemire</h1>
            <div className="container-for-about-page">
                <img
                    className="profile-photo"
                    src={ProfilePhoto}
                    alt="Carlie Anglemire"
                />

                <div className="second-container-for-about-and-project-page">
                    <div className="profile-description">
                        <p>I am a full-stack software developer who most recently worked for a software company centered on women's health and prenatal care​. 
                        With experience in a variety of languages and frameworks, I became interested in software engineering after developing logic and critical thinking skills as a Philosophy PhD focused on topics in ethics and aesthetics.</p> 
                        <p>In other words, I could, and sometimes do, spend all day splitting strings.</p>
                        <p>In addition to being a software engineer, I am a published translator and love writing, singing and playing the guitar, biking, cooking, and gardening.</p>
                    </div>
                    <div className="links-to-websites">
                        <p className="link-to-website"><a className="link" href="https://github.com/automobileslie" target = "_blank" rel="noopener noreferrer"> Github</a></p> 
                        <p>| </p>
                        <p className="link-to-website"><a className="link" href="http://www.linkedin.com/in/carlie-anglemire" target = "_blank" rel="noopener noreferrer"> LinkedIn</a></p>  
                        <p>| </p>
                        <p className="link-to-website"><a className="link" href="https://medium.com/@carlie.anglemire" target = "_blank" rel="noopener noreferrer">Blog</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

    

