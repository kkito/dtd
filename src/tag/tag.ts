export class Tag {
  public static ElementTagName = 'ELEMENT';
  public static AttlistTagName = 'ATTLIST';
  public static EntityTagName = 'ENTITY';

  public static isElement(content: string): boolean {
    return this.isGivenTag(content, this.ElementTagName);
  }

  public static isAttlist(content: string): boolean {
    return this.isGivenTag(content, this.AttlistTagName);
  }

  public static isEntity(content: string): boolean {
    return this.isGivenTag(content, this.EntityTagName);
  }

  protected static isGivenTag(content: string, tagName: string): boolean {
    content = content.trim();
    return content.startsWith('<!' + tagName);
  }

  protected tagString: string;
  protected tagName: string;
  protected tagContent: string;
  protected contents: string[]; // tagContent split with blank

  constructor(tag: string) {
    this.tagString = tag;
    const match = this.tagString.match(/<!(\w+) (.*)>/);
    if (!match) {
      throw new Error(`parse tag Error for ${this.tagString}`);
    }
    if (match.index !== 0) {
      throw new Error(`parse tag index Error for ${this.tagString}`);
    }
    this.tagName = match[1];
    this.tagContent = match[2];
    this.contents = this.tagContent.split(' ');
    this.assertTagName();
  }

  private assertTagName(): boolean {
    if (this.constructor.name.toUpperCase() !== this.tagName.toUpperCase()) {
      throw new Error(
        `assertTagName error for ${this.constructor.name} with ${this.tagName}`
      );
    } else {
      return true;
    }
  }
}
