class Libro {
    titulo: string;
    autor: string;
    añoPublicacion: number;

    constructor(titulo: string, autor: string, añoPublicacion: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.añoPublicacion = añoPublicacion;
        // [Tu código para inicializar las otras propiedades]
    }

    getAntiguedad(): number {
      const añoActual = new Date().getFullYear();
      const añoDiferencia = añoActual - this.añoPublicacion;
      const antiguedad = añoDiferencia;
      return antiguedad;
        // [Tu código para devolver la antiguedad basada en la propiedad this.añoPublicacion]
    }
}

// Creando instancias de la clase Libro
const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967);
// [Tu código para el segundo libro]
const libro2 = new Libro("Harry Potter y la cámara secreta", "J.K. Rowling", 1998);

// Usando el método getAntiguedad y mostrando detalles de los libros
console.log(`El libro "${libro1.titulo}" de ${libro1.autor}, publicado en ${libro1.añoPublicacion}, tiene ${libro1.getAntiguedad()} años de antigüedad.`);

// [Tu código para imprimir los datos del segundo libro]
console.log(`El libro "${libro2.titulo}" de ${libro2.autor}, publicado en ${libro2.añoPublicacion}, tiene ${libro2.getAntiguedad()} años de antigüedad.`);