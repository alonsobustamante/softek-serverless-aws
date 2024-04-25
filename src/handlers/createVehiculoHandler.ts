// src/handlers/createElementHandler.ts

import VehiculoUseCase from '../application/usecases/VehiculoUseCase';
import SwapiService from '../infraestructure/services/SwapiService';
import VehiculoRepository from '../infraestructure/repositories/VehiculoRepository';
import Vehiculo from '../domain/models/Vehiculo';

const createVehiculoHandler = async (event, context) => {
  const swapiService = new SwapiService();
  const vehiculoRepository = new VehiculoRepository();
  const vehiculoUseCase = new VehiculoUseCase(swapiService, vehiculoRepository);

  try {
    const requestBody = JSON.parse(event.body);

    const nuevoVehiculo = await vehiculoUseCase.crearVehiculo({
      capacidadDeCarga: requestBody.capacidadDeCarga,
      consumibles: requestBody.consumibles,
      costoEnCreditos: requestBody.costoEnCreditos,
      fechaCreacion: requestBody.fechaCreacion,
      tripulacion: requestBody.tripulacion,
      fechaActualizacion: requestBody.fechaActualizacion,
      longitud: requestBody.longitud,
      fabricante: requestBody.fabricante,
      velocidadMaximaAtmosfera: requestBody.velocidadMaximaAtmosfera,
      modelo: requestBody.modelo,
      nombre: requestBody.nombre,
      pasajeros: requestBody.pasajeros,
      pilotos: requestBody.pilotos,
      peliculas: requestBody.peliculas,
      url: requestBody.url,
      claseVehiculo: requestBody.claseVehiculo
    });
    return {
      statusCode: 200,
      body: JSON.stringify(nuevoVehiculo)
    };
  } catch (error) {
    console.error('Error al crear un vehículo:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' })
    };
  }
};

export { createVehiculoHandler };
