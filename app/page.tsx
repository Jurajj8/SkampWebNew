"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, Menu, Phone, Scissors, X, Instagram } from "lucide-react"


import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const heroRef = useRef(null)

  const { scrollYProgress } = useScroll()
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(heroScrollProgress, [0, 1], [1, 0])
  const scale = useTransform(heroScrollProgress, [0, 1], [1, 0.8])
  const y = useTransform(heroScrollProgress, [0, 1], [0, 100])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const services = [
    {
      title: "Pánsky strih",
      description: "Klasika v modernom prevedení – strih aj styling v cene.",
      price: "14 €",
      duration: "30 min"
    },
    {
      title: "Pánsky strih (<10 rokov)",
      description: "Šetrné a štýlové strihy pre malých gentlemanov do 10 rokov.",
      price: "12 €",
      duration: "30 min"
    },
    {
      title: "Úprava brady + Hot Towel",
      description: "Starostlivosť o bradu s horúcim uterákom, ktorý zjemní pokožku a pripraví na dokonalý strih.",
      price: "15 €",
      duration: "25 min"
    },
    {
      title: "Strih + Úprava brady + Hot Towel",
      description: "Od hlavy po bradu – profesionálny strih a úprava s uvoľňujúcim horúcim uterákom.",
      price: "23 €",
      duration: "60 min"
    },
    {
      title: "Strih + brada + farbenie fúzov",
      description: "Od precízneho strihu až po dokonalý odtieň – full servis pre náročných.",
      price: "30 €",
      duration: "60 min"
    },
  ]


  /* const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Pánsky strih 1",
    },
    {
      src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Pánsky strih 2",
    },
    {
      src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Pánsky strih 3",
    },
    {
      src: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Pánsky strih 4",
    },
    {
      src: "https://images.unsplash.com/photo-1621607950331-42df8b7e8c9a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Úprava brady 1",
    },
    {
      src: "https://images.unsplash.com/photo-1598524556557-8e3026089b84?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Úprava brady 2",
    },
    {
      src: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Holenie 1",
    },
    {
      src: "https://images.unsplash.com/photo-1493256338651-d82f7272f427?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Holenie 2",
    },
  ] */

  const galleryVideos = [
    {
      src: "video1.mp4",
      alt: "Video z barber shopu 1",
      placeholder: "video1placeholder.png"
    },
    {
      src: "video2.mp4",
      alt: "Video z barber shopu 2",
      placeholder: "video2placeholder.png"
    },
    {
      src: "video3.mp4",
      alt: "Video z barber shopu 3",
      placeholder: "video3placeholder.png"
    }
  ]


  const handleMobileNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    if (href.startsWith("#")) {
      setTimeout(() => {
        document.getElementById(href.substring(1))?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    }
  }

  return (
    <div className="relative bg-background text-foreground font-barber">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-0 md:px-0
        ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-md py-3 md:py-4" : "bg-transparent py-3 md:py-6" } mobile-safe-area
        `}
      >
        <div className="container mx-auto px-6 md:px-4 flex justify-between items-center">
          <Link href="/" className="text-xl md:text-2xl font-bold tracking-tighter text-accent relative group">
            <Image
              src="logo_white.png"
              alt="SKAMP logo"
              width={100}
              height={100}
              className="object-contain"
              priority 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {[
              { name: "Domov", href: "#home" },
              { name: "O nás", href: "#about" },
              { name: "Služby", href: "#services" },
              { name: "Galéria", href: "#gallery" },
              { name: "Kontakt", href: "#contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium hover:text-accent transition-colors relative group text-sm lg:text-base"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-violet-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link href="https://rezervacie.danielpollak.sk/">
              <Button className="bg-gradient-to-r from-accent to-violet-500 hover:from-accent/90 hover:to-violet-500/90 text-white text-sm lg:text-base px-4 lg:px-6">
                Rezervovať
              </Button>
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-foreground p-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Otvoriť menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-background/95 backdrop-blur-md border-l border-border w-full sm:w-80"
            >
              <div className="flex justify-between items-center mb-8">
                <Link href="/" className="text-xl font-bold tracking-tighter text-accent text-glow-sm">
                  <Image
                    src="logo_white.png"
                    alt="SKAMP logo"
                    width={100}
                    height={100}
                    className="object-contain"
                    priority 
                  />
                </Link>
              </div>

              <nav className="flex flex-col space-y-6">
                {[
                  { name: "Domov", href: "#home" },
                  { name: "O nás", href: "#about" },
                  { name: "Služby", href: "#services" },
                  { name: "Galéria", href: "#gallery" },
                  { name: "Kontakt", href: "#contact" },
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleMobileNavClick(item.href)}
                    className="text-left text-lg font-medium hover:text-accent transition-colors py-2 border-b border-border/30"
                  >
                    {item.name}
                  </button>
                ))}
                <Link href="https://rezervacie.danielpollak.sk/" className="w-full pt-4">
                  <Button className="bg-gradient-to-r from-accent to-violet-500 hover:from-accent/90 hover:to-violet-500/90 w-full text-white py-3 text-lg">
                    Rezervovať termín
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="relative mobile-hero-height flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="barber-bg1.jpg"
            alt="Barbershop pozadie"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-violet-500/20 opacity-30 mix-blend-overlay"></div>
        </div>

        <motion.div
          style={{ opacity, scale, y }}
          className="container mx-auto px-6 md:px-4 z-10 text-center mobile-safe-area"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative inline-block mb-6 md:mb-8"
          >
            <div className="absolute -inset-2 md:-inset-4 rounded-full bg-gradient-to-r from-accent/30 to-violet-500/30 blur-xl"></div>
            <div className="relative z-10 p-1.5 md:p-2 rounded-full border-2 border-accent/50">
              <Scissors className="w-12 h-12 md:w-16 md:h-16 text-accent" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-tight leading-tight"
          >
            <span className="sm:inline">SKAMP</span>{" "}
            <span className="text-accent text-glow-sm md:text-glow sm:inline">BARBER</span>
            <span className="sm:inline">SHOP</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 max-w-2xl mx-auto text-foreground/80 px-4"
          >
            Miesto, kde vlasy a brada dostanú presne to, čo si zaslúžia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="px-4"
          >
            <Link href="/rezervacia">
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent to-violet-500 hover:from-accent/90 hover:to-violet-500/90 text-base md:text-lg px-6 md:px-8 py-3 md:py-4 text-white shadow-lg shadow-accent/20 w-full sm:w-auto"
              >
                Rezervovať termín
              </Button>
            </Link>
          </motion.div>

          <div className="absolute bottom-6 md:bottom-10 left-0 right-0 flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="cursor-pointer"
              onClick={() => {
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-accent md:w-10 md:h-10"
              >
                <path
                  d="M12 5V19M12 19L5 12M12 19L19 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stylish Divider */}
      <div className="relative h-12 md:h-16 bg-gradient-to-r from-accent to-violet-500 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNmMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNnptMTIgMTJjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTZjLTMuMzE0IDAtNiAyLjY4Ni02IDZzMi42ODYgNiA2IDZ6bTEyIDEyYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02Yy0zLjMxNCAwLTYgMi42ODYtNiA2czIuNjg2IDYgNiA2ek0xMiA0MmMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNmMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNnptMC0xMmMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNmMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNnptMjQgMGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNmMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNnoiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLW9wYWNpdHk9Ii4yIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-6 md:px-4 h-full flex items-center justify-center mobile-safe-area">
          <div className="text-white text-sm sm:text-base md:text-xl lg:text-2xl font-bold tracking-wider uppercase text-center">
            <span className="hidden sm:inline">SKAMP BARBERSHOP • PRÉMIOVÉ STRIHY • PROFESIONÁLNA STAROSTLIVOSŤ</span>
            <span className="sm:hidden">SKAMP • PRÉMIOVÉ STRIHY</span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-6 md:px-4 mobile-safe-area">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-4 gap-8 md:gap-12 items-center"
          >
            <div className="relative order-2 md:order-1 md:col-span-1 flex justify-center">
              <div className="absolute -top-4 -left-4 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-accent/30 to-violet-500/30 rounded-full blur-3xl"></div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 rounded-lg overflow-hidden shadow-xl shadow-accent/10"
              >
                <Image
                  src="profile.jpg"
                  alt="Daniel Polak - Majster holič"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover object-top rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-40"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-background to-transparent">
                  <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-accent to-violet-500 mb-2"></div>
                  <h3 className="text-lg md:text-xl font-bold text-white">Daniel Pollák</h3>
                  <p className="text-white/80 text-sm">Barber</p>
                </div>
              </motion.div>
              <div className="absolute -bottom-4 -right-4 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-tl from-accent/30 to-violet-500/30 rounded-full blur-3xl"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2 md:col-span-3 mr-2 ml-2"
            >
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Spoznajte <span className="text-accent text-glow-sm md:text-glow">Daniela Polláka</span>
              </motion.h2>

              <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-accent to-violet-500 mb-4 md:mb-6"></div>

              <motion.p
                className="text-foreground/80 mb-4 md:mb-6 text-sm md:text-base leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                S viac než 6 rokmi skúseností za strojčekom Daniel neustále posúva hranice klasického barberského remesla. Vzdelával sa na workshopoch po celom svete a svoju vášeň pretavil do precíznosti, ktorú cítiš pri každom strihu. 
              </motion.p>

              <motion.p
                className="text-foreground/80 mb-6 md:mb-8 text-sm md:text-base leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                V Skamp Barbershope veríme, že účes nie je len rutina – je to osobný zážitok. Daniel spája to najlepšie z tradičných techník a moderných trendov, aby vytvoril štýl, ktorý sedí práve tebe. 
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-violet-500/20 flex items-center justify-center">
                    <Scissors className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  </div>
                  <span className="text-sm md:text-base">6+ rokov skúseností</span>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-violet-500/20 flex items-center justify-center">
                    <Calendar className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  </div>
                  <span className="text-sm md:text-base">Profesionálne školenia</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-20 bg-secondary relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNmMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNnptMTIgMTJjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTZjLTMuMzE0IDAtNiAyLjY4Ni02IDZzMi42ODYgNiA2IDZ6bTEyIDEyYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02Yy0zLjMxNCAwLTYgMi42ODYtNiA2czIuNjg2IDYgNiA2ek0xMiA0MmMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNmMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNnptMC0xMmMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNmMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNnptMjQgMGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNmMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNnoiIHN0cm9rZT0iI0E4NTVGNyIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

        <div className="container mx-auto px-6 md:px-4 relative z-10 mobile-safe-area">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
            >
              Naše <span className="text-accent text-glow-sm md:text-glow">služby</span>
            </motion.h2>

            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-accent to-violet-500 mx-auto mb-4 md:mb-6"></div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-foreground/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed px-4"
            >
              Prémiová starostlivosť, presne podľa teba. Každý strih začína konzultáciou, končí maximálnou spokojnosťou.
            </motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-background/20 backdrop-blur-md border border-border rounded-2xl shadow-lg p-6 flex flex-col hover:shadow-accent/20 transition-all group"
              >
                <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
                <p className="text-foreground/80 mb-4 text-sm md:text-base">{service.description}</p>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="font-bold text-accent text-lg">{service.price}</span>
                  <span className="text-foreground/70 text-sm md:text-base">{service.duration}</span>
                </div>
                {/* Gradientový progress bar pri hover */}
                <div className="h-1 w-0 bg-gradient-to-r from-accent to-violet-500 mt-4 rounded-b-2xl transition-all duration-300 group-hover:w-full"></div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-8 md:mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="https://rezervacie.danielpollak.sk/">
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent to-violet-500 hover:from-accent/90 hover:to-violet-500/90 text-white shadow-lg shadow-accent/20 w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
              >
                Zobraziť všetky služby
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      {/* <section id="gallery" className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-6 md:px-4 mobile-safe-area">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
            >
              Naša <span className="text-accent text-glow-sm md:text-glow">galéria</span>
            </motion.h2>

            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-accent to-violet-500 mx-auto mb-4 md:mb-6"></div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-foreground/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed px-4"
            >
              Pozrite si niektoré z našich najlepších prác. Každý strih je dôkazom našej oddanosti kvalite a štýlu.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative group overflow-hidden rounded-lg aspect-square"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute top-0 left-0 w-6 h-6 md:w-10 md:h-10 border-t-2 border-l-2 border-accent/0 group-hover:border-accent transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 md:w-10 md:h-10 border-b-2 border-r-2 border-accent/0 group-hover:border-accent transition-colors duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <section id="gallery" className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-6 md:px-4 mobile-safe-area">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
            >
              Naša <span className="text-accent text-glow-sm md:text-glow">galéria</span>
            </motion.h2>

            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-accent to-violet-500 mx-auto mb-4 md:mb-6"></div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-foreground/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed px-4"
            >
              Chceš vedieť, ako to u nás žije? Mrkni na videá a nechaj sa vtiahnuť do atmosféry Skampu.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryVideos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative group overflow-hidden rounded-lg aspect-square shadow-lg"
              >
                <video
                  src={video.src}
                  controls
                  loop
                  playsInline
                  poster= {video.placeholder}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-0 left-0 w-6 h-6 md:w-10 md:h-10 border-t-2 border-l-2 border-accent/0 group-hover:border-accent transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 md:w-10 md:h-10 border-b-2 border-r-2 border-accent/0 group-hover:border-accent transition-colors duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact & Booking */}
      <section id="contact" className="py-12 md:py-20 bg-secondary relative">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-accent/10 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 md:px-4 relative z-10 mobile-safe-area">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
            >
              Kontaktujte <span className="text-accent text-glow-sm md:text-glow">nás</span>
            </motion.h2>

            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-accent to-violet-500 mx-auto mb-4 md:mb-6"></div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-foreground/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed px-4"
            >
              Nečakaj na dokonalý moment – vytvor si ho u nás.
              Objednaj sa ešte dnes.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-background/10 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-border shadow-lg shadow-accent/5"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Kontaktné informácie</h3>
              <div className="w-12 h-1 bg-gradient-to-r from-accent to-violet-500 mb-4 md:mb-6"></div>

              <div className="space-y-4 md:space-y-6">
                <motion.div
                  className="flex items-start gap-3 md:gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-violet-500/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-sm md:text-base">Adresa</h4>
                    <p className="text-foreground/80 text-sm md:text-base">Skalité 1007, 023 14 Skalité</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3 md:gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-violet-500/20 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-sm md:text-base">Telefón</h4>
                    <p className="text-foreground/80 text-sm md:text-base">+421 908 581 126</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3 md:gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-violet-500/20 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-sm md:text-base">Otváracie hodiny</h4>
                    <p className="text-foreground/80 text-sm md:text-base">Pondelok - 10:00 – 12:00, 15:00 – 16:30</p>
                    <p className="text-foreground/80 text-sm md:text-base">Utorok - 10:00 – 12:30, 15:30 – 17:00</p>
                    <p className="text-foreground/80 text-sm md:text-base">Štvrtok - 09:00 – 12:00, 15:30 – 17:00</p>
                    <p className="text-foreground/80 text-sm md:text-base">Piatok - 09:00 – 12:30, 13:30 – 14:30</p>
                    <p className="text-foreground/80 text-sm md:text-base">Streda, Sobota a Nedeľa - Zatvorené</p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="mt-6 md:mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h4 className="font-bold mb-4 text-sm md:text-base">Sledujte nás</h4>
                <div className="flex gap-3 md:gap-4">
                  <Link
                  href="https://www.instagram.com/_danielpollak.skamp_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/20 to-violet-500/20 flex items-center justify-center hover:from-accent/40 hover:to-violet-500/40 transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <Instagram className="w-5 h-5 md:w-6 md:h-6 text-accent" strokeWidth={1.8} />
                </Link>
              </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-background/10 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-border shadow-lg shadow-accent/5"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Rezervácia termínu</h3>
              <div className="w-12 h-1 bg-gradient-to-r from-accent to-violet-500 mb-4 md:mb-6"></div>

              <p className="text-foreground/80 mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
                Chcete si rezervovať termín? Kliknite na tlačidlo nižšie a budete presmerovaní na našu rezervačnú
                stránku.
              </p>

              <div className="space-y-4 md:space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="relative rounded-lg overflow-hidden">
                    <Image
                      src="barber-bg.jpg"
                      alt="Interiér barbershopu"
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                      <div className="w-10 md:w-12 h-1 bg-gradient-to-r from-accent to-violet-500 mb-2"></div>
                      <h4 className="text-base md:text-lg font-bold text-white">Moderné priestory</h4>
                      <p className="text-white/80 text-xs md:text-sm">Príjemné prostredie pre váš dokonalý strih</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Link href="https://rezervacie.danielpollak.sk/" className="w-full block">
                    <Button className="w-full bg-gradient-to-r from-accent to-violet-500 hover:from-accent/90 hover:to-violet-500/90 py-4 md:py-6 text-base md:text-lg text-white shadow-lg shadow-accent/20">
                      Rezervovať termín
                    </Button>
                  </Link>
                </motion.div>

                {/* <motion.p
                  className="text-foreground/70 text-center text-xs md:text-sm mt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Alebo nás kontaktujte telefonicky na čísle +421 908 581 126.
                </motion.p> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-8 md:py-12 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-4 mobile-safe-area">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/"
                className="text-xl md:text-2xl font-bold tracking-tighter mb-3 md:mb-4 block text-accent text-glow-sm"
              >
                SKAMP
              </Link>
              <div className="w-10 md:w-12 h-1 bg-gradient-to-r from-accent to-violet-500 mb-3 md:mb-4"></div>
              <p className="text-foreground/70 mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
                Prémiový barbershop poskytujúci kvalitné strihy a štýly pre moderného gentlmena.
              </p>
              <div className="flex gap-3 md:gap-4">
                  <Link
                  href="https://www.instagram.com/_danielpollak.skamp_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/20 to-violet-500/20 flex items-center justify-center hover:from-accent/40 hover:to-violet-500/40 transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <Instagram className="w-5 h-5 md:w-6 md:h-6 text-accent" strokeWidth={1.8} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">Rýchle odkazy</h4>
              <div className="w-10 md:w-12 h-1 bg-gradient-to-r from-accent to-violet-500 mb-3 md:mb-4"></div>
              <ul className="space-y-2">
                {[
                  { name: "Domov", href: "#home" },
                  { name: "O nás", href: "#about" },
                  { name: "Služby", href: "#services" },
                  { name: "Galéria", href: "#gallery" },
                  { name: "Kontakt", href: "#contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-foreground/70 hover:text-accent transition-colors text-sm md:text-base"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">Kontaktujte nás</h4>
              <div className="w-10 md:w-12 h-1 bg-gradient-to-r from-accent to-violet-500 mb-3 md:mb-4"></div>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground/70 text-sm md:text-base">Skalité 1007, 023 14 Skalité</span>
                </li>
                {/* <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground/70 text-sm md:text-base">+421 908 581 126</span>
                </li> */}
                  {/* <div>
                    <h4 className="font-bold mb-1 text-sm md:text-base">Otváracie hodiny</h4>
                    <p className="text-foreground/80 text-sm md:text-base">Pondelok - 10:00 – 12:00, 15:00 – 16:30</p>
                    <p className="text-foreground/80 text-sm md:text-base">Utorok - 10:00 – 12:30, 15:30 – 17:00</p>
                    <p className="text-foreground/80 text-sm md:text-base">Štvrtok - 09:00 – 12:00, 15:30 – 17:00</p>
                    <p className="text-foreground/80 text-sm md:text-base">Piatok - 09:00 – 12:30, 13:30 – 14:30</p>
                    <p className="text-foreground/80 text-sm md:text-base">Streda, Sobota a Nedeľa - Zatvorené</p>
                  </div> */}
              </ul>
            </motion.div>
          </div>

          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border text-center">
            <p className="text-foreground/70 text-sm md:text-base">
              © {new Date().getFullYear()} Skamp Barbershop. Všetky práva vyhradené.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
