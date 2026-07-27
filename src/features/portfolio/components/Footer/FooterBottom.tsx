const FooterBottom = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-text-muted">
            <p>
                © {new Date().getFullYear()} Asmaa Medhat. All Rights Reserved.
            </p>
            <div className="flex items-center gap-4">
                <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
                <span>|</span>
                <a href="/terms" className="hover:text-primary transition-colors">Terms of Use</a>
            </div>
        </div>
    );
};

export default FooterBottom;
