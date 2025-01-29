import ProjectDisplay from './ProjectDisplay'

export default function Publications({projects, expandProject, projectExpanded}) {

    const displayProjectTiles=()=>{
         return projects.map(project=>{
             return <>
                     <div key={project.id} className="publication-and-project-tile" onClick={() => expandProject(project)}>
                        <div className="image-container">
                            <img className="project-image" 
                            src={require(`${project.image}`)} 
                            alt={project.title} />
                        </div>

                        <p className="titles-for-project-and-publication-index">{project.title}</p>
                    </div>
                     </>
         })
     }

     const renderIndexOrShowPage = () => {
        if (!projectExpanded.length) {
            return <div className="container-for-publication-and-project-index">
                <h2 className="projects-and-publications-heading">Sample Software Engineering Projects</h2>
                <div className="publications-and-projects-container">
                    {displayProjectTiles()}            
                </div>
             </div>
        }
        else {
            return <ProjectDisplay projectExpanded={projectExpanded}/>
        }
    }
 
     return(
        <>
            {renderIndexOrShowPage()}
        </>
     )
 }