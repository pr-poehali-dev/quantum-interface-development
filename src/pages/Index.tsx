import { CustomCursor } from "@/components/custom-cursor"
import { GrainOverlay } from "@/components/grain-overlay"
import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"
import { useEffect, useState } from "react"
import Icon from "@/components/ui/icon"

const IMG_HERO = "https://cdn.poehali.dev/projects/43a658d9-e345-4735-a002-265beb090970/files/db597c17-1233-42d1-82b6-43ed55652a6a.jpg"
const IMG_SMART = "https://cdn.poehali.dev/projects/43a658d9-e345-4735-a002-265beb090970/files/85919a07-ea46-4807-aad4-6f020ab81549.jpg"
const IMG_APP = "https://cdn.poehali.dev/projects/43a658d9-e345-4735-a002-265beb090970/files/7e870194-bc81-4703-bb40-b6c9627bf522.jpg"

function HeroSection({ scrollToSection }: { scrollToSection: (i: number) => void }) {
  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={IMG_HERO} alt="Видеонаблюдение" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e]/95 via-[#0a0f1e]/70 to-[#0a0f1e]/30" />
        {/* Cyan glow at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-cyan-500/10 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-end px-6 pb-16 pt-32 md:px-16 md:pb-28">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 backdrop-blur-sm">
            <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            <span className="font-mono text-xs text-cyan-300">Монтаж по всему Крыму</span>
          </div>

          <h1 className="mb-6 font-sans text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl lg:text-8xl">
            Безопасность
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">под контролем</span>
          </h1>

          <p className="mb-10 max-w-lg text-base leading-relaxed text-white/70 md:text-xl">
            Видеонаблюдение и умный дом под ключ. Смотрите на свой объект с телефона — из любой точки мира, 24/7.
          </p>

          <div className="flex flex-wrap gap-4">
            <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection(3)}>
              Получить расчёт бесплатно
            </MagneticButton>
            <MagneticButton size="lg" variant="secondary" onClick={() => scrollToSection(1)}>
              Наши услуги
            </MagneticButton>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-10 border-t border-white/10 pt-8 md:gap-20">
          {[
            { value: "500+", label: "объектов сдано" },
            { value: "7 лет", label: "на рынке" },
            { value: "24/7", label: "поддержка" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-sans text-3xl font-bold text-cyan-400 md:text-4xl">{s.value}</div>
              <div className="font-mono text-xs text-white/50 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => scrollToSection(1)}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
      >
        <span className="font-mono text-xs">листать вниз</span>
        <Icon name="ChevronDown" size={20} className="animate-bounce" />
      </button>
    </section>
  )
}

function ServicesSection() {
  const { ref, isVisible } = useReveal(0.2)

  const services = [
    { icon: "Camera", title: "Видеонаблюдение", desc: "IP-камеры, видеозапись и онлайн-просмотр с телефона. Для дома, офиса и территории.", color: "from-cyan-500/20 to-blue-500/10", border: "border-cyan-500/20", iconBg: "bg-cyan-400/15", iconColor: "text-cyan-400" },
    { icon: "Wifi", title: "Умный дом", desc: "Автоматизация освещения, климата, штор. Голосовое управление и готовые сценарии.", color: "from-blue-500/20 to-indigo-500/10", border: "border-blue-500/20", iconBg: "bg-blue-400/15", iconColor: "text-blue-400" },
    { icon: "ShieldCheck", title: "Охранная сигнализация", desc: "Датчики движения и открытия. Тревожные уведомления мгновенно на телефон.", color: "from-indigo-500/20 to-purple-500/10", border: "border-indigo-500/20", iconBg: "bg-indigo-400/15", iconColor: "text-indigo-400" },
    { icon: "Wrench", title: "Обслуживание", desc: "Регулярное ТО и удалённая поддержка всех установленных систем.", color: "from-purple-500/20 to-cyan-500/10", border: "border-purple-500/20", iconBg: "bg-purple-400/15", iconColor: "text-purple-400" },
  ]

  return (
    <section ref={ref} className="w-full px-6 py-24 md:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className={`mb-16 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"}`}>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan-400">/ Что мы делаем</p>
          <h2 className="font-sans text-4xl font-bold tracking-tight text-white md:text-6xl">Наши услуги</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group relative overflow-hidden rounded-2xl border ${s.border} bg-gradient-to-br ${s.color} p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 md:p-10 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${s.iconBg}`}>
                <Icon name={s.icon} size={26} className={s.iconColor} fallback="Shield" />
              </div>
              <h3 className="mb-3 font-sans text-xl font-semibold text-white md:text-2xl">{s.title}</h3>
              <p className="text-sm leading-relaxed text-white/60 md:text-base">{s.desc}</p>
              <div className="absolute right-6 bottom-6 opacity-0 transition-opacity group-hover:opacity-100">
                <Icon name="ArrowUpRight" size={20} className="text-white/30" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  const { ref, isVisible } = useReveal(0.2)

  return (
    <section ref={ref} className="w-full px-6 py-24 md:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className={`mb-16 transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan-400">/ Реализованные объекты</p>
          <h2 className="font-sans text-4xl font-bold tracking-tight text-white md:text-6xl">Проекты</h2>
        </div>

        <div
          className={`mb-5 grid gap-5 md:grid-cols-2 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          style={{ transitionDelay: "150ms" }}
        >
          <div className="group relative overflow-hidden rounded-2xl">
            <img src={IMG_SMART} alt="Умный дом" className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[420px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-[#0a0f1e]/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <span className="mb-2 inline-block rounded-full bg-cyan-400/20 px-3 py-1 font-mono text-xs text-cyan-300">01 · 2024</span>
              <h3 className="mb-1 font-sans text-xl font-semibold text-white md:text-2xl">Коттеджный посёлок «Сосны»</h3>
              <p className="text-sm text-white/50">32 камеры · Умное освещение · Контроль доступа</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl">
            <img src={IMG_APP} alt="Мобильный мониторинг" className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[420px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-[#0a0f1e]/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <span className="mb-2 inline-block rounded-full bg-blue-400/20 px-3 py-1 font-mono text-xs text-blue-300">02 · 2024</span>
              <h3 className="mb-1 font-sans text-xl font-semibold text-white md:text-2xl">Офисный центр «Меридиан»</h3>
              <p className="text-sm text-white/50">IP-видеонаблюдение · Сигнализация · Автоматизация</p>
            </div>
          </div>
        </div>

        <div
          className={`group flex items-center justify-between rounded-2xl border border-white/8 bg-gradient-to-r from-white/5 to-white/3 p-6 transition-all duration-700 hover:border-cyan-500/30 md:p-8 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          style={{ transitionDelay: "300ms" }}
        >
          <div>
            <span className="mb-2 inline-block rounded-full bg-indigo-400/20 px-3 py-1 font-mono text-xs text-indigo-300">03 · 2023</span>
            <h3 className="mb-1 font-sans text-lg font-semibold text-white md:text-2xl">Частный дом в Крыму</h3>
            <p className="text-sm text-white/50">Умный дом под ключ · 12 камер · Голосовое управление</p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10">
            <Icon name="ArrowUpRight" size={20} className="text-white/40 group-hover:text-cyan-400 transition-colors" />
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  const { ref, isVisible } = useReveal(0.2)
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.phone) return
    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 1200))
    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: "", phone: "", message: "" })
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <section ref={ref} className="relative w-full overflow-hidden px-6 py-24 md:px-16">
      {/* Background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="mx-auto w-full max-w-7xl">
        <div className={`mb-16 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"}`}>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan-400">/ Напишите нам</p>
          <h2 className="font-sans text-4xl font-bold tracking-tight text-white md:text-6xl">
            Получите бесплатный<br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">расчёт</span>
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          {/* Left */}
          <div className={`flex flex-col justify-center transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
            <p className="mb-10 text-base leading-relaxed text-white/60 md:text-lg">
              Опишите объект — мы подберём оборудование и назовём точную стоимость монтажа в течение часа.
            </p>

            <div className="space-y-4">
              <a href="tel:+79781348887" className="group flex items-center gap-4 rounded-xl border border-white/8 bg-white/4 p-4 transition-all hover:border-cyan-500/40 hover:bg-cyan-500/8">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/15">
                  <Icon name="Phone" size={18} className="text-cyan-400" />
                </div>
                <div>
                  <p className="font-mono text-xs text-white/40">Позвонить</p>
                  <p className="text-base font-semibold text-white">+7 (978) 134-88-87</p>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-xl border border-white/8 bg-white/4 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-400/15">
                  <Icon name="MapPin" size={18} className="text-blue-400" />
                </div>
                <div>
                  <p className="font-mono text-xs text-white/40">Регион</p>
                  <p className="text-base font-semibold text-white">Крым</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - form */}
          <div
            className={`transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-10">
              <div>
                <label className="mb-2 block font-mono text-xs text-white/40">Ваше имя</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 transition-all"
                  placeholder="Иван Иванов"
                />
              </div>
              <div>
                <label className="mb-2 block font-mono text-xs text-white/40">Телефон</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 transition-all"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
              <div>
                <label className="mb-2 block font-mono text-xs text-white/40">Опишите объект</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 transition-all"
                  placeholder="Частный дом, 2 этажа, нужны камеры снаружи..."
                />
              </div>
              <MagneticButton variant="primary" size="lg" className="w-full">
                {isSubmitting ? "Отправляем..." : "Отправить заявку"}
              </MagneticButton>
              {submitSuccess && (
                <p className="text-center font-mono text-sm text-cyan-400">Заявка отправлена! Перезвоним в течение часа.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

const sectionIds = ["hero", "services", "projects", "contacts"]

export default function Index() {
  const [currentSection, setCurrentSection] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 300)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionIds.indexOf(entry.target.id)
            if (idx !== -1) setCurrentSection(idx)
          }
        })
      },
      { threshold: 0.4 }
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (index: number) => {
    const el = document.getElementById(sectionIds[index])
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  const navItems = ["Главная", "Услуги", "Проекты", "Контакты"]

  return (
    <main className="relative w-full bg-[#0a0f1e]">
      <CustomCursor />
      <GrainOverlay />

      <nav className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-white/5 bg-[#0a0f1e]/80 px-6 py-4 backdrop-blur-md transition-opacity duration-700 md:px-12 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <button onClick={() => scrollToSection(0)} className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500">
            <Icon name="Shield" size={16} className="text-white" />
          </div>
          <span className="font-sans text-base font-bold tracking-tight text-white">SafeHome</span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item, index) => (
            <button
              key={item}
              onClick={() => scrollToSection(index)}
              className={`font-mono text-xs transition-colors ${currentSection === index ? "text-cyan-400" : "text-white/40 hover:text-white/70"}`}
            >
              {item}
            </button>
          ))}
        </div>

        <MagneticButton variant="secondary" onClick={() => scrollToSection(3)}>
          Связаться
        </MagneticButton>
      </nav>

      {/* Side dots */}
      <div className="fixed right-5 top-1/2 z-50 -translate-y-1/2 flex flex-col gap-2">
        {navItems.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToSection(i)}
            className={`rounded-full transition-all duration-300 ${currentSection === i ? "h-6 w-1.5 bg-cyan-400" : "h-1.5 w-1.5 bg-white/20 hover:bg-white/50"}`}
          />
        ))}
      </div>

      <div id="hero"><HeroSection scrollToSection={scrollToSection} /></div>
      <div id="services"><ServicesSection /></div>
      <div id="projects"><ProjectsSection /></div>
      <div id="contacts"><ContactSection /></div>
    </main>
  )
}
