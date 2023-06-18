const translation = {
  welcome: {
    firstStepTip: 'Para empezar,',
    enterKeyTip: 'ingresa tu clave de API de OpenAI a continuación',
    getKeyTip: 'Obtén tu clave de API desde el panel de OpenAI',
    placeholder: 'Tu clave de API de OpenAI (ejemplo: sk-xxxx)',
  },
  overview: {
    title: 'Resumen',
    appInfo: {
      explanation: 'WebApp de IA lista para usar',
      accessibleAddress: 'URL Pública',
      preview: 'Vista Previa',
      share: {
        entry: 'Compartir',
        explanation: 'Comparte la siguiente URL para invitar a más personas a acceder a la aplicación.',
        shareUrl: 'URL para Compartir',
        copyLink: 'Copiar Enlace',
        regenerate: 'Regenerar',
      },
      preUseReminder: 'Por favor, habilita la WebApp antes de continuar.',
      settings: {
        entry: 'Configuración',
        title: 'Configuración de la WebApp',
        webName: 'Nombre de la WebApp',
        webDesc: 'Descripción de la WebApp',
        webDescTip: 'Este texto se mostrará en el lado del cliente, proporcionando orientación básica sobre cómo usar la aplicación',
        webDescPlaceholder: 'Ingresa la descripción de la WebApp',
        language: 'Idioma',
        more: {
          entry: 'Mostrar más configuraciones',
          copyright: 'Derechos de Autor',
          copyRightPlaceholder: 'Ingresa el nombre del autor o la organización',
          privacyPolicy: 'Política de Privacidad',
          privacyPolicyPlaceholder: 'Ingresa la política de privacidad',
          privacyPolicyTip: 'Ayuda a los visitantes a comprender los datos que la aplicación recopila, consulta la <privacyPolicyLink>Política de Privacidad</privacyPolicyLink> de Dify.',
        },
      },
      customize: {
        way: 'forma',
        entry: '¿Quieres personalizar tu WebApp?',
        title: 'Personaliza tu WebApp de IA',
        explanation: 'Puedes personalizar el frontend de la WebApp para que se ajuste a tu escenario y necesidades de estilo.',
        way1: {
          name: 'Bifurca el código del cliente, modifícalo y despliégalo en Vercel (recomendado)',
          step1: 'Bifurca el código del cliente y modifícalo',
          step1Tip: 'Haz clic aquí para bifurcar el código fuente en tu cuenta de GitHub y modificar el código',
          step1Operation: 'Dify-WebClient',
          step2: 'Configura la Web',
          step2Tip: 'Copia la API Web y el ID de la APP, luego péguelos en la configuración del código del cliente config/index.ts',
          step3: 'Despliégalo en Vercel',
          step3Tip: 'Haz clic aquí para importar el repositorio en Vercel y desplegarlo',
          step3Operation: 'Importar repositorio',
        },
        way2: {
          name: 'Escribe código del lado del cliente para llamar a la API y despliégalo en un servidor',
          operation: 'Documentación',
        },
      },
    },
    apiInfo: {
      title: 'API del servicio Backend',
      explanation: 'Fácilmente integrable en tu aplicación',
      accessibleAddress: 'Token de la API',
      doc: 'Referencia de la API',
    },
    status: {
      running: 'En servicio',
      disable: 'Desactivar',
    },
  },
  analysis: {
    title: 'Análisis',
    ms: 'ms',
    totalMessages: {
      title: 'Mensajes Totales',
      explanation: 'Cantidad diaria de interacciones de IA; excluye ingeniería y depuración de prompts.',
    },
    activeUsers: {
      title: 'Usuarios Activos',
      explanation: 'Usuarios únicos que interactúan en preguntas y respuestas con la IA; excluye ingeniería y depuración de prompts.',
    },
    tokenUsage: {
      title: 'Uso de Tokens',
      explanation: 'Refleja el uso diario de tokens del modelo de lenguaje para la aplicación, útil para fines de control de costos.',
      consumed: 'Consumido',
    },
    avgSessionInteractions: {
      title: 'Interacciones Promedio por Sesión',
      explanation: 'Cantidad continua de comunicaciones entre el usuario y la IA; para aplicaciones basadas en conversaciones.',
    },
    userSatisfactionRate: {
      title: 'Tasa de Satisfacción del Usuario',
      explanation: 'La cantidad de "me gusta" por cada 1,000 mensajes. Esto indica la proporción de respuestas con las que los usuarios están altamente satisfechos.',
    },
    avgResponseTime: {
      title: 'Tiempo Promedio de Respuesta',
      explanation: 'Tiempo (ms) que tarda la IA en procesar y responder; para aplicaciones basadas en texto.',
    },
  },
}

export default translation
