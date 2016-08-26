'use strict';

const _         = require('lodash'),
      data      = require('./static/data.json'),
      chalk     = require('chalk'),
      timestamp = require('time-stamp');

/**
 * Output a styled timestamp to match the gulp console.
 *
 * @returns {string}
 */
let getTimestamp = () => {
  return '[' + chalk.grey(timestamp('HH:mm:ss')) + ']';
};

let facts = () => {

  /**
   * Check that the data exists.
   */
  if (!_.isObject(data) && !_.isNil(data)) {
    console.log(chalk.bgRed('Couldn\'t load data.'));
    return;
  }

  let uniqueArray = _.uniq(data.facts),
      randomItem  = _.sample(uniqueArray),
      wordLimit   = 10,
      sentences   = _.chunk(_.words(randomItem), wordLimit),
      time;

  /**
   * Break up the string into sentences.
   */
  _.forEach(sentences, sentence => {
    time = getTimestamp();
    process.stdout.write(time + ' ');
    console.log.apply(console, [chalk.blue(_.join(sentence, ' '))]);
  });

};

// Default Export
module.exports = facts;