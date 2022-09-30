# Contribuyendo

Cuando contribuya a este repositorio, por favor, discuta primero el cambio que desea hacer a través de issue
correo electrónico, o cualquier otro método con los propietarios de este repositorio antes de hacer un cambio.

Tenga en cuenta que tenemos un código de conducta, por favor, sígalo en todas sus interacciones con el proyecto.

## Proceso de Pull Requests

1. Aumentar los números de versión en cualquier archivo de ejemplo y en el README.md a la nueva versión que la Pull Request representaría. El esquema de versiones que se utiliza es [SemVer](http://semver.org/).
4. Puede fusionar el Pull Request una vez que tenga la aprobación de otros dos desarrolladores, o si no tiene permiso para hacerlo, puede solicitar al segundo revisor que lo fusione por usted.

## Código de conducta

### Nuestro compromiso

En el interés de fomentar un entorno abierto y acogedor, nosotros como
contribuidores y mantenedores nos comprometemos a hacer que la participación en nuestro proyecto y
comunidad sea una experiencia libre de acoso para todos, independientemente de la edad
discapacidad, origen étnico, identidad y expresión de género, nivel de experiencia,
nacionalidad, apariencia personal, raza, religión o identidad y orientación sexual.


### Nuestras normas

Ejemplos de comportamientos que contribuyen a crear un entorno positivo
incluyen:

* Utilizar un lenguaje acogedor e inclusivo
* Ser respetuoso con los diferentes puntos de vista y experiencias
* Aceptar con gracia las críticas constructivas
* Centrarse en lo que es mejor para la comunidad
* Mostrar empatía hacia otros miembros de la comunidad

Ejemplos de comportamiento inaceptable por parte de los participantes son:

* El uso de lenguaje o imágenes sexualizadas y la atención o insinuación sexual no deseada.
avances sexuales no deseados
* Trolling, comentarios insultantes/despectivos y ataques personales o políticos.
* Acoso público o privado
* Publicar información privada de otros, como una dirección física o electrónica, sin permiso explícito
* Otras conductas que puedan considerarse razonablemente inapropiadas en un entorno profesional

### Nuestras responsabilidades

Los encargados del mantenimiento del proyecto son responsables de aclarar las normas de comportamiento aceptable
comportamiento aceptable y se espera que tomen medidas correctivas apropiadas y justas en
respuesta a cualquier caso de comportamiento inaceptable.

Los mantenedores del proyecto tienen el derecho y la responsabilidad de eliminar, editar o
o rechazar comentarios, confirmaciones, código, problemas y otras contribuciones
que no se ajusten a este Código de Conducta, o de prohibir temporal o permanentemente a cualquier colaborador por otros comportamientos que consideren inapropiados, amenazante, ofensivo o dañino.

### Ámbito de aplicación

Este Código de Conducta se aplica tanto en los espacios del proyecto como en los espacios públicos
cuando un individuo representa al proyecto o a su comunidad. Ejemplos de
representar al proyecto o a la comunidad incluyen el uso de una dirección de correo electrónico oficial del proyecto
oficial del proyecto, publicar a través de una cuenta oficial en las redes sociales, o actuar como
representante en un evento en línea o fuera de línea. La representación de un proyecto puede ser
definida y aclarada por los responsables del proyecto.

### Aplicación de la ley

Los casos de comportamiento abusivo, acosador o inaceptable pueden ser
denunciarse poniéndose en contacto con el equipo del proyecto en ilai@reactordev.tk. Todas las quejas serán revisadas e investigadas y darán lugar a una respuesta que se considere necesaria y adecuada a las circunstancias. El equipo del proyecto está obligado a mantener la confidencialidad con respecto al denunciante de un incidente.
Pueden publicarse por separado más detalles sobre las políticas de cumplimiento específicas.

Los responsables del proyecto que no sigan o hagan cumplir el Código de Conducta de buena fe pueden enfrentarse a repercusiones temporales o permanentes según lo determinen otros miembros de la dirección del proyecto.

## Cómo contribuir de manera correcta a `palabras.json` o el proyecto en general

`palabras.json` sigue un esquema en concreto que debe ser seguido para mantener un buen orden y hacer el código mas legible.

```json
[
    {
        "palabra": "ejemplo", //Auto-explicativo
        "tipo": "adj", //Tipo de palabra, puede ser un adjetivo (adj), verbo (verb), sujeto (suj), expresion (expr), emoticono (emot), etc
        "significado": "Lorem ipsum dolor", //Auto-explicativo
        /*
        "sinonimo": "vg", //Mencionar a otras palabras aqui
        "sinonimoD": "ej" //Si este parametro esta presente no se renderizara y se linkeara directamente a la palabra principal

        Aún en progreso
        */
    }
]

```
También revisar que el codigo funcione perfectamente despues de los cambios antes de hacer una pull request.

### Atribución

Este Código de Conducta es una adaptación del [Pacto de Colaboradores](http://contributor-covenant.org/version/1/4), versión 1.4.