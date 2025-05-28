"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, Menu, Phone, Scissors, X } from "lucide-react"

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
      title: "Klasický strih",
      description: "Tradičný strih s modernými technikami, vrátane umytia a stylingu.",
      price: "25€",
      duration: "45 min",
      icon: <Scissors className="w-5 h-5 md:w-6 md:h-6 text-accent" />,
    },
    {
      title: "Úprava brady",
      description: "Precízne zastrihávanie a tvarovanie brady pre zvýraznenie vašich čŕt tváre.",
      price: "15€",
      duration: "20 min",
      icon: <Scissors className="w-5 h-5 md:w-6 md:h-6 text-accent" />,
    },
    {
      title: "Holenie s horúcim uterákom",
      description: "Luxusné holenie britovou žiletkou s ošetrením horúcim uterákom.",
      price: "30€",
      duration: "40 min",
      icon: <Scissors className="w-5 h-5 md:w-6 md:h-6 text-accent" />,
    },
    {
      title: "Strih a úprava brady",
      description: "Kompletný balík zahŕňajúci strih vlasov a úpravu brady pre svieži vzhľad.",
      price: "35€",
      duration: "60 min",
      icon: <Scissors className="w-5 h-5 md:w-6 md:h-6 text-accent" />,
    },
    {
      title: "Detský strih",
      description: "Jemné strihy pre deti do 12 rokov.",
      price: "18€",
      duration: "30 min",
      icon: <Scissors className="w-5 h-5 md:w-6 md:h-6 text-accent" />,
    },
    {
      title: "Styling vlasov",
      description: "Profesionálny styling pre špeciálne príležitosti alebo každodenný vzhľad.",
      price: "20€",
      duration: "30 min",
      icon: <Scissors className="w-5 h-5 md:w-6 md:h-6 text-accent" />,
    },
  ]

  const galleryImages = [
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 mobile-safe-area ${
          isScrolled ? "bg-background/95 backdrop-blur-md py-2 md:py-2 purple-glow" : "bg-transparent py-3 md:py-4"
        }`}
      >
        <div className="container mx-auto px-6 md:px-4 flex justify-between items-center">
          <Link href="/" className="text-xl md:text-2xl font-bold tracking-tighter text-accent relative group">
            <span className="relative z-10 text-glow-sm md:text-glow">SKAMP</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {[
              { name: "Domov", href: "#home" },
              { name: "Služby", href: "#services" },
              { name: "Galéria", href: "#gallery" },
              { name: "O nás", href: "#about" },
              { name: "Kontakt", href: "#contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium hover:text-accent transition-colors relative group text-sm lg:text-base"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link href="/rezervacia">
              <Button className="bg-gradient-to-r from-accent to-pink-500 hover:from-accent/90 hover:to-pink-500/90 text-white text-sm lg:text-base px-4 lg:px-6">
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
                  SKAMP
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <nav className="flex flex-col space-y-6">
                {[
                  { name: "Domov", href: "#home" },
                  { name: "Služby", href: "#services" },
                  { name: "Galéria", href: "#gallery" },
                  { name: "O nás", href: "#about" },
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
                <Link href="/rezervacia" className="w-full pt-4">
                  <Button className="bg-gradient-to-r from-accent to-pink-500 hover:from-accent/90 hover:to-pink-500/90 w-full text-white py-3 text-lg">
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
            src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Barbershop pozadie"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-pink-500/20 opacity-30 mix-blend-overlay"></div>
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
            <div className="absolute -inset-2 md:-inset-4 rounded-full bg-gradient-to-r from-accent/30 to-pink-500/30 blur-xl"></div>
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
            <span className="block sm:inline">SKAMP</span>{" "}
            <span className="text-accent text-glow-sm md:text-glow block sm:inline">BARBER</span>
            <span className="block sm:inline">SHOP</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 max-w-2xl mx-auto text-foreground/80 px-4"
          >
            Prémiové strihy a štýly pre moderného džentlmena
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
                className="bg-gradient-to-r from-accent to-pink-500 hover:from-accent/90 hover:to-pink-500/90 text-base md:text-lg px-6 md:px-8 py-3 md:py-4 text-white shadow-lg shadow-accent/20 w-full sm:w-auto"
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
      <div className="relative h-12 md:h-16 bg-gradient-to-r from-accent to-pink-500 overflow-hidden">
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
            className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            <div className="relative order-2 md:order-1">
              <div className="absolute -top-4 -left-4 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-accent/30 to-pink-500/30 rounded-full blur-3xl"></div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 rounded-lg overflow-hidden shadow-xl shadow-accent/10"
              >
                <Image
                  src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Daniel Polak - Majster holič"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-40"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-background to-transparent">
                  <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-accent to-pink-500 mb-2"></div>
                  <h3 className="text-lg md:text-xl font-bold text-white">Daniel Polak</h3>
                  <p className="text-white/80 text-sm">Majster holič & Zakladateľ</p>
                </div>
              </motion.div>
              <div className="absolute -bottom-4 -right-4 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-tl from-accent/30 to-pink-500/30 rounded-full blur-3xl"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Spoznajte <span className="text-accent text-glow-sm md:text-glow">Daniela Polaka</span>
              </motion.h2>

              <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-accent to-pink-500 mb-4 md:mb-6"></div>

              <motion.p
                className="text-foreground/80 mb-4 md:mb-6 text-sm md:text-base leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                S viac ako 6-ročnými skúsenosťami Daniel zdokonaľuje svoje remeslo a posúva hranice tradičného
                holičstva. Jeho vášeň pre neustále vzdelávanie ho priviedla k účasti na mnohých kurzoch a workshopoch po
                celom svete.
              </motion.p>

              <motion.p
                className="text-foreground/80 mb-6 md:mb-8 text-sm md:text-base leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                V Skamp Barbershope veríme, že strih vlasov nie je len služba, ale zážitok. Daniel kombinuje tradičné
                techniky s modernými štýlmi, aby vytvoril vzhľad, ktorý je jedinečne prispôsobený každému klientovi.
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-pink-500/20 flex items-center justify-center">
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
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-pink-500/20 flex items-center justify-center">
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

            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-accent to-pink-500 mx-auto mb-4 md:mb-6"></div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-foreground/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed px-4"
            >
              Ponúkame širokú škálu prémiových služieb, aby ste vyzerali čo najlepšie. Každá služba zahŕňa konzultáciu,
              aby sme dosiahli váš požadovaný štýl.
            </motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background/10 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-border hover:border-accent/50 transition-all group hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-accent/20 to-pink-500/20 flex items-center justify-center mb-4 md:mb-6 group-hover:from-accent/30 group-hover:to-pink-500/30 transition-colors">
                  {service.icon}
                </div>

                <h3 className="text-lg md:text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-foreground/70 mb-4 text-sm md:text-base leading-relaxed">{service.description}</p>

                <div className="flex justify-between items-center">
                  <span className="text-accent font-bold text-lg md:text-xl">{service.price}</span>
                  <span className="text-foreground/70 flex items-center gap-1 text-sm md:text-base">
                    <Clock className="w-3 h-3 md:w-4 md:h-4" /> {service.duration}
                  </span>
                </div>

                <div className="w-0 h-0.5 bg-gradient-to-r from-accent to-pink-500 mt-4 transition-all duration-300 group-hover:w-full"></div>
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
            <Link href="/rezervacia">
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent to-pink-500 hover:from-accent/90 hover:to-pink-500/90 text-white shadow-lg shadow-accent/20 w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
              >
                Zobraziť všetky služby
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
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

            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-accent to-pink-500 mx-auto mb-4 md:mb-6"></div>

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

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-background text-xs md:text-sm px-3 md:px-4 py-2"
                  >
                    <span className="hidden sm:inline">Zobraziť detail</span>
                    <span className="sm:hidden">Detail</span>
                  </Button>
                </div>

                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-6 h-6 md:w-10 md:h-10 border-t-2 border-l-2 border-accent/0 group-hover:border-accent transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 md:w-10 md:h-10 border-b-2 border-r-2 border-accent/0 group-hover:border-accent transition-colors duration-300"></div>
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
            <Link href="/rezervacia">
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-gradient-to-r hover:from-accent hover:to-pink-500 hover:text-white w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
              >
                Zobraziť celú galériu
              </Button>
            </Link>
          </motion.div>
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

            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-accent to-pink-500 mx-auto mb-4 md:mb-6"></div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-foreground/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed px-4"
            >
              Ste pripravení na nový vzhľad? Rezervujte si termín ešte dnes a zažite rozdiel v Skamp Barbershope.
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
              <div className="w-12 h-1 bg-gradient-to-r from-accent to-pink-500 mb-4 md:mb-6"></div>

              <div className="space-y-4 md:space-y-6">
                <motion.div
                  className="flex items-start gap-3 md:gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-pink-500/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-sm md:text-base">Adresa</h4>
                    <p className="text-foreground/80 text-sm md:text-base">Holičská 123, Centrum mesta, 10000</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3 md:gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-pink-500/20 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-sm md:text-base">Telefón</h4>
                    <p className="text-foreground/80 text-sm md:text-base">+421 900 123 456</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3 md:gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-pink-500/20 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-sm md:text-base">Otváracie hodiny</h4>
                    <p className="text-foreground/80 text-sm md:text-base">Pondelok - Piatok: 9:00 - 19:00</p>
                    <p className="text-foreground/80 text-sm md:text-base">Sobota: 10:00 - 16:00</p>
                    <p className="text-foreground/80 text-sm md:text-base">Nedeľa: Zatvorené</p>
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
                  {["facebook", "instagram", "twitter"].map((social, index) => (
                    <Link
                      key={social}
                      href={`https://${social}.com`}
                      target="_blank"
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-pink-500/20 flex items-center justify-center hover:from-accent/40 hover:to-pink-500/40 transition-colors"
                    >
                      <span className="sr-only">{social}</span>
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" />
                      </svg>
                    </Link>
                  ))}
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
              <div className="w-12 h-1 bg-gradient-to-r from-accent to-pink-500 mb-4 md:mb-6"></div>

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
                      src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Interiér barbershopu"
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-lg mb-4 md:mb-6"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                      <div className="w-10 md:w-12 h-1 bg-gradient-to-r from-accent to-pink-500 mb-2"></div>
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
                  <Link href="/rezervacia" className="w-full block">
                    <Button className="w-full bg-gradient-to-r from-accent to-pink-500 hover:from-accent/90 hover:to-pink-500/90 py-4 md:py-6 text-base md:text-lg text-white shadow-lg shadow-accent/20">
                      Rezervovať termín
                    </Button>
                  </Link>
                </motion.div>

                <motion.p
                  className="text-foreground/70 text-center text-xs md:text-sm mt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Alebo nás kontaktujte telefonicky na čísle +421 900 123 456
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 bg-background border-t border-border">
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
              <div className="w-10 md:w-12 h-1 bg-gradient-to-r from-accent to-pink-500 mb-3 md:mb-4"></div>
              <p className="text-foreground/70 mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
                Prémiový barbershop poskytujúci kvalitné strihy a štýly pre moderného džentlmena.
              </p>
              <div className="flex gap-3 md:gap-4">
                {["facebook", "instagram", "twitter"].map((social) => (
                  <Link
                    key={social}
                    href={`https://${social}.com`}
                    target="_blank"
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/20 to-pink-500/20 flex items-center justify-center hover:from-accent/40 hover:to-pink-500/40 transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </Link>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">Rýchle odkazy</h4>
              <div className="w-10 md:w-12 h-1 bg-gradient-to-r from-accent to-pink-500 mb-3 md:mb-4"></div>
              <ul className="space-y-2">
                {[
                  { name: "Domov", href: "#home" },
                  { name: "Služby", href: "#services" },
                  { name: "Galéria", href: "#gallery" },
                  { name: "O nás", href: "#about" },
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
              <div className="w-10 md:w-12 h-1 bg-gradient-to-r from-accent to-pink-500 mb-3 md:mb-4"></div>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground/70 text-sm md:text-base">Holičská 123, Centrum mesta, 10000</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground/70 text-sm md:text-base">+421 900 123 456</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground/70 text-sm md:text-base">Po-Pi: 9:00 - 19:00</span>
                </li>
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
