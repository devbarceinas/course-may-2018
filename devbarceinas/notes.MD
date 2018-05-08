# Curso de Polymer 2.0 | Mayo 2018 | devmario

### Comandos unix
___
| Comandos | Significado |
| ------ | ------ |
| cd | Nos permite regresarnos a un direcotrio atras. |
| cd .. | Nos permite regresar a un direcotrio atras. |
| cd ~/ | Nos posiciona en la carpeta raiz. |
| ls | Lista todos los archivos del directorio dondes estás posicionado. |
| ls -a | Muestra los archivos ocultos de un directorio. |
| rm | No permite borrar archivos. |
| rm -rf | Nos permite borrar archivos de una manera forzada. |
| mkdir | Nos permite crear un directorio. |
| touch | Nos crea un archivo con la extasión que quieramos. |

### GIT
___
Git es un software de control de versiones diseñado por Linus Torvalds, pensando en la eficiencia y la confiabilidad del mantenimiento de versiones de aplicaciones cuando éstas tienen un gran número de archivos de código fuente.

| Comandos | Significado |
| ------ | ------ |
| git init | Crea un repositorio vacio |
| git config --global user.name <youName> | Establece una configuración básica de tu nombre |
| git config --global user.name <youEmail> | Establece una configuración básica de tu email |
| git add -A | Agrega archivos al index area |
| git add <youFile.txt> | Agrega al index area un archivo en especifico |
| git clone https://tu-repo.git | Clona un repositorio en tu local |
| git stauts | Muestra la lista de los archivos que se han cambiado |
| git commit -m <youMessange> | Cambia de rama |
| git push origin master | Envia los cambios realizados en la rama al repositorio remoto |
| git log | Muestra una lista de commits |
| git remote add upstream https://repo.com | Agrega un repositorio remoto |
| git remote -v | Revisa los repositorios remotos |
| git checkout <youBranch> | Cambia a la rama deseada |
| git pull origin master | Actualiza repositorio con los cambios más recientes del repositorio remoto a la rama deseada |
| git branch | Lista las ramas |
| git branch <nameBranch> | Crea una rama |
| git checkout -b <nameBranch> | Crea y nos posiciona en la rama dicha |
| git branch -d <nameBranch> | Borra la rama |
| git branch -D <nameBranch> | Borra la rama de manera forzada |
| git branch -v | Muestra todas las ramas creadas |
| git marge <nameBranch> |  Mezcla, fusiona una rama con otra |

### EcmaScript 6
___
> ECMAScript v6 (Abreviado como ES6 o ES2015) es el estándar que sigue JavaScript, permitiendo llevar mejores practicas en nuestro desarrollo.

##### Nuevas Funciones de ES6
____
```let``` : indica que una variable solo va a estar definida en un bloque en particular, al terminar el bloque la variable deja de existir, esto es muy útil para evitar errores lógicos cuando alteramos una variable que no deberíamos.
```javascript
let letTest = () => {
  if (true) {
    let x = 23;
    console.log(x);  // 71
  }
  console.log(x);  // no existe x
}
```
```const``` : por su parte previene que una variable declarada cambie de valor, convirtiéndola efectivamente en una constante. Siempre es recomendable usar constantes para valores que sabemos que no van a cambiar, así se evitan modificaciones inesperadas.
```javascript
const a = 7;
a = 5; // error
console.log(a);
```
```Template Strings``` : Son un tipo especial de cadena con formato, similares a la interpolación en otros lenguajes como Ruby, se definen con un par de caracteres back-tick (`) a diferencia de las cadenas normales que usan comillas sencillas o dobles.
```javascript
var s1= `esta es una template string`;

// Pueden contener valores
var n = 5;
var s2 = `El valor de n es ${n}`;

// Pueden abarcar múltiples líneas
var s3 = `Esta es una cadena
 escrita en dos líneas`
```
```Arrows Functions``` : Conocidas en otros lenguajes (C#, Java) como expresiones lambda, arrows o flechas son abreviaciones de funciones utilizando el operador =>
```javascript
let cuadrado = numeros.map((n) => {
    return n * n;
});
```
Con la nueva sintaxis podemos obtener el mismo resultado pero de una forma más elegante:
```javascript
let cuadrado = numeros.map(n => n * n);
```
Asignar una función a una variable para reutilizarla después :
```javascript
let func = x => x + 1;
let num = func(5);
```

License
----

MIT

**Free Software, Hell Yeah!**
