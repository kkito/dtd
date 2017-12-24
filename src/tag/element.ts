import { AttributeType } from './attlist';
import { ElementContent, IElementSuffix } from './element_content';
import { Tag } from './tag';

/**
 * Element
 * <!ELEMENT element-name category>
 * or
 * <!ELEMENT element-name (element-content)>
 */

// TODO
export interface IElement {
  getName(): string;
  validte(): boolean;
  getContent(): IElement[] | AttributeType | null;
  getCategory(): ElementCategory | null;
  isCategory(): boolean;
  hasChildElement(): boolean;
  childElementNames(): string[];
  // check if a child element
  isChildElement(tagName: string): boolean;
}

export enum ElementCategory {
  EMPTY = 'EMPTY',
  ANY = 'ANY',
}

export class Element extends Tag implements IElement {
  public static readonly CATEGORY_EMPTY = 'EMPTY';
  public static readonly CATEGORY_ANY = 'ANY';

  private theElementContent: string;

  private theElementValue: string;

  //  Declaring Mixed Content <!ELEMENT note (#PCDATA|to|from|header|message)*>
  private theMixContentSuffix: string;

  public constructor(tag: string) {
    super(tag);

    const matchSuffix = ElementContent.matchSuffix(this.contents[1]);
    if (matchSuffix.suffix) {
      this.theMixContentSuffix = matchSuffix.suffix;
    }
    this.theElementValue = matchSuffix.element;

    const matches = this.elementValue().match(/\((.+)\)/);
    if (matches) {
      this.theElementContent = matches[0];
    }
  }

  public isMixContent(): boolean {
    return !!this.theMixContentSuffix;
  }

  /**
   * the tag name always this first string of contents
   */
  public getName(): string {
    return this.contents[0];
  }

  public belongsCategory(): boolean {
    return !this.theElementContent;
  }

  public hasElementContent(): boolean {
    return !this.belongsCategory();
  }

  /**
   * Declaring either/or Content <!ELEMENT note (to,from,header,(message|body))>
   * Declaring Mixed Content <!ELEMENT note (#PCDATA|to|from|header|message)*>
   *
   */
  public elementContents(): ElementContent[] {
    // TODO
    return [];
  }

  public elementValue(): string {
    return this.theElementValue;
  }

  public validte(): boolean {
    throw new Error('Method not implemented.');
  }
  public getContent(): IElement[] | AttributeType | null {
    throw new Error('Method not implemented.');
  }
  public getCategory(): ElementCategory | null {
    throw new Error('Method not implemented.');
  }
  public isCategory(): boolean {
    throw new Error('Method not implemented.');
  }

  public hasChildElement(): boolean {
    throw new Error('Method not implemented.');
  }
  public childElementNames(): string[] {
    throw new Error('Method not implemented.');
  }

  public isChildElement(tagName: string): boolean {
    return false;
  }
}
