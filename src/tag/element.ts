import { Tag } from './tag';
/**
 * Element 
 * <!ELEMENT 元素名称 类别>
 * or
 * <!ELEMENT 元素名称 (元素内容)>
 */
export class Element extends Tag {

    /**
     * the tag name always this first string of contents
     */
    public getName(): string {
        return this.contents[0];
    }
}
