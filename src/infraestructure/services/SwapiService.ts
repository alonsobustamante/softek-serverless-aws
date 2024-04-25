// infrastructure/services/SwapiService.ts

import axios from 'axios';

class SwapiService {
  private apiUrl: string;

  constructor() {
    this.apiUrl = 'https://swapi.py4e.com/api';
  }

  async obtenerVehiculos(): Promise<any> {
    try {
      const response = await axios.get(`${this.apiUrl}/vehicles`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener información de SWAPI:', error);
      throw error;
    }
  }
}

export default SwapiService;
