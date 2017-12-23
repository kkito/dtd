import { Parser } from '../src/parser';

test('.matchComments', () => {
  const firstComment = '<!-- xxxsdfwef -->';
  const secondComment = '<!-- swfewf -->';
  const result = Parser.matchComments(
    `${firstComment} <!sswef > ${secondComment}`
  );
  expect(result.length).toBe(2);
  expect(result[1]).toBe(secondComment);
  expect(result[0]).toBe(firstComment);
});

test('.matchDTDTags', () => {
  const firstTag = '<!ELEMENT smilCustomTest EMPTY>';
  const secondTag =
    "<!ATTLIST smilCustomTest \
    id    ID    #REQUIRED \
    defaultState  (true|false)   'false' \
    override  (visible|hidden) 'hidden' \
    bookStruct  (PAGE_NUMBER|NOTE|NOTE_REFERENCE|ANNOTATION|LINE_NUMBER|OPTIONAL_SIDEBAR|OPTIONAL_PRODUCER_NOTE)  #IMPLIED \
    >";
  const tags = Parser.matchDTDTags(
    ` place all customTest elements used in the SMIL files, for presentation to the user. ${firstTag} ${secondTag}`
  );
  expect(tags.length).toBe(2);
  expect(tags[0]).toBe(firstTag);
  expect(tags[1]).toBe(secondTag);
});

test('getTagName', () => {
  let tag = '<!ELEMENT note (to,from,heading,body)>';
  expect(Parser.getTagName(tag)).toBe('ELEMENT');

  tag = '<!ATTLIST payment type CDATA "check">';
  expect(Parser.getTagName(tag)).toBe('ATTLIST');
});

test('all', () => {
  const content =
    '<?xml version="1.0"?> \
  <!ELEMENT note (to,from,heading,body)> \
  <!ELEMENT to (#PCDATA)> \
  <!ELEMENT from (#PCDATA)> \
  <!ELEMENT heading (#PCDATA)> \
  <!ELEMENT body (#PCDATA)>';

  const tags = Parser.matchDTDTags(content);
  expect(tags.length).toBe(5);
});
