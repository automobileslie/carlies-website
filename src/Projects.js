import ProjectDisplay from './ProjectDisplay'

export default function Publications({projects, expandProject, projectExpanded}) {

    const displayProjectTiles=()=>{
         return projects.map(project=>{
             return <>
                     <div key={project.id} className="publication-book-tile" onClick={() => expandProject(project)}>
                         <img className="project-image" 
                         src={require(`${project.image}`)} 
                         alt={project.title} />
                         <p className="titles-for-project-index">{project.title}</p>
                     </div>
                     </>
         })
     }

     const renderIndexOrShowPage = () => {
        if (!projectExpanded.length) {
            return <div className="container-for-publication-index">
                <h2 className="projects-and-publications-heading">Sample Projects</h2>
                <div className="publications-book-container">
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