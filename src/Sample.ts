/**
 * Sample class and you can see this will be generated on documentation
 */
export default class Sample {
  /**
   * This is sample property
   */
  private prop: string = 'foo';

  /**
   * Constructor method
   */
  constructor() {
    this.prop = 'bar';
  }

  /**
   * Get property
   *
   * @returns string
   */
  public getProp(): string {
    return this.prop;
  }

  /**
   * Deprecated get property
   *
   * @returns string
   * @deprecated
   */
  public deprecatedGetProp(): string {
    return this.prop;
  }
}
