/**
 * Creates a Conference object with the given name and properties.
 * Note: this constructor is not a part of the public API (objects should be
 * created using Connection.createConference).
 * @param options properties / settings related to the conference that will be created.
 * @param options.name the name of the conference
 * @param options.connection the Connection object for this Conference.
 * @constructor
 */

function Conference(options) {
  //assert that required options are provided, throw an error if not
}

/**
 * Joins the conference.
 */
Conference.prototype.join = function () {

}

/**
 * Leaves the conference.
 */
Conference.prototype.leave = function () {

}

/**
 * Creates the media streams and returns them via the callback.
 * @param options Object with properties / settings defining which streams(Stream.AUDIO, Stream.VIDEO, Stream.DESKTOP)
 * should be created or some additional configurations about resolution for example.
 * @returns {Promise.<{Array.<Stream>}, ConferenceError>} A promise that returns an array of created streams if resolved,
 *     or a ConferenceError if rejected.
 */
Conference.prototype.share = function (options) {

}

/**
 * Returns streams (matching a specific filter, if provided)
 * @param [filter] an optional filter
 * @example conference.getStreams(By.UserId(userId))
 */
Conference.prototype.getStreams = function (filter) {

};


/**
 * Attaches a handler for events(For example - "participant joined".) in the conference. All possible event are defined
 * in ConferenceEvents.
 * @param eventId the event ID.
 * @param handler handler for the event.
 *
 * Note: consider adding eventing functionality by extending an EventEmitter impl, instead of rolling ourselves
 */
Conference.prototype.on = function (eventId, handler) {

}

/**
 * Removes event listener
 * @param eventId the event ID.
 * @param [handler] optional, the specific handler to unbind
 *
 * Note: consider adding eventing functionality by extending an EventEmitter impl, instead of rolling ourselves
 */
Conference.prototype.off = function (eventId, handler) {

}

// Common aliases for event emitter
Conference.prototype.addEventListener = Conference.prototype.on
Conference.prototype.removeEventListener = Conference.prototype.off

/**
 * Sends text message to the other participants in the conference
 * @param message the text message.
 */
Conference.prototype.sendTextMessage = function (message) {

}

/**
 * Send a signal.
 * @param {object} signal the signal and it's values
 * @param {string} signal.name the name of the signal.
 * @param {boolean} signal.persistent if false the command will be sent only one time
 * otherwise it will be sent with every system message sent to the other participants.
 * @returns {Promise.<{void}, ConferenceError>} A promise that a ConferenceError if rejected.
 */
Conference.prototype.sendSignal = function (signal) {

}

/**
 * Sets the display name for this conference.
 * @param name the display name to set
 */
Conference.prototype.setDisplayName = function(name) {

}

/**
 * Elects the participant with the given id to be the selected participant or the speaker.
 * @param id the identifier of the participant
 */
Conference.prototype.selectParticipant = function(participantId) {

}

/**
 * Returns the list of participants for this conference.
 * @return Object a list of participant identifiers containing all conference participants.
 */
Conference.prototype.getParticipants = function() {

}


module.exports = Conference;
