import { Tag } from "./tag";

export interface IAttlist {
    getElementName():string;
    getAttibuteName():string;
    getAttributeType():string;
    getAttributeValue():string;
}

export const enum AttributeType {
    CDATA = 'CDATA' , 
    ID = 'ID' , 
    IDREF = 'IDREF' , 
    IDREFS = 'IDREFS' , 
    NMTOKEN = 'NMTOKEN' , 
    NMTOKENS = 'NMTOKENS' , 
    ENTITY = 'ENTITY' ,
    ENTITYES = 'ENTITYES' ,
    NOTATION = 'NOTATION' , 
    xml = 'xml:' , 
    ENUMERATED = ''
}

export const enum AttributeValue {
    value = 'value' ,  // default value of attribute
    REQUIRED = '#REQUIRED' ,  // the attribute is required
    IMPLIED = '#IMPLIED' ,  // the attribute is optional
    FIXED = '#FIXED' // the attribute value is fixed
}

export class Attlist extends Tag implements IAttlist {

    public constructor(tag:string) {
        super(tag);
    }

    public getElementName(): string {
        return this.contents[0]
    }
    public getAttibuteName(): string {
        return this.contents[1]
    }
    public getAttributeType(): string {
        return this.contents[2]
    }
    public getAttributeValue(): string {
        return this.contents[3]
    }
}
// export interface IAttributeType {
// }