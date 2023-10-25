export default function PublicationtDisplay({publicationExpanded}) {

    const italicizeTheTitle=()=>{
        if (publicationExpanded[0].description.includes("/title")) {
            let newDescription= publicationExpanded[0].description.split("/title")
            let changeTheDescription=newDescription.filter(description=>{
                return description !=="/title"
            })
            return <>
                <p>
                    <i>{changeTheDescription[0]}</i>
                    {changeTheDescription[1]}
                    <a className="link-to-website resume-publication-and-project-link" target="_blank" rel="noopener noreferrer" href="https://www.stonybrook.edu/commcms/philosophy/people/_faculty/byrne.php">{changeTheDescription[2]}</a>
                    {changeTheDescription[3]}
                </p>
            </>   
        }
        else {
            return <p>
                {publicationExpanded[0].description}
            </p>
        }
    }

    return (
        <div className="project-display-page">
            <h2 className="heading-for-publication-showpage">{publicationExpanded[0].title}</h2>
            <div className="book-container-on-show-page">
                <a target="_blank" rel="noopener noreferrer" href={publicationExpanded[0].url}> <img className="book-image-on-show-page" src={require(`${publicationExpanded[0].image.trim()}`)} alt={publicationExpanded[0].title}/> </a>
                <div div className="book-description">
                    <div>
                        {italicizeTheTitle()}
                    </div>
                </div>
            </div>
        </div>
    )
}