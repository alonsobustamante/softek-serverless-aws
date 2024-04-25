import VehiculoUseCase from '../application/usecases/VehiculoUseCase';
import SwapiService from '../infraestructure/services/SwapiService';
import VehiculoRepository from '../infraestructure/repositories/VehiculoRepository';

const getVehiculosSwapiHandler = async (event, context) => {
  const swapiService = new SwapiService();
  const vehiculoRepository = new VehiculoRepository();
  const vehiculoUseCase = new VehiculoUseCase(swapiService, vehiculoRepository);

  try {
    const data = await vehiculoUseCase.obtenerInformacion();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    console.error('Error al obtener información:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' })
    };
  }
};

export { getVehiculosSwapiHandler };
