export interface IApiRoute {
  genericRoute(...params: string[]): string;
  getAll(): string;
  GetById(elementId: number): string;
  UpdateById(elementId: number): any;
  CreateNewItem(): any;
  DeleteById(elementId: number): any;
}
