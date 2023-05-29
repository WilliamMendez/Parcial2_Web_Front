# Parcial2_Web_Front

## Ejecución del proyecto

Para ejecutar el proyecto se debe ejecutar el comando `npm install` en la carpeta parcial2 seguido de `npm start` para iniciar el servidor que será desplegado si es posible en el puerto 3000.

## Descripción del proyecto

El proyecto contiene un componente principal y 5 componentes extra que son:
- Login: Componente que contiene el formulario de login y que se encarga de validar el usuario y contraseña ingresados.
- MainPage: Componente que contiene la página principal de la aplicación, en este componente se encuentra el menú de navegación y se renderizan los componentes de Lla lista de libros y el detalle de un libro.
- LibroCard: Componente que contiene la card de un libro como se solicita.
- LibroDetail: Componente que contiene el detalle de un libro, se renderiza cuando se selecciona un libro de la lista de libros y su aspecto cambia dependiendo de si el usuario es admin o no.
- LibroList: Componente que contiene la lista de las tarjetas de los libros, se renderiza en la página principal y se actualiza cuando se agrega un libro.

## Descripción de la solución

Para cumplir con las funcionalidades esperadas se diseñó un esquema de componentes contenidos en el componente principal App.js, el cual contiene el componente Login y el componente MainPage, el componente principal contiene una variable de estado que indica si el usuario está logueado, en caso de que no se redirige a la pantalla de login.

En la pantalla de login hay un fondo gris y un contenedor que simula el presentado en el enunciado, en este contenedor se encuentra un formulario que contiene un input para el usuario y otro para la contraseña, además de un botón para enviar el formulario, al enviar el formulario se valida el usuario y la contraseña, si son correctos se redirige a la página principal, en caso contrario se muestra un mensaje de error.

En la página principal se encuentra el componente LibroList y el componente LibroDetail, en el componente LibroList se encuentra la lista de tarjetas de los libros, al hacer click en una de estas tarjetas se llama a la función getLibroDetail que se encarga de obtener el detalle del libro seleccionado y de actualizar el componente LibroDetail, además de esto se actualiza la variable de estado selectedLibro con el id del libro seleccionado, esto se hace para que el componente sepa qué libro debe mostrar.

En el componente LibroDetail se muestra el detalle del libro seleccionado, si el usuario es admin se muestra la información en forma de formulario para que el usuario pueda editarla y subirla a la base de datos, sin embargo esta funcionalidad no se puede probar correctamente con el backend suministrado ya que este no da la infomación completa al pedir el detail y además no reemplaza los valores existentes si no que crea un elemento nuevo con el mismo id.

Cuando un usuario admin quiere editar un libro esta infomación modificada es almacenada en una variable de estado y se envía al backend solo cuando el usuario lo elige con el botón de guardar, esto se hace para evitar que se envíen peticiones al backend cada vez que se modifica un campo del formulario.

Para cargar la información de un libro cuando se selecciona se usa un formulario con inputs controlados, esto se hace para que el usuario pueda editar la información del libro y se actualice el componente LibroDetail, además de esto se usa un checkbox para la variable de available_online, esto se hace para que el sistema pueda asignar los valores por defecto segun el libro seleccionado.

El manejo de la información de la base de datos se hace con variables de estado, se tiene una variable de estado libros que contiene la lista de libros y una variable de estado selectedLibro que contiene el id del libro seleccionado, además de esto se tiene una variable de estado libroDetail que contiene la información del libro seleccionado, esta variable se actualiza cuando se selecciona un libro y para actualizar la información del libro seleccionado se usa la función getLibroDetail que se pasa como parametro a LibroList y a LibroCard, esto se hace para que solo cuando se seleccione un libro se actualice la información.

Finalmente se realizó compatibilidad con el sistema i18n haciendo uso de la librería react-intl. Se crearon dos archivos de idioma, uno para español y uno para inglés que se encuentran en la carpera de locales y que pueden ser elegidos modificando la opción de idioma en el componente App.js, además de esto se cambiaron los textos de la aplicación para que sean mostrados en el idioma seleccionado usando FormattedMessage y un id para cada texto.
