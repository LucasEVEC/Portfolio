import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/LucasEVEC" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/lucas-cazenave-7a57572ba/" },
    { icon: <FaInstagram />, path: "https://www.instagram.com/lucas_evec" },
    { icon: <FaTwitter />, path: "https://twitter.com/lucasevec5197" },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
}

export default Social;
