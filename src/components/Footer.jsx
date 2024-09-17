import gitHubLogo from "../assets/github.svg";
import linkedinLogo from "../assets/linkedin.svg";
import stackOverflowLogo from "../assets/stack-overflow.svg";

export default function Footer () {
    return (
        <footer className="footer">
            <a href="https://github.com/yueyue426"><img className="footer-icon" src={gitHubLogo} alt="github logo"/></a>
            <a href="https://www.linkedin.com/in/chloe-jiangy/"><img className="footer-icon" src={linkedinLogo} alt="github logo"/></a>
            <a href="https://stackexchange.com/users/35384567/chloe-jiang"><img className="footer-icon" src={stackOverflowLogo} alt="github logo"/></a>
        </footer>
    );
}