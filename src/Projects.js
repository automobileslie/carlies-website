export default function Projects({projects, publications}) {

   const displayProjectTiles=()=>{
        return projects.map(project=>{
            return <>
                    <div key={project.id} className="project-tile">
                    {/* <img className="project-tile-image" 
                    src={require(`${project.image}`)} 
                    alt={project.title} /> */}
                    <p className="titles-for-project-index">{project.title}</p>
                    </div>
                    </>
        })
    }

    const displayPublicationTiles=()=>{
        return publications.map(publication=>{
            return <>
                    <div key={publication.id} className="publication-book-tile">
                        <div>
                    {/* <img className="book-image" 
                    src={require(`${publication.image}`)} 
                    alt={publication.title} /> */}
                    </div>
                    <p className="titles-for-project-index">{publication.title}</p>
                    </div>
                    </>
        })
    }


    return(
        <>
            <h2 className="heading">Sample Projects</h2>
            <div className="project-tile-container">
                {displayProjectTiles()}            
            </div>
            <h2 className="heading">Publications</h2>
            <div className="container-for-publication-index">
            <div className="publications-book-container">
                {displayPublicationTiles()}            
            </div>     
            </div>      
        </>

    )
}