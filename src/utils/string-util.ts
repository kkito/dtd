export class StringUtil {
  public static betweenQuotation(origin: string): string {
    const result = origin.match(/\"(.*)\"/);
    if (!result) {
      return '';
    } else {
      return result[1];
    }
  }
}
