const translation = {
  title: 'Configuración del conjunto de datos',
  desc: 'Aquí puedes modificar las propiedades y métodos de trabajo del conjunto de datos.',
  form: {
    name: 'Nombre del conjunto de datos',
    nameError: 'El nombre no puede estar vacío',
    desc: 'Descripción del conjunto de datos',
    descPlaceholder: 'Describe qué hay en este conjunto de datos. Una descripción detallada permite que la IA acceda al contenido del conjunto de datos de manera oportuna. Si está vacío, Dify utilizará la estrategia de coincidencia predeterminada.',
    descWrite: 'Aprende cómo escribir una buena descripción del conjunto de datos.',
    permissions: 'Permisos',
    permissionsOnlyMe: 'Solo yo',
    permissionsAllMember: 'Todos los miembros del equipo',
    indexMethod: 'Método de indexación',
    indexMethodHighQuality: 'Alta calidad',
    indexMethodHighQualityTip: 'Llama a la interfaz de incrustación de OpenAI para procesar y proporcionar una mayor precisión al realizar consultas de los usuarios.',
    indexMethodEconomy: 'Económico',
    indexMethodEconomyTip: 'Utiliza motores de vectores fuera de línea, índices de palabras clave, etc., para reducir la precisión sin gastar tokens.',
    save: 'Guardar',
  },
}

export default translation;
