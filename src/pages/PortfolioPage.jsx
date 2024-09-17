import Project from "../components/Project";
import svgImage from "../assets/svg.jpg";
import noteTakerImage from "../assets/note-taker.jpg";
import employeeTrackerImage from "../assets/employee-tracker.jpg";
import eCommerceImage from "../assets/e-commerce.jpg";
import blogImage from "../assets/blog.jpg";
import taskImage from "../assets/task.jpg";

export default function Portfolio() {
  return (
    <section className="project">
      <h2 id="projects">Course Projects</h2>
      <Project
        title="SVG Logo Maker"
        image={svgImage}
        repoLink="https://github.com/yueyue426/svg-logo-maker.git"
      />
      <Project
        title="Note Taker"
        image={noteTakerImage}
        repoLink="https://github.com/yueyue426/note-taker.git"
      />
      <Project
        title="Employee Tracker"
        image={employeeTrackerImage}
        repoLink="https://github.com/yueyue426/employee-tracker.git"
      />
      <Project
        title="e-Commerce"
        image={eCommerceImage}
        repoLink="https://github.com/yueyue426/e-commerce-back-end.git"
      />
      <Project
        title="Personal Blog"
        image={blogImage}
        repoLink="https://github.com/yueyue426/W4-Challenge"
      />
      <Project
        title="Task Board"
        image={taskImage}
        repoLink="https://github.com/yueyue426/task-board.git"
      />
    </section>
  );
}
