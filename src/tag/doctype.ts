export interface IDoctypeAttribute {
  getName(): string;
}

export interface IDoctypeAttributeValue {
  getValue(): string;
}

export interface IDoctype {
  getName(): string;
  getAttributeName(): string;
  getAttributeType(): IDoctypeAttribute;
  getAttributeValue(): string;
}

export class DocType {
  public static attributeTypes(): IDoctypeAttribute[] {
    // TODO
    return [];
  }

  public static attributeValues(): IDoctypeAttributeValue[] {
    // TODO
    return [];
  }

  public getName(): string {
    return '';
  }
}
