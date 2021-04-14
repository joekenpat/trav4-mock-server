/**
 * Array of dummy data to be use
 * in place of a database
 */
const dummyData = [
  {
    content: [
      "lorem ips loremCurrently there is no native support",
      "for private properties in JavaScript ",
      "it is possible to mimic private properties but",
    ],
  },
  {
    content: [
      "lorem ips loremCurrently there is no native support",
      "for private properties in JavaScript ",
      "it is possible to mimic private properties but",
    ],
  },
];

class MockData {
  /**
   * Initialise this class
   * and loads the dummy data.
   * @constructor
   */
  constructor(dummy = dummyData) {
    this._dummyData = dummy;
  }

  /**
   * Returns a list of all available data.
   * @returns {Array.<{content: String[]}>}
   */
  allData() {
    return this._dummyData;
  }

}
