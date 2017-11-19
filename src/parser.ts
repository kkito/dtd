export class Parser {
  /**
   * try to find all comments in given content
   * @param {string} dtdContent content of dtd content
   * @return matched comments
   */
  public static matchComments(dtdContent: string): string[] {
    // TODO how to deal with nested contents ??
    return Parser.matchContents(dtdContent, /\<!--(.*?)\-->/g);
  }

  public static matchDTDTags(dtdContent: string): string[] {
    return Parser.matchContents(dtdContent, /\<!(.*?)\>/g);
  }

  public static getTagName(lineTagString:string):string {
    const match = lineTagString.match(/\<!([^ ]+) /);
    if(match && match.length > 1) {
      return match[1]
    }else{
      throw new Error("getTagName fail for " + lineTagString);
    }
  }

  private static matchContents(content: string, match: RegExp): string[] {
    const result = content.match(match);
    if (!result) {
      return [];
    } else {
      return result;
    }
  }

  private content: string;
  private comments: string[];
  private tags: string[];

  constructor(dtdContent: string) {
    this.content = dtdContent;
    this.comments = Parser.matchComments(this.content);
    this.tags = Parser.matchDTDTags(this.content);
  }
}
