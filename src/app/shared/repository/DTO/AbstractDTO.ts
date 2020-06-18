export abstract class AbstractDTO {
  protected className: string;
  public getClassName = () => this.className;
}
