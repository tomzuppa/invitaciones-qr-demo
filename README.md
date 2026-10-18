# Atrio · Demo de invitaciones con QR

Demo de Baobyte de una plataforma de invitaciones para eventos de alto nivel:

1. **Estudio de diseño:** plantillas premium, tipografías, colores, logo o fondo propio y asistente de textos con IA (simulado en la demo). Tipos de invitación (VIP, General, Medios) con su propio diseño y lugares por pase.
2. **Invitados por campaña:** carga desde CSV con correo y teléfono, grupos, tipo de invitación por invitado, pases con QR válidos para varios lugares y envío por correo (simulado en la demo).
3. **Métricas:** tasa de confirmación, embudo, avance por grupo o por tipo y recordatorios.
4. **Acceso en puerta:** el staff entra como lector y escanea pases desde su celular.

Varias organizaciones conviven en la misma plataforma, cada una con sus campañas.

Confidencialidad: en su primer ingreso el administrador acepta el convenio de confidencialidad y
tratamiento de datos en nombre de su organización, el lector acepta un compromiso breve y cada invitado
ve un aviso de privacidad en su página de confirmación. El texto es un borrador de ejemplo.

En el celular se comporta como app: barra de pestañas abajo, menú deslizable, invitados en tarjetas y
ventanas que suben desde abajo. Se puede instalar en la pantalla de inicio (Android: "Instalar app";
iPhone: Compartir, "Agregar a inicio") y abre sin conexión con lo último que se cargó.

Acceso de prueba: administrador `admin / demo2026`, lector `lector / puerta2026`.
Es una demo sin servidor: los datos viven en el navegador de quien la abre. Los invitados de ejemplo
son los mismos en cualquier navegador, así que el lector de un celular reconoce las invitaciones de la demo.
