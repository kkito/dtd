import { Tag } from './tag';

export class Entity extends Tag {
  public static readonly system = 'SYSTEM';

  protected entityName: string;
  protected entityValue: string;
  protected isExternal: boolean = false;

  public constructor(tag: string) {
    super(tag);

    if (this.contents.length < 2) {
      throw new Error(`parse entity error:1 ${this.tagString}`);
    } else {
      if (this.contents[1] === Entity.system) {
        this.isExternal = true;
      }
      this.entityName = this.contents[0];
      this.entityValue = this.contents.slice(this.isExternal ? 2 : 1).join(' ');
      this.entityValue = this.entityValue.replace(/^"/, '');
      this.entityValue = this.entityValue.replace(/"$/, '');
    }
    // else{
    //     // console.log(this.contents)
    //     if(this.contents[1] !== Entity.system) {
    //         this.entityName = this.contents[0]
    //         this.entityValue = this.contents.slice(1).join('')
    //         // throw new Error(`parse entity error:2 ${this.tagString}`)
    //     }else{
    //         this.entityName = this.contents[1]
    //         this.isExternal = true
    //         this.entityValue = this.contents.slice(2).join('')
    //     }
    // }
  }

  public getName(): string {
    return this.entityName;
  }

  public getValue(): string {
    return this.entityValue;
  }

  public isExternalEntity(): boolean {
    return this.isExternal;
  }
}
