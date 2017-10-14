export interface IElementSuffix {
  suffix: string;
  element: string;
}

export class ElementContent {
  public static readonly suffixMoreThanOne = '+';
  public static readonly suffixWildCard = '*';
  public static readonly suffixZeroOrOne = '?';

  public static readonly suffixs = [
    ElementContent.suffixMoreThanOne,
    ElementContent.suffixWildCard,
    ElementContent.suffixZeroOrOne,
  ];

  public static readonly typePCDATA = '#PCDATA';
  // public static readonly typePDATA = 'PDATA'

  public static matchSuffix(elementValue: string): IElementSuffix {
    const result = {
      element: elementValue,
      suffix: '',
    };
    ElementContent.suffixs.forEach(suffix => {
      if (elementValue.endsWith(suffix)) {
        result.element = elementValue.substring(0, elementValue.length - 1);
        result.suffix = suffix;
      }
    });
    return result;
  }

  private theElementName: string;
  private theSuffixChar: string;

  constructor(childTagName: string) {
    if (childTagName !== ElementContent.typePCDATA) {
      const matchResult = ElementContent.matchSuffix(childTagName);
      if (matchResult.suffix) {
        this.theSuffixChar = matchResult.suffix;
      }
      this.theElementName = matchResult.element;
    }
  }

  /**
   * if is element return true
   * if is something like PCDATA return false
   */
  public isElement(): boolean {
    return !!this.theElementName;
  }

  public elementName(): string {
    return this.theElementName;
  }

  /**
   * has + or ? etc
   */
  public hasSuffix(): boolean {
    return !!this.theSuffixChar;
  }

  public sizeZeroOrOne(): boolean {
    return this.theSuffixChar === ElementContent.suffixZeroOrOne;
  }

  public sizeAny(): boolean {
    return this.theSuffixChar === ElementContent.suffixWildCard;
  }

  public sizeOneOrMore(): boolean {
    return this.theSuffixChar === ElementContent.suffixMoreThanOne;
  }
}
