'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { 
  Hammer, Building2, PencilRuler, MessageCircle, 
  Medal, Star, BookOpen, Clock, 
  Phone, Mail, MapPin, ChevronDown,
  Facebook, Instagram, Menu, X, ArrowRight, CheckCircle2
} from 'lucide-react'

// WhatsApp ikona komponenta
const WhatsAppIcon = ({ size = 24, color = "white" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [formData, setFormData] = useState({
    ime: '',
    email: '',
    telefon: '',
    poruka: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  // Telefon i WhatsApp
  const phoneNumber = "+385 95 880 1755"
  const phoneNumberRaw = "385958801755"
  const whatsappMessage = "Molim Vas kontaktirajte me na ovaj broj, zainteresiran sam za Vašu ponudu."
  const whatsappLink = `https://wa.me/${phoneNumberRaw}?text=${encodeURIComponent(whatsappMessage)}`

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
    setFormData({ ime: '', email: '', telefon: '', poruka: '' })
  }

  const navLinks = [
    { href: '#o-nama', label: 'O nama' },
    { href: '#usluge', label: 'Usluge' },
    { href: '#projekti', label: 'Projekti' },
    { href: '#zasto-mi', label: 'Zašto mi?' },
    { href: '/savjeti', label: '📚 Savjeti', isHighlighted: true },
    { href: '#kontakt', label: 'Kontakt' }
  ]

  const usluge = [
    {
      icon: Hammer,
      naslov: 'Završni građevinski radovi',
      opis: 'Kompletni završni radovi uključujući žbukanje, postavljanje podova, keramičarske radove i finalne obrade.'
    },
    {
      icon: Building2,
      naslov: 'Adaptacija prostora',
      opis: 'Renovacija i adaptacija stambenih i poslovnih prostora prema vašim željama - od kupaonice do kompletnog stana.'
    },
    {
      icon: PencilRuler,
      naslov: 'Industrijski objekti',
      opis: 'Sanacija i adaptacija industrijskih objekata, hangara i skladišta s naglaskom na funkcionalnost i trajnost.'
    },
    {
      icon: MessageCircle,
      naslov: 'Konzultacije',
      opis: 'Besplatne konzultacije i procjene za vaše građevinske projekte. Tu smo za vas od ideje do realizacije.'
    }
  ]

  const prednosti = [
    { icon: Medal, naslov: 'Iskustvo', opis: 'Dugogodišnje iskustvo u industriji' },
    { icon: Star, naslov: 'Kvaliteta', opis: 'Koristimo samo vrhunske materijale' },
    { icon: BookOpen, naslov: 'Transparentnost', opis: 'Jasne cijene bez skrivenih troškova' },
    { icon: Clock, naslov: 'Brzina', opis: 'Poštujemo dogovorene rokove' }
  ]

  const projekti = [
    { 
      naslov: 'Adaptacija dnevnog boravka', 
      tip: 'Stambeni prostor', 
      img: '/images/boravak.png',
      opis: 'Kompletna renovacija iz temelja'
    },
    { 
      naslov: 'Moderna kupaonica', 
      tip: 'Adaptacija', 
      img: '/images/kupaonica.png',
      opis: 'Potpuna transformacija kupaonice'
    },
    { 
      naslov: 'Industrijski hangar - unutrašnjost', 
      tip: 'Industrijski objekt', 
      img: '/images/hangar-in.png',
      opis: 'Sanacija industrijskog prostora'
    },
    { 
      naslov: 'Industrijski hangar - vanjština', 
      tip: 'Industrijski objekt', 
      img: '/images/hangar-out.png',
      opis: 'Kompletna obnova fasade i krova'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
        aria-label="Kontaktirajte nas putem WhatsApp"
      >
        <WhatsAppIcon size={28} />
      </a>

      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/98 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 no-underline">
            <Image 
              src="/images/logo.jpg" 
              alt="MAT GO team logo" 
              width={180} 
              height={60}
              className="h-12 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className={`no-underline font-medium text-[15px] transition-colors ${
                  link.isHighlighted 
                    ? 'text-primary bg-primary/10 px-3 py-1.5 rounded-full hover:bg-primary/20' 
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a href="#kontakt" className="btn-primary py-3 px-6">
              Zatraži ponudu
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden bg-transparent border-none cursor-pointer p-2"
          >
            {isMenuOpen ? <X size={28} className="text-gray-900" /> : <Menu size={28} className="text-gray-900" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white p-6 shadow-xl flex flex-col gap-4 lg:hidden">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="no-underline text-gray-600 font-medium text-base py-2"
              >
                {link.label}
              </a>
            ))}
            <a href="#kontakt" className="btn-primary text-center mt-2">
              Zatraži ponudu
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-[#f8fbfd] to-[#e8f4f8]">
        <div className="geo-pattern"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl"></div>

        <div className="max-w-[1200px] mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div 
              className="animate-fade-in-up inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              Završni građevinski radovi • Zagreb
            </div>
            
            <h1 
              className="animate-fade-in-up delay-100 text-4xl md:text-5xl lg:text-[56px] font-extrabold text-gray-900 mb-6 leading-tight"
            >
              Transformiramo{' '}
              <span className="gradient-text">prostore</span>
              {' '}u{' '}
              <span className="gradient-text">domove</span>
            </h1>
            
            <p 
              className="animate-fade-in-up delay-200 text-lg text-gray-600 mb-10 max-w-[500px] leading-relaxed"
            >
              Profesionalni završni građevinski radovi, adaptacije stanova i 
              sanacije industrijskih objekata. Kvaliteta koju možete vidjeti.
            </p>
            
            <div className="animate-fade-in-up delay-300 flex gap-4 flex-wrap">
              <a href="#kontakt" className="btn-primary">
                Zatraži ponudu
                <ArrowRight size={18} />
              </a>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary bg-[#25D366] border-[#25D366] text-white hover:bg-[#128C7E] hover:border-[#128C7E]"
              >
                <WhatsAppIcon size={18} />
                WhatsApp
              </a>
            </div>

            {/* Stats */}
            <div className="animate-fade-in-up delay-400 flex gap-10 mt-16 pt-10 border-t border-gray-200">
              {[
                { broj: '100+', label: 'Završenih projekata' },
                { broj: '100%', label: 'Zadovoljnih klijenata' },
                { broj: '0', label: 'Skrivenih troškova' }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-extrabold font-montserrat text-primary">
                    {stat.broj}
                  </div>
                  <div className="text-sm text-gray-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image - Before/After */}
          <div className="animate-fade-in delay-200 relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/boravak.png"
                alt="Prije i poslije adaptacije dnevnog boravka"
                width={800}
                height={600}
                className="w-full h-[500px] object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="bg-white/95 backdrop-blur px-4 py-2 rounded-lg">
                  <span className="text-sm font-semibold text-gray-900">Prije → Poslije</span>
                </div>
              </div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center">
                <CheckCircle2 size={28} color="white" />
              </div>
              <div>
                <div className="font-bold font-montserrat text-gray-900">
                  Kvaliteta garantirana
                </div>
                <div className="text-gray-500 text-sm">
                  Besplatna procjena
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a 
          href="#o-nama"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 no-underline text-gray-500 animate-float"
        >
          <span className="text-xs tracking-[2px] uppercase">
            Saznaj više
          </span>
          <ChevronDown size={24} />
        </a>
      </section>

      {/* O nama Section */}
      <section id="o-nama" className="py-28 px-6 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Image - Kupaonica before/after */}
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-full h-full border-[3px] border-primary/30 rounded-3xl"></div>
              <Image
                src="/images/kupaonica.png"
                alt="Prije i poslije adaptacije kupaonice"
                width={600}
                height={500}
                className="w-full h-[500px] object-cover rounded-3xl relative shadow-2xl"
              />
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur px-4 py-2 rounded-lg">
                <span className="text-sm font-semibold text-gray-900">Adaptacija kupaonice</span>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="text-primary font-semibold text-sm tracking-[2px] uppercase mb-4">
                O nama
              </div>
              <h2 className="text-4xl text-gray-900 mb-6">
                Završni građevinski radovi s pečatom kvalitete
              </h2>
              <p className="text-[17px] text-gray-600 mb-5 leading-relaxed">
                <strong>MAT-GO TEAM</strong> specijaliziran je za završne građevinske radove 
                koji transformiraju prostore. Od kompletnih adaptacija stanova do sanacije 
                industrijskih objekata - svaki projekt tretiramo s jednakom pažnjom i predanošću.
              </p>
              <p className="text-[17px] text-gray-600 mb-5 leading-relaxed">
                Naš tim iskusnih majstora koristi provjerene materijale i moderne tehnike 
                kako bi osigurao trajnost i estetiku svakog završenog projekta. 
                Ponosimo se transparentnim poslovanjem i poštivanjem rokova.
              </p>
              <p className="text-[17px] text-gray-600 mb-8 leading-relaxed">
                Bilo da renovirate kupaonicu, adaptirate stan ili sanirate industrijski 
                objekt - MAT-GO TEAM je vaš pouzdani partner od početka do kraja.
              </p>
              
              <div className="flex gap-8 pt-6 border-t border-gray-200 flex-wrap">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={24} className="text-primary" />
                  <span className="font-medium">Besplatna procjena</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={24} className="text-primary" />
                  <span className="font-medium">Garancija na radove</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usluge Section */}
      <section id="usluge" className="py-28 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <div className="text-primary font-semibold text-sm tracking-[2px] uppercase mb-4">
              Što nudimo
            </div>
            <h2 className="section-title">Naše usluge</h2>
            <p className="section-subtitle">
              Kompletan spektar završnih građevinskih radova prilagođen vašim potrebama.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {usluge.map((usluga, i) => (
              <div
                key={i}
                className="hover-lift bg-white p-10 rounded-2xl border border-gray-100"
              >
                <div className="w-[72px] h-[72px] bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mb-6">
                  <usluga.icon size={32} className="text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-[20px] text-gray-900 mb-3 font-bold">
                  {usluga.naslov}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {usluga.opis}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projekti Section */}
      <section id="projekti" className="py-28 px-6 bg-gray-900 relative overflow-hidden">
        <div className="geo-pattern opacity-[0.02]"></div>
        
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="text-primary-light font-semibold text-sm tracking-[2px] uppercase mb-4">
              Naši radovi
            </div>
            <h2 className="text-4xl text-white mb-4">
              Prije i poslije
            </h2>
            <p className="text-lg text-white/70 max-w-[600px] mx-auto">
              Pogledajte transformacije koje smo ostvarili za naše klijente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projekti.map((projekt, i) => (
              <div
                key={i}
                className="hover-lift relative rounded-2xl overflow-hidden cursor-pointer group"
              >
                <Image
                  src={projekt.img}
                  alt={projekt.naslov}
                  width={600}
                  height={400}
                  className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <span className="text-primary-light text-[13px] font-semibold uppercase tracking-wider mb-2">
                    {projekt.tip}
                  </span>
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {projekt.naslov}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {projekt.opis}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="#kontakt" className="btn-primary">
              Želim ovakvu transformaciju
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Zašto mi Section */}
      <section id="zasto-mi" className="py-28 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <div className="text-primary font-semibold text-sm tracking-[2px] uppercase mb-4">
              Naše prednosti
            </div>
            <h2 className="section-title">Zašto odabrati MAT-GO TEAM?</h2>
            <p className="section-subtitle">
              Evo zašto nam klijenti vjeruju svoje domove i poslovne prostore.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {prednosti.map((prednost, i) => (
              <div key={i} className="text-center p-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/30">
                  <prednost.icon size={36} color="white" strokeWidth={1.5} />
                </div>
                <h3 className="text-[22px] text-gray-900 mb-2 font-bold">
                  {prednost.naslov}
                </h3>
                <p className="text-gray-600 text-[15px]">
                  {prednost.opis}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Savjeti Section - Istaknuto */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Content */}
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 w-fit">
                  📚 Novo na stranici
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Savjeti i česta pitanja
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Prije nego krenete u renovaciju, educirajte se! Pripremili smo 
                  <strong> 60+ detaljnih odgovora</strong> na najčešća pitanja o 
                  keramici, elektroinstalacijama, žbukanju, podovima i adaptaciji kupaonice.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    'Keramičarski radovi',
                    'Elektroinstalacije', 
                    'Žbukanje i gletanje',
                    'Podovi i parket',
                    'Adaptacija kupaonice',
                    'Soboslikarski radovi'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle2 size={16} className="text-primary shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href="/savjeti" 
                  className="btn-primary w-fit"
                >
                  Pročitaj savjete
                  <ArrowRight size={18} />
                </a>
              </div>

              {/* Visual */}
              <div className="bg-gradient-to-br from-primary to-primary-dark p-10 lg:p-14 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
                
                <div className="relative text-center text-white">
                  <div className="text-7xl mb-4">📖</div>
                  <div className="text-5xl font-bold mb-2">60+</div>
                  <div className="text-xl text-white/90">pitanja i odgovora</div>
                  <div className="mt-6 flex flex-wrap justify-center gap-2">
                    {['Besplatno', 'Edukativno', 'Praktično'].map((tag, i) => (
                      <span key={i} className="bg-white/20 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="max-w-[800px] mx-auto text-center relative z-10">
          <h2 className="text-4xl text-white mb-4">
            Spremni za transformaciju vašeg prostora?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Kontaktirajte nas danas za besplatnu procjenu i ponudu bez obveze.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href={`tel:${phoneNumberRaw}`}
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-montserrat font-bold text-base hover:shadow-xl transition-all"
            >
              <Phone size={20} />
              {phoneNumber}
            </a>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-lg font-montserrat font-bold text-base hover:bg-[#128C7E] hover:shadow-xl transition-all"
            >
              <WhatsAppIcon size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="kontakt" className="py-28 px-6 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <div className="text-primary font-semibold text-sm tracking-[2px] uppercase mb-4">
              Javite nam se
            </div>
            <h2 className="section-title">Kontaktirajte nas</h2>
            <p className="section-subtitle">
              Imate projekt na umu? Javite nam se za besplatnu procjenu.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16">
            {/* Contact Info */}
            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <h3 className="text-2xl text-gray-900 mb-8">
                Kontakt informacije
              </h3>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={22} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Lokacija</div>
                    <div className="text-gray-600">Zagreb i okolica</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={22} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Telefon</div>
                    <a href={`tel:${phoneNumberRaw}`} className="text-gray-600 hover:text-primary transition-colors">
                      {phoneNumber}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={22} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Email</div>
                    <div className="text-gray-600">matgoteam@gmail.com</div>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-[#25D366] hover:bg-[#128C7E] p-4 rounded-xl transition-colors"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                    <WhatsAppIcon size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">WhatsApp</div>
                    <div className="text-white/80 text-sm">Brzi odgovor garantiran</div>
                  </div>
                </a>
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-8 border-t border-gray-100">
                <div className="font-semibold text-gray-900 mb-4">Pratite nas</div>
                <div className="flex gap-3">
                  <a href="#" className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center hover:bg-primary-dark transition-colors">
                    <Facebook size={20} color="white" />
                  </a>
                  <a href="#" className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center hover:bg-primary-dark transition-colors">
                    <Instagram size={20} color="white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-12 rounded-2xl shadow-lg">
              {formSubmitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} color="white" />
                  </div>
                  <h3 className="text-2xl text-gray-900 mb-3">Hvala vam!</h3>
                  <p className="text-gray-600">
                    Vaša poruka je uspješno poslana. Javit ćemo vam se uskoro.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block mb-2 font-medium text-gray-900">
                        Ime i prezime *
                      </label>
                      <input
                        type="text"
                        placeholder="Vaše ime"
                        value={formData.ime}
                        onChange={(e) => setFormData({...formData, ime: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium text-gray-900">
                        Email *
                      </label>
                      <input
                        type="email"
                        placeholder="vas@email.hr"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="block mb-2 font-medium text-gray-900">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      placeholder="+385 XX XXX XXXX"
                      value={formData.telefon}
                      onChange={(e) => setFormData({...formData, telefon: e.target.value})}
                    />
                  </div>

                  <div className="mb-7">
                    <label className="block mb-2 font-medium text-gray-900">
                      Opišite svoj projekt *
                    </label>
                    <textarea
                      placeholder="Npr. Želim renovirati kupaonicu 6m², potrebno zamijeniti pločice, sanitarije..."
                      value={formData.poruka}
                      onChange={(e) => setFormData({...formData, poruka: e.target.value})}
                      required
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    Pošalji upit
                    <ArrowRight size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 pt-16 pb-8 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
            {/* Logo & Description */}
            <div>
              <Image 
                src="/images/logo.jpg" 
                alt="MAT GO team logo" 
                width={150} 
                height={50}
                className="h-10 w-auto object-contain mb-5 brightness-0 invert"
              />
              <p className="text-white/60 text-[15px] leading-relaxed max-w-[300px]">
                Završni građevinski radovi s garancijom kvalitete. 
                Transformiramo prostore u domove.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white text-base font-semibold mb-5">Brze veze</h4>
              <div className="flex flex-col gap-3">
                {navLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    className="text-white/60 no-underline text-[15px] hover:text-primary-light transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white text-base font-semibold mb-5">Usluge</h4>
              <div className="flex flex-col gap-3">
                {usluge.map((usluga, i) => (
                  <span key={i} className="text-white/60 text-[15px]">
                    {usluga.naslov}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white text-base font-semibold mb-5">Kontakt</h4>
              <div className="flex flex-col gap-3 text-white/60 text-[15px]">
                <span>Zagreb i okolica</span>
                <a href={`tel:${phoneNumberRaw}`} className="hover:text-primary-light transition-colors">
                  {phoneNumber}
                </a>
                <span>matgoteam@gmail.com</span>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#25D366] hover:text-[#128C7E] transition-colors mt-2"
                >
                  <WhatsAppIcon size={16} color="currentColor" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 flex justify-between items-center flex-wrap gap-4">
            <p className="text-white/40 text-sm">
              © 2026 MAT-GO TEAM d.o.o. Sva prava pridržana.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook size={18} className="text-white/60" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram size={18} className="text-white/60" />
              </a>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#25D366] rounded-lg flex items-center justify-center hover:bg-[#128C7E] transition-colors"
              >
                <WhatsAppIcon size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
