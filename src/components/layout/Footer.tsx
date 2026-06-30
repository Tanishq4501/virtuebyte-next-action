import Link from "next/link";
import LazyBackground from "@/components/ui/LazyBackground";
import LazyImage from "@/components/ui/LazyImage";
import { footerData, navigation } from "@/data/navigation";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaPhoneAlt, FaEnvelopeOpen, FaMapMarkerAlt } from "react-icons/fa";

const socialIcons: Record<string, React.ReactNode> = {
    instagram: <FaInstagram className="w-7 h-7" />,
    facebook: <FaFacebookF className="w-7 h-7" />,
    linkedin: <FaLinkedinIn className="w-7 h-7" />,
};

export default function Footer() {
    return (
        <footer className="relative text-white overflow-hidden">
            <LazyBackground src="/images/bg2.webp" />
            <div className="absolute inset-0 bg-[#462D84]/90" />

            <div className="relative max-w-[1280px] mx-auto px-5 pt-[80px]">
                {/* Top: Logo + Social */}
                <div className="flex flex-col items-start border-b border-[#E5A2FF0A] pb-[40px] mb-[40px]">
                    <div className="flex items-center gap-[35px] self-center mb-6">
                        {footerData.social.map((s) => (
                            <a
                                key={s.platform}
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary text-[15px] hover:text-white transition-colors"
                                aria-label={s.platform}
                            >
                                {socialIcons[s.icon]}
                            </a>
                        ))}
                    </div>
                    <Link href="/" className="self-start -ml-5 md:-ml-17">
                        <LazyImage
                            src={navigation.footerLogo}
                            alt="VirtueByte logo"
                            width={220}
                            height={52}
                            className="w-[55%] sm:w-[45%] md:w-[38%] min-w-[160px] h-auto mb-6"
                            sizes="220px"
                        />
                    </Link>
                </div>

                {/* Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Column 1: Important Links */}
                    <div>
                        <h3 className="text-[18px] font-semibold font-fira text-white mb-2" style={{ lineHeight: '1.4em' }}>Important Links</h3>
                        <div className="border-t border-white mb-4" style={{ marginTop: '-8px' }} />
                        <ul className="space-y-2">
                            {footerData.importantLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-white hover:text-primary transition-colors text-[16px] md:text-[18px] font-normal"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h3 className="text-[18px] font-semibold font-fira text-white mb-2" style={{ lineHeight: '1.4em' }}>Services</h3>
                        <div className="border-t border-white mb-4" style={{ marginTop: '-8px' }} />
                        <ul className="space-y-2">
                            {footerData.services.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-white hover:text-primary transition-colors text-[16px] md:text-[18px] font-normal"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Insights & Products */}
                    <div>
                        <h3 className="text-[18px] font-semibold font-fira text-white mb-2" style={{ lineHeight: '1.4em' }}>Insights</h3>
                        <div className="border-t border-white mb-4" style={{ marginTop: '-8px' }} />
                        <ul className="space-y-2">
                            {footerData.insights.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-white hover:text-primary transition-colors text-[16px] md:text-[18px] font-normal"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <h3 className="text-[18px] font-semibold font-fira text-white mt-6 mb-2" style={{ lineHeight: '1.4em' }}>Our Products</h3>
                        <div className="border-t border-white mb-4" style={{ marginTop: '-8px' }} />
                        <ul className="space-y-2">
                            {footerData.products.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-white hover:text-primary transition-colors text-[16px] md:text-[18px] font-normal"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact & Careers */}
                    <div>
                        <h3 className="text-[18px] font-semibold font-fira text-white mb-2" style={{ lineHeight: '1.4em' }}>Contact Us</h3>
                        <div className="border-t border-white mb-4" style={{ marginTop: '-8px' }} />
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <FaPhoneAlt className="w-[15px] h-[15px] text-primary mt-1 flex-shrink-0" />
                                <a href={`tel:${footerData.contact.phone}`} className="text-white hover:text-primary transition-colors text-[16px] md:text-[18px]">
                                    {footerData.contact.phone}
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaEnvelopeOpen className="w-[15px] h-[15px] text-primary mt-1 flex-shrink-0" />
                                <a href={`mailto:${footerData.contact.salesEmail}`} className="text-white hover:text-primary transition-colors text-[16px] md:text-[18px] break-all">
                                    {footerData.contact.salesEmail}
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaMapMarkerAlt className="w-[15px] h-[15px] text-primary mt-1 flex-shrink-0" />
                                <span className="text-white text-[16px] md:text-[18px]">
                                    {footerData.contact.address}
                                </span>
                            </li>
                        </ul>

                        <h3 className="text-[18px] font-semibold font-fira text-white mt-6 mb-2" style={{ lineHeight: '1.4em' }}>Careers</h3>
                        <div className="border-t border-white mb-4" style={{ marginTop: '-8px' }} />
                        <div className="flex items-start gap-3">
                            <FaEnvelopeOpen className="w-[15px] h-[15px] text-primary mt-1 flex-shrink-0" />
                            <a href={`mailto:${footerData.contact.careersEmail}`} className="text-white hover:text-primary transition-colors text-[16px] md:text-[18px] break-all">
                                {footerData.contact.careersEmail}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="relative border-t border-[#E6D9EB69] mt-[40px]">
                <div className="max-w-[1280px] mx-auto px-5 py-[30px]">
                    <p className="text-center text-white text-[15px] md:text-[18px] font-normal">
                        {footerData.copyright}
                    </p>
                </div>
            </div>
        </footer>
    );
}

