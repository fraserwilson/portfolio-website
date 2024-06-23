import styles from "./ProjectStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import ProjectCard from "../../common/ProjectCard";
import hipster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link={"https://github.com/fraserwilson/Genysis"}
          h3="Viberr"
          p="Streaming app"
        />
        <ProjectCard
          src={freshBurger}
          link={"https://github.com/fraserwilson/SuperheroApp"}
          h3="Fresh Burger"
          p="Hamburger Resturant"
        />
        <ProjectCard
          src={hipster}
          link={"https://github.com/fraserwilson/PresentationApp"}
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link={"https://github.com/fraserwilson/PresentationApp"}
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
