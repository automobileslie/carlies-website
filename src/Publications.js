export default function Publications({ publications }) {


    const displayPublicationTiles=()=>{
        return publications.map(publication=>{
            return <div key={publication.id} className="project-tile">
                        <img className="" 
                        src={require(`${publication.image}`)} 
                        alt={publication.title} />
                    <p className="">{publication.title}</p>
                </div>
        })
    }





    return (
        <div className="container-for-projects-and-publications">
            <h2 className="heading">Publications</h2>
            <div className="">
                {displayPublicationTiles()}            
            </div>     
        </div>  

    )
}