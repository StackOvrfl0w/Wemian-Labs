"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Language = "en" | "es";

const STORAGE_KEY = "wemian-language";

const translations = {
  en: {
    header: {
      nav: {
        services: "Services",
        process: "Process",
        about: "About",
        contact: "Contact",
      },
      cta: "Start",
      aria: "Primary navigation",
      languageLabel: "Select language",
    },
    hero: {
      pill: "Digital Optimizations",
      headlineWords: [
        "We",
        "build",
        "the",
        "systems",
        "that",
        "make",
        "your",
        "business",
        "run",
        "without",
        "you.",
      ],
      highlight: "systems",
      subtext:
        "Automation • AI • Marketing. One integrated approach to digital operations.",
      primary: "Start a Project",
      secondary: "See Our Process",
    },
    marquee: [
      "Process Automation",
      "AI-Powered Workflows",
      "Strategic Marketing",
      "Digital Transformation",
      "Social Media Systems",
      "Lead Generation Engines",
    ],
    services: {
      label: "WHAT WE DO",
      heading: "Four pillars. One outcome: operational leverage.",
      learnMore: "Learn more",
      items: [
        {
          title: "Process Automation",
          description:
            "We map your workflows, kill the redundancies, and build systems that execute without manual input.",
        },
        {
          title: "AI Development",
          description:
            "Custom AI agents, integrations, and intelligent tools built around your actual business logic.",
        },
        {
          title: "Digital Marketing",
          description:
            "Performance-driven campaigns. SEO, paid media, and compounding conversion systems.",
        },
        {
          title: "Strategic Social Media",
          description:
            "Platform-specific content strategies that build authority and generate inbound demand.",
        },
      ],
    },
    process: {
      label: "HOW WE WORK",
      heading: "From diagnosis to deployment. No fluff in between.",
      steps: [
        {
          title: "Diagnosis",
          description:
            "We audit your current operations, identify bottlenecks, and map the opportunity cost of manual work.",
        },
        {
          title: "Architecture",
          description:
            "We design the system — tools, workflows, integrations, and content engines — before writing a single line.",
        },
        {
          title: "Build & Test",
          description:
            "Rapid implementation in sprints. You see working outputs every week, not a final reveal after months.",
        },
        {
          title: "Optimize & Scale",
          description:
            "We measure, refine, and scale what works. Then train your team to own it.",
        },
      ],
    },
    about: {
      label: "WHY WEMIAN LABS",
      heading: "We don't sell hours. We sell outcomes.",
      paragraphs: [
        "Most agencies deliver deliverables. We deliver operational change. The difference is that our work keeps generating value after the invoice is paid.",
        "We operate at the intersection of automation, AI, and marketing — because isolated tactics don't move the needle. Integrated systems do.",
      ],
      stats: [
        { label: "Automations Deployed" },
        { label: "Average ROI" },
        { label: "Time to First Output" },
      ],
    },
    cta: {
      heading: "Ready to stop managing and start scaling?",
      subtext:
        "Tell us what's slowing you down. We'll tell you exactly what to build.",
      button: "Book a Strategy Call",
    },
    footer: {
      tagline: "Digital Optimizations",
      description:
        "Transforming operations through automation, AI, and strategic marketing.",
      company: "Company",
      services: "Services",
      connect: "Connect",
      companyLinks: ["About", "Services", "Process", "Contact"],
      serviceLinks: [
        "Process Automation",
        "AI Development",
        "Digital Marketing",
        "Social Media",
      ],
      rights: "© 2026 Wemian Labs. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms",
    },
  },
  es: {
    header: {
      nav: {
        services: "Servicios",
        process: "Proceso",
        about: "Nosotros",
        contact: "Contacto",
      },
      cta: "Empezar",
      aria: "Navegación principal",
      languageLabel: "Seleccionar idioma",
    },
    hero: {
      pill: "Optimizaciones Digitales",
      headlineWords: [
        "Construimos",
        "los",
        "sistemas",
        "que",
        "hacen",
        "que",
        "tu",
        "negocio",
        "funcione",
        "sin",
        "ti.",
      ],
      highlight: "sistemas",
      subtext:
        "Automatización • IA • Marketing. Un enfoque integrado para operaciones digitales.",
      primary: "Iniciar un Proyecto",
      secondary: "Ver Nuestro Proceso",
    },
    marquee: [
      "Automatización de Procesos",
      "Flujos con IA",
      "Marketing Estratégico",
      "Transformación Digital",
      "Sistemas de Redes Sociales",
      "Motores de Generación de Leads",
    ],
    services: {
      label: "QUÉ HACEMOS",
      heading: "Cuatro pilares. Un resultado: apalancamiento operativo.",
      learnMore: "Saber más",
      items: [
        {
          title: "Automatización de Procesos",
          description:
            "Mapeamos tus flujos, eliminamos redundancias y construimos sistemas que ejecutan sin intervención manual.",
        },
        {
          title: "Desarrollo de IA",
          description:
            "Agentes de IA, integraciones y herramientas inteligentes creadas alrededor de tu lógica real de negocio.",
        },
        {
          title: "Marketing Digital",
          description:
            "Campañas orientadas al rendimiento. SEO, medios pagados y sistemas de conversión acumulativos.",
        },
        {
          title: "Redes Sociales Estratégicas",
          description:
            "Estrategias de contenido por plataforma que construyen autoridad y generan demanda entrante.",
        },
      ],
    },
    process: {
      label: "CÓMO TRABAJAMOS",
      heading: "Del diagnóstico al despliegue. Sin relleno entre medio.",
      steps: [
        {
          title: "Diagnóstico",
          description:
            "Auditamos tus operaciones actuales, identificamos cuellos de botella y medimos el costo de oportunidad del trabajo manual.",
        },
        {
          title: "Arquitectura",
          description:
            "Diseñamos el sistema — herramientas, flujos, integraciones y motores de contenido — antes de escribir una sola línea.",
        },
        {
          title: "Construcción y Prueba",
          description:
            "Implementación rápida por sprints. Ves resultados funcionales cada semana, no una revelación final tras meses.",
        },
        {
          title: "Optimización y Escala",
          description:
            "Medimos, refinamos y escalamos lo que funciona. Luego entrenamos a tu equipo para operarlo.",
        },
      ],
    },
    about: {
      label: "POR QUÉ WEMIAN LABS",
      heading: "No vendemos horas. Vendemos resultados.",
      paragraphs: [
        "La mayoría de las agencias entrega trabajos sueltos. Nosotros entregamos cambio operativo. La diferencia es que nuestro trabajo sigue generando valor después de pagar la factura.",
        "Operamos en la intersección de automatización, IA y marketing — porque las tácticas aisladas no mueven la aguja. Los sistemas integrados sí.",
      ],
      stats: [
        { label: "Automatizaciones Desplegadas" },
        { label: "ROI Promedio" },
        { label: "Tiempo al Primer Resultado" },
      ],
    },
    cta: {
      heading: "¿Listo para dejar de gestionar y empezar a escalar?",
      subtext:
        "Cuéntanos qué te está frenando. Te diremos exactamente qué construir.",
      button: "Reservar una Llamada Estratégica",
    },
    footer: {
      tagline: "Optimizaciones Digitales",
      description:
        "Transformamos operaciones mediante automatización, IA y marketing estratégico.",
      company: "Empresa",
      services: "Servicios",
      connect: "Conectar",
      companyLinks: ["Nosotros", "Servicios", "Proceso", "Contacto"],
      serviceLinks: [
        "Automatización de Procesos",
        "Desarrollo de IA",
        "Marketing Digital",
        "Redes Sociales",
      ],
      rights: "© 2026 Wemian Labs. Todos los derechos reservados.",
      privacy: "Política de Privacidad",
      terms: "Términos",
    },
  },
} as const;

type Dictionary = (typeof translations)[Language];

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem(STORAGE_KEY);

    if (storedLanguage === "en" || storedLanguage === "es") {
      setLanguageState(storedLanguage);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: setLanguageState,
      t: translations[language],
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
