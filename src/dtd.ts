import { Element, IElement } from './tag/element';
import { Tag } from './tag/tag';

export interface IDTD {
  getRootElement(): IElement;
  validate(): boolean;
}

export class DTD implements IDTD {
  protected elements: IElement[];

  constructor(content: string) {
    this.elements = [];
    const strs = content.split('\n');
    strs.forEach(str => {
      if (Tag.isElement(str)) {
        this.elements.push(new Element(str));
      }
    });
  }

  public getRootElement(): IElement {
    throw new Error('Method not implemented.');
  }
  public validate(): boolean {
    throw new Error('Method not implemented.');
  }
}
