var assert = require('assert');
var b = require('../src/blocker');
var blocker;
var should = require("should");

describe("parse json", function() {
	it('should not throw an error', function() {
    (function() {
	    blocker = new b.Blocker("../dist/rules.json");
    })(blocker);
  }).should.not.throw();
});

describe('blocked', function() {
  var urls = [
	  "http://www.lequipe.fr/v6/js/ads-v12.js?2015c"
  ];
	var expected = "block";
		
  urls.forEach(function(url) {
    it('correctly blocks ' + url, function() {
      assert.equal(blocker.checkURL(url), expected);
    });
  });
});

describe('unblocked', function() {
  var urls = [
	  "http://www.bbc.co.uk"
  ];
	var expected = null;
		
  urls.forEach(function(url) {
    it('does not block ' + url, function() {
      assert.equal(blocker.checkURL(url), expected);
    });
  });
});