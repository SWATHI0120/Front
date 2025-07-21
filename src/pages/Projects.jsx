import React from "react";
import ProjectCard from "../components/Projectcard";
import img1 from "../assets/Project portfolio.png";


const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="project-grid">
        <ProjectCard
          title="My Portfolio"
          description="A modern portfolio built with React and Tailwind CSS."
          image={img1}
          techStack={["React", "Tailwind", "Framer Motion"]}
          codeLink="https://github.com/myrepo"
          demoLink="https://myportfolio.com"
          detailsLink="https://myportfolio.com/details"
        />
        <ProjectCard
          title="AI-NoteMate"
          description="MERN app for note-taking with AI productivity features."
          image={img1}
          techStack={["React", "Express.js", "Node.js", "MongoDB"]}
          codeLink="https://github.com/ainotemate"
          demoLink="https://ainotemate.live"
          detailsLink="https://ainotemate.live/details"
        />
         <ProjectCard
          title="AI-NoteMate"
          description="MERN app for note-taking with AI productivity features."
          image={img1}
          techStack={["React", "Express.js", "Node.js", "MongoDB"]}
          codeLink="https://github.com/ainotemate"
          demoLink="https://ainotemate.live"
          detailsLink="https://ainotemate.live/details"
        />
         <ProjectCard
          title="AI-NoteMate"
          description="MERN app for note-taking with AI productivity features."
          image={img1}
          techStack={["React", "Express.js", "Node.js", "MongoDB"]}
          codeLink="https://github.com/ainotemate"
          demoLink="https://ainotemate.live"
          detailsLink="https://ainotemate.live/details"
        />
      </div>
    </section>
  );
};

export default Projects;


// import React from "react";
// import ProjectCard from "../components/Projectcard"; // Ensure this component exists
// import img1 from "../assets/Project portfolio.png"; // replace with actual path or a valid image

// const Projects = () => {
//   return (
//     <section id="projects" className="section">
//       <h2>Projects</h2>
//       <div className="project-grid">
//         <ProjectCard
//           title="My Portfolio"
//           description="A modern portfolio built with React and Tailwind CSS."
//           image={img1}
//           link="https://github.com/myrepo"
//         />
//          <ProjectCard
//           title="My Portfolio"
//           description="A modern portfolio built with React and Tailwind CSS."
//           image={img1}
//           link="https://github.com/myrepo"
//         />
//          <ProjectCard
//           title="My Portfolio"
//           description="A modern portfolio built with React and Tailwind CSS."
//           image={img1}
//           link="https://github.com/myrepo"
//         />
//          <ProjectCard
//           title="My Portfolio"
//           description="A modern portfolio built with React and Tailwind CSS."
//           image={img1}
//           link="https://github.com/myrepo"
//         />
//          <ProjectCard
//           title="My Portfolio"
//           description="A modern portfolio built with React and Tailwind CSS."
//           image={img1}
//           link="https://github.com/myrepo"
//         />
//         {/* Add more ProjectCards as needed */}
//       </div>
//     </section>
//   );
// };

// export default Projects;
