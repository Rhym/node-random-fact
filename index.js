'use strict';

const _         = require('lodash'),
      data      = require('./static/data.json'),
      chalk     = require('chalk'),
      boxen     = require('boxen');

let facts = () => {

  /**
   * Check that the data exists.
   */
  if (!_.isObject(data) && !_.isNil(data)) {
    console.log(chalk.bgRed(`Couldn't load data.`));
    return;
  }

  let uniqueArray = _.uniq(data.facts),
      randomItem  = _.sample(uniqueArray),
      wordLimit   = 7,
      sentences   = _.chunk(_.words(randomItem, /[^, ]+/g), wordLimit),
      text        = '';

  /**
   * Break up the string into sentences.
   */
  _.forEach(sentences, (sentence, index) => {
    text += `${_.join(sentence, ' ')}${sentences.length - 1 == index ? '' : '\n'}`;
  });

  console.log(boxen(text, {
    padding: 1,
    margin: {
      top: 1,
      right: 0,
      bottom: 1,
      left: 1,
    },
    borderColor: 'blue',
    borderStyle: 'round',
  }));

};

// Default Export
module.exports = facts;