import { Entity } from '../../src/tag/entity';

const eleStr = '<!ENTITY writer "Donald Duck.">';
const eleStr2 = '<!ENTITY copyright "Copyright W3Schools.">';
const eleStr3 = '<!ENTITY writer "Donald">';
const eleStr4 =
  '<!ENTITY copyright SYSTEM "http://www.w3school.com.cn/dtd/entities.dtd">';

test('entityName + entityValue + isExternal valid', () => {
  let entity = new Entity(eleStr);
  expect(entity.isExternalEntity()).toBeFalsy();
  expect(entity.getName()).toBe('writer');
  expect(entity.getValue()).toBe('Donald Duck.');

  // normal one
  entity = new Entity(eleStr3);
  expect(entity.getName()).toBe('writer');
  expect(entity.getValue()).toBe('Donald');

  // value with blank
  entity = new Entity(eleStr2);
  expect(entity.getName()).toBe('copyright');
  expect(entity.getValue()).toBe('Copyright W3Schools.');
  expect(entity.isExternalEntity()).toBeFalsy();
});

test('external entity', () => {
  let entity = new Entity(eleStr4);
  expect(entity.isExternalEntity()).toBeTruthy();
  expect(entity.getName()).toBe('copyright');
  expect(entity.getValue()).toBe('http://www.w3school.com.cn/dtd/entities.dtd');

  const eleStr5 = '<!ENTITY copyright SYSTEM "content with blank">';
  entity = new Entity(eleStr5);
  expect(entity.isExternalEntity()).toBeTruthy();
  expect(entity.getValue()).toBe('content with blank');
});
// test('initialize', () => {
//   expect(ele).not.toBeNull();
// });

// test('get tag name', () => {
//   expect(ele.getName()).toBe('square');
//   const ele2 = new Element(eleStr2);
//   expect(ele2.getName()).toBe('testTagName');
// });
