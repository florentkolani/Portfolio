import { ArrowUpRight, ArrowUpToLine } from "lucide-react";
import { getContent, type Language } from "../i18n";

interface FooterProps {
    language: Language;
}

const Footer = ({ language }: FooterProps) => {
    const copy = getContent(language).footer;

    return (
        <footer className="site-footer">
            <div className="container footer-inner">
                <a className="brand footer-brand" href="#Home">
                    <span className="brand-mark" aria-hidden="true">FK</span>
                    <span>KOLANI <strong>Florent</strong></span>
                </a>
                <p className="footer-role">{copy.role}</p>
                <address className="footer-contact">
                    <a href="tel:+22890327921">+228 90 32 79 21</a>
                    <a href="tel:+22898859994">+228 98 85 99 94</a>
                    <a href="mailto:kolaniflorent446@gmail.com">kolaniflorent446@gmail.com<ArrowUpRight aria-hidden="true" /></a>
                </address>
                <p className="copyright">© {new Date().getFullYear()} Florent Kolani. {copy.rights}</p>
                <a className="back-to-top" href="#Home" aria-label={copy.backToTop}>
                    <ArrowUpToLine aria-hidden="true" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;