import {Element} from '../../src/tag/element';

test('initialize' , () => {
    const eleStr = '<!ELEMENT square EMPTY>'
    const ele = new Element(eleStr);
    expect(ele).not.toBeNull()
})