import { StringUtil } from '../../src/utils/string-util';

test('.betweenQuotation', () => {
  let result = StringUtil.betweenQuotation('"name"');
  expect(result).toBe('name');

  result = StringUtil.betweenQuotation('""');
  expect(result).toBe('');

  result = StringUtil.betweenQuotation('ddd');
  expect(result).toBe('');

  result = StringUtil.betweenQuotation('\'"');
  expect(result).toBe('');

  result = StringUtil.betweenQuotation('"test"ddd"');
  expect(result).toBe('test"ddd');
});
