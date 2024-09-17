export default function Project ({ image, title, repoLink }) {
    return (
        <div className="project-list">
            <a href={repoLink} target="_blank" rel="noopener noreferrer">
                <img className="project-hover" src={image} alt={title} />
            </a>
            <h3>{title}</h3>
        </div>
    );
}