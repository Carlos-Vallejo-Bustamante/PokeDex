# Pokedex

Autor original: Carlos Vallejo

Este es un proyecto de prueba técnica realizada en Angular y Node js

Proyecto basado en la API de Pokemon donde podrás ver los primeros 150 Pokemons y sus principales características

Instalación:

Clona el proyecto

git clone https://github.com/Carlos-Vallejo-Bustamante/Pokedex.git


# FRONT 

Instalar dependencias npm dentro de la carpeta del proyecto

npm install
Asegúrate de tener angular-cli instalado.

npm install -g angular-cli
Comienza la aplicación


Development server
Ejecuta ng serve para un servidor de desarrollo. Navega a http://localhost:4200/. La aplicación se recargará automáticamente si cambias alguno de los archivos.
Ejecuta ng serve -o para un servidor de desarrollo. Abrirá una pestaña en tu navegador automaticamente.

Code scaffolding
Ejecuta ng generate component-name para generar un nuevo componente. También puede utilizar ng generate directive|pipe|service|class|guard|interface|enum|module.

Build
Ejecuta ng build para construir el proyecto. Los archivos build se almacenarán en el directorio dist/.

Running unit tests
Ejecuta ng test para ejecutar las pruebas unitarias a través de Karma.

Running end-to-end tests
Ejecuta ng e2e para ejecutar las pruebas de extremo a extremo a través de Protractor.

Further help
Para obtener más ayuda sobre el CLI de Angular usa ng help o revisa el README del CLI de Angular.

## CLIENT -----------------------------------------------------------------
| PATH                   | Description                                   |                     
| ---------------------- |:---------------------------------------------:| 
| /                      | Homepage, login de usuario                    |                                         
| /signup                | Registro de usuario                           |  
| /pokemons              | Ver Pokemons                                  |


# BACK

Instalar dependencias npm dentro de la carpeta del proyecto

npm install

Development server
Ejecuta npm run dev para un servidor de desarrollo. Navega a http://localhost:5005/api. La aplicación se recargará automáticamente si cambias alguno de los archivos gracias a Nodemon.


## SERVER ----------------------------------------------------------------

| PATH              | METHOD    	        | RESPONSE                     | ACTION                               |
| ----------------- |:-------------------:| ----------------------------:| ------------------------------------:|
| /api              | GET                 | Json                         | Página de inicio                     |
| /api/auth/signup  | POST                | Json                         | Crear usuario                        |
| /api/auth/login   | POST                | Json                         | Manda info usuario                   |

