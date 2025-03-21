function loadData(version) {
    try {
      const themeTemplate1 = require(`./data/${version}/sunset _breeze.json`);
      const themeTemplate12 = require(`./data/${version}/sky_blue.json`);
      const themeTemplate13 = require(`./data/${version}/dark_indigo.json`);
      return { themeTemplate1, themeTemplate12, themeTemplate13 };
    } catch (error) {
      console.error(`Error loading JSON data for version ${version}:`, error);
      throw error;
    }
  }
  
  module.exports = loadData;