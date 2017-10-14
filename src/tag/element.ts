import { Tag } from './tag';
import {ElementContent, ElementSuffix} from './element_content';
/**
 * Element 
 * <!ELEMENT element-name category>
 * or
 * <!ELEMENT element-name (element-content)>
 */
export class Element extends Tag {

  public static readonly CATEGORY_EMPTY = 'EMPTY'
  public static readonly CATEGORY_ANY = 'ANY'

  private theElementContent:string;

  private _elementValue:string;

  //  Declaring Mixed Content <!ELEMENT note (#PCDATA|to|from|header|message)*>
  private _mixContentSuffix:string;

  public constructor(tag: string) {
    super(tag);

    const matchSuffix = ElementContent.matchSuffix(this.contents[1])
    if(matchSuffix.suffix) {
      this._mixContentSuffix = matchSuffix.suffix;
    }
    this._elementValue = matchSuffix.element;

    let matches = this.elementValue().match(/\((.+)\)/);
    if(matches){
      this.theElementContent = matches[0]
    }

  }

  /**
   * the tag name always this first string of contents
   */
  public getName(): string {
    return this.contents[0];
  }

  public belongsCategory():boolean {
    return !this.theElementContent;
  }

  public hasElementContent():boolean {
    return !this.belongsCategory();
  }

  /**
   * Declaring either/or Content <!ELEMENT note (to,from,header,(message|body))>
   * Declaring Mixed Content <!ELEMENT note (#PCDATA|to|from|header|message)*>
   * 
   */
  public elementContents():ElementContent[] {
    //TODO
    return []
  }

  public elementValue():string {
    return this._elementValue;
  }

}
