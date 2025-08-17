import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Phone, MapPin, Facebook, Instagram, Send, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// ============================
// Saifan Fashion – One-Page Site
// Tech: React + Tailwind + shadcn/ui + Framer Motion
// How to customize:
// 1) Replace BRAND, TAGLINE, CONTACT, and products[] with your real info.
// 2) Swap placeholder images with your product photos.
// 3) Update social links + WhatsApp link.
// ============================

const BRAND = "Saifan Fashion"; // ← change brand name if needed
const TAGLINE = "সবার জন্য মানসম্মত গার্মেন্টস"; // ← your short slogan
const WHATSAPP_LINK = "https://wa.me/00000000000"; // ← replace with your WhatsApp link (e.g. https://wa.me/8801XXXXXXXXX)
const PHONE = "+880 1XXX-XXXXXX"; // ← replace with your number
const ADDRESS = "Narayanganj, Dhaka, Bangladesh"; // ← your address

const products = [
  {
    id: 1,
    name: "Premium Polo T-Shirt",
    price: 799,
    desc: "100% cotton, breathable comfort.",
    img: "https://images.unsplash.com/photo-1618354691418-1bcd98a3e1b1?q=80&w=1200&auto=format&fit=crop",
    tag: "New"
  },
  {
    id: 2,
    name: "Classic Kurti",
    price: 1190,
    desc: "Soft rayon with elegant stitch.",
    img: "https://images.unsplash.com/photo-1542060748-10c28b62716f?q=80&w=1200&auto=format&fit=crop",
    tag: "Best-seller"
  },
  {
    id: 3,
    name: "Casual Shirt",
    price: 1090,
    desc: "Wrinkle-resistant, slim fit.",
    img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop",
    tag: "Hot"
  },
  {
    id: 4,
    name: "Denim Jeans",
    price: 1490,
    desc: "Stretch denim, tapered leg.",
    img: "https://images.unsplash.com/photo-1516822003754-cca485356ecb?q=80&w=1200&auto=format&fit=crop",
    tag: "Featured"
  }
];

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="py-16 lg:py-20" >
    <div className="max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
        {subtitle && (
          <p className="text-sm md:text-base text-gray-600 mt-2">{subtitle}</p>
        )}
      </motion.div>
      {children}
    </div>
  </section>
);

export default function SaifanFashionSite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-6 h-6" />
            <span className="font-semibold tracking-tight">{BRAND}</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#products" className="hover:opacity-80">Products</a>
            <a href="#about" className="hover:opacity-80">About</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              <Button className="rounded-2xl">Order on WhatsApp</Button>
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center pt-12 pb-6">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                {BRAND}
              </h1>
              <p className="mt-3 text-base md:text-lg text-gray-700">
                {TAGLINE}. আপনার পছন্দের পোশাক অর্ডার করুন এখনই – হোম ডেলিভারি, সহজ রিটার্ন।
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#products"><Button size="lg" className="rounded-2xl">Browse Products</Button></a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                  <Button variant="outline" size="lg" className="rounded-2xl">Chat on WhatsApp</Button>
                </a>
              </div>
              <div className="mt-6 max-w-md">
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  <Input placeholder="Search products (e.g., T-shirt, Kurti)" className="rounded-2xl" />
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border">
                <img
                  src="https://images.unsplash.com/photo-1520975922284-9e0ce8273ca1?q=80&w=1600&auto=format&fit=crop"
                  alt="Fashion showcase"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <Section id="products" title="Featured Products" subtitle="সবচেয়ে বেশি বিক্রিত ও নতুন কালেকশন">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Card className="rounded-3xl overflow-hidden border shadow-sm hover:shadow-md transition-shadow">
                <div className="relative">
                  <img src={p.img} alt={p.name} className="w-full h-48 object-cover" />
                  <span className="absolute top-3 left-3 text-xs bg-black/80 text-white px-2 py-1 rounded-full">
                    {p.tag}
                  </span>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold leading-tight">{p.name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mt-1">{p.desc}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-bold">৳{p.price}</span>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                      <Button size="sm" className="rounded-xl">Order</Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            <Button size="lg" className="rounded-2xl">See Full Catalog on WhatsApp</Button>
          </a>
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="about" title="About Us" subtitle="কে আমরা ও কী করি">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-gray-700">
            <p>
              {BRAND} বাংলাদেশের একটি নির্ভরযোগ্য গার্মেন্টস ব্র্যান্ড। আমরা মানসম্মত ফ্যাব্রিক,
              পারফেক্ট স্টিচিং এবং ট্রেন্ডি ডিজাইনে বিশ্বাস করি। হোলসেল/রিটেইল উভয় অর্ডার নেওয়া হয়।
            </p>
            <ul className="list-disc pl-5">
              <li>Custom bulk order (করপোরেট/টিম ইউনিফর্ম)</li>
              <li>Cash on Delivery (নির্বাচিত এলাকায়)</li>
              <li>Easy return & exchange policy</li>
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden border shadow">
            <img
              src="https://images.unsplash.com/photo-1520975605360-6c5a7a1a5a9b?q=80&w=1600&auto=format&fit=crop"
              alt="About Saifan Fashion"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact & Order" subtitle="অর্ডার/জিজ্ঞাসার জন্য যোগাযোগ করুন">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="rounded-3xl border shadow-sm">
            <CardContent className="p-6 space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1" />
                <div>
                  <p className="font-medium">Call</p>
                  <p className="text-sm text-gray-600">{PHONE}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-sm text-gray-600">{ADDRESS}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                  <Button className="rounded-2xl w-full">WhatsApp Now</Button>
                </a>
              </div>
            </CardContent>
          </Card>
          <Card className="md:col-span-2 rounded-3xl border shadow-sm">
            <CardContent className="p-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thanks! We'll contact you soon.");
                }}
                className="grid sm:grid-cols-2 gap-4"
              >
                <Input placeholder="Your Name" required className="rounded-2xl" />
                <Input placeholder="Phone/Email" required className="rounded-2xl" />
                <Input placeholder="Product/Size" className="sm:col-span-2 rounded-2xl" />
                <Button type="submit" className="rounded-2xl sm:col-span-2">Send Inquiry</Button>
              </form>
              <p className="text-xs text-gray-500 mt-3">Demo form only. Connect to your backend or form service (e.g., Formspree) to receive messages.</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex items-center gap-4 mt-8">
          <a href="#" aria-label="Facebook" className="p-3 rounded-full border hover:bg-gray-50"><Facebook className="w-4 h-4"/></a>
          <a href="#" aria-label="Instagram" className="p-3 rounded-full border hover:bg-gray-50"><Instagram className="w-4 h-4"/></a>
          <a href="#" aria-label="Messenger" className="p-3 rounded-full border hover:bg-gray-50"><Send className="w-4 h-4"/></a>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t py-8 mt-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} {BRAND}. All rights reserved.</p>
          <div className="text-xs text-gray-500">Built with ❤️ | Replace demo content with your own.</div>
        </div>
      </footer>
    </div>
  );
}
