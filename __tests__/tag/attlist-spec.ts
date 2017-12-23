import { Attlist, AttributeType, AttributeValue } from '../../src/tag/attlist';

const attlistStr1 = '<!ATTLIST payment type CDATA "check">';
const attlistStr2 = '<!ATTLIST square width CDATA "0">';
const attlistStr3 = '<!ATTLIST person number CDATA #REQUIRED>';
const attlistStr4 = '<!ATTLIST contact fax CDATA #IMPLIED>';
const attlistStrFixed = '<!ATTLIST sender company CDATA #FIXED "Microsoft">';
const attlistStr6 = '<!ATTLIST payment type (check|cash) "cash">';

test('initialize', () => {
  const attlist = new Attlist(attlistStr1);
  expect(attlist.getElementName()).toBe('payment');
  expect(attlist.getAttibuteName()).toBe('type');
  expect(attlist.getAttributeTypeStr()).toBe(AttributeType.CDATA);
  // TODO remove ""
  // expect(attlist.getAttributeValue()).toBe('check')
});

test('fixed data', () => {
  const attlist = new Attlist(attlistStrFixed);
  expect(attlist.getAttibuteName()).toBe('company');
  expect(attlist.getAttributeTypeStr()).toBe(AttributeType.CDATA);
  expect(attlist.getAttributeValue()).toBe(AttributeValue.FIXED);
});
