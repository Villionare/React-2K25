const Footer = () => {
    return (
        <footer className="bg-slate-800 text-slate-50 py-8 border-t border-slate-700 mt-auto">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="text-center md:text-left">
                    <h1 className="text-3xl font-bold tracking-wide">forumsBay</h1>
                    <p className="text-sm text-slate-400">The place for open discussions</p>
                </div>

                <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
                    <a href="#" className="text-slate-400 hover:text-cyan-400 transition duration-200">About</a>
                    <a href="#" className="text-slate-400 hover:text-cyan-400 transition duration-200">Contact</a>
                    <a href="#" className="text-slate-400 hover:text-cyan-400 transition duration-200">Privacy</a>
                    <a href="#" className="text-slate-400 hover:text-cyan-400 transition duration-200">Terms</a>
                </div>

                <div className="text-center md:text-right text-sm text-slate-400">
                    <p>Active Users: 120</p>
                    <p>Total Users: 4,500</p>
                </div>
            </div>

            <div className="mt-6 text-center text-xs text-slate-400 border-t border-slate-700 pt-4 mx-auto max-w-7xl px-4">
                © {new Date().getFullYear()} forumsBay. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
