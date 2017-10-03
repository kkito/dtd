import { Element } from '../../src/tag/element';

const eleStr = '<!ELEMENT square EMPTY>'
const eleStr2 = '<!ELEMENT testTagName (name,age,school)>'
const ele = new Element(eleStr);

test('initialize', () => {
    expect(ele).not.toBeNull()
})

test('get tag name', () => {
    expect(ele.getName()).toBe('square')
    const ele2 = new Element(eleStr2);
    expect(ele2.getName()).toBe('testTagName')
})