import { Entity } from '../../src/tag/entity';

const eleStr = '<!ENTITY writer "Donald Duck.">';
const eleStr2 = '<!ENTITY copyright "Copyright W3Schools.">';
const eleStr3 = '<!ENTITY writer "Donald">';
const ele = new Entity(eleStr);

test('entityName + entityValue + isExternal valid' , ()=>{
  let entity = new Entity(eleStr);
  expect(entity.isExternalEntity()).toBeFalsy()
  expect(entity.getName()).toBe('writer')
  expect(entity.getValue()).toBe('Donald Duck.')

  // normal one
  entity = new Entity(eleStr3);
  expect(entity.getName()).toBe('writer')
  expect(entity.getValue()).toBe('Donald')

  // value with blank
  entity = new Entity(eleStr2);
  expect(entity.getName()).toBe('copyright')
  expect(entity.getValue()).toBe('Copyright W3Schools.')
  expect(entity.isExternalEntity()).toBeFalsy()

})
// test('initialize', () => {
//   expect(ele).not.toBeNull();
// });

// test('get tag name', () => {
//   expect(ele.getName()).toBe('square');
//   const ele2 = new Element(eleStr2);
//   expect(ele2.getName()).toBe('testTagName');
// });
