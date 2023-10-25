import PublicationDisplay from './PublicationDisplay'

export default function Publications({publications, expandPublication, publicationExpanded}) {

    const displayProjectTiles=()=>{
         return publications.map(publication=>{
             return <>
                     <div key={publication.id} className="publication-and-project-tile" onClick={() => expandPublication(publication)}>
                         <img className="book-image" 
                         src={require(`${publication.image}`)} 
                         alt={publication.title} />
                         <p className="titles-for-project-and-publication-index">{publication.title}</p>
                     </div>
                     </>
         })
     }

     const renderIndexOrShowPage = () => {
        if (!publicationExpanded.length) {
            return <div className="container-for-publication-and-project-index">
                <h2 className="projects-and-publications-heading">Publications</h2>
                <div className="publications-and-projects-container">
                    {displayProjectTiles()}            
                </div>
             </div>
        }
        else {
            return <PublicationDisplay publicationExpanded={publicationExpanded}/>
        }
    }
 
     return(
        <>
            {renderIndexOrShowPage()}
        </>
     )
 }