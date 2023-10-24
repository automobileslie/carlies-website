export default function Projects({projects}) {

   const displayProjectTiles=()=>{
        return projects.map(project=>{
            return <>
                    <div key={project.id} className="project-tile">
                        <img className="image-for-project" 
                        src={require(`${project.image}`)} 
                        alt={project.title} />
                        <p className="titles-for-project-index">{project.title}</p>
                    </div>
                    </>
        })
    }

    return(
        <div className="project-container">
            <h2 className="projects-and-publications-heading">Sample Projects</h2>
            <div className="container-for-projects-and-publications">
                {displayProjectTiles()}            
            </div>
        </div>
    )
}