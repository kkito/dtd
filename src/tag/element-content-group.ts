import { ElementContent } from './element_content';

/**
 * contains some element contents
 */
export interface IElementContentGroup {
  isORGroup(): boolean;
  isAndGroup(): boolean;

  getContents(): ElementContent[];
}

/**
 * (tag,tag2,tag3)
 * (tag|tag2|tag3)
 */
export class ElementContentGroup {
  public static readonly GROUPSTARTS = '(';
  public static readonly DELIMITER_OR = '|';
  public static readonly DELIMITER_AND = ',';

  /**
   * check if start with ( then we can confirm it is a group content
   * @param contentString element content from element tag
   */
  public static isGroupContent(contentString: string): boolean {
    // TODO test
    return contentString.trim().startsWith(ElementContentGroup.GROUPSTARTS);
  }

  public static isORGroup(contentString: string): boolean {
    return contentString.indexOf(ElementContentGroup.DELIMITER_OR) !== -1;
  }

  public static isANDGroup(contentString: string): boolean {
    return contentString.indexOf(ElementContentGroup.DELIMITER_AND) !== -1;
  }
}
