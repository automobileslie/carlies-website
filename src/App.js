import './App.css';
import NavigationBar from './NavigationBar.js';
import { Routes, Route } from 'react-router-dom';
import About from './About.js'
import Resume from './Resume.js'
import Projects from './Projects.js'
import Publications from './Publications.js'
import { useState } from 'react';

const setOfProjects = [
  {id: "1-project", title:  "National Park Trip Planner", 
  description: "National Parks Trip Planner provides information about national parks in the United States, fetching from the National Park Service API and also linking to the National Park Service website. Users can save parks that they would like to learn more about and take notes on saved parks as they plan a trip. The idea for this application came from my eagerness to get outdoors. I like that National Parks are low-cost and offer educational opportunities about both history and nature.", 
  video: "https://youtu.be/B2vT8In2s5g", 
  image: "./Images/Sunset Cities, in the Grand Canyon.jpg", 
  imageCitation: 'Joseph Pennell. Sunset Cities, in the Grand Canyon, 1912. https://www.artic.edu/artworks/47908/sunset-cities-in-the-grand-canyon',
  linkToImage: 'https://www.artic.edu/artworks/47908/sunset-cities-in-the-grand-canyon',
  frontend: "https://github.com/automobileslie/national_parks_app", 
  backend: "https://github.com/automobileslie/national_parks_api"},
  {id: "2-project", title:  "Chicago Artwork Collections Application", 
  description: "This is an application that allows you to search through the collections at the Art Institute of Chicago. It fetches data available via their public API for works that are in the public domain. You can save images and information about particular works of art according to categories that you create yourself. I envisage this being useful for presentations, research, teaching, or just for your own enjoyment.", 
  video: "https://youtu.be/htQ8wr_J2WU", 
  image: "./Images/Acrobats at the Cirque Fernando.jpg", 
  imageCitation: "Pierre-Auguste Renoir. Acrobats at the Cirque Fernando (Francisca and Angelina Wartenberg), 1879. https://www.artic.edu/artworks/81558/acrobats-at-the-cirque-fernando-francisca-and-angelina-wartenberg",
  linkToImage: 'https://www.artic.edu/artworks/81558/acrobats-at-the-cirque-fernando-francisca-and-angelina-wartenberg',
  frontend: "https://github.com/automobileslie/aic_collections_app"
  },
  {id: "3-project", title:  "Library of Congress Collections Application", 
  description: "A single-page application that works with data from the Library of Congress's Collections API and displays a set of information in a readable and browsable format with the aim of generating interest in the library's resources.", 
  video: "https://www.loom.com/share/0a4500bfd7b34f33b6b1e088a0beada9?sid=d8217163-72f7-4962-b08d-311505806dd8", 
  image: "./Images/three-cheers.jpg", 
  imageCitation: "Adams, Adrienne. Three cheers for books. Book week, November 10-16. , 1963. [New York: The Children's Book Council, In] Photograph. https://www.loc.gov/item/2014646809/",
  linkToImage: 'https://www.loc.gov/item/2014646809/',
  frontend: "https://github.com/automobileslie/Library_of_Congress_App"
  }
]

const setOfPublications = [
  {id: "1-publication", 
  title: "Being Nude: The Skin of Images", 
  image: "./Images/Being_Nude.jpg", 
  url: "https://www.fordhampress.com/9780823256204/being-nude/", 
  description: "Being Nude: The Skin of Images /title by Jean-Luc Nancy and Federico Ferrari is a Philosophy book that I co-translated with /title Anne O'Byrne/title.   It has nudity in different works of art as its subject matter and focuses on what these works reveal about intersubjectivity and identity. /title"
  }, 
  {id:"2-publication",
    title: "Carnal Hermeneutics", 
    image: "./Images/Carnal_Hermeneutics.jpg", 
    url: 'https://www.fordhampress.com/9780823265893/carnal-hermeneutics/', 
    description: 'To this volume, I contributed a translation of Jean-Luc Nancy\'s essay "Rethinking Corpus: Essential Skin." It includes reflections on love and maternity, emphasizing that the marks our bodies bear testify to our interconnectedness. Nancy also considers the relationship between several idiomatic phrases containing the word "skin," exploring its multiple meanings in different contexts to trace various degrees and types of touch.'
  }
]

export default function App() {

  const [projects] = useState(setOfProjects);
  const [projectExpanded, setProjectExpanded] = useState([]);
  const [publications] = useState(setOfPublications);
  const [publicationExpanded, setPublicationExpanded] = useState([]);

  const expandProject=(project)=>{
    if (project) {
      setProjectExpanded([project])
    }
    else {
      setProjectExpanded([])
    }
  }

  const expandPublication=(publication)=>{
    if(publication) {
      setPublicationExpanded([publication])
    }
    else {
      setPublicationExpanded([])
    }
  }

  const resetShowPages=()=>{
    expandPublication()
    expandProject()
  }
  
  return (
    <div>
      <NavigationBar resetShowPages={resetShowPages}/>
      <div className="app-container">
        <div className="inner-app-wrapper">
          <Routes>
            <Route path="/" element={<About />}/>
            <Route path="/resume" element={<Resume />}/>
            <Route path="/projects" element={<Projects projects={projects} projectExpanded={projectExpanded} expandProject={expandProject}/>}/>
            <Route path="/publications" element={<Publications publications={publications} publicationExpanded={publicationExpanded} expandPublication={expandPublication}/>}/>
          </Routes>
        </div>
     </div>
    </div>
 
  );
}