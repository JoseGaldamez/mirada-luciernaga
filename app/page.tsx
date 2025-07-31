"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Users,
  Flower,
  Brain,
  Sparkles,
  Quote,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    title: "Constelaciones Familiares",
    description:
      "Explora y sana las dinámicas familiares profundas para encontrar equilibrio y armonía en tus relaciones.",
    icon: Users,
    image: "/constelaciones-familiares.png",
  },
  {
    title: "Conociendo a tu Niña o Niño Interior",
    description: "Reconecta con tu esencia más pura y sana las heridas emocionales de la infancia.",
    icon: Heart,
    image: "/nino-interior.png",
  },
  {
    title: "Conectando con tu Cuerpo",
    description: "Desarrolla una relación consciente y amorosa con tu cuerpo físico y energético.",
    icon: Sparkles,
    image: "/cuerpo.png",
  },
  {
    title: "Meditación",
    description: "Encuentra paz interior y claridad mental a través de prácticas de meditación personalizadas.",
    icon: Brain,
    image: "/medi.png",
  },
  {
    title: "Esencias Florales de Bach",
    description: "Equilibra tus emociones naturalmente con la sabiduría ancestral de las flores.",
    icon: Flower,
    image: "/flores.png",
  },
]

const testimonials = [
  {
    name: "Jenifer",
    text: "Las sesiones con Alicia han sido una experiencia bastante renovadora para mi. Las constelaciones familiares son algo que energéticamente ayudan muchísimo…",
    service: "Constelaciones Familiares",
    image: "/testimonios/jenifer.png",
    rating: 5,
  },
  {
    name: "Cindy",
    text: "Alicia me ha ayudado mucho a crecer, aceptar y sanar. En las sesiones de niña interior aprendí a perdonarme, aceptarme y a valorarme.",
    service: "Niño Interior",
    image: "/testimonios/cindy.png",
    rating: 5,
  },
  {
    name: "Leonarda",
    text: "Me congratulo de que haya estos espacios como el de “Mirada Luciérnaga”, con Alicia Reyes, que dan todo de sí, que, con su empatía y compromiso, nos pueden llevar de la mano, hacia una vida más plena y consciente. Gracias mi querida Alicia!!! Estás ahí cuando te necesito.",
    service: "Esencias Florales",
    image: "/testimonios/leonarda.png",
    rating: 5,
  },
  {
    name: "Julissa",
    text: "A través de múltiples técnicas de meditación he aprendido con Mirada Luciérnaga a conocer las señales que brinda mi cuerpo. Realmente he encontrado un avance significativo.",
    service: "Meditación",
    image: "/testimonios/julissa.png",
    rating: 5,
  },
]

const benefits = [
  "Sesiones personalizadas según tus necesidades",
  "Ambiente seguro y confidencial",
  "Técnicas probadas y efectivas",
  "Acompañamiento profesional",
  "Enfoque holístico e integral",
  "Resultados duraderos y transformadores",
]

export default function MiradaLuciernaga() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full opacity-30 blur-xl" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full opacity-40 blur-lg" />
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-20 blur-2xl" />
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-30 blur-xl" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Mirada Luciérnaga"
                width={250}
                height={100}
                className="mt-1"
              />
              </Link>
              
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Inicio
              </a>
              <a href="#servicios" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Servicios
              </a>
              <a href="#testimonios" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Testimonios
              </a>
              <a href="#contacto" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Contacto
              </a>
              <Link href="/agendar" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              <Button className="bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white shadow-lg cursor-pointer">
                Agenda tu Sesión
              </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-4 pb-4 border-t border-gray-100"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="flex flex-col space-y-4 pt-4">
                <a href="#inicio" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  Inicio
                </a>
                <a href="#servicios" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  Servicios
                </a>
                <a href="#testimonios" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  Testimonios
                </a>
                <a href="#contacto" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  Contacto
                </a>
                <Link href="/agendar" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  <Button className="bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white w-full">
                    Agenda tu Sesión
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative py-48 flex items-center justify-center">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center justify-between">
            {/* Left Content */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <Badge className="bg-gradient-to-r from-sky-100 to-purple-100 text-sky-700 border-sky-200 mb-4">
                  ✨ Transforma tu vida hoy
                </Badge>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800 leading-tight">
                Ilumina tu camino hacia el
                <span className="bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  bienestar
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Descubre la sanación a través de terapias holísticas que nutren tu alma, mente y cuerpo. Acompañamiento
                profesional en tu proceso de crecimiento personal.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/agendar">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-500 text-white text-lg px-8 py-4 shadow-lg"
                    >
                    Comienza tu Transformación
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                    </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-8 py-4 group bg-transparent"
                >
                  <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                  Ver Video Introductorio
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Star className="text-yellow-400 fill-current" size={16} />
                  <span>5.0 (200+ reseñas)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="text-green-500" size={16} />
                  <span>Certificado profesional</span>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Hero Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <Image
                  src="/meditacion.png"
                  alt="Espacio de sanación"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-60 blur-xl" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full opacity-50 blur-xl" />
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute top-10 -left-6 bg-white p-4 rounded-xl shadow-lg"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm font-medium">200+ vidas transformadas</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-10 -right-6 bg-white p-4 rounded-xl shadow-lg"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <div className="flex items-center space-x-2">
                  <Heart className="text-pink-500" size={16} />
                  <span className="text-sm font-medium">5+ años de experiencia</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200 mb-4">
              Nuestras Especialidades
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Servicios de{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Sanación
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada servicio está diseñado para acompañarte en tu proceso de sanación y crecimiento personal
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 h-full overflow-hidden p-0">
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                      <service.icon className="text-gray-700" size={24} />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                    <Link href="/agendar">
                      <Button variant="ghost" className="text-purple-600 hover:text-purple-700 p-0 h-auto font-medium">
                        Agendar <ArrowRight className="ml-1" size={16} />
                      </Button>
                    </Link>
                   
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

        {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-pink-500 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Lista/o para comenzar tu transformación?</h2>
            <p className="text-xl mb-8 opacity-90">
              Da el primer paso hacia tu bienestar. Agenda tu sesión inicial y descubre cómo podemos acompañarte en tu
              proceso de sanación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/agendar">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4 shadow-lg">
                  Agenda tu Primera Sesión
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-4 bg-transparent"
              >
                Conoce Más Sobre Nosotros
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
      </section>


      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 border-cyan-200 mb-4">
                ¿Por qué elegirnos?
              </Badge>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Tu bienestar es nuestra{" "}
                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  prioridad
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Ofrecemos un enfoque integral para tu proceso de sanación, con técnicas probadas y un acompañamiento profesional y empático.
              </p>

              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src="/familia.png"
                alt="Sesión de terapia"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />

              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-gray-800">5+</div>
                      <div className="text-sm text-gray-600">Años</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-800">200+</div>
                      <div className="text-sm text-gray-600">Clientes</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-800">98%</div>
                      <div className="text-sm text-gray-600">Satisfacción</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-700 border-yellow-200 mb-4">
              Testimonios Reales
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Historias de{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">
                Transformación
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Las experiencias de quienes han confiado en nuestro acompañamiento
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                    <Quote className="text-gray-300 mb-4" size={32} />
                    <p className="text-gray-700 mb-6 leading-relaxed italic">&quot;{testimonial.text}&quot;</p>
                    <div className="flex items-center space-x-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div>
                        <div className="font-semibold text-gray-800">{testimonial.name}</div>
                        <Badge variant="secondary" className="bg-gray-100 text-gray-600 border-gray-200 text-xs">
                          {testimonial.service}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    
      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200 mb-4">
              Contáctanos
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Estamos aquí para{" "}
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                acompañarte
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-gray-50 to-white border-gray-200 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-8 text-gray-800">Información de Contacto</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center">
                        <Phone className="text-pink-600" size={20} />
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">Teléfono</div>
                        <div className="text-gray-600">+52 (555) 123-4567</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center">
                        <Mail className="text-cyan-600" size={20} />
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">Email</div>
                        <div className="text-gray-600">contacto@miraluciernaga.com</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center">
                        <MapPin className="text-green-600" size={20} />
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">Ubicación</div>
                        <div className="text-gray-600">Ciudad de México, México</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <Image
                  src="/manos.png"
                  alt="Oficina de consulta"
                  width={600}
                  height={700}
                  className="rounded-2xl shadow-xl w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Nuestro Espacio</h3>
                  <p className="text-sm opacity-90">
                    Un ambiente cálido y seguro diseñado para tu comodidad y sanación
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/logo.png" alt="Mirada Luciérnaga" width={250} height={100} className="rounded-full" />
              </div>
              <p className="text-gray-400 text-sm">
                Iluminando caminos hacia el bienestar integral a través de terapias holísticas.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Constelaciones Familiares</li>
                <li>Niño Interior</li>
                <li>Conexión Corporal</li>
                <li>Meditación</li>
                <li>Esencias Florales</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+52 (555) 123-4567</li>
                <li>contacto@miraluciernaga.com</li>
                <li>Ciudad de México</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-xs">ig</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2024 Mirada Luciérnaga. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
