import { Parser } from '../src/parser';

const dtdStr1 =
  '<!ELEMENT note (to,from,heading,body)> \
<!ELEMENT to (#PCDATA)> \
<!ELEMENT from (#PCDATA)> \
<!ELEMENT heading (#PCDATA)> \
<!ELEMENT body (#PCDATA)>';

test('it should new dtd instance valid', () => {
  const tags = Parser.matchDTDTags(dtdStr1);
});
