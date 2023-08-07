# **Tarjeta de Validación**
## Índice
* [Definición](#definición)
* [Resolución del problema](#resolución-del-problema)
* [Objetivos de mi proyecto](#objetivos-de-mi-proyecto)
* [Objetivos de aprendizaje](#objetivos-de-aprendizaje)
* [Proceso del proyecto](#proceso-del-proyecto)
* [Diseño del interfaz](#diseño-del-interfaz)
* [Tecnologías de uso](#tecnologías-de-uso)
* [Vista del desktop](#vista-del-desktop)


## **Definición**
El proyecto tiene como objetivo implementar un sistema de validación de tarjetas de crédito utilizando la metodología del algoritmo Luhn. Esta metodología permitirá verificar la autenticidad de los números de tarjeta de crédito ingresados, asegurando que cumplan con las reglas y características específicas establecidas por el algoritmo. El sistema proporcionará una respuesta inmediata sobre la validez de la tarjeta, lo que ayudará a prevenir el uso de tarjetas de crédito falsas o inválidas en transacciones financieras.


## **Resolución del problema** 
**Problema:** desarrollar una función para validar tarjetas de crédito y que me regrese el valor enmascarado menos las cuatro últimas cifras. [#########5263]

### Algoritmo de uso: *luhn* 
1.	Obtener la reversa de los numeros insertados `.split `(separa los numeros) ` .reverse() ` (revierte los numeros) ` .join('') ` (junta los numeros).
2.	Los numeros pares según lenguaje maquina se les debe multiplicar por dos (usar if, contador, bucle, función).
3.	El resultado de los numeros multiplicados se deben sumar si es mayor o igual a 10
4.	Resultado final de la suma total debe ser múltiplo de 10

![gráfica de algoritmo de Luhn](./AlgoritmoLuhn.png)

### Enmascarado 
 Para el enmascarado usar estos datos `.slice`(toma los 4 digitos),`.replace`(remplazar los diguitos restantes por `#`),concatenación de los dos valores.
 
     ``` js
    maskify('4556364607935616') === '############5616'
    maskify(     '64607935616') ===      '#######5616'
    maskify(               '1') ===                '1'
    maskify(               '')  ===                ''
    ```
* `src/index.js`: acá debes escuchar eventos del DOM, invocar
  `validator.isValid()` y `validator.maskify()` según sea necesario y
  actualizar el resultado en la UI (interfaz de usuario).
* `test/validator.spec.js`: este archivo contiene algunos tests de ejemplo y acá
  tendrás que implementar los tests para `validator.isValid()` y `validator.maskify()`.
 **
 ### boilerplate
 El boilerplate que les damos contiene esta estructura:

```text
./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── validator.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── .eslintrc
    └── validator.spec.js
```

## **Objetivos de mi proyecto**
Hacer la función de la validación de tarjeta, agregando html, css, js. Con la resolución de escritorio.
### Funciones Principales
*	isValid = Función que valide según el algoritmo luhn.
*	maskify = Función para enmascarar los numeros menos los 4 últimos dígitos.
### Investigación
1. Buscamos la informacion del algoritmo 
2. Desarrollo del html
3. Probar la funcionalidad del algoritmo lunh 
4. Prueba y error con maskify y validacion luhn
5. Tomar un tema diseño CSS
6. Pasar un test 
7. Redactar en MD
8. Subir a GitHub

## Diseño del interfaz
<img src="https://i.pinimg.com/750x/5f/0b/86/5f0b865a47f4e37f7dcb22d0254c7020.jpg" width="445px">
## **Objetivos de aprendizaje**
####	**HTML**
*	Semántica de html

####	**CSS**
* Selectores 
*	Pseudo Elementos
*	Box model

#### **Web APis**
*	Selectores del DOM
*	Eventos del DOM 
#### **Java Script**
*	Datos primitivos
*	Condicionales (if, else)
*	Operadores
*	Bucles
* Funciones
*	Sentencias 

#### **GIT**
*	Instalación y configuración
*	Control de versiones con git
* Creación de cuenta y repos
* Despliegue con GitHub Pages
