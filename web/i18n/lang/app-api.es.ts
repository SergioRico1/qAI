const translation = {
    apiServer: "Servidor de API",
    apiKey: "Clave de API",
    status: "Estado",
    disabled: "Deshabilitado",
    ok: "En servicio",
    copy: "Copiar",
    copied: "Copiado",
    never: "Nunca",
    apiKeyModal: {
        apiSecretKey: "Clave secreta de API",
        apiSecretKeyTips: "Para prevenir el abuso de la API, protege tu clave de API. Evita usarla como texto plano en el código del frontend. :)",
        createNewSecretKey: "Crear nueva clave secreta",
        secretKey: "Clave secreta",
        created: "CREADA",
        lastUsed: "ÚLTIMO USO",
        generateTips: "Mantén esta clave en un lugar seguro y accesible."
    },
    actionMsg: {
        deleteConfirmTitle: "¿Eliminar esta clave secreta?",
        deleteConfirmTips: "Esta acción no se puede deshacer.",
        ok: "Aceptar"
    },
    completionMode: {
        title: "API de generación de texto completado",
        info: "Para generar texto de alta calidad, como artículos, resúmenes y traducciones, utiliza la API de mensajes completados con la entrada del usuario. La generación de texto depende de los parámetros del modelo y las plantillas de indicaciones configuradas en Dify Prompt Engineering.",
        createCompletionApi: "Crear mensaje completado",
        createCompletionApiTip: "Crea un mensaje completado para admitir el modo de pregunta y respuesta.",
        inputsTips: "(Opcional) Proporciona campos de entrada de usuario como pares clave-valor, que corresponden a las variables en Prompt Eng. La clave es el nombre de la variable y el valor es el valor del parámetro. Si el tipo de campo es Select, el valor enviado debe ser una de las opciones predefinidas.",
        queryTips: "Contenido del texto de entrada del usuario.",
        blocking: "Tipo de bloqueo, espera a que se complete la ejecución y devuelve los resultados. (Las solicitudes pueden interrumpirse si el proceso es largo)",
        streaming: "Devuelve en streaming. Implementación de devolución en streaming basada en SSE (Server-Sent Events).",
        messageFeedbackApi: "Mensaje de retroalimentación (me gusta)",
        messageFeedbackApiTip: "Califica los mensajes recibidos en nombre de los usuarios finales con me gusta o no me gusta. Estos datos son visibles en la página de registros y anotaciones, y se utilizan para el ajuste fino del modelo en el futuro.",
        messageIDTip: "ID del mensaje",
        ratingTip: "me gusta o no me gusta, null para deshacer",
        parametersApi: "Obtener información de parámetros de la aplicación",
        parametersApiTip: "Recupera los parámetros de entrada configurados, incluidos los nombres de variables, los nombres de campos, los tipos y los valores predeterminados. Se utiliza normalmente para mostrar estos campos en un formulario o rellenar los valores predeterminados después de cargar el cliente."
    },
    chatMode: {
        title: "API de aplicación de chat",
        info: "Para aplicaciones de conversación versátiles que utilizan un formato de pregunta y respuesta, llama a la API de mensajes de chat para iniciar un diálogo. Mantén conversaciones en curso pasando el conversation_id devuelto. Los parámetros de respuesta y las plantillas dependen de la configuración de Dify Prompt Eng.",
        createChatApi: "Crear mensaje de chat",
        createChatApiTip: "Crea un nuevo mensaje de conversación o continúa un diálogo existente.",
        inputsTips: "(Opcional) Proporciona campos de entrada de usuario como pares clave-valor, que corresponden a las variables en Prompt Eng. La clave es el nombre de la variable y el valor es el valor del parámetro. Si el tipo de campo es Select, el valor enviado debe ser una de las opciones predefinidas.",
        queryTips: "Contenido de la pregunta o entrada del usuario.",
        blocking: "Tipo de bloqueo, espera a que se complete la ejecución y devuelve los resultados. (Las solicitudes pueden interrumpirse si el proceso es largo)",
        streaming: "Devuelve en streaming. Implementación de devolución en streaming basada en SSE (Server-Sent Events).",
        conversationIdTip: "(Opcional) ID de conversación: dejar vacío para una conversación nueva; pasar conversation_id del contexto para continuar el diálogo.",
        messageFeedbackApi: "Retroalimentación del usuario terminal del mensaje (me gusta)",
        messageFeedbackApiTip: "Califica los mensajes recibidos en nombre de los usuarios finales con me gusta o no me gusta. Estos datos son visibles en la página de registros y anotaciones, y se utilizan para el ajuste fino del modelo en el futuro.",
        messageIDTip: "ID del mensaje",
        ratingTip: "me gusta o no me gusta, null para deshacer",
        chatMsgHistoryApi: "Obtener el historial de mensajes de chat",
        chatMsgHistoryApiTip: "La primera página devuelve los últimos `limit` mensajes en orden inverso.",
        chatMsgHistoryConversationIdTip: "ID de conversación",
        chatMsgHistoryFirstId: "ID del primer registro de chat en la página actual. El valor predeterminado es ninguno.",
        chatMsgHistoryLimit: "Cuántos chats se devuelven en una solicitud",
        conversationsListApi: "Obtener lista de conversaciones",
        conversationsListApiTip: "Obtiene la lista de sesiones del usuario actual. De forma predeterminada, se devuelven las últimas 20 sesiones.",
        conversationsListFirstIdTip: "ID del último registro en la página actual, valor predeterminado ninguno.",
        conversationsListLimitTip: "Cuántos chats se devuelven en una solicitud",
        conversationRenamingApi: "Cambio de nombre de conversación",
        conversationRenamingApiTip: "Cambia el nombre de las conversaciones; el nombre se muestra en las interfaces de cliente de varias sesiones.",
        conversationRenamingNameTip: "Nuevo nombre",
        parametersApi: "Obtener información de parámetros de la aplicación",
        parametersApiTip: "Recupera los parámetros de entrada configurados, incluidos los nombres de variables, los nombres de campos, los tipos y los valores predeterminados. Se utiliza normalmente para mostrar estos campos en un formulario o rellenar los valores predeterminados después de cargar el cliente."
    },
    develop: {
        requestBody: "Cuerpo de la solicitud",
        pathParams: "Parámetros de ruta",
        query: "Consulta"
    }
}

export default translation;
