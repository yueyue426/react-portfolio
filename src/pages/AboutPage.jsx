import avatorImage from '../assets/avatartion.png';

export default function AboutPage() {
  return (
    <section className="about-me">
      <h1>Hi! I AM CHLOE.<img src={avatorImage} alt="Chloe" /></h1>
      <p>
        I am on an exciting journey as a web development learner, deeply
        passionate about coding and problem-solving.
      </p>
    </section>
  );
}
