import { CustomCursor } from "@/components/custom-cursor"
import { GrainOverlay } from "@/components/grain-overlay"
import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"
import { useRef, useEffect, useState } from "react"
import Icon from "@/components/ui/icon"

const IMG_HERO = "https://cdn.poehali.dev/projects/43a658d9-e345-4735-a002-265beb090970/files/db597c17-1233-42d1-82b6-43ed55652a6a.jpg"
const IMG_SMART = "https://cdn.poehali.dev/projects/43a658d9-e345-4735-a002-265beb090970/files/85919a07-ea46-4807-aad4-6f020ab81549.jpg"
const IMG_APP = "https://cdn.poehali.dev/projects/43a658d9-e345-4735-a002-265beb090970/files/7e870194-bc81-4703-bb40-b6c9627bf522.jpg"

function HeroSection({ scrollToSection }: { scrollToSection: (i: number) => void }) {
  return (
    <section className="relative flex min-h-screen w-screen shrink-0 flex-col overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={IMG_HERO} alt="Видеонаблюдение" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-end px-6 pb-16 pt-32 md:px-16 md:pb-28">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            <span className="font-mono text-xs text-white/80">Монтаж в Москве и области</span>
          </div>

          <h1 className="mb-6 font-sans text-5xl font-light leading-[1.05] tracking-tight text-white md:text-7xl lg:text-8xl">
            Безопасность
            <br />
            <span className="text-white/40">под контролем</span>
          </h1>

          <p className="mb-10 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
            Видеонаблюдение и умный дом под ключ. Смотрите на свой объект с телефона — из любой точки мира, 24/7.
          </p>

          <div className="flex flex-wrap gap-4">
            <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection(3)}>
              Получить расчёт
            </MagneticButton>
            <MagneticButton size="lg" variant="secondary" onClick={() => scrollToSection(1)}>
              Наши услуги
            </MagneticButton>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-8 border-t border-white/10 pt-8 md:gap-16">
          {[
            { value: "500+", label: "объектов сдано" },
            { value: "7 лет", label: "на рынке" },
            { value: "24/7", label: "поддержка" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-sans text-2xl font-light text-white md:text-3xl">{s.value}</div>
              <div className="font-mono text-xs text-white/50">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-10 hidden md:block">
        <button
          onClick={() => scrollToSection(1)}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20"
        >
          <Icon name="ArrowRight" size={18} className="text-white" />
        </button>
      </div>
    </section>
  )
}

function ServicesSection() {
  const { ref, isVisible } = useReveal(0.2)

  const services = [
    { icon: "Camera", title: "Видеонаблюдение", desc: "IP-камеры, видеозапись и онлайн-просмотр с телефона. Для дома, офиса и территории." },
    { icon: "Wifi", title: "Умный дом", desc: "Автоматизация освещения, климата, штор. Голосовое управление и готовые сценарии." },
    { icon: "ShieldCheck", title: "Охранная сигнализация", desc: "Датчики движения и открытия. Тревожные уведомления мгновенно на телефон." },
    { icon: "Wrench", title: "Обслуживание", desc: "Регулярное ТО и удалённая поддержка всех установленных систем." },
  ]

  return (
    <section ref={ref} className="flex min-h-screen w-screen shrink-0 flex-col justify-center px-6 py-24 md:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className={`mb-16 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"}`}>
          <p className="mb-2 font-mono text-xs text-white/40">/ Что мы делаем</p>
          <h2 className="font-sans text-4xl font-light tracking-tight text-white md:text-6xl">Услуги</h2>
        </div>

        <div className="grid gap-px bg-white/5 md:grid-cols-2">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group bg-black p-8 transition-all duration-700 hover:bg-white/5 md:p-12 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 transition-all group-hover:bg-white/10">
                <Icon name={s.icon} size={22} className="text-white/60" fallback="Shield" />
              </div>
              <h3 className="mb-3 font-sans text-xl font-light text-white md:text-2xl">{s.title}</h3>
              <p className="text-sm leading-relaxed text-white/50 md:text-base">{s.desc}</p>
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
    <section ref={ref} className="flex min-h-screen w-screen shrink-0 flex-col justify-center px-6 py-24 md:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className={`mb-16 transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}>
          <p className="mb-2 font-mono text-xs text-white/40">/ Реализованные объекты</p>
          <h2 className="font-sans text-4xl font-light tracking-tight text-white md:text-6xl">Проекты</h2>
        </div>

        <div
          className={`mb-6 grid gap-6 md:grid-cols-2 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          style={{ transitionDelay: "150ms" }}
        >
          <div className="relative overflow-hidden rounded-2xl">
            <img src={IMG_SMART} alt="Умный дом" className="h-72 w-full object-cover md:h-96" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="font-mono text-xs text-white/50">01 · 2024</p>
              <h3 className="font-sans text-xl font-light text-white">Коттеджный посёлок «Сосны»</h3>
              <p className="text-sm text-white/50">32 камеры · Умное освещение · Контроль доступа</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <img src={IMG_APP} alt="Мобильный мониторинг" className="h-72 w-full object-cover md:h-96" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="font-mono text-xs text-white/50">02 · 2024</p>
              <h3 className="font-sans text-xl font-light text-white">Офисный центр «Меридиан»</h3>
              <p className="text-sm text-white/50">IP-видеонаблюдение · Сигнализация · Автоматизация</p>
            </div>
          </div>
        </div>

        <div
          className={`flex items-center justify-between rounded-2xl border border-white/5 bg-white/3 p-6 transition-all duration-700 md:p-8 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          style={{ transitionDelay: "300ms" }}
        >
          <div>
            <p className="font-mono text-xs text-white/40">03 · 2023</p>
            <h3 className="font-sans text-lg font-light text-white md:text-2xl">Частный дом в Подмосковье</h3>
            <p className="text-sm text-white/50">Умный дом под ключ · 12 камер · Голосовое управление</p>
          </div>
          <Icon name="ArrowUpRight" size={24} className="text-white/20" />
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
    <section ref={ref} className="flex min-h-screen w-screen shrink-0 flex-col justify-center px-6 py-24 md:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-16 md:grid-cols-2">
          <div className={`flex flex-col justify-center transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
            <p className="mb-2 font-mono text-xs text-white/40">/ Напишите нам</p>
            <h2 className="mb-6 font-sans text-4xl font-light leading-tight text-white md:text-6xl lg:text-7xl">
              Получите
              <br />
              <span className="text-white/30">бесплатный</span>
              <br />
              расчёт
            </h2>
            <p className="mb-10 max-w-sm text-sm leading-relaxed text-white/50 md:text-base">
              Опишите объект — мы подберём оборудование и назовём точную стоимость монтажа в течение часа.
            </p>

            <div className="space-y-5">
              <a href="tel:+74951234567" className="group flex items-center gap-3 text-white/60 transition-colors hover:text-white">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                  <Icon name="Phone" size={15} className="text-white/60" />
                </div>
                <span className="text-sm">+7 (495) 123-45-67</span>
              </a>
              <a href="mailto:info@safehome.ru" className="group flex items-center gap-3 text-white/60 transition-colors hover:text-white">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                  <Icon name="Mail" size={15} className="text-white/60" />
                </div>
                <span className="text-sm">info@safehome.ru</span>
              </a>
              <div className="flex items-center gap-3 text-white/60">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                  <Icon name="MapPin" size={15} className="text-white/60" />
                </div>
                <span className="text-sm">Москва и Московская область</span>
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col justify-center transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-white/8 bg-white/3 p-8 md:p-10">
              <div>
                <label className="mb-2 block font-mono text-xs text-white/40">Ваше имя</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white/30 focus:outline-none transition-colors"
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
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white/30 focus:outline-none transition-colors"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
              <div>
                <label className="mb-2 block font-mono text-xs text-white/40">Опишите объект</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white/30 focus:outline-none transition-colors"
                  placeholder="Частный дом, 2 этажа, нужны камеры снаружи..."
                />
              </div>
              <MagneticButton variant="primary" size="lg" className="w-full">
                {isSubmitting ? "Отправляем..." : "Отправить заявку"}
              </MagneticButton>
              {submitSuccess && (
                <p className="text-center font-mono text-sm text-green-400">Заявка отправлена! Перезвоним в течение часа.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Index() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentSection, setCurrentSection] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const touchStartY = useRef(0)
  const touchStartX = useRef(0)
  const scrollThrottleRef = useRef<number>()

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 300)
    return () => clearTimeout(t)
  }, [])

  const scrollToSection = (index: number) => {
    if (scrollContainerRef.current) {
      const sectionWidth = scrollContainerRef.current.offsetWidth
      scrollContainerRef.current.scrollTo({ left: sectionWidth * index, behavior: "smooth" })
      setCurrentSection(index)
    }
  }

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
      touchStartX.current = e.touches[0].clientX
    }
    const handleTouchMove = (e: TouchEvent) => {
      if (Math.abs(e.touches[0].clientY - touchStartY.current) > 10) e.preventDefault()
    }
    const handleTouchEnd = (e: TouchEvent) => {
      const deltaY = touchStartY.current - e.changedTouches[0].clientY
      const deltaX = touchStartX.current - e.changedTouches[0].clientX
      if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 50) {
        if (deltaY > 0 && currentSection < 3) scrollToSection(currentSection + 1)
        else if (deltaY < 0 && currentSection > 0) scrollToSection(currentSection - 1)
      }
    }
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("touchstart", handleTouchStart, { passive: true })
      container.addEventListener("touchmove", handleTouchMove, { passive: false })
      container.addEventListener("touchend", handleTouchEnd, { passive: true })
    }
    return () => {
      if (container) {
        container.removeEventListener("touchstart", handleTouchStart)
        container.removeEventListener("touchmove", handleTouchMove)
        container.removeEventListener("touchend", handleTouchEnd)
      }
    }
  }, [currentSection])

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault()
        if (!scrollContainerRef.current) return
        scrollContainerRef.current.scrollBy({ left: e.deltaY, behavior: "instant" })
        const sectionWidth = scrollContainerRef.current.offsetWidth
        const newSection = Math.round(scrollContainerRef.current.scrollLeft / sectionWidth)
        if (newSection !== currentSection) setCurrentSection(newSection)
      }
    }
    const container = scrollContainerRef.current
    if (container) container.addEventListener("wheel", handleWheel, { passive: false })
    return () => { if (container) container.removeEventListener("wheel", handleWheel) }
  }, [currentSection])

  useEffect(() => {
    const handleScroll = () => {
      if (scrollThrottleRef.current) return
      scrollThrottleRef.current = requestAnimationFrame(() => {
        if (!scrollContainerRef.current) { scrollThrottleRef.current = undefined; return }
        const sectionWidth = scrollContainerRef.current.offsetWidth
        const newSection = Math.round(scrollContainerRef.current.scrollLeft / sectionWidth)
        if (newSection !== currentSection && newSection >= 0 && newSection <= 3) setCurrentSection(newSection)
        scrollThrottleRef.current = undefined
      })
    }
    const container = scrollContainerRef.current
    if (container) container.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      if (container) container.removeEventListener("scroll", handleScroll)
      if (scrollThrottleRef.current) cancelAnimationFrame(scrollThrottleRef.current)
    }
  }, [currentSection])

  const navItems = ["Главная", "Услуги", "Проекты", "Контакты"]

  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">
      <CustomCursor />
      <GrainOverlay />

      <nav className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-5 transition-opacity duration-700 md:px-12 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <button onClick={() => scrollToSection(0)} className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
            <Icon name="Shield" size={16} className="text-white" />
          </div>
          <span className="font-sans text-base font-semibold tracking-tight text-white">SafeHome</span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item, index) => (
            <button
              key={item}
              onClick={() => scrollToSection(index)}
              className={`font-mono text-xs transition-colors ${currentSection === index ? "text-white" : "text-white/40 hover:text-white/70"}`}
            >
              {item}
            </button>
          ))}
        </div>

        <MagneticButton variant="secondary" onClick={() => scrollToSection(3)}>
          Связаться
        </MagneticButton>
      </nav>

      <div className="fixed right-6 top-1/2 z-50 -translate-y-1/2 flex flex-col gap-2">
        {navItems.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToSection(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${currentSection === i ? "w-6 bg-white" : "w-1.5 bg-white/25 hover:bg-white/50"}`}
          />
        ))}
      </div>

      <div
        ref={scrollContainerRef}
        data-scroll-container
        className={`relative z-10 flex h-screen overflow-x-auto overflow-y-hidden transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <HeroSection scrollToSection={scrollToSection} />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </div>

      <style>{`div::-webkit-scrollbar { display: none; }`}</style>
    </main>
  )
}