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


### **Definición**
El proyecto tiene como objetivo implementar un sistema de validación de tarjetas de crédito utilizando la metodología del algoritmo Luhn. Esta metodología permitirá verificar la autenticidad de los números de tarjeta de crédito ingresados, asegurando que cumplan con las reglas y características específicas establecidas por el algoritmo. El sistema proporcionará una respuesta inmediata sobre la validez de la tarjeta, lo que ayudará a prevenir el uso de tarjetas de crédito falsas o inválidas en transacciones financieras.


## **Resolución del problema** 
**Problema:** desarrollar una función para validar tarjetas de crédito y que me regrese el valor enmascarado menos las cuatro últimas cifras. [#########5263]
[ metodo luhn](https://i.pinimg.com/564x/ae/47/d1/ae47d16014f8b870cc603ef1bc4733ae.jpg)
### Algoritmo de uso: *luhn* 
1.	Obtener la reversa de los numeros insertados `.split `(separa los numeros) ` .reverse() ` (revierte los numeros) ` .join('') ` (junta los numeros).
2.	Los numeros pares según lenguaje maquina se les debe multiplicar por dos (usar if, contador, bucle, función).
3.	El resultado de los numeros multiplicados se deben sumar si es mayor o igual a 10
4.	Resultado final de la suma total debe ser múltiplo de 10

### Enmascarado 
 Para el enmascarado usar estos datos `.slice`(toma los 4 digitos),`.replace`(remplazar los diguitos restantes por `#`),concatenación de los dos valores.

## **Objetivos de mi proyecto**
Hacer la función de la validación de tarjeta, agregando html css js, con la resolución de escritorio. Temática de donación para los conejitos de alberges.
### Funciones Principales
*	isValid = Función que valide según el algoritmo luhn.
*	maskify = Función para enmascarar los numeros menos los 4 últimos dígitos.

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

## Proceso del proyecto
### Investigación
1. Buscamos la informacion del algoritmo 
2. Desarrollo del html
3. Probar la funcionalidad del algoritmo lunh 
4. Prueba y error con maskify y validacion luhn
5. Tomar un tema diseño CSS
6. Pasar un test 
7. Redactar en MD
8. Subir a GitHub
### boceto de la pagina prueba
1. tener un nav de inicio, pago, historia.
2. colores de uso de diseño frio
3. diseño del logo conejo

## Diseño del interfaz
[interfas tarjeta](https://i.pinimg.com/564x/6e/7b/08/6e7b084bfa1431307eb4e1e4c0b0ca14.jpg)
[interfas resolucion de tarjeta](https://i.pinimg.com/564x/47/3a/72/473a725826e2564881652f5ffa0b03ff.jpg)
[interfas principal](https://i.pinimg.com/564x/6d/58/1a/6d581a42a0bac5f855e0d92dfdb907f0.jpg)
[interfaz secundario](https://i.pinimg.com/564x/5a/1e/75/5a1e75c7309957827fd7aaea64665c27.jpg)
[logo de conejo ](https://i.pinimg.com/564x/25/43/82/254382172ca9e877b7868633c0f51591.jpg)
## Tecnologías de uso
1. Java Script
2. CSS
3. HTML
4. GIT
