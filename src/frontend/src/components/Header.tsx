import { Button } from "@/components/ui/button";
import { Leaf, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-card border-b border-border shadow-subtle"
          : "bg-card/95 border-b border-border/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNav("#home")}
            type="button"
            className="flex items-center gap-2 group"
            aria-label="Fresh Valley Produce — go to home"
            data-ocid="nav.logo_link"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
              <Leaf className="w-4 h-4" />
            </span>
            <span className="font-display font-semibold text-lg text-foreground tracking-tight">
              Fresh Valley <span className="text-primary">Produce</span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="px-3 py-1.5 text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-md hover:bg-secondary"
                data-ocid={`nav.${link.label.toLowerCase()}_link`}
              >
                {link.label}
              </button>
            ))}
            <Button
              size="sm"
              className="ml-3"
              onClick={() => handleNav("#contact")}
              data-ocid="nav.contact_cta_button"
            >
              Get a Quote
            </Button>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-200"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            data-ocid="nav.mobile_menu_toggle"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-t border-border px-4 pt-2 pb-4 shadow-elevated">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="w-full text-left px-3 py-2.5 text-sm font-body font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-colors duration-200"
                data-ocid={`nav.mobile_${link.label.toLowerCase()}_link`}
              >
                {link.label}
              </button>
            ))}
            <Button
              className="mt-2 w-full"
              onClick={() => handleNav("#contact")}
              data-ocid="nav.mobile_contact_cta_button"
            >
              Get a Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
