// CONSIGNA: Completar la clase Banda
// en base a al test (testClaseBanda)
interface Album {
  title: string;
  songs: string[];
}

class Banda {
  // Propiedad que almacena los miembros de la banda
  members: string[];
  albums: Album[];

  // definir albums - agregar una propiedad para los álbumes de la banda
  // Constructor que inicializa los miembros y los álbumes
  constructor(members: string[], albums: Album[] /*Tipo de Albums*/) {
    this.members = members;
    this.albums = albums;
    // Inicializar la propiedad albums con el valor recibido en el constructor
  }
  // Implementar el método getFirstAlbum para retornar el primer álbum de la lista
  getFirstAlbum(): Album | undefined {
    return this.albums.length > 0 ? this.albums[0] : undefined;
  }

  // Implementar el método getAllMembers para retornar todos los miembros de la banda
  getAllMembers(): string[] {
    return this.members;
  }
  // Implementar el método getRandomSong para retornar una canción aleatoria de un álbum específico
  getRandomSong(albumTitle: string): string | null {
  const album = this.albums.find((a) => a.title === albumTitle);
  if (!album) {
    return null; // Devuelve null si el álbum no existe
  }

  if (album.songs.length > 0) {
    const indAleatorio = Math.floor(Math.random() * album.songs.length);
    return album.songs[indAleatorio] || null; // Devuelve la canción aleatoria o null si es undefined
  }

  return null; // Devuelve null si no hay canciones
}

}

// No modifiques el test
// usalo como una guía y chequeo
// para saber que tu clase Banda funciona correctamente

function testClaseBanda() {
  const members = ["dana", "pau"];

  const fa = {
    title: "album 1",
    songs: ["album 1 - tema 1", "album 1 - tema 2"],
  };

  const banda = new Banda(members, [
    fa,
    {
      title: "album 2",
      songs: ["album 2 - tema 1", "album 2 - tema 2", "album 2 - tema 3"],
    },
  ]);

  // Validar que getFirstAlbum no retorne undefined
  const firstAlbum = banda.getFirstAlbum();
  if (!firstAlbum) {
    throw "Error: getFirstAlbum() retornó undefined";
  }

  // Validar que el primer álbum tenga la estructura correcta
  if (
    firstAlbum.title !== fa.title ||
    !Array.isArray(firstAlbum.songs) ||
    firstAlbum.songs.length !== fa.songs.length
  ) {
    throw "Error: getFirstAlbum() no retorna el álbum esperado";
  }

  // Validar que getAllMembers retorne correctamente los miembros
  const allMembers = banda.getAllMembers();
  if (
    !Array.isArray(allMembers) ||
    JSON.stringify(allMembers.sort()) !== JSON.stringify(members.sort())
  ) {
    throw "Error: getAllMembers() no retorna los miembros esperados";
  }

  // Validar que getRandomSong retorne una canción válida de "album 1"
  const randomSongAlbum1 = banda.getRandomSong("album 1");
  if (!randomSongAlbum1 || !fa.songs.includes(randomSongAlbum1)) {
    throw "Error: getRandomSong() no retornó una canción válida del álbum 1";
  }

  // Validar que getRandomSong maneje álbumes inexistentes
  try {
    const invalidSong = banda.getRandomSong("album inexistente");
    if (invalidSong !== null) {
      throw "Error: getRandomSong() debería retornar null si el álbum no existe";
    }
  } catch (e) {
    throw "Error: getRandomSong() no debería lanzar una excepción con un álbum inexistente";
  }

  console.log("testClaseBanda passed");
}

function main() {
  // Ejecutar el test
  testClaseBanda();
}

main();
