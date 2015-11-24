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
	  "http://www.lequipe.fr/v6/js/ads-v12.js?2015c",
		"http://api.viglink.com/api/ping",
		"http://bcp.crwdcntrl.net/5/c=7580/rand=289563465/pv=y/int=%23OpR%2367012%23www.cultofmac.com%20%3A%20Total%20Site%20Traffic%20%3A%202/rt=ifr",
		"http://bh.contextweb.com/bh/rtset?do=add&pid=537085&ev=B780FD9F4F0954567F7E0F0002E53BF8"
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