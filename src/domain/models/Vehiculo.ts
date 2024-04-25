
class Vehiculo {
  constructor(
    public capacidadDeCarga: string,
    public consumibles: string,
    public costoEnCreditos: string,
    public fechaCreacion: string,
    public tripulacion: string,
    public fechaActualizacion: string,
    public longitud: string,
    public fabricante: string,
    public velocidadMaximaAtmosfera: string,
    public modelo: string,
    public nombre: string,
    public pasajeros: string,
    public pilotos: string[],
    public peliculas: string[],
    public url: string,
    public claseVehiculo: string
  ) {}
}

export default Vehiculo;
