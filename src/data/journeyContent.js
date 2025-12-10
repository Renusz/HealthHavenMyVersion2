import React from "react";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";

export const resolveJourneyContent = (journey, language = "en") => {
  const db = language === "es" ? CONTENT_DB_ES : CONTENT_DB_EN;

  // If category is missing in ES, fallback to Default ES
  if (!journey || !journey.category || !db[journey.category]) {
    // Could potentially fallback to EN category if preferred, but let's stick to language consistency
    return db.default;
  }

  const baseContent = db[journey.category].default;
  const overrides = getOverrides(journey, db);

  return { ...baseContent, ...overrides };
};

const getOverrides = (journey, db) => {
  const { category, age, gender } = journey;
  const isYoung = ["18-29", "30-45"].includes(age);
  const isMature = ["46-60", "60+"].includes(age);

  const categoryDb = db[category];
  if (!categoryDb) return {};

  // Plastic Surgery Logic
  if (category === "plastic") {
    if (gender === "male") return categoryDb.male || {};
    if (isYoung) return categoryDb.young_female || {};
    if (isMature) return categoryDb.mature_female || {};
  }

  // Dental Logic
  if (category === "dental") {
    if (isYoung) return categoryDb.young || {};
    if (isMature) return categoryDb.mature || {};
  }

  // Ortho Logic
  if (category === "ortho") {
    if (isYoung) return categoryDb.young || {};
    if (isMature) return categoryDb.mature || {};
  }

  // General Logic
  if (category === "general") {
    if (isYoung) return categoryDb.young || {};
    if (isMature) return categoryDb.mature || {};
  }

  return {};
};

const CONTENT_DB_EN = {
  default: {
    hero: {
      title:
        "World-class medical care in Mexico, guided by U.S. healthcare experts.",
      subtitle:
        "We help Americans access safe, accredited doctors, hospitals and clinics in Mexico with transparent pricing, bilingual support, and a dedicated Health Navigator™ from your first question to full recovery.",
      chip: "Made In America, Made Better in Mexico",
    },
    problem: {
      title:
        "When U.S. healthcare is out of reach, patients are forced into hard choices.",
      desc: "Unfortunately many people end up postponing necessary procedures because of high costs, long wait times, or baffling insurance rules.",
    },
    solution: {
      title:
        "MyHealth Haven turns medical travel into a guided, transparent experience.",
      desc: "We bridge the U.S. and Mexican healthcare systems, combining American standards with Mexico’s clinical excellence and affordability.",
    },
  },
  ortho: {
    default: {
      hero: {
        title: "Regain your mobility with premium Orthopedic care in Mexico.",
        subtitle:
          "Access world-class joint replacement and orthopedic surgery at a fraction of U.S. costs. We guide you to board-certified surgeons and top-tier hospitals.",
        chip: "Top-Tier Orthopedics",
      },
      problem: {
        title: "Living with chronic pain shouldn't be your only option.",
        desc: "Don't let high deductibles or long wait times keep you from the mobility you deserve. Orthopedic care abroad is a proven, safe alternative.",
      },
      solution: {
        title: "A pain-free future, fully guided by experts.",
        desc: "From pre-op MRI reviews to post-op physical therapy coordination, your Health Navigator ensures your joint replacement journey is seamless.",
      },
    },
    young: {
      // Sports Medicine Focus
      hero: {
        title: "Get back in the game with elite Sports Medicine.",
        subtitle:
          "ACL repair, meniscus surgery, and ligament reconstruction by surgeons who treat pro athletes. Don't let an injury sideline you for life.",
        chip: "Sports Medicine & Arthroscopy",
      },
      problem: {
        title: "Your active lifestyle shouldn't end with an injury.",
        desc: "U.S. surgery costs can be a game-ender for the uninsured or underinsured. You need precision repair without the financial knockout.",
      },
      solution: {
        title: "Elite surgical care to get you moving again.",
        desc: "We connect you with Mexico's top sports orthopedic specialists. Includes MRI review, surgery, and a rehab plan to get you back to peak performance.",
      },
    },
    mature: {
      // Joint Replacement Focus
      hero: {
        title: "Rediscover a pain-free life with Joint Replacement.",
        subtitle:
          "Premium Knee and Hip replacement without the wait. Enjoy 5-star care and a recovery that feels like a vacation.",
        chip: "Knee & Hip Specialists",
      },
      problem: {
        title: "Don't spend your retirement waiting for surgery.",
        desc: "Chronic arthritis steals your independence. Waiting months for approval or paying out-of-pocket in the U.S. shouldn't be the barrier to walking comfortably again.",
      },
      solution: {
        title: "Complete care: From Concierge pickup to Recovery.",
        desc: "Our packages include everything: Hospital, Surgeon, and a recovery stay where you're cared for 24/7 until you're ready to fly home safely.",
      },
    },
  },
  plastic: {
    default: {
      hero: {
        title: "Achieve your aesthetic goals with confidence in Mexico.",
        subtitle:
          "Expert plastic surgery with board-certified surgeons. We prioritize safety, natural results, and a recovery experience that feels like a retreat.",
        chip: "Safe, Certified Plastic Surgery",
      },
      problem: {
        title: "Beauty shouldn't come with a compromise on safety.",
        desc: "Finding the right surgeon abroad can be daunting. We eliminate the guesswork by partnering only with credentialed, proven aesthetic specialists.",
      },
      solution: {
        title: "Your transformation, safely navigated.",
        desc: "We handle the vetting and logistics so you can focus on your recovery. Enjoy luxury recovery boutiques and comprehensive follow-up.",
      },
    },
    young_female: {
      // Body Contouring / Shape
      hero: {
        title: "Sculpt the silhouette you've always wanted.",
        subtitle:
          "BBL, Lipo 360, and Tummy Tucks by Mexico's top body contouring specialists. Safe, stunning results at a price that makes it possible.",
        chip: "Body Contouring Experts",
      },
      problem: {
        title: "Confidence starts with feeling great in your skin.",
        desc: "You know what you want, but safety concerns and high U.S. prices stand in the way. Don't settle for 'budget' clinics that cut corners.",
      },
      solution: {
        title: "The safest path to your dream curves.",
        desc: "We partner with board-certified plastic surgeons who specialize in high-definition body contouring. Your safety is our obsession, your results are our pride.",
      },
    },
    mature_female: {
      // Rejuvenation
      hero: {
        title: "Turn back time with natural, elegant rejuvenation.",
        subtitle:
          "Deep Plane Facelifts, Neck Lifts, and Eyelid surgery performed by masters of facial aesthetics. Look refreshed, not 'done'.",
        chip: "Facial Rejuvenation Specialists",
      },
      problem: {
        title: "Aging gracefully doesn't mean you can't have a little help.",
        desc: "Facial procedures require an artist's touch. Finding a surgeon you trust with your face is the hardest part of the journey.",
      },
      solution: {
        title: "Master surgeons for natural, youthful results.",
        desc: "We connect you with surgeons renowned for their subtle, restorative techniques. Recover in privacy and comfort before revealing the new you.",
      },
    },
    male: {
      // Masculine Aesthetic
      hero: {
        title: "Sharpen your edge with Male Plastic Surgery.",
        subtitle:
          "Gynecomastia surgery, Liposuction, and Rhinoplasty tailored for the masculine physique. Discreet, professional, and effective.",
        chip: "Men's Aesthetic Surgery",
      },
      problem: {
        title: "Look as fit and energetic as you feel.",
        desc: "Diet and exercise sometimes aren't enough. Stubborn areas or structural features can hold back your confidence, personally and professionally.",
      },
      solution: {
        title: "Precision procedures for the modern man.",
        desc: "Our surgeons understand male anatomy. We offer efficient, discreet pathways to getting the look you want with minimal downtime.",
      },
    },
  },
  dental: {
    default: {
      hero: {
        title: "World-class Dental Care worth smiling about.",
        subtitle:
          "Save up to 70% on implants, veneers, and full restorations. Our vetted dental clinics offer U.S.-standard materials and technology.",
        chip: "Implants, Veneers & Restoration",
      },
      problem: {
        title: "Dental work shouldn't break the bank.",
        desc: "Delaying dental care often leads to bigger health issues. Mexico offers the same top-tier implants and materials as the U.S. for a fraction of the price.",
      },
      solution: {
        title: "A perfect smile, a perfect journey.",
        desc: "We coordinate your entire dental trip, from airport pickup to the final fitting. Walk away with a smile you can be proud of.",
      },
    },
    young: {
      // Aesthetics / Veneers
      hero: {
        title: "Design your perfect Hollywood Smile today.",
        subtitle:
          "Premium Veneers and Smile Makeovers in Cancun and Tijuana. Get the smile you see on social media for a price you can actually afford.",
        chip: "Cosmetic Dentistry & Veneers",
      },
      problem: {
        title: "Your smile is your first impression.",
        desc: "Chipped, stained, or crooked teeth can hold back your confidence. U.S. cosmetic dentistry prices are often astronomical.",
      },
      solution: {
        title: "A VIP Smile Makeover experience.",
        desc: "We create a custom itinerary for your transformation. Digital smile design, premium materials, and a quick turnaround so you can enjoy your trip.",
      },
    },
    mature: {
      // Restoration / Implants
      hero: {
        title: "Restore your bite and confidence with Dental Implants.",
        subtitle:
          "All-on-4, Full Mouth Reconstruction, and Zirconia Crowns. Eat what you want and smile without hesitation again.",
        chip: "Full Mouth Restoration",
      },
      problem: {
        title: "Dental health affects your whole life.",
        desc: "Missing teeth or uncomfortable dentures affect your diet, speech, and joy. You deserve a permanent solution that looks and feels natural.",
      },
      solution: {
        title: "State-of-the-art Implantology.",
        desc: "Our partners use 3D guided surgery and top implant brands (like Nobel, Straumann). We coordinate every step of your restoration journey.",
      },
    },
  },
  bariatric: {
    default: {
      hero: {
        title: "Take control of your health with expert Weight Loss surgery.",
        subtitle:
          "Comprehensive bariatric programs including Gastric Sleeve and Bypass. We support you before, during, and long after your procedure.",
        chip: "All-Inclusive Weight Loss Packages",
      },
      problem: {
        title: "Weight loss is a journey you shouldn't walk alone.",
        desc: "Navigating diet, exercise, and medical options is overwhelming. Our bariatric partners offer a multidisciplinary approach for lasting results.",
      },
      solution: {
        title: "A lighter future, supported every step of the way.",
        desc: "Your Health Navigator walks with you through nutrition planning, surgery, and long-term follow-up to ensure your success.",
      },
    },
  },
  general: {
    default: {
      hero: {
        title: "Proactive healthcare for a longer, better life.",
        subtitle:
          "From Executive Checkups to specialized surgeries. Access rigorous medical care without the wait or the opaque pricing.",
        chip: "General Medicine & Checkups",
      },
      problem: {
        title: "Don't wait for a crisis to check your health.",
        desc: "The U.S. system is great at sick-care, but expensive for wellness. Comprehensive screening often isn't covered or costs thousands.",
      },
      solution: {
        title: "Comprehensive care, transparently priced.",
        desc: "We connect you with top internists and specialists for full-body makeovers, cardiac screening, and preventative surgery.",
      },
    },
    young: {
      hero: {
        title: "Optimize your health with a Total Wellness Checkup.",
        subtitle:
          "Full-body MRI, extensive blood panels, and cardiac screening. Know your numbers and take charge of your future.",
        chip: "Preventative & Wellness",
      },
      problem: {
        title: "Knowledge is power when it comes to your body.",
        desc: "Standard annual physicals often miss the big picture. Get a deep-dive analysis of your health markers while enjoying a trip to Mexico.",
      },
      solution: {
        title: "Bio-hacking your health, the medical way.",
        desc: "A full day of testing in a world-class facility, followed by a detailed review with a specialist. Actionable data for your longevity.",
      },
    },
    mature: {
      hero: {
        title: "Executive Health Checks for peace of mind.",
        subtitle:
          "Deep cardiac screening, cancer markers, and full-system analysis. Detect issues early with affordable, VIP diagnostics.",
        chip: "Executive Heath & Cardiac",
      },
      problem: {
        title: "Your health is your most valuable asset.",
        desc: "As we age, risks increase. Waiting for symptoms is often too late. Early detection is the key to enjoying your golden years.",
      },
      solution: {
        title: "A 360-degree view of your health.",
        desc: "We facilitate a comprehensive medical tour: Labs, Imaging, and Specialist consults, all coordinated in one efficiency trip.",
      },
    },
  },
};

const CONTENT_DB_ES = {
  default: {
    hero: {
      title:
        "Atención médica de clase mundial en México, guiada por expertos en salud de EE.UU.",
      subtitle:
        "Ayudamos a los estadounidenses a acceder a médicos, hospitales y clínicas seguros y acreditados en México con precios transparentes, soporte bilingüe y un Health Navigator™ dedicado desde su primera pregunta hasta su recuperación total.",
      chip: "Hecho en América, Mejorado en México",
    },
    problem: {
      title:
        "Cuando la atención médica en EE.UU. está fuera del alcance, los pacientes se ven obligados a tomar decisiones difíciles.",
      desc: "Desafortunadamente, muchas personas terminan posponiendo procedimientos necesarios debido a los altos costos, los largos tiempos de espera o las reglas de seguros confusas.",
    },
    solution: {
      title:
        "MyHealth Haven convierte el turismo médico en una experiencia guiada y transparente.",
      desc: "Unimos los sistemas de salud de EE.UU. y México, combinando los estándares estadounidenses con la excelencia clínica y la asequibilidad de México.",
    },
  },
  ortho: {
    default: {
      hero: {
        title:
          "Recupere su movilidad con atención ortopédica premium en México.",
        subtitle:
          "Acceda a reemplazo de articulaciones y cirugía ortopédica de clase mundial por una fracción de los costos de EE.UU. Lo guiamos a cirujanos certificados y hospitales de primer nivel.",
        chip: "Ortopedia de Primer Nivel",
      },
      problem: {
        title: "Vivir con dolor crónico no debería ser su única opción.",
        desc: "No deje que los altos deducibles o los largos tiempos de espera le impidan tener la movilidad que merece. La atención ortopédica en el extranjero es una alternativa probada y segura.",
      },
      solution: {
        title: "Un futuro sin dolor, totalmente guiado por expertos.",
        desc: "Desde la revisión de resonancias magnéticas preoperatorias hasta la coordinación de fisioterapia posoperatoria, su Health Navigator asegura que su viaje de reemplazo articular sea perfecto.",
      },
    },
    young: {
      hero: {
        title: "Vuelva al juego con Medicina Deportiva de élite.",
        subtitle:
          "Reparación de LCA, cirugía de meniscos y reconstrucción de ligamentos por cirujanos que tratan a atletas profesionales. No deje que una lesión lo deje fuera de juego de por vida.",
        chip: "Medicina Deportiva y Artroscopia",
      },
      problem: {
        title: "Su estilo de vida activo no debería terminar con una lesión.",
        desc: "Los costos de cirugía en EE.UU. pueden ser un golpe final para los no asegurados o con seguro insuficiente. Necesita reparación de precisión sin el golpe financiero.",
      },
      solution: {
        title: "Atención quirúrgica de élite para que se mueva de nuevo.",
        desc: "Lo conectamos con los mejores especialistas en ortopedia deportiva de México. Incluye revisión de resonancia magnética, cirugía y un plan de rehabilitación para que vuelva a su máximo rendimiento.",
      },
    },
    mature: {
      hero: {
        title: "Redescubra una vida sin dolor con Reemplazo de Articulaciones.",
        subtitle:
          "Reemplazo premium de Rodilla y Cadera sin espera. Disfrute de atención de 5 estrellas y una recuperación que se siente como unas vacaciones.",
        chip: "Especialistas en Rodilla y Cadera",
      },
      problem: {
        title: "No pase su jubilación esperando una cirugía.",
        desc: "La artritis crónica roba su independencia. Esperar meses por una aprobación o pagar de su bolsillo en EE.UU. no debería ser la barrera para caminar cómodamente de nuevo.",
      },
      solution: {
        title:
          "Atención completa: Desde la recogida de Concierge hasta la Recuperación.",
        desc: "Nuestros paquetes incluyen todo: Hospital, Cirujano y una estancia de recuperación donde será atendido las 24 horas, los 7 días de la semana hasta que esté listo para volar a casa de manera segura.",
      },
    },
  },
  plastic: {
    default: {
      hero: {
        title: "Logre sus objetivos estéticos con confianza en México.",
        subtitle:
          "Cirugía plástica experta con cirujanos certificados. Priorizamos la seguridad, los resultados naturales y una experiencia de recuperación que se siente como un retiro.",
        chip: "Cirugía Plástica Segura y Certificada",
      },
      problem: {
        title: "La belleza no debe venir con un compromiso en la seguridad.",
        desc: "Encontrar al cirujano adecuado en el extranjero puede ser desalentador. Eliminamos las conjeturas asociándonos solo con especialistas estéticos acreditados y probados.",
      },
      solution: {
        title: "Su transformación, navegada de forma segura.",
        desc: "Manejamos la verificación y la logística para que pueda concentrarse en su recuperación. Disfrute de boutiques de recuperación de lujo y seguimiento integral.",
      },
    },
    young_female: {
      hero: {
        title: "Esculpa la silueta que siempre ha deseado.",
        subtitle:
          "BBL, Lipo 360 y Tummy Tucks por los mejores especialistas en contorno corporal de México. Resultados seguros e impresionantes a un precio que lo hace posible.",
        chip: "Expertos en Contorno Corporal",
      },
      problem: {
        title: "La confianza comienza con sentirse bien en su propia piel.",
        desc: "Sabe lo que quiere, pero las preocupaciones de seguridad y los altos precios de EE.UU. se interponen en el camino. No se conforme con clínicas 'económicas' que recortan gastos.",
      },
      solution: {
        title: "El camino más seguro hacia sus curvas soñadas.",
        desc: "Nos asociamos con cirujanos plásticos certificados que se especializan en contorno corporal de alta definición. Su seguridad es nuestra obsesión, sus resultados son nuestro orgullo.",
      },
    },
    mature_female: {
      hero: {
        title: "Retroceda el tiempo con rejuvenecimiento natural y elegante.",
        subtitle:
          "Lifting Facial de Plano Profundo, Lifting de Cuello y cirugía de Párpados realizados por maestros de la estética facial. Luzca renovada, no 'operada'.",
        chip: "Especialistas en Rejuvenecimiento Facial",
      },
      problem: {
        title:
          "Envejecer con gracia no significa que no pueda tener un poco de ayuda.",
        desc: "Los procedimientos faciales requieren el toque de un artista. Encontrar un cirujano en quien confíe su rostro es la parte más difícil del viaje.",
      },
      solution: {
        title: "Cirujanos maestros para resultados naturales y juveniles.",
        desc: "Lo conectamos con cirujanos reconocidos por sus técnicas sutiles y restauradoras. Recupérese en privacidad y comodidad antes de revelar su nuevo yo.",
      },
    },
    male: {
      hero: {
        title: "Afine su ventaja con Cirugía Plástica Masculina.",
        subtitle:
          "Cirugía de ginecomastia, liposucción y rinoplastia diseñadas para el físico masculino. Discreto, profesional y efectivo.",
        chip: "Cirugía Estética Masculina",
      },
      problem: {
        title: "Luzca tan en forma y enérgico como se siente.",
        desc: "La dieta y el ejercicio a veces no son suficientes. Las áreas rebeldes o las características estructurales pueden frenar su confianza, personal y profesionalmente.",
      },
      solution: {
        title: "Procedimientos de precisión para el hombre moderno.",
        desc: "Nuestros cirujanos entienden la anatomía masculina. Ofrecemos caminos eficientes y discretos para obtener el aspecto que desea con un tiempo de inactividad mínimo.",
      },
    },
  },
  dental: {
    default: {
      hero: {
        title: "Atención dental de clase mundial que vale la pena sonreír.",
        subtitle:
          "Ahorre hasta un 70% en implantes, carillas y restauraciones completas. Nuestras clínicas dentales verificadas ofrecen materiales y tecnología estándar de EE.UU.",
        chip: "Implantes, Carillas y Restauración",
      },
      problem: {
        title: "El trabajo dental no debería costarle una fortuna.",
        desc: "Retrasar la atención dental a menudo conduce a problemas de salud mayores. México ofrece los mismos implantes y materiales de primer nivel que EE.UU. por una fracción del precio.",
      },
      solution: {
        title: "Una sonrisa perfecta, un viaje perfecto.",
        desc: "Coordinamos todo su viaje dental, desde la recogida en el aeropuerto hasta el ajuste final. Váyase con una sonrisa de la que pueda estar orgulloso.",
      },
    },
    young: {
      hero: {
        title: "Diseñe su sonrisa perfecta de Hollywood hoy.",
        subtitle:
          "Carillas Premium y Diseños de Sonrisa en Cancún y Tijuana. Obtenga la sonrisa que ve en las redes sociales por un precio que realmente puede pagar.",
        chip: "Odontología Cosmética y Carillas",
      },
      problem: {
        title: "Su sonrisa es su primera impresión.",
        desc: "Los dientes astillados, manchados o torcidos pueden frenar su confianza. Los precios de la odontología cosmética en EE.UU. suelen ser astronómicos.",
      },
      solution: {
        title: "Una experiencia VIP de Cambio de Imagen de Sonrisa.",
        desc: "Creamos un itinerario personalizado para su transformación. Diseño digital de sonrisa, materiales premium y un tiempo de respuesta rápido para que pueda disfrutar de su viaje.",
      },
    },
    mature: {
      hero: {
        title: "Restaure su mordida y confianza con Implantes Dentales.",
        subtitle:
          "All-on-4, Reconstrucción de Boca Completa y Coronas de Zirconia. Coma lo que quiera y sonría sin dudarlo de nuevo.",
        chip: "Restauración de Boca Completa",
      },
      problem: {
        title: "La salud dental afecta toda su vida.",
        desc: "La falta de dientes o las dentaduras postizas incómodas afectan su dieta, habla y alegría. Merece una solución permanente que se vea y se sienta natural.",
      },
      solution: {
        title: "Implantología de última generación.",
        desc: "Nuestros socios utilizan cirugía guiada 3D y las mejores marcas de implantes (como Nobel, Straumann). Coordinamos cada paso de su viaje de restauración.",
      },
    },
  },
  bariatric: {
    default: {
      hero: {
        title:
          "Tome el control de su salud con cirugía de pérdida de peso experta.",
        subtitle:
          "Programas bariátricos integrales que incluyen Manga Gástrica y Bypass. Lo apoyamos antes, durante y mucho después de su procedimiento.",
        chip: "Paquetes de Pérdida de Peso Todo Incluido",
      },
      problem: {
        title: "La pérdida de peso es un viaje que no debería caminar solo.",
        desc: "Navegar por la dieta, el ejercicio y las opciones médicas es abrumador. Nuestros socios bariátricos ofrecen un enfoque multidisciplinario para resultados duraderos.",
      },
      solution: {
        title: "Un futuro más ligero, apoyado en cada paso del camino.",
        desc: "Su Health Navigator camina con usted a través de la planificación nutricional, la cirugía y el seguimiento a largo plazo para asegurar su éxito.",
      },
    },
  },
  general: {
    default: {
      hero: {
        title: "Atención médica proactiva para una vida más larga y mejor.",
        subtitle:
          "Desde Chequeos Ejecutivos hasta cirugías especializadas. Acceda a atención médica rigurosa sin la espera ni los precios opacos.",
        chip: "Medicina General y Chequeos",
      },
      problem: {
        title: "No espere una crisis para revisar su salud.",
        desc: "El sistema de EE.UU. es excelente para la atención de enfermos, pero costoso para el bienestar. La detección integral a menudo no está cubierta o cuesta miles.",
      },
      solution: {
        title: "Atención integral, con precios transparentes.",
        desc: "Lo conectamos con los mejores internistas y especialistas para cambios de imagen de cuerpo completo, detección cardíaca y cirugía preventiva.",
      },
    },
    young: {
      hero: {
        title: "Optimice su salud con un Chequeo de Bienestar Total.",
        subtitle:
          "Resonancia magnética de cuerpo completo, paneles sanguíneos extensos y detección cardíaca. Conozca sus números y hágase cargo de su futuro.",
        chip: "Preventivo y Bienestar",
      },
      problem: {
        title: "El conocimiento es poder cuando se trata de su cuerpo.",
        desc: "Los exámenes físicos anuales estándar a menudo pierden el panorama general. Obtenga un análisis profundo de sus marcadores de salud mientras disfruta de un viaje a México.",
      },
      solution: {
        title: "Bio-hacking su salud, de la manera médica.",
        desc: "Un día completo de pruebas en una instalación de clase mundial, seguido de una revisión detallada con un especialista. Datos procesables para su longevidad.",
      },
    },
    mature: {
      hero: {
        title: "Chequeos de Salud Ejecutivos para su tranquilidad.",
        subtitle:
          "Detección cardíaca profunda, marcadores de cáncer y análisis del sistema completo. Detecte problemas temprano con diagnósticos VIP asequibles.",
        chip: "Salud Ejecutiva y Cardíaca",
      },
      problem: {
        title: "Su salud es su activo más valioso.",
        desc: "A medida que envejecemos, los riesgos aumentan. Esperar los síntomas suele ser demasiado tarde. La detección temprana es la clave para disfrutar de sus años dorados.",
      },
      solution: {
        title: "Una vista de 360 grados de su salud.",
        desc: "Facilitamos un tour médico integral: Laboratorios, Imágenes y Consultas de Especialistas, todo coordinado en un viaje de eficiencia.",
      },
    },
  },
};
