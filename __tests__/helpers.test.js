const { format_url, format_plural, format_date } = require("../utils/helpers");

test("format_url() returns a simplified url string", () => {
  const url1 = format_url("https://test.com/page/1");
  const url2 = format_url("https://howaboutthis.com/abcdefghijk/");
  const url3 = format_url("https://coolthings.com?q=hi");

  expect(url1).toBe("test.com");
  expect(url2).toBe("howaboutthis.com");
  expect(url3).toBe("coolthings.com");
});

test("format_plural() returns a pluralized word", () => {
  const word1 = format_plural("panda", 1);
  const word2 = format_plural("dog", 2);

  expect(word1).toBe("panda");
  expect(word2).toBe("dogs");
});

test("format_date() returns a date string", () => {
  const date = new Date("2021-02-20 14:17:05");

  expect(format_date(date)).toBe("2/20/2021");
});
