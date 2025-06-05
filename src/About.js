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

                <div className="second-container-for-about-page">
                    <div className="profile-description">
                        <p>I am an avid home cook and community gardener with a love of food and the arts currently working as a server for Boka Restaurant Group in the Drawing Room and Game Room on the second floor of the Chicago Athletic Association.</p>
                           <p> Before I began working at the Chicago Athletic Association, I was a software engineer for a company focused on women’s health and prenatal care, where I put my training in computer programming to use while honing a “how-can-I-fix-this” mentality.</p>
                            <p>In another life before that, I was a Philosophy Ph.D. focusing on issues in ethics and aesthetics and teaching courses that drew on philosophy, literature, and film.</p>
                            <p>All of the industries I have worked in – including food and beverage, retail, theatre, web development, and education – have helped me learn to be adaptable and resilient while shaping my communication, problem-solving, and critical thinking skills.</p>
                    </div>
                    <div className="links-to-websites">
                        <p className="link-to-website"><a className="link" href="https://github.com/automobileslie" target = "_blank" rel="noopener noreferrer"> Github</a></p> 
                        <p className="link-to-website"><a className="link" href="http://www.linkedin.com/in/carlie-anglemire" target = "_blank" rel="noopener noreferrer"> LinkedIn</a></p>  
                        {/* <p className="link-to-website"><a className="link" href="https://medium.com/@carlie.anglemire" target = "_blank" rel="noopener noreferrer">Blog</a></p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

    

