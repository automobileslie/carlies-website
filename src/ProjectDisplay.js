export default function ProjectDisplay({projectExpanded}) {

    const renderLinksToWebsites=()=> {
        if (projectExpanded[0].backend){
            return (
                <div className="project-description project-links-to-websites">
                    <a className="link link-on-resume resume-link project-link" href={projectExpanded[0].frontend} target = "_blank" rel="noopener noreferrer">Front End</a>
                    <br></br>
                    <a className= "link link-on-resume resume-link project-link" href={projectExpanded[0].backend} target = "_blank" rel="noopener noreferrer">Back End</a>
                    <br></br>
                    <a className="link link-on-resume resume-link project-link" href={projectExpanded[0].video} target = "_blank" rel="noopener noreferrer"> Demo </a>
                </div>
            )
        }
        else {
            return (
                <div className="project-description project-links-to-websites">
                    <a className="link link-on-resume resume-link project-link" href={projectExpanded[0].frontend} target = "_blank" rel="noopener noreferrer">Repository</a>
                    <br></br>
                    <a className="link link-on-resume resume-link project-link" href={projectExpanded[0].video} target = "_blank" rel="noopener noreferrer"> Demo </a>
                </div>
            )
        }
     
    }




    return (

        <div className="project-show-pages"> 
            <div className="container-for-project-display">
                <h2>{projectExpanded[0].title}</h2>
                <br></br>
                <div className="project-display-image-and-links">
                    <img className="project-display-image" 
                            src={require(`${projectExpanded[0].image}`)} 
                            alt={projectExpanded[0].title} 
                    />
                    <div className="second-container-for-about-page">
                        <p className="profile-description project-description">{projectExpanded[0].description}</p>
                        <br></br>
                        {renderLinksToWebsites()}
                   
                    </div>
                </div>
           
            </div>
        </div>









        // <br></br>
       //  {this.showingBlog()}
        // <br></br>
        // <p className="return-to-projects-index" onClick={this.props.returnToProjects}>Return to Previous Page</p>

        //  <ExpandPost  posts={this.props.posts} returnToPosts={this.props.returnToProjects}/>
        // <p className="return-to-projects-index" onClick={this.props.returnToProjects}>Return to Previous Page</p>
        // <div className="project-display-page">
            
        // </div>
    )
}
