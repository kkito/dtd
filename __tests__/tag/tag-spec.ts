import { Tag } from '../../src/tag/tag';

test('check type of dtd line', () => {
  let result = Tag.isElement('<!ELEMENT name PCDATA >');
  expect(result).toBeTruthy();

  result = Tag.isAttlist('<!ELEMENT name PCDATA >');
  expect(result).toBeFalsy();

  result = Tag.isAttlist('<!ATTLIST name PCDATA >');
  expect(result).toBeTruthy();

  result = Tag.isEntity('<!Entity name PCDATA >');
  expect(result).toBeFalsy();
  result = Tag.isEntity('<!ENTITY name PCDATA >');
  expect(result).toBeTruthy();
});
