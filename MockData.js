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
    this._sectionId = 0;
    this._contentId = 0;
  }

  /**
   * Set a Session Id to be used.
   * @param {Number} sectionId - The Section Id to be set.
   */
  _setSectionId(sectionId) {
    this._sectionId = parseInt(sectionId - 1);
  }

  /**
   * set a specific Content Id to be used.
   * @param {Number} contentId - The Content Id of the Data needed.
   */
  _setContentId(contentId) {
    this._contentId = parseInt(contentId - 1);
  }

  /**
   * Validates a Session Id.
   * @param {Number} sectionId - The Section Id to be validated.
   * @returns {Boolean}
   */
  _validateSectionId(sectionId) {
    let status = false;
    if (parseInt(sectionId) < 1) {
      status = false;
    } else if (parseInt(sectionId) > this._dummyData.length) {
      status = false;
    } else {
      status = true;
    }
    return status;
  }
  /**
   * Validates a Session Id and Content Id to be used.
   * @param {Number} sectionId - The Section Id to be validated.
   * @param {Number} contentId - The Content Id to be validated.
   * @returns {Boolean}
   */
  _validateContentId(sectionId, contentId) {
    let status = false;
    if (!this._validateSectionId(sectionId)) {
      status = false;
      return status;
    }
    if (contentId < 1) {
      status = false;
    } else if (contentId > this._dummyData[this._sectionId].content.length) {
      status = false;
    } else {
      status = true;
    }
    return status;
  }

  /**
   * Returns a list of all available data.
   * @returns {Array.<{content: String[]}>}
   */
  allData() {
    return this._dummyData;
  }


}
