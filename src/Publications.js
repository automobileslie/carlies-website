export default function Publications({ publications}) {

    const displayProjectTiles=()=>{
         return publications.map(publication=>{
             return <>
                     <div key={publication.id} className="publication-book-tile">
                         <img className="book-image" 
                         src={require(`${publication.image}`)} 
                         alt={publication.title} />
                         <p className="titles-for-project-index">{publication.title}</p>
                     </div>
                     </>
         })
     }
 
     return(
         <div className="container-for-publication-index">
             <h2 className="projects-and-publications-heading">Publications</h2>
             <div className="publications-book-container">
                 {displayProjectTiles()}            
             </div>
         </div>
     )
 }