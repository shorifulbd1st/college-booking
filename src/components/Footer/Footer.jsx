import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-10">
            <div className="container py-2 mx-auto px-6 md:px-0">
                <div className="flex flex-col justify-between items-center">
                    {/* Blog, About, Contact Section */}
                    <div className="w-full sm:w-2/3 lg:w-3/4 sm:flex justify-between gap-6">
                        {/* Blog Section */}
                        <div className="w-full sm:w-1/3 mb-6">
                            <h3 className="uppercase font-bold">Blog</h3>
                            <a
                                href="https://en.wikipedia.org/wiki/Hotel"
                                target="_blank"
                                className="block mt-2 text-sm font-semibold text-gray-400 hover:underline"
                            >
                                Resources
                            </a>
                            <a
                                href="https://en.wikipedia.org/wiki/Tourism"
                                target="_blank"
                                className="block mt-2 text-sm font-semibold text-gray-400 hover:underline"
                            >
                                Document Services
                            </a>
                            <a
                                href="https://experience-crm.fr/en/to-20-hotel-services/"
                                target="_blank"
                                className="block mt-2 text-sm font-semibold text-gray-400 hover:underline"
                            >
                                Services
                            </a>
                        </div>

                        {/* About Section */}
                        <div className="w-full sm:w-1/3 mb-6">
                            <h3 className="uppercase font-bold">About</h3>
                            <a

                                href="https://www.booking.com/searchresults.en-gb.html?aid=306395&label=toulouse%2Fcompans-W8OBWSC4yosrRzdOyYJ6YgS648935346409%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-33463590%3Alp9069495%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH02-pWD53qm9c&gclid=CjwKCAiAqrG9BhAVEiwAaPu5zvPgLoOc__3624h88KardN8f2-m-UaxVQmAHRxyHv3Njx8zOppS6vRoCeucQAvD_BwE&dest_type=district&redirected=1&dest_id=7414&source=district&from_district=1&keep_landing=1&sid=821eb28f97550227c903e1c8b280f906"
                                target="_blank"
                                className="block mt-2 text-sm font-semibold text-gray-400 hover:underline"
                            >
                                Company
                            </a>
                            <a
                                href="https://nhghotels.com/hotel-community-service/"
                                target="_blank"
                                className="block mt-2 text-sm font-semibold text-gray-400 hover:underline"
                            >
                                Community
                            </a>
                            <a
                                href="https://jobs.bdjobs.com/jobsearch.asp?fcatId=20&icatId="
                                target="_blank"
                                className="block mt-2 text-sm font-semibold text-gray-400 hover:underline"
                            >
                                Careers
                            </a>
                        </div>

                        {/* Contact Section */}
                        <div className="w-full sm:w-1/3 mb-6">
                            <h3 className="uppercase font-bold">Contact</h3>
                            <span className="block mt-2 font-semibold text-sm text-gray-400">
                                + 56985458965
                            </span>
                            <span className="block font-semibold mt-2 text-sm text-gray-400">
                                hotelrose@email.com
                            </span>
                            <div className="flex space-x-4 cursor-pointer mt-3">
                                <i className="animate__animated animate__bounce animate__infinite text-3xl fab fa-facebook text-[#1877F2]"></i>
                                <i className="text-3xl fab fa-twitter text-[#1DA1F2]"></i>
                                <i className="text-3xl fab fa-instagram text-[#e92d6be1]"></i>
                                <i className="text-3xl fab fa-linkedin text-[#0077B5]"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Horizontal Line */}
                <hr className="h-px my-0 bg-gray-700 border-none" />

                {/* Footer Bottom Content */}
                <div>
                    <p className="text-center text-gray-500">
                        © Hotel Rose 2024 - All rights reserved
                    </p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
