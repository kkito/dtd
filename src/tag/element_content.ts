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

    private _elementName:string;
    private _suffixChar:string;

    constructor(childTagName:string) {
        if(childTagName != ElementContent.typePCDATA) {
            ElementContent.suffixs.forEach((suffix) => {
                if(childTagName.endsWith(suffix)){
                    this._elementName = childTagName.substring(0 , childTagName.length - 1)
                    this._suffixChar = suffix
                }
            })
            if(!this.hasSuffix()) {
                this._elementName = childTagName;
            }
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