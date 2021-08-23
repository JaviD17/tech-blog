const { format_url } = require("../utils/helpers");

test("format_url() returns a simplified url string", () => {
    const url1 = format_url('https://test.com/page/1');
    const url2 = format_url('https://howaboutthis.com/abcdefghijk/');
    const url3 = format_url('https://coolthings.com?q=hi');

    expect(url1).toBe("test.com");
    expect(url2).toBe("howaboutthis.com");
    expect(url3).toBe("coolthings.com");
});