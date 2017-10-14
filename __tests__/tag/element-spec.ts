import { Element } from '../../src/tag/element';

const eleStr = '<!ELEMENT square EMPTY>';
const eleStr2 = '<!ELEMENT testTagName (name,age,school)>';
const eleStr3 = '<!ELEMENT testTagName (name|age|school)*>';
const ele = new Element(eleStr);
const ele2 = new Element(eleStr2);
const ele3 = new Element(eleStr3);

test('initialize', () => {
  expect(ele).not.toBeNull();
});

test('get tag name', () => {
  expect(ele.getName()).toBe('square');
  expect(ele2.getName()).toBe('testTagName');
});

test('#belongsCategory , #hasElementContent', () => {
  expect(ele.belongsCategory()).toBeTruthy();
  expect(ele.hasElementContent()).toBeFalsy();
  expect(ele2.belongsCategory()).toBeFalsy();
  expect(ele2.hasElementContent()).toBeTruthy();
});

test('#elementContent', () => {
  expect(ele3.elementValue()).toBe('(name|age|school)');
});
