/* Este archivo contiene las referencias a las librerías de terceros que se usan en este proyecto.
Esto lo usa webpack sólo en el build de producción. Un bundle por vendor es útil ya que es raro que cambie
tan frecuentemente como el código de la aplicación. Entonces todas las librerías que se referencian
acá serán escritas a vendor.js para que puedan ser cacheadas hasta que una de ellas cambie. Básicamente
esto evita que los clientes tengan que descargar un enorme archivo de JS cada vez que una línea
de código cambie. Sólo tendrán que bajar vendor.js cuando una librería de un vendor cambie (lo cual sería
muy poco probable). Cualquier archivo que no esté referenciado acá será empaquetado con el main.js para
build de producción */

/* eslint-disable no-unused-vars */

import fetch from 'whatwg-fetch';
