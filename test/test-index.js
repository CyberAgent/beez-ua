var _ = require('underscore');
var ua = require('../s/beez-ua');

define = function (list, fn) {
    fn(ua, _)();
};

var spec = require('../spec');
var chai = require('chai');
expect = chai.expect;
