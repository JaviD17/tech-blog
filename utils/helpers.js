module.exports = {
  format_url: (url) => {
    return url
      .replace("https://", "")
      .replace("http://", "")
      .replace("www.", "")
      .split("/")[0]
      .split("?")[0];
  },
};
