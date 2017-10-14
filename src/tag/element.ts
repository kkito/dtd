import { Tag } from './tag';
import {ElementContent} from './element_content';
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

  public constructor(tag: string) {
    super(tag);
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

  public elementContents():ElementContent[] {
    //TODO
    return []
  }

  protected elementValue():string {
    return this.contents[1]
  }

}
