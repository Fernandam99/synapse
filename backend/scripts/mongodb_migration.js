// Crear base de datos synapse use synapse;

// 1. Crear colección de usuarios con índices
db.createCollection("usuarios");
db.usuarios.createIndex({ "email": 1 }, { unique: true });
db.usuarios.createIndex({ "fecha_registro": 1 });
db.usuarios.createIndex({ "nivel_experiencia": 1 });

// 2. Crear colección de tipos de técnicas con datos iniciales
db.createCollection("tipos_tecnicas");
db.tipos_tecnicas.insertMany([
  {
    _id: ObjectId(),
    nombre: "Pomodoro Clásico",
    descripcion: "25 minutos de estudio concentrado seguidos de 5 minutos de descanso",
    categoria: "productividad_estudio",
    subcategoria: "pomodoro",
    nivel_requerido: "principiante",
    duracion_base: 25,
    duracion_descanso: 5,
    ciclos_recomendados: 4,
    instrucciones: "Trabaja durante 25 minutos sin interrupciones, luego toma 5 minutos de descanso. Después de 4 ciclos, toma un descanso largo de 15-30 minutos.",
    parametros_configurables: {
      descanso_largo: 20,
      personalizable: true
    },
    activo: true,
    fecha_creacion: new Date()
  },
  {
    _id: ObjectId(),
    nombre: "Técnica 52-17",
    descripcion: "Basada en estudios de productividad: 52 minutos de trabajo intenso seguidos de 17 minutos de descanso",
    categoria: "productividad_estudio",
    subcategoria: "ultradian",
    nivel_requerido: "intermedio",
    duracion_base: 52,
    duracion_descanso: 17,
    ciclos_recomendados: 3,
    instrucciones: "Trabaja intensamente durante 52 minutos, luego toma 17 minutos de descanso completo. Ideal para trabajo profundo.",
    parametros_configurables: {
      trabajo_intenso: true,
      descanso_completo: true
    },
    activo: true,
    fecha_creacion: new Date()
  },
  {
    _id: ObjectId(),
    nombre: "Técnica Ultradian",
    descripcion: "Bloques de 90 minutos aprovechando los ritmos naturales del cerebro",
    categoria: "productividad_estudio",
    subcategoria: "ultradian",
    nivel_requerido: "avanzado",
    duracion_base: 90,
    duracion_descanso: 20,
    ciclos_recomendados: 2,
    instrucciones: "Trabaja durante 90 minutos seguidos de 20 minutos de descanso, siguiendo los ritmos naturales de atención del cerebro.",
    parametros_configurables: {
      ritmo_natural: true,
      sesiones_largas: true
    },
    activo: true,
    fecha_creacion: new Date()
  },
  {
    _id: ObjectId(),
    nombre: "Timeboxing",
    descripcion: "Bloques específicos de tiempo para cada materia con cronómetro",
    categoria: "productividad_estudio",
    subcategoria: "timeboxing",
    nivel_requerido: "principiante",
    duracion_base: 45,
    duracion_descanso: 10,
    ciclos_recomendados: 3,
    instrucciones: "Asigna bloques específicos de tiempo para cada materia o tarea, mantén el ritmo con cronómetro.",
    parametros_configurables: {
      tiempo_personalizable: true,
      por_materia: true
    },
    activo: true,
    fecha_creacion: new Date()
  },
  {
    _id: ObjectId(),
    nombre: "Técnica 45-15",
    descripcion: "45 minutos de estudio concentrado seguidos de 15 minutos de descanso activo",
    categoria: "productividad_estudio",
    subcategoria: "moderado",
    nivel_requerido: "principiante",
    duracion_base: 45,
    duracion_descanso: 15,
    ciclos_recomendados: 3,
    instrucciones: "Estudia durante 45 minutos concentrado, luego toma 15 minutos de descanso activo. Ideal para sesiones largas.",
    parametros_configurables: {
      descanso_activo: true
    },
    activo: true,
    fecha_creacion: new Date()
  },
  {
    _id: ObjectId(),
    nombre: "Intervalos Cortos 15-5",
    descripcion: "Útil para temas difíciles: 15 minutos intensos con 5 minutos de pausa",
    categoria: "productividad_estudio",
    subcategoria: "intervalos_cortos",
    nivel_requerido: "principiante",
    duracion_base: 15,
    duracion_descanso: 5,
    ciclos_recomendados: 6,
    instrucciones: "Especialmente útil para temas difíciles o cuando hay poca concentración. 15 minutos intensos, 5 minutos de pausa.",
    parametros_configurables: {
      temas_dificiles: true,
      alta_frecuencia: true
    },
    activo: true,
    fecha_creacion: new Date()
  },
  {
    _id: ObjectId(),
    nombre: "Flowtime",
    descripcion: "Cronometra períodos naturales sin interrupciones forzadas",
    categoria: "productividad_estudio",
    subcategoria: "flowtime",
    nivel_requerido: "avanzado",
    duracion_base: 60,
    duracion_descanso: 0,
    ciclos_recomendados: 1,
    instrucciones: "Trabaja sin interrupciones forzadas, registra tus descansos naturales para identificar tu ritmo personal óptimo.",
    parametros_configurables: {
      sin_interrupciones: true,
      ritmo_personal: true
    },
    activo: true,
    fecha_creacion: new Date()
  },
  {
    _id: ObjectId(),
    nombre: "Respiración 4-7-8",
    descripcion: "Técnica calmante: inhala 4s, retén 7s, exhala 8s",
    categoria: "meditacion_respiracion",
    subcategoria: "respiracion_calmante",
    nivel_requerido: "principiante",
    duracion_base: 5,
    duracion_descanso: 0,
    ciclos_recomendados: 1,
    instrucciones: "Inhala por 4 segundos, retén el aire por 7 segundos, exhala por 8 segundos. Repite 3-4 ciclos. Excelente para reducir ansiedad.",
    parametros_configurables: {
      ciclos_recomendados: 4,
      pre_estudio: true
    },
    activo: true,
    fecha_creacion: new Date()
  },
  {
    _id: ObjectId(),
    nombre: "Respiración Cuadrada",
    descripcion: "Box breathing: inhala 4s, retén 4s, exhala 4s, pausa 4s",
    categoria: "meditacion_respiracion",
    subcategoria: "respiracion_concentracion",
    nivel_requerido: "principiante",
    duracion_base: 5,
    duracion_descanso: 0,
    ciclos_recomendados: 1,
    instrucciones: "Inhala 4 segundos, retén 4 segundos, exhala 4 segundos, pausa 4 segundos. Ideal para centrar la mente y mejorar concentración.",
    parametros_configurables: {
      patron_cuadrado: true,
      concentracion: true
    },
    activo: true,
    fecha_creacion: new Date()
  },
  {
    _id: ObjectId(),
    nombre: "Atención Plena",
    descripcion: "Meditación enfocada en la respiración natural",
    categoria: "meditacion_respiracion",
    subcategoria: "atencion_plena",
    nivel_requerido: "principiante",
    duracion_base: 10,
    duracion_descanso: 0,
    ciclos_recomendados: 1,
    instrucciones: "Siéntate cómodamente, enfócate en tu respiración natural. Cuando la mente divague, gentilmente regresa la atención a la respiración.",
    parametros_configurables: {
      respiracion_natural: true,
      mindfulness: true
    },
    activo: true,
    fecha_creacion: new Date()
  },
  {
    _id: ObjectId(),
    nombre: "Relajación Progresiva",
    descripcion: "Tensa y relaja cada grupo muscular progresivamente",
    categoria: "meditacion_respiracion",
    subcategoria: "relajacion_muscular",
    nivel_requerido: "principiante",
    duracion_base: 15,
    duracion_descanso: 0,
    ciclos_recomendados: 1,
    instrucciones: "Tensa y relaja cada grupo muscular por 5 segundos, empezando por los pies hasta la cabeza. Libera tensión física acumulada.",
    parametros_configurables: {
      tension_muscular: true,
      relajacion_fisica: true
    },
    activo: true,
    fecha_creacion: new Date()
  },
  {
    _id: ObjectId(),
    nombre: "Respiración Alternada",
    descripcion: "Nadi Shodhana: respiración alternada por fosas nasales",
    categoria: "meditacion_respiracion",
    subcategoria: "respiracion_equilibrante",
    nivel_requerido: "intermedio",
    duracion_base: 10,
    duracion_descanso: 0,
    ciclos_recomendados: 1,
    instrucciones: "Alterna la respiración entre fosas nasales usando el pulgar y el índice. Equilibra el sistema nervioso y mejora la concentración.",
    parametros_configurables: {
      equilibrio_nervioso: true,
      tecnica_yogica: true
    },
    activo: true,
    fecha_creacion: new Date()
  },
  {
    _id: ObjectId(),
    nombre: "Meditación de Visualización",
    descripcion: "Visualiza un lugar tranquilo y tu estado ideal de estudio",
    categoria: "meditacion_respiracion",
    subcategoria: "visualizacion",
    nivel_requerido: "intermedio",
    duracion_base: 8,
    duracion_descanso: 0,
    ciclos_recomendados: 1,
    instrucciones: "Imagina un lugar tranquilo y visualízate estudiando con calma y concentración. Prepara mentalmente para una sesión productiva.",
    parametros_configurables: {
      preparacion_mental: true,
      visualizacion_positiva: true
    },
    activo: true,
    fecha_creacion: new Date()
  }
]);

// 3. Crear colección de sesiones de práctica con índices
db.createCollection("sesiones_practica");
db.sesiones_practica.createIndex({ "usuario_id": 1, "fecha_inicio": -1 });
db.sesiones_practica.createIndex({ "tipo_sesion": 1 });
db.sesiones_practica.createIndex({ "estado": 1 });
db.sesiones_practica.createIndex({ "tipo_tecnica_id": 1 });

// 4. Crear colección de métricas de sesión con índices
db.createCollection("metricas_sesion");
db.metricas_sesion.createIndex({ "sesion_id": 1, "tipo_metrica": 1 });
db.metricas_sesion.createIndex({ "timestamp_metrica": -1 });

// 5. Crear colección de progreso con índices
db.createCollection("progreso");
db.progreso.createIndex({ "usuario_id": 1, "fecha": -1 });
db.progreso.createIndex({ "metrica": 1 });
db.progreso.createIndex({ "tipo_tecnica_id": 1 });

// 6. Crear colección de perfiles de usuario
db.createCollection("perfiles");
db.perfiles.createIndex({ "usuario_id": 1 }, { unique: true });

// 7. Crear colección de evaluaciones iniciales
db.createCollection("evaluaciones_iniciales");
db.evaluaciones_iniciales.createIndex({ "usuario_id": 1 });
db.evaluaciones_iniciales.createIndex({ "fecha_evaluacion": -1 });

// 8. Crear colección de algoritmos de IA
db.createCollection("algoritmos_ia");
db.algoritmos_ia.createIndex({ "usuario_id": 1 });

// 9. Crear colección de gamificación
db.createCollection("gamificacion");
db.gamificacion.createIndex({ "usuario_id": 1 });
db.gamificacion.createIndex({ "fecha_obtencion": -1 });

// 10. Crear colección de recordatorios
db.createCollection("recordatorios");
db.recordatorios.createIndex({ "usuario_id": 1 });
db.recordatorios.createIndex({ "fecha_recordatorio": 1 });
db.recordatorios.createIndex({ "activo": 1 });

// 11. Crear colección de notificaciones
db.createCollection("notificaciones");
db.notificaciones.createIndex({ "usuario_id": 1 });
db.notificaciones.createIndex({ "fecha_envio": -1 });
db.notificaciones.createIndex({ "leida": 1 });

// 12. Crear colección de reportes
db.createCollection("reportes");
db.reportes.createIndex({ "usuario_id": 1 });
db.reportes.createIndex({ "fecha_generacion": -1 });
db.reportes.createIndex({ "tipo": 1 });

// 13. Crear colección de calendario académico
db.createCollection("calendario_academico");
db.calendario_academico.createIndex({ "usuario_id": 1 });
db.calendario_academico.createIndex({ "fecha_evento": 1 });

// 14. Crear colección de datos personales
db.createCollection("datos_personales");
db.datos_personales.createIndex({ "usuario_id": 1 });
db.datos_personales.createIndex({ "categoria": 1 });

// 15. Crear colección de comunidades virtuales
db.createCollection("comunidades_virtuales");
db.comunidades_virtuales.createIndex({ "categoria": 1 });
db.comunidades_virtuales.createIndex({ "fecha_creacion": -1 });

// 16. Crear colección de participación en comunidades
db.createCollection("participaciones");
db.participaciones.createIndex({ "usuario_id": 1 });
db.participaciones.createIndex({ "comunidad_id": 1 });
db.participaciones.createIndex({ "usuario_id": 1, "comunidad_id": 1 }, { unique: true });

// 17. Crear colección de contenido colaborativo
db.createCollection("contenido_colaborativo");
db.contenido_colaborativo.createIndex({ "autor_id": 1 });
db.contenido_colaborativo.createIndex({ "categoria": 1 });
db.contenido_colaborativo.createIndex({ "fecha_creacion": -1 });
db.contenido_colaborativo.createIndex({ "valoracion": -1 });

// 18. Crear colección de soporte técnico
db.createCollection("soporte_tecnico");
db.soporte_tecnico.createIndex({ "usuario_id": 1 });
db.soporte_tecnico.createIndex({ "estado": 1 });
db.soporte_tecnico.createIndex({ "fecha_creacion": -1 });

// Función auxiliar para insertar un usuario de ejemplo
function insertarUsuarioEjemplo() {
    const usuarioId = ObjectId();
    
    // Insertar usuario
    db.usuarios.insertOne({
        _id: usuarioId,
        nombre: "Usuario Demo",
        email: "demo@synapse.com",
        password: "$2a$10$hashedpassword", // Hash de contraseña
        fecha_registro: new Date(),
        nivel_experiencia: "principiante",
        perfil_neurocognitivo: "Perfil equilibrado con tendencia a la concentración visual",
        activo: true
    });

  // Insertar perfil asociado
    db.perfiles.insertOne({
        _id: ObjectId(),
        usuario_id: usuarioId,
        objetivos: "Mejorar concentración para estudios universitarios",
        preferencias_notificacion: {
            recordatorios_sesion: true,
            reportes_semanales: true,
            logros: true,
            comunidad: false
        },
        configuracion_privacidad: {
        perfil_publico: false,
        compartir_progreso: true,
        datos_anonimos: true
        },
        fecha_actualizacion: new Date()
    });

    return usuarioId;
}

// Funciones de migración específicas
function migrarDatos() {
    print("=== Migración de Synapse a MongoDB completada ===");
    print("Colecciones creadas:");
    print("✓ usuarios");
    print("✓ tipos_tecnicas (con 13 técnicas pre-cargadas)");
    print("✓ sesiones_practica");
    print("✓ metricas_sesion");
    print("✓ progreso");
    print("✓ perfiles");
    print("✓ evaluaciones_iniciales");
    print("✓ algoritmos_ia");
    print("✓ gamificacion");
    print("✓ recordatorios");
    print("✓ notificaciones");
    print("✓ reportes");
    print("✓ calendario_academico");
    print("✓ datos_personales");
    print("✓ comunidades_virtuales");
    print("✓ participaciones");
    print("✓ contenido_colaborativo");
    print("✓ soporte_tecnico");
    print("");
    print("Índices creados para optimizar consultas frecuentes");
    print("");
    print("Para insertar un usuario de ejemplo, ejecuta:");
    print("insertarUsuarioEjemplo()");
}