
# Proyecto 3 Administración de Redes
## Desarrollo y Seguridad en la Deep Web

**Ricardo Pérez**  
riperez@utalca.cl

## Introducción

Este proyecto tiene como principal objetivo aplicar las labores de un sysadmin en un entorno de desarrollo real. El mismo se basa en la implementación, instalación y configuración de algunos de los servicios más importantes que se requieren en cualquier empresa relacionada a TI. Además, se evaluarán sus estrategias y habilidades como desarrollador de software. Cada equipo deberá estar preparado para modificar cualquier parámetro de configuración, o responder las preguntas del profesor, para completar la nota.

## Ejercicio 1 - Desarrollo de un servicio seguro para compartir archivos (2 puntos)

Para este ejercicio deberán crear un servicio seguro para compartir archivos accesible a través de la deep web. Ustedes definen cómo implementar el "servicio seguro", pero se recomienda utilizar https, reglas de firewall, o hardening como alternativas.

1. Selecciona un servidor adecuado para alojar el servicio. Puede utilizar Google Cloud, Proxmox o directamente una máquina virtual en su computador.
2. Desarrolle una aplicación web que utilice Apache o Nginx y cualquier otro software necesario para el servicio de compartición de archivos (por ejemplo, PHP, Python, o Node.js, dependiendo del stack tecnológico elegido). Acá puede utilizar Docker para facilitar la implementación.
3. Muestre evidencias de funcionamiento.

## Ejercicio 2 - Configurar el servidor como un servicio oculto (2 puntos)

1. Instale y configure el software Tor en el servidor. Esto implica la edición del archivo de configuración de Tor (torrc) para definir el directorio del servicio oculto y la clave privada.
2. Modifique el archivo (torrc) para incluir la configuración del servicio oculto, especificando el puerto en el que el servicio de compartición de archivos escuchará y el puerto correspondiente en la red Tor.
3. Muestre evidencias de que el servicio está accesible a través de la red Tor mediante la dirección .onion asignada.

## Ejercicio 3 - Implementar funcionalidades seguras de carga, almacenamiento y descarga de archivos (1 punto)

1. Desarrolle una interfaz web segura para que los usuarios puedan subir archivos. Asegúrate de que se validen los tipos y tamaños de archivos permitidos.
2. Almacene los archivos en un directorio seguro y configura permisos adecuados para evitar accesos no autorizados. Muestre evidencias.
3. Proporcione una interfaz segura para que los usuarios puedan descargar archivos. Asegúrate de que los archivos se transmitan de forma segura.

## Ejercicio 4 - Recomendaciones adicionales (1 punto)

1. Seguridad del servidor: Mantén el servidor actualizado con los últimos parches de seguridad y configura un firewall para limitar el acceso a los puertos necesarios.
2. Monitoreo y auditoría: Realice el hardening de los servicios utilizados y muestre evidencias.
3. Pruebas de seguridad: Descargue de Internet la herramienta slowhttptest. Esta herramienta está disponible por defecto en Kali Linux. Ella tiene como objetivo realizar un ataque de DoS a servidores Apache. Despliegue un ataque DoS hacia el servidor instalado en el ejercicio 1 y diga si sus servicios son vulnerables a ataques de DoS. Muestre evidencias.
4. Diga qué técnicas o herramientas puede utilizar un SysAdmin para identificar que está en presencia de un ataque DoS.

[https://tools.kali.org/stress-testing/slowhttptest](https://tools.kali.org/stress-testing/slowhttptest)
