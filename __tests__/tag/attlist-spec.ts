import { Attlist , AttributeType } from '../../src/tag/attlist';

const attlistStr1 = '<!ATTLIST payment type CDATA "check">';


test('initialize' , () => {
    const attlist = new Attlist(attlistStr1);
    expect(attlist.getElementName()).toBe('payment')
    expect(attlist.getAttibuteName()).toBe('type')
    expect(attlist.getAttributeType()).toBe(AttributeType.CDATA)
    // TODO remove ""
    // expect(attlist.getAttributeValue()).toBe('check')
})

