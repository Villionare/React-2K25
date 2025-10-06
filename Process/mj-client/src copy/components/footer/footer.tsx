import "./style.css";

const Footer = () => {
    return (
        <footer className="bg-violet-500 text-white py-6">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Left side - Branding */}
                <div className="text-center md:text-left">
                    <h1 className="text-3xl font-bold tracking-wide">forumsBay.</h1>
                    <p className="text-sm opacity-80">The place for open discussions</p>
                </div>

                {/* Middle - Links */}
                <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
                    <a href="#" className="hover:underline">About</a>
                    <a href="#" className="hover:underline">Contact</a>
                    <a href="#" className="hover:underline">Privacy</a>
                    <a href="#" className="hover:underline">Terms</a>
                </div>

                {/* Right side - Status/info */}
                <div className="text-center md:text-right text-sm">
                    <p>Active Users: 120</p>
                    <p>Total Users: 4,500</p>
                </div>
            </div>

            {/* Bottom strip */}
            <div className="mt-6 text-center text-xs opacity-70 border-t border-white/30 pt-4">
                © {new Date().getFullYear()} forumsBay. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
