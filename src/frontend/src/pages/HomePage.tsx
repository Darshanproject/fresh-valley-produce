import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  Leaf,
  Mail,
  MapPin,
  Package,
  Phone,
  Search,
  ShieldCheck,
  Truck,
  X,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { categories, products } from "../data/products";
import type { Product } from "../types";

const stats = [
  { value: "25+", label: "Years in Business" },
  { value: "Tri-State", label: "Service Area" },
  { value: "80+", label: "Vegetable Varieties" },
  { value: "500+", label: "Weekly Customers" },
];

const services = [
  {
    icon: Package,
    title: "Bulk Ordering",
    description:
      "Flexible case sizes and pallet quantities tailored for restaurants, retailers, and caterers. No over-complicated minimum order schedules — just straightforward bulk purchasing at competitive rates.",
  },
  {
    icon: Truck,
    title: "Delivery Logistics",
    description:
      "Temperature-controlled fleet covering the tri-state region. Scheduled weekly runs and bespoke drops. Track your delivery in real time with our driver notification system.",
  },
  {
    icon: Leaf,
    title: "Custom Packing",
    description:
      "Retail-ready packing, branded bags, and portioned catering trays. We accommodate private-label requirements and custom pack weights for high-volume accounts.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guarantee",
    description:
      "Every consignment inspected and graded before dispatch. Consistent specification, accurate weights, and complete traceability documentation from farm to door.",
  },
  {
    icon: DollarSign,
    title: "Volume Pricing Tiers",
    description:
      "Transparent tiered pricing that rewards loyalty and volume. Entry tier from $500/week, mid-volume from $1,500/week, and enterprise accounts negotiate direct terms with our sales team.",
  },
];

const availabilityColor: Record<string, string> = {
  "In Season": "bg-accent/15 text-accent border-accent/30",
  Available: "bg-secondary text-secondary-foreground border-border",
  Limited: "bg-primary/10 text-primary border-primary/30",
  "Pre-Order": "bg-muted text-muted-foreground border-border",
};

export function HomePage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [query, setQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchQ =
      query.trim() === "" ||
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQ;
  });

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    (e.target as HTMLFormElement).reset();
    toast.success("Enquiry sent!", {
      description:
        "Thank you for reaching out. We'll respond within one business day.",
      duration: 5000,
    });
  };

  return (
    <>
      {/* ── HERO ── */}
      <section
        id="home"
        className="relative min-h-[92vh] flex items-center overflow-hidden"
        data-ocid="home.section"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-produce.dim_1400x700.jpg')",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-foreground/55" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <Badge
              variant="outline"
              className="mb-5 border-primary-foreground/40 text-primary-foreground bg-primary/60 font-body text-xs tracking-widest uppercase"
            >
              B2B Vegetable Wholesale
            </Badge>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight text-balance mb-6">
              Fresh Valley Produce: Premium Wholesale Vegetables
            </h1>
            <p className="text-lg text-primary-foreground/85 font-body leading-relaxed mb-8 max-w-xl">
              Supplying the tri-state region's finest retailers and restaurants
              with consistently graded, farm-fresh produce since 1999. Trade
              accounts welcome — minimum orders to suit your operation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                type="button"
                size="lg"
                onClick={() => handleScroll("#products")}
                className="font-body"
                data-ocid="hero.browse_products_button"
              >
                Browse Catalogue
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                type="button"
                size="lg"
                variant="outline"
                className="font-body border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => handleScroll("#contact")}
                data-ocid="hero.get_quote_button"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section className="bg-primary" aria-label="Key statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-3xl font-bold text-primary-foreground">
                  {s.value}
                </p>
                <p className="text-sm text-primary-foreground/70 font-body mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        id="about"
        className="bg-background py-20"
        data-ocid="about.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-xs font-body uppercase tracking-widest text-primary font-semibold mb-3">
                Our Story
              </p>
              <h2 className="font-display text-4xl font-bold text-foreground mb-5 text-balance">
                Growing partnerships since 1999
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Fresh Valley Produce started as a family operation supplying
                local greengrocers in Springfield. Over 25 years we've grown
                into the tri-state region's most trusted wholesale vegetable
                supplier — but our approach hasn't changed: honest pricing, real
                provenance, and produce that speaks for itself.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We work directly with farms to eliminate unnecessary middlemen,
                meaning you get better quality at competitive prices. Our
                dedicated logistics fleet ensures produce moves from field to
                your business with minimal delay and zero cold-chain compromise.
              </p>
              <ul className="space-y-2">
                {[
                  "Direct farm-to-business supply chain across tri-state region",
                  "USDA-certified organic and conventional lines available",
                  "Dedicated account manager for every trade customer",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-foreground"
                  >
                    <CheckCircle className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Years in Business", value: "25+" },
                { label: "Service Area", value: "Tri-State" },
                { label: "Product Varieties", value: "80+" },
                { label: "Weekly Customers", value: "500+" },
              ].map((item) => (
                <Card key={item.label} className="shadow-subtle border-border">
                  <CardContent className="p-6 text-center">
                    <p className="font-display text-3xl font-bold text-primary mb-1">
                      {item.value}
                    </p>
                    <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">
                      {item.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section
        id="products"
        className="bg-muted/30 py-20"
        data-ocid="products.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-body uppercase tracking-widest text-primary font-semibold mb-3">
              Seasonal Catalogue
            </p>
            <h2 className="font-display text-4xl font-bold text-foreground mb-4 text-balance">
              Our Produce
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Sourced from trusted regional farms. Availability changes with the
              seasons — talk to us about standing orders and advance booking.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8 items-start sm:items-center">
            <div className="relative flex-1 max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search produce…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-9"
                data-ocid="products.search_input"
              />
            </div>
            <div
              className="flex flex-wrap gap-2"
              data-ocid="products.category_filter"
            >
              {categories.map((cat) => (
                <button
                  type="button"
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-body font-medium rounded-full border transition-smooth ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                  }`}
                  data-ocid={`products.filter_${cat.toLowerCase().replace(/\s+/g, "_")}_tab`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Product grid */}
          {filtered.length === 0 ? (
            <div
              className="text-center py-20 text-muted-foreground"
              data-ocid="products.empty_state"
            >
              <Leaf className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <p className="font-body">
                No produce matched your search. Try a different term.
              </p>
            </div>
          ) : (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              data-ocid="products.list"
            >
              {filtered.map((product, i) => (
                <Card
                  key={product.id}
                  className="shadow-subtle border-border hover:shadow-elevated transition-smooth bg-card cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                  data-ocid={`products.item.${i + 1}`}
                >
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3 className="font-display font-semibold text-foreground text-base leading-snug">
                        {product.name}
                      </h3>
                      <span
                        className={`shrink-0 text-[11px] font-body font-medium px-2 py-0.5 rounded-full border ${
                          availabilityColor[product.availability] ?? ""
                        }`}
                      >
                        {product.availability}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      <Badge variant="secondary" className="text-[11px]">
                        {product.category}
                      </Badge>
                      <Badge variant="outline" className="text-[11px]">
                        {product.season}
                      </Badge>
                      {product.tags?.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-[11px] text-accent border-accent/40"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 shrink-0 text-primary" />
                      {product.sourcing}
                    </p>
                    {product.minOrder && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Min. order:{" "}
                        <span className="font-medium text-foreground">
                          {product.minOrder}
                        </span>
                      </p>
                    )}
                    <p className="text-xs text-primary font-medium mt-3 flex items-center gap-1">
                      View details <ArrowRight className="w-3 h-3" />
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── PRODUCT DETAIL MODAL ── */}
      <Dialog
        open={!!selectedProduct}
        onOpenChange={(open) => !open && setSelectedProduct(null)}
      >
        <DialogContent className="max-w-lg" data-ocid="products.dialog">
          {selectedProduct && (
            <>
              <DialogHeader>
                <div className="flex items-start justify-between gap-3">
                  <DialogTitle className="font-display text-xl font-bold text-foreground leading-snug pr-6">
                    {selectedProduct.name}
                  </DialogTitle>
                  <span
                    className={`shrink-0 text-[11px] font-body font-medium px-2 py-0.5 rounded-full border ${
                      availabilityColor[selectedProduct.availability] ?? ""
                    }`}
                  >
                    {selectedProduct.availability}
                  </span>
                </div>
              </DialogHeader>
              <div className="space-y-4 mt-2">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {selectedProduct.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" /> Season
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {selectedProduct.season}
                    </p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Package className="w-3 h-3" /> Min. Order
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {selectedProduct.minOrder ?? "Ask us"}
                    </p>
                  </div>
                </div>
                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <MapPin className="w-3 h-3" /> Sourcing
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {selectedProduct.sourcing}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <Badge variant="secondary" className="text-[11px]">
                    {selectedProduct.category}
                  </Badge>
                  {selectedProduct.tags?.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-[11px] text-accent border-accent/40"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  type="button"
                  className="w-full"
                  onClick={() => {
                    setSelectedProduct(null);
                    handleScroll("#contact");
                  }}
                  data-ocid="products.enquire_button"
                >
                  Enquire About This Product
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* ── SERVICES ── */}
      <section
        id="services"
        className="bg-background py-20"
        data-ocid="services.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-body uppercase tracking-widest text-primary font-semibold mb-3">
              What We Offer
            </p>
            <h2 className="font-display text-4xl font-bold text-foreground mb-4 text-balance">
              End-to-End Service
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From picking to delivery, every step is managed so you can focus
              on your customers.
            </p>
          </div>
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="services.list"
          >
            {services.map((svc, i) => (
              <Card
                key={svc.title}
                className="shadow-subtle border-border bg-card"
                data-ocid={`services.item.${i + 1}`}
              >
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <svc.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {svc.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="contact"
        className="bg-muted/30 py-20"
        data-ocid="contact.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            {/* Info */}
            <div>
              <p className="text-xs font-body uppercase tracking-widest text-primary font-semibold mb-3">
                Partner With Us
              </p>
              <h2 className="font-display text-4xl font-bold text-foreground mb-5 text-balance">
                Ready to talk trade?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you run a restaurant, manage a retail buying team, or
                operate a catering business — we'd love to understand your
                requirements and build a bespoke supply programme together.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Address
                    </p>
                    <p className="text-sm text-muted-foreground">
                      123 Harvest Road, Springfield
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">
                      (555) 555-0178
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">
                      info@freshvalleyproduce.com
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Business Hours
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Mon–Fri: 5:00 am – 4:00 pm
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Saturday: 5:00 am – 12:00 pm
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Form */}
            <Card className="shadow-elevated border-border bg-card">
              <CardContent className="p-7">
                <h3 className="font-display font-semibold text-foreground text-lg mb-5">
                  Send an Enquiry
                </h3>
                <form
                  className="space-y-4"
                  onSubmit={handleContactSubmit}
                  data-ocid="contact.form"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        placeholder="First Last"
                        required
                        data-ocid="contact.name_input"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        required
                        data-ocid="contact.email_input"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your requirements — produce types, volumes, delivery frequency…"
                      className="min-h-[120px] resize-none"
                      required
                      data-ocid="contact.message_textarea"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    data-ocid="contact.submit_button"
                  >
                    Send Enquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
