import Link from 'next/link';
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Mail,
    Phone,
    MapPin,
    Sparkles,
    ExternalLink,
    Star,
} from 'lucide-react';
import { BsFillBuildingsFill } from 'react-icons/bs';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { name: 'About Us', href: '/about-us' },
            { name: 'Our Team', href: '/about-us' },
            // { name: 'Careers', href: '/careers' },
            { name: 'Contact', href: '/contact' },
        ],
        services: [
            { name: 'Co Work', href: '/about-us' },
            { name: 'Go-Down', href: '/about-us' },
            { name: 'Offices', href: '/about-us' },
            { name: 'Showroom', href: '/about-us' },
        ],
        resources: [
            { name: 'Blog', href: '/blog' },
            { name: 'Documentation', href: '/docs' },
            { name: 'Help Center', href: '/help' },
            { name: 'Community', href: '/community' },
        ],
        legal: [
            { name: 'Privacy Policy', href: '/privacy' },
            { name: 'Terms of Service', href: '/terms' },
            { name: 'Cookie Policy', href: '/cookies' },
            { name: 'GDPR', href: '/gdpr' },
        ],
    };

    const socialLinks = [
        { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
        { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
        { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
        { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    ];

    return (
        <footer className="relative bg-gradient-to-br from-[#202c3c] via-[#2a3a4f] to-[#1a2332] text-white overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl"></div>
            </div>

            {/* Top Line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Brand Info */}
                    <div className="lg:col-span-4 space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="text-2xl font-bold flex items-center">
                                <Link href='/' className="flex items-center gap-2">
                                    <BsFillBuildingsFill className="text-gold" size={24} />
                                    <span>
                                        <span className="text-gold">SAB</span>PROPERTIES
                                    </span>
                                </Link>
                            </div>
                           
                        </div>
                        <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                            ))}
                            <span className="text-xs text-gray-400 ml-2">10k+ happy clients</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            We build digital experiences that engage and convert.
                        </p>
                        <div className="space-y-2 text-sm text-gray-300">
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-blue-400" />
                                sabgroup.marketing@gmail.com
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-blue-400" />
                                +91-9313638558
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-cyan-400" />
                                1/22, Asaf Ali road , Delhi 110002
                            </div>
                        </div>
                    </div>

                    {/* Footer Links */}
                    <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
                        {Object.entries(footerLinks).map(([section, links]) => (
                            <div key={section}>
                                <h4 className="text-white font-semibold mb-3 capitalize">{section}</h4>
                                <ul className="space-y-2">
                                    {links.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="text-gray-400 hover:text-blue-400 flex items-center space-x-1 transition"
                                            >
                                                <span>{link.name}</span>
                                                <ExternalLink className="w-3 h-3" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-[#34455c]/40 text-sm text-gray-400 py-4">
                <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
                    <div className="mb-2 sm:mb-0">
                        © {currentYear} All Rights Reserved Code Masheen Pvt Ltd
                    </div>
                    <div className="flex space-x-4">
                        {socialLinks.map(({ name, href, icon: Icon }) => (
                            <a
                                key={name}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition"
                                aria-label={name}
                            >
                                <Icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
