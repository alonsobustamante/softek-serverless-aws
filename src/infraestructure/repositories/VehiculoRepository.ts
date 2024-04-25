// infrastructure/repositories/VehiculoRepository.ts

import { DynamoDBClient, PutItemCommand, ScanCommand } from "@aws-sdk/client-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";
import { Vehiculo } from '../../domain/models/Vehiculo';
import { v4 as uuidv4 } from 'uuid';

class VehiculoRepository {
  private readonly client: DynamoDBClient;

  constructor() {
    this.client = new DynamoDBClient({ region: 'us-east-1' }); // Ajusta la región según tu configuración
  }

  async guardarVehiculo(vehiculo: Vehiculo): Promise<void> {

    const params = {
      TableName: 'Vehiculos',
      Item: marshall({id: uuidv4(), ...vehiculo})
    };

    const command = new PutItemCommand(params);
    await this.client.send(command);
  }

  //create metodo for get vehiculos of table dynamodb
  async obtenerVehiculos(): Promise<Vehiculo[]> {
    const params = {
      TableName: 'Vehiculos',
    };

    const command = new ScanCommand(params);
    const response = await this.client.send(command);

    if (!response.Items) {
      return [];
    }

    return response.Items.map(item => unmarshall(item) as Vehiculo);
  }

}

export default VehiculoRepository;
