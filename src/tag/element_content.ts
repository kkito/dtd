export interface ElementSuffix {
    suffix: string, 
    element: string
}

export class ElementContent {
    public static readonly suffixMoreThanOne = '+';
    public static readonly suffixWildCard = '*';
    public static readonly suffixZeroOrOne = '?';

    public static readonly suffixs = [
        ElementContent.suffixMoreThanOne , 
        ElementContent.suffixWildCard, 
        ElementContent.suffixZeroOrOne
    ]

    public static readonly typePCDATA = '#PCDATA'
    // public static readonly typePDATA = 'PDATA'

    public static matchSuffix(elementValue:string):ElementSuffix {
        const result =  {
            suffix: "", 
            element: elementValue
        }
        ElementContent.suffixs.forEach((suffix) => {
            if (elementValue.endsWith(suffix)) {
                result.element= elementValue.substring(0, elementValue.length - 1)
                result.suffix = suffix
            }
        })
        return result;
    }

    private _elementName:string;
    private _suffixChar:string;

    constructor(childTagName:string) {
        if(childTagName != ElementContent.typePCDATA) {
            const matchResult = ElementContent.matchSuffix(childTagName)
            if(matchResult.suffix) {
                this._suffixChar = matchResult.suffix;
            }
            this._elementName = matchResult.element;
        }
    }

    /**
     * if is element return true
     * if is something like PCDATA return false
     */
    public isElement():boolean{
        return !!this._elementName;
    }

    public elementName():string {
        return this._elementName;
    }

    /**
     * has + or ? etc
     */
    public hasSuffix():boolean {
        return !!this._suffixChar;
    }


    public sizeZeroOrOne():boolean {
        return this._suffixChar === ElementContent.suffixZeroOrOne;
    }

    public sizeAny():boolean {
        return this._suffixChar === ElementContent.suffixWildCard;
    }

    public sizeOneOrMore():boolean {
        return this._suffixChar === ElementContent.suffixMoreThanOne;
    }

}