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

  /**
   * Returns all content data
   * for a specific section or {false} for {params}.
   * @param {Number} sectionId - The Section Id of the Data needed.
   * @returns {{content: String[]}|Boolean}
   */
  allContentBySectionId(sectionId = 1) {
    if (this._validateSectionId(sectionId)) {
      this._setSectionId(sectionId);
      return this._dummyData[this._sectionId];
    } else {
      return false;
    }
  }

  /**
   * Returns a specific content data
   * for a specific section or {false} for Invalid {params}.
   * @param {Number} sectionId - The Section Id of the Data needed.
   * @param {Number} contentId - The Content Id of the Data needed.
   * @returns {String|Boolean}
   */
  contentBySectionIdAndContentId(sectionId = 1, contentId = 1) {
    if (this._validateContentId(sectionId, contentId)) {
      this._setSectionId(sectionId);
      this._setContentId(contentId);
    }
    return this._dummyData[this._sectionId].content[this._contentId];
  }
}

export default MockData;
