"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import {
  ArrowLeft,
  CalendarIcon,
  Clock,
  MessageSquare,
  CheckCircle,
  Users,
  Heart,
  Flower,
  Brain,
  Sparkles,
  MapPin,
} from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    id: "constelaciones",
    title: "Constelaciones Familiares",
    duration: "90 min",
    price: "$1,200",
    description: "Explora y sana las dinámicas familiares profundas",
    icon: Users,
    color: "from-purple-400 to-pink-400",
  },
  {
    id: "nino-interior",
    title: "Conociendo a tu Niña/o Interior",
    duration: "75 min",
    price: "$1,000",
    description: "Reconecta con tu esencia más pura",
    icon: Heart,
    color: "from-pink-400 to-purple-400",
  },
  {
    id: "conexion-corporal",
    title: "Conectando con tu Cuerpo",
    duration: "60 min",
    price: "$900",
    description: "Desarrolla una relación consciente con tu cuerpo",
    icon: Sparkles,
    color: "from-cyan-400 to-blue-400",
  },
  {
    id: "meditacion",
    title: "Meditación",
    duration: "45 min",
    price: "$700",
    description: "Encuentra paz interior y claridad mental",
    icon: Brain,
    color: "from-blue-400 to-cyan-400",
  },
  {
    id: "esencias-florales",
    title: "Esencias Florales de Bach",
    duration: "60 min",
    price: "$800",
    description: "Equilibra tus emociones naturalmente",
    icon: Flower,
    color: "from-purple-400 to-pink-400",
  },
]

const timeSlots = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00"]

const modalidades = [
  { value: "presencial", label: "Presencial", icon: MapPin },
  { value: "online", label: "Online", icon: MessageSquare },
]

export default function AgendarCita() {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState("")
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState("")
  const [selectedModalidad, setSelectedModalidad] = useState("")
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simular envío
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsCompleted(true)
  }

  const selectedServiceData = services.find((s) => s.id === selectedService)

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full"
        >
          <Card className="text-center border-green-200 shadow-xl">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-green-600" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">¡Cita Agendada!</h2>
              <p className="text-gray-600 mb-6">
                Hemos recibido tu solicitud de cita. Te contactaremos pronto para confirmar los detalles.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
                <h3 className="font-semibold text-gray-800 mb-2">Resumen de tu cita:</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>
                    <strong>Servicio:</strong> {selectedServiceData?.title}
                  </p>
                  <p>
                    <strong>Fecha:</strong> {selectedDate ? format(selectedDate, "PPP", { locale: es }) : ""}
                  </p>
                  <p>
                    <strong>Hora:</strong> {selectedTime}
                  </p>
                  <p>
                    <strong>Modalidad:</strong> {modalidades.find((m) => m.value === selectedModalidad)?.label}
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                >
                  <Link href="/">Volver al Inicio</Link>
                </Button>
                <Button variant="outline" onClick={() => window.location.reload()} className="w-full">
                  Agendar Otra Cita
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild className="text-gray-600 hover:text-gray-900">
                <Link href="/">
                  <ArrowLeft size={20} className="mr-2" />
                  Volver
                </Link>
              </Button>
              <div className="flex items-center space-x-3">
                <Image src="/logo.png" alt="Mirada Luciérnaga" width={240} height={100} className="rounded-full" />
                
              </div>
            </div>
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 border-pink-200"
            >
              Paso {step} de 4
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Progreso</span>
              <span className="text-sm text-gray-500">{step}/4</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>

          {/* Step 1: Seleccionar Servicio */}
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Selecciona tu Servicio</h1>
                <p className="text-gray-600">Elige el tipo de sesión que mejor se adapte a tus necesidades</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                  <motion.div
                    key={service.id}
                    whileHover={{ y: -5 }}
                    className="cursor-pointer"
                    onClick={() => setSelectedService(service.id)}
                  >
                    <Card
                      className={`transition-all duration-300 ${
                        selectedService === service.id
                          ? "ring-2 ring-pink-500 shadow-lg"
                          : "hover:shadow-lg border-gray-200"
                      }`}
                    >
                      <CardContent className="p-6">
                        <div
                          className={`w-12 h-12 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}
                        >
                          <service.icon className="text-white" size={24} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Clock size={16} />
                            <span>{service.duration}</span>
                          </div>
                          {/* <div className="text-lg font-bold text-gray-800">{service.price}</div> */}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-end mt-8">
                <Button
                  onClick={() => setStep(2)}
                  disabled={!selectedService}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                >
                  Continuar
                </Button>
              </div>
            </motion.div>
          )}

          {/* Step 2: Fecha y Hora */}
          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Selecciona Fecha y Hora</h1>
                <p className="text-gray-600">Elige el momento que mejor se adapte a tu agenda</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Calendar */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <CalendarIcon size={20} />
                      <span>Selecciona una fecha</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date() || date.getDay() === 0}
                      className="rounded-md border"
                      locale={es}
                    />
                  </CardContent>
                </Card>

                {/* Time Slots */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Clock size={20} />
                      <span>Horarios disponibles</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {selectedDate ? (
                      <div className="grid grid-cols-3 gap-3">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            variant={selectedTime === time ? "default" : "outline"}
                            onClick={() => setSelectedTime(time)}
                            className={
                              selectedTime === time
                                ? "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                                : ""
                            }
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 text-center py-8">
                        Primero selecciona una fecha para ver los horarios disponibles
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-between mt-8">
                <Button variant="outline" onClick={() => setStep(1)}>
                  Anterior
                </Button>
                <Button
                  onClick={() => setStep(3)}
                  disabled={!selectedDate || !selectedTime}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                >
                  Continuar
                </Button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Modalidad y Datos */}
          {step === 3 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Modalidad y Datos Personales</h1>
                <p className="text-gray-600">Completa tu información para confirmar la cita</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Modalidad */}
                <Card>
                  <CardHeader>
                    <CardTitle>Modalidad de la Sesión</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {modalidades.map((modalidad) => (
                      <div
                        key={modalidad.value}
                        className={`p-4 border rounded-lg cursor-pointer transition-all ${
                          selectedModalidad === modalidad.value
                            ? "border-pink-500 bg-pink-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => setSelectedModalidad(modalidad.value)}
                      >
                        <div className="flex items-center space-x-3">
                          <modalidad.icon size={20} className="text-gray-600" />
                          <span className="font-medium">{modalidad.label}</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Datos Personales */}
                <Card>
                  <CardHeader>
                    <CardTitle>Datos Personales</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="nombre">Nombre completo *</Label>
                      <Input
                        id="nombre"
                        value={formData.nombre}
                        onChange={(e) => handleInputChange("nombre", e.target.value)}
                        placeholder="Tu nombre completo"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="tu@email.com"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="telefono">Teléfono *</Label>
                      <Input
                        id="telefono"
                        value={formData.telefono}
                        onChange={(e) => handleInputChange("telefono", e.target.value)}
                        placeholder="+52 555 123 4567"
                        type="tel"
                        pattern="^\+?[0-9\s\-]+$"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="mensaje">Mensaje (opcional)</Label>
                      <Textarea
                        id="mensaje"
                        value={formData.mensaje}
                        onChange={(e) => handleInputChange("mensaje", e.target.value)}
                        placeholder="Cuéntanos brevemente qué te gustaría trabajar en la sesión..."
                        rows={7}
                        className="h-48 mt-2"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-between mt-8">
                <Button variant="outline" onClick={() => setStep(2)}>
                  Anterior
                </Button>
                <Button
                  onClick={() => setStep(4)}
                  disabled={!selectedModalidad || !formData.nombre || !formData.email || !formData.telefono}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                >
                  Continuar
                </Button>
              </div>
            </motion.div>
          )}

          {/* Step 4: Confirmación */}
          {step === 4 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Confirma tu Cita</h1>
                <p className="text-gray-600">Revisa los detalles antes de confirmar</p>
              </div>

              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle size={20} />
                    <span>Resumen de tu Cita</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Servicio */}
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${selectedServiceData?.color} flex items-center justify-center`}
                    >
                      {selectedServiceData?.icon && <selectedServiceData.icon className="text-white" size={24} />}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{selectedServiceData?.title}</h3>
                      <p className="text-sm text-gray-600">
                        {selectedServiceData?.duration} 
                        {/* • {selectedServiceData?.price} */}
                      </p>
                    </div>
                  </div>

                  {/* Fecha y Hora */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <CalendarIcon className="text-gray-500" size={20} />
                      <div>
                        <p className="font-medium text-gray-800">Fecha</p>
                        <p className="text-gray-600">
                          {selectedDate ? format(selectedDate, "PPP", { locale: es }) : ""}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="text-gray-500" size={20} />
                      <div>
                        <p className="font-medium text-gray-800">Hora</p>
                        <p className="text-gray-600">{selectedTime}</p>
                      </div>
                    </div>
                  </div>

                  {/* Modalidad */}
                  <div className="flex items-center space-x-3">
                    {selectedModalidad === "presencial" ? (
                      <MapPin className="text-gray-500" size={20} />
                    ) : (
                      <MessageSquare className="text-gray-500" size={20} />
                    )}
                    <div>
                      <p className="font-medium text-gray-800">Modalidad</p>
                      <p className="text-gray-600">{modalidades.find((m) => m.value === selectedModalidad)?.label}</p>
                    </div>
                  </div>

                  {/* Datos Personales */}
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-800 mb-3">Datos de Contacto</h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>Nombre:</strong> {formData.nombre}
                      </p>
                      <p>
                        <strong>Email:</strong> {formData.email}
                      </p>
                      <p>
                        <strong>Teléfono:</strong> {formData.telefono}
                      </p>
                      {formData.mensaje && (
                        <p>
                          <strong>Mensaje:</strong> {formData.mensaje}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Términos */}
                  <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-800">
                    <p className="mb-2">
                      <strong>Importante:</strong>
                    </p>
                    <ul className="space-y-1 text-xs">
                      <li>• Te contactaremos para confirmar la cita en las próximas 24 horas</li>
                      <li>• Puedes cancelar o reprogramar hasta 24 horas antes</li>
                      <li>• El pago se realiza al momento de la sesión</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-between mt-8 max-w-2xl mx-auto">
                <Button variant="outline" onClick={() => setStep(3)}>
                  Anterior
                </Button>
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                >
                  {isSubmitting ? "Confirmando..." : "Confirmar Cita"}
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
