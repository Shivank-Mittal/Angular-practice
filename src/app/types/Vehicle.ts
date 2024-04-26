export enum MODEL_TYPE {
    TOP = 'Top', BASE = 'Base', MEDIUM = 'Medium'
  }
  
export interface Vehicle{ 
    name: string,
    model: MODEL_TYPE,
    count: number
  }