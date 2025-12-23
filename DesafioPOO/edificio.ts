// crear las clases Edificio, Piso y Departamento aquí
class Departamento{
  nombre: string;

  constructor(nombreDpto: string){
    this.nombre = nombreDpto;
  }

  getName(): string{
    return this.nombre;
  }
}

class Piso{
  nombre: string;
  departamentos: Departamento[];

  constructor(nombrePiso: string){
    this.nombre = nombrePiso;
    this.departamentos = [];
  
  }
//agrega departamentos al piso
  pushDepartamento(departamento: Departamento){
   return this.departamentos.push(departamento);
  }
 //obtiene el listado completo de los departamentos de ese piso
  getDepartamentos(){
    return this.departamentos;
  }
}

class Edificio{
  pisos: Piso[];

  constructor(pisos: Piso[]){
    this.pisos = pisos;
  
  }

  addDepartamentoToPiso(nombreDePiso:string, departamento:Departamento){
    const piso = this.pisos.find(p => p.nombre === nombreDePiso);

    if(piso){
      //agregamos departamento si encontramos el piso
      piso.pushDepartamento(departamento);
    }else{
      //sino existe el piso, mostramos un error
      console.error(`Error: No existe el piso llamado ${nombreDePiso}`);
    }
  }

  getDepartamentosByPiso(nombreDePiso:string):Departamento[]{
    
    const piso = this.pisos.find(p => p.nombre === nombreDePiso);

    if(piso){
      return piso.getDepartamentos();
    }else{
       console.error(`Error: No existe el piso llamado ${nombreDePiso}`);
       return [];
      }
  }
}

// no modificar este test
function testClaseEdificio() {
  const unPiso = new Piso("planta baja");
  const otroPiso = new Piso("primer piso");
  const unEdificio = new Edificio([unPiso, otroPiso]);
  const deptoUno = new Departamento("depto uno");
  const deptoDos = new Departamento("depto dos");
  const deptoTres = new Departamento("depto tres");
  unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
  unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
  unEdificio.addDepartamentoToPiso("planta baja", deptoTres);

  const deptos = unEdificio.getDepartamentosByPiso("planta baja");
  const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");

  if (
    Array.isArray(deptosEmpty) &&
    deptosEmpty.length == 0 &&
    deptos.length == 3 &&
    deptos[2] && //asegura que dptos[2] no es undefined
    deptos[2].getName() == "depto tres"
  ) {
    console.log("testClaseBandaApartment passed");
  } else {
    throw "testClaseBandaApartment not passed";
  }
}

function main() {

  testClaseEdificio();
}
main();