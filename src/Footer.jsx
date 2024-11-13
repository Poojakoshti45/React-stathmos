function Footer() {
    return (
        <footer className="text-white">
            <div className="container mx-auto text-center">
                <p className="mb-4 font-lato">© 2024 Stathmos. All rights reserved.</p>
                <div className="footer-links">
                    <ul className="flex gap-16 p-6 justify-center items-center flex-nowrap">
                        <li><a href="#about" className="hover:underline mx-2 text-center font-lato">About Us</a></li>
                        <li><a href="#services" className="hover:underline mx-2 text-center font-lato">Services</a></li>
                        <li><a href="#contact" className="hover:underline mx-2 text-center font-lato">Contact</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;