
import Vehiculo from '../../domain/models/Vehiculo';
import SwapiService from '../../infraestructure/services/SwapiService';
import VehiculoRepository from '../../infraestructure/repositories/VehiculoRepository';

class VehiculoUseCase {
  constructor(
    private swapiService: SwapiService,
    private vehiculoRepository: VehiculoRepository
  ) {}

  async crearVehiculo(
    vehiculo: Vehiculo
  ): Promise<Vehiculo> {

    // Guardar el vehículo en la base de datos
    await this.vehiculoRepository.guardarVehiculo(vehiculo);

    return vehiculo;
  }

  async obtenerVehiculos(): Promise<Vehiculo[]> {
    // Obtener los vehículos de la base de datos
    const vehiculos = await this.vehiculoRepository.obtenerVehiculos();

    return vehiculos;
  }

  async obtenerInformacion(): Promise<Vehiculo[]> {
    // Obtener información de SWAPI relacionada con vehículos
    const swapiData = await this.swapiService.obtenerVehiculos();

    // Traducir y mapear los datos de SWAPI a objetos Vehiculo
    const vehiculos = swapiData.results.map((resultado: any) => {
      return new Vehiculo(
        resultado.cargo_capacity,
        resultado.consumables,
        resultado.cost_in_credits,
        resultado.created,
        resultado.crew,
        resultado.length,
        resultado.manufacturer,
        resultado.max_atmosphering_speed,
        resultado.model,
        resultado.nombre,
        resultado.passengers,
        resultado.films,
        resultado.url,
        resultado.vehicle_class
      );
    });

    return vehiculos;
  }
}

export default VehiculoUseCase;
