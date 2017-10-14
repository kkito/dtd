import { ElementContent } from '../../src/tag/element_content';

const ec1 = new ElementContent("body");
const ec2 = new ElementContent("body+");
const ec3 = new ElementContent("#PCDATA");
const ec4 = new ElementContent("head*");
const ec5 = new ElementContent("name?");

test('#isElement', () => {
  expect(ec1.isElement()).toBeTruthy()
  expect(ec2.isElement()).toBeTruthy()
  expect(ec3.isElement()).toBeFalsy()
});

test('#elementName' , ()=>{
  expect(ec1.elementName()).toBe('body')
  expect(ec2.elementName()).toBe('body')
  expect(ec3.elementName()).toBeUndefined()
})

test('#hasSuffix' , ()=>{
  expect(ec1.hasSuffix()).toBeFalsy()
  expect(ec2.hasSuffix()).toBeTruthy()
  expect(ec1.hasSuffix()).toBeFalsy()
})

test('#all size methods' , () => {
  expect(ec1.sizeAny()).toBeFalsy()
  expect(ec1.sizeOneOrMore()).toBeFalsy()
  expect(ec1.sizeZeroOrOne()).toBeFalsy()

  expect(ec2.sizeOneOrMore()).toBeTruthy()
  expect(ec2.sizeAny()).toBeFalsy()
  expect(ec2.sizeZeroOrOne()).toBeFalsy()

  expect(ec4.sizeAny()).toBeTruthy()
  expect(ec4.sizeOneOrMore()).toBeFalsy()
  expect(ec4.sizeZeroOrOne()).toBeFalsy()

  expect(ec5.sizeAny()).toBeFalsy()
  expect(ec5.sizeOneOrMore()).toBeFalsy()
  expect(ec5.sizeZeroOrOne()).toBeTruthy()

  expect(ec3.sizeAny()).toBeFalsy()
})

