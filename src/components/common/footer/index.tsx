import { Facebook, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-[#0B1120] py-16 border-t border-primary/30 text-sm text-white mt-40">
            {/* Spotlight effect */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-tl from-teal-900 via-transparent to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500/10 via-transparent to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-tl from-violet-500/5 via-transparent to-transparent rounded-full blur-2xl"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-xl serif-heading block mb-4">
                            General Science Olympiad
                        </span>
                        <p className="max-w-sm mb-6 text-slate-300">
                            Empowering the next generation of scientific minds through rigorous competition and global connectivity.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/generalscienceolympiad" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-gradient-to-r hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                                <Facebook />
                            </a>

                            <a href="https://www.linkedin.com/company/general-science-olympiad/people/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-gradient-to-rhover:text-white transition-all duration-300 transform hover:-translate-y-1">
                                <Linkedin />
                            </a>

                            <a href="https://www.youtube.com/@ScienceBazeofficial" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-gradient-to-r  hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                                <Youtube />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider mb-6">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="https://sciencebaze.com/direct-reg/second-igso" className=" transition-colors duration-300 flex items-center gap-2 group">
                                    Registration Guide
                                </a>
                            </li>
                            <li>
                                <a href="#about" className=" transition-colors duration-300 flex items-center gap-2 group">
                                    About Us
                                </a>
                            </li>

                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider mb-6">
                            Legal & Contact
                        </h4>
                        <ul className="space-y-3">


                            <li className="flex items-center gap-3 text-slate-300  transition-colors duration-300">

                                Dhaka, Bangladesh
                            </li>

                            <li className="flex items-center gap-3 text-slate-300  transition-colors duration-300">

                                info@sciencebaze.com
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-slate-300">
                        &copy; 2025 General Science Olympiad. All rights reserved.
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;