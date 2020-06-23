export interface IApiRoute {
  genericRoute(...params: string[]): string;
  getAll(): string;
  GetById(elementId: number): string;
  Update(): string;
  CreateNewItem(): string;
  DeleteById(elementId: number): string;
}
