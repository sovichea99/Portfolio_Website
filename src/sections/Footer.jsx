import { socialImgs } from "../constants";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center">
                    <p className="dark:text-white-50 text-black">Terms & Conditions</p>
                </div>
                <div className="socials">
                    {socialImgs.map((socialImg, index) => (
                        <div key={index} className="icon">
                            <a href={socialImg.url} target="_blank" rel="noopener noreferrer">
                                <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} />
                            </a>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end dark:text-white-50 text-black">
                        © {new Date().getFullYear()} sovicheaDev. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;