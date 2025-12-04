export interface Translations {
  // Header
  header: {
    consultar: string;
    inicio: string;
    servicios: string;
    nosotros: string;
    contacto: string;
  };

  // Hero Section
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    cta: string;
  };

  // Services Section
  services: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
      features: string[];
    }[];
  };

  // Why Choose Us Section
  whyChooseUs: {
    title: string;
    subtitle: string;
    reasons: {
      title: string;
      description: string;
    }[];
    stats: {
      title: string;
      subtitle: string;
      items: {
        number: number;
        suffix: string;
        label: string;
      }[];
    };
  };

  // Contact Section
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
      loading: string;
    };
    quickActions: {
      title: string;
      call: string;
      whatsapp: string;
      location: string;
      hideMap: string;
      openMaps: string;
    };
    info: {
      title: string;
      address: string;
      phone: string;
      email: string;
      hours: string;
    };
  };

  // Reviews Section
  reviews: {
    title: string;
    subtitle: string;
    items: {
      name: string;
      location: string;
      avatar: string;
      comment: string;
    }[];
  };

  // Footer
  footer: {
    company: {
      title: string;
      description: string;
    };
    services: {
      title: string;
      items: string[];
    };
    companyLinks: {
      title: string;
      items: string[];
    };
    contact: {
      title: string;
      address: string;
      phone: string;
      email: string;
    };
    copyright: string;
    privacy: string;
    terms: string;
  };
}

export const translations: Record<string, Translations> = {
  es: {
    header: {
      consultar: "Consultar",
      inicio: "Inicio",
      servicios: "Servicios",
      nosotros: "Nosotros",
      contacto: "Contacto",
    },
    reviews: {
      title: "Reseñas de Clientes",
      subtitle: "Lo que dicen quienes confiaron en nosotros",
      items: [
        {
          name: "María González",
          location: "Corrientes Capital",
          avatar:
            "https://cdn.atomsolucionesit.com.ar/media/palmaymarroquin/avatars/avatar-1.jpg",
          comment:
            "Excelente atención y acompañamiento en todo el proceso de venta. Cumplieron con los tiempos y me mantuvieron informada siempre.",
        },
        {
          name: "Jorge Romero",
          location: "Paso de los Libres",
          avatar:
            "https://cdn.atomsolucionesit.com.ar/media/palmaymarroquin/avatars/avatar-2.jpg",
          comment:
            "Muy profesionales. Me ayudaron a tasar correctamente mi propiedad y lograron una operación rápida y transparente.",
        },
        {
          name: "Ana y Carlos",
          location: "Bella Vista",
          avatar:
            "https://cdn.atomsolucionesit.com.ar/media/palmaymarroquin/avatars/avatar-3.jpg",
          comment:
            "Encontramos nuestra casa ideal. Nos asesoraron en cada paso y resolvieron todas nuestras dudas.",
        },
      ],
    },
    hero: {
      badge: "🏆 Inmobiliaria Líder en Corrientes",
      title: "Encontra tu",
      titleHighlight: "propiedad ideal",
      subtitle:
        "Con más de 15 años de experiencia, te ayudamos a encontrar la propiedad perfecta en Corrientes. Compra, vende o alquila con confianza.",
      cta: "Consultar",
    },
    services: {
      title: "Nuestros Servicios",
      subtitle:
        "Ofrecemos soluciones integrales para todas tus necesidades inmobiliarias",
      items: [
        {
          title: "Venta de Propiedades",
          description:
            "Casas, departamentos y terrenos en las mejores ubicaciones de Corrientes",
          features: [
            "Asesoramiento personalizado en la compra/venta",
            "Amplia cartera de propiedades exclusivas",
            "Gestión completa de la documentación",
            "Promoción en portales inmobiliarios y redes sociales",
          ],
        },
        {
          title: "Divisiones",
          description:
            "Organiza y valoriza tu propiedad rural con nuestras soluciones de división de terrenos.",
          features: [
            "Asesoramiento técnico y legal para la correcta subdivisión de parcelas",
            "Planificación según la normativa vigente y las características del suelo",
            "Acompañamiento en trámites catastrales y registrales",
            "Soluciones eficientes para optimizar el uso y valor de cada fracción",
          ],
        },
        {
          title: "Tasaciones",
          description: "Valuaciones profesionales y precisas para tu propiedad",
          features: [
            "Análisis detallado del mercado inmobiliario",
            "Tasaciones confiables y certificadas",
            "Informes claros y fáciles de interpretar",
            "Rapidez en la entrega de resultados",
          ],
        },
      ],
    },
    whyChooseUs: {
      title: "¿Por qué elegirnos?",
      subtitle: "Somos la opción confiable para tus operaciones inmobiliarias",
      reasons: [
        {
          title: "Experiencia Comprobada",
          description:
            "Más de 15 años ayudando a familias a encontrar su hogar ideal",
        },
        {
          title: "Conocimiento Local",
          description:
            "Conocemos cada rincón de Corrientes y sus mejores oportunidades",
        },
        {
          title: "Atención Personalizada",
          description:
            "Cada cliente recibe un servicio único adaptado a sus necesidades",
        },
        {
          title: "Transparencia Total",
          description:
            "Procesos claros y honestos en cada operación que realizamos",
        },
        {
          title: "Asesoramiento Legal",
          description:
            "Te acompañamos en todos los trámites legales de tu operación inmobiliaria",
        },
        {
          title: "Inversiones",
          description:
            "Oportunidades de inversión inmobiliaria con excelente rentabilidad",
        },
        {
          title: "Socios Fundadores",
          description: "Cámara Argentina de inmobiliaria rural",
        },
      ],
      stats: {
        title: "Nuestros Números",
        subtitle: "Resultados que respaldan nuestra experiencia",
        items: [
          { number: 500, suffix: "+", label: "Operaciones Exitosas" },
          { number: 850, suffix: "+", label: "Tasaciones Realizadas" },
          { number: 98, suffix: "%", label: "Satisfacción del Cliente" },
          // { number: 24, suffix: "/7", label: "Atención Disponible" },
        ],
      },
    },
    contact: {
      title: "Empezá tu Proyecto Inmobiliario Hoy",
      subtitle:
        "Contactanos para una consulta y descubrí cómo podemos ayudarte",
      form: {
        name: "Nombre y Apellido",
        email: "Email",
        phone: "Teléfono",
        message: "Mensaje",
        submit: "Consultá Ahora",
        loading: "Enviando...",
      },
      quickActions: {
        title: "Acciones Rápidas",
        call: "Llamar Ahora",
        whatsapp: "Enviar WhatsApp",
        location: "Nuestra Ubicación",
        hideMap: "Ocultar Mapa",
        openMaps: "Abrir en Google Maps",
      },
      info: {
        title: "Información de Contacto",
        address: "Oficina",
        phone: "Teléfono",
        email: "Email",
        hours: "Horarios",
      },
    },
    footer: {
      company: {
        title: "Palma & Marroquín",
        description:
          "Tu socio inmobiliario de confianza en Corrientes desde 2008",
      },
      services: {
        title: "Servicios",
        items: [
          "Venta de Propiedades",
          "Alquileres",
          "Tasaciones",
          "Asesoramiento Legal",
          "Inversiones",
          "Administración",
        ],
      },
      companyLinks: {
        title: "Empresa",
        items: [
          "Sobre Nosotros",
          "Nuestro Equipo",
          "Testimonios",
          "Blog",
          "Carreras",
          "Contacto",
        ],
      },
      contact: {
        title: "Contacto",
        address: "Colón 826, Paso de los Libres, Corrientes",
        phone: "(3772) 63-4481",
        email: "info@palmamarroquin.com",
      },
      copyright: "© 2024 Palma & Marroquín. Todos los derechos reservados.",
      privacy: "Política de Privacidad",
      terms: "Términos y Condiciones",
    },
  },
  pt: {
    header: {
      consultar: "Consultar",
      inicio: "Início",
      servicios: "Serviços",
      nosotros: "Sobre Nós",
      contacto: "Contato",
    },
    reviews: {
      title: "Depoimentos de Clientes",
      subtitle: "O que dizem aqueles que confiaram em nós",
      items: [
        {
          name: "Maria Gonçalves",
          location: "Corrientes Capital",
          avatar:
            "https://cdn.atomsolucionesit.com.ar/media/palmaymarroquin/avatars/avatar-1.jpg",
          comment:
            "Excelente atendimento e acompanhamento em todo o processo de venda. Cumpriram os prazos e me mantiveram informada sempre.",
        },
        {
          name: "Jorge Romero",
          location: "Paso de los Libres",
          avatar:
            "https://cdn.atomsolucionesit.com.ar/media/palmaymarroquin/avatars/avatar-2.jpg",
          comment:
            "Muito profissionais. Ajudaram a avaliar corretamente meu imóvel e realizaram uma operação rápida e transparente.",
        },
        {
          name: "Ana e Carlos",
          location: "Bella Vista",
          avatar:
            "https://cdn.atomsolucionesit.com.ar/media/palmaymarroquin/avatars/avatar-3.jpg",
          comment:
            "Encontramos nossa casa ideal. Nos orientaram em cada passo e tiraram todas as nossas dúvidas.",
        },
      ],
    },
    hero: {
      badge: "🏆 Imobiliária Líder em Corrientes",
      title: "Encontre sua",
      titleHighlight: "propriedade ideal",
      subtitle:
        "Com mais de 15 anos de experiência, ajudamos você a encontrar a propriedade perfeita em Corrientes. Compre, venda ou alugue com confiança.",
      cta: "Consultar",
    },
    services: {
      title: "Nossos Serviços",
      subtitle:
        "Oferecemos soluções integrais para todas as suas necessidades imobiliárias",
      items: [
        {
          title: "Venda de Propriedades",
          description:
            "Casas, apartamentos e terrenos nas melhores localizações de Corrientes",
          features: [
            "Assessoria personalizada na compra e venda",
            "Ampla carteira de imóveis exclusivos",
            "Gestão completa da documentação",
            "Divulgação em portais imobiliários e redes sociais",
          ],
        },
        {
          title: "Divisões",
          description:
            "Organize e valorize sua propriedade rural com nossas soluções de divisão de terrenos.",
          features: [
            "Assessoria técnica e jurídica para a correta subdivisão de lotes",
            "Planejamento conforme a legislação vigente e as características do solo",
            "Acompanhamento em processos cadastrais e de registro",
            "Soluções eficientes para otimizar o uso e o valor de cada fração",
          ],
        },
        {
          title: "Avaliações",
          description:
            "Avaliações profissionais e precisas para sua propriedade",
          features: [
            "Análise detalhada do mercado imobiliário",
            "Laudos confiáveis e certificados",
            "Relatórios claros e de fácil compreensão",
            "Rapidez na entrega dos resultados",
          ],
        },
      ],
    },
    whyChooseUs: {
      title: "Por que nos escolher?",
      subtitle: "Somos a opção confiável para suas operações imobiliárias",
      reasons: [
        {
          title: "Experiência Comprovada",
          description:
            "Mais de 15 anos ajudando famílias a encontrar seu lar ideal",
        },
        {
          title: "Conhecimento Local",
          description:
            "Conhecemos cada canto de Corrientes e suas melhores oportunidades",
        },
        {
          title: "Atendimento Personalizado",
          description:
            "Cada cliente recebe um serviço único adaptado às suas necessidades",
        },
        {
          title: "Transparência Total",
          description:
            "Processos claros e honestos em cada operação que realizamos",
        },
        {
          title: "Assessoria Jurídica",
          description:
            "Acompanhamos você em todos os trâmites legais da sua operação imobiliária",
        },
        {
          title: "Investimentos",
          description:
            "Oportunidades de investimento imobiliário com excelente rentabilidade",
        },
        {
          title: "Socios Fundadores",
          description: "Cámara Argentina de Inmobiliaria Rural",
        },
      ],
      stats: {
        title: "Nossos Números",
        subtitle: "Resultados que respaldam nossa experiência",
        items: [
          { number: 500, suffix: "+", label: "Operações Bem-sucedidas" },
          { number: 850, suffix: "+", label: "Avaliações Realizadas" },
          { number: 98, suffix: "%", label: "Satisfação do Cliente" },
          // { number: 24, suffix: "/7", label: "Atendimento Disponível" },
        ],
      },
    },
    contact: {
      title: "Comece Seu Projeto Imobiliário Hoje",
      subtitle:
        "Entre em contato conosco para uma consulta gratuita e descubra como podemos ajudá-lo",
      form: {
        name: "Nome e Sobrenome",
        email: "E-mail",
        phone: "Telefone",
        message: "Mensagem",
        submit: "Consultar Agora",
        loading: "Enviando...",
      },
      quickActions: {
        title: "Ações Rápidas",
        call: "Ligar Agora",
        whatsapp: "Enviar WhatsApp",
        location: "Nossa Localização",
        hideMap: "Ocultar Mapa",
        openMaps: "Abrir no Google Maps",
      },
      info: {
        title: "Informações de Contato",
        address: "Escritório",
        phone: "Telefone",
        email: "E-mail",
        hours: "Horários",
      },
    },
    footer: {
      company: {
        title: "Palma & Marroquín",
        description:
          "Seu parceiro imobiliário de confiança em Corrientes desde 2008",
      },
      services: {
        title: "Serviços",
        items: [
          "Venda de Propriedades",
          "Aluguéis",
          "Avaliações",
          "Assessoria Jurídica",
          "Investimentos",
          "Administração",
        ],
      },
      companyLinks: {
        title: "Empresa",
        items: [
          "Sobre Nós",
          "Nossa Equipe",
          "Depoimentos",
          "Blog",
          "Carreiras",
          "Contato",
        ],
      },
      contact: {
        title: "Contato",
        address: "Colón 826, Corrientes",
        phone: "(3772) 63-4481",
        email: "info@palma-marroquin.com",
      },
      copyright: "© 2024 Palma & Marroquín. Todos os direitos reservados.",
      privacy: "Política de Privacidade",
      terms: "Termos e Condições",
    },
  },
};
