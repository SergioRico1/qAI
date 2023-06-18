const translation = {
  title: 'Registros y Anotaciones',
  description: 'Los registros registran el estado de ejecución de la aplicación, incluyendo las entradas del usuario y las respuestas del AI.',
  dateTimeFormat: 'MM/DD/YYYY hh:mm A',
  table: {
    header: {
      time: 'Hora',
      endUser: 'Usuario Final',
      input: 'Entrada',
      output: 'Salida',
      summary: 'Resumen',
      messageCount: 'Cantidad de Mensajes',
      userRate: 'Tasa de Usuario',
      adminRate: 'Tasa de OP',
    },
    pagination: {
      previous: 'Anterior',
      next: 'Siguiente',
    },
    empty: {
      noChat: 'Sin conversaciones aún',
      noOutput: 'Sin salida',
      element: {
        title: '¿Hay alguien ahí?',
        content: 'Observa y anota las interacciones entre los usuarios finales y las aplicaciones de IA aquí para mejorar continuamente la precisión de la IA. Puedes probar <shareLink>compartir</shareLink> o <testLink>probar</testLink> la aplicación web tú mismo, y luego regresar a esta página.',
      },
    },
  },
  detail: {
    time: 'Hora',
    conversationId: 'ID de Conversación',
    promptTemplate: 'Plantilla de Prompt',
    promptTemplateBeforeChat: 'Plantilla de Prompt Antes del Chat · Como Mensaje del Sistema',
    annotationTip: 'Mejoras marcadas por {{user}}',
    timeConsuming: '',
    second: 's',
    tokenCost: 'Tokens gastados',
    loading: 'cargando',
    operation: {
      like: 'Me gusta',
      dislike: 'No me gusta',
      addAnnotation: 'Agregar Mejora',
      editAnnotation: 'Editar Mejora',
      annotationPlaceholder: 'Ingresa la respuesta esperada que deseas que el AI responda, lo cual se puede utilizar para ajustar el modelo y mejorar continuamente la calidad de generación de texto en el futuro.',
    },
  },
  filter: {
    period: {
      today: 'Hoy',
      last7days: 'Últimos 7 días',
      last4weeks: 'Últimas 4 semanas',
      last3months: 'Últimos 3 meses',
      last12months: 'Últimos 12 meses',
      monthToDate: 'Mes a la fecha',
      quarterToDate: 'Trimestre a la fecha',
      yearToDate: 'Año a la fecha',
      allTime: 'Todo el tiempo',
    },
    annotation: {
      all: 'Todos',
      annotated: 'Mejoras Anotadas ({{count}} elementos)',
      not_annotated: 'No Anotado',
    },
  },
}

export default translation
