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
		"http://bh.contextweb.com/bh/rtset?do=add&pid=537085&ev=B780FD9F4F0954567F7E0F0002E53BF8",
		"http://um.simpli.fi/cw_match",
		"http://cpanel.nativeads.com/js/pixel/pixel-106399-ed8e2e723a07c8c60cba59da2d1792072b0bd7d8.js",
		"http://us-u.openx.net/w/1.0/sd?cc=1&id=537072966&val=B780FD9F9B0B54567A7E3D02021BCCFA",
		"http://vox-static.liverail.com/lr.gif",
		"https://go.goroost.com/api/pageview?rdt=null&rid=null&appKey=muobfzrh9txl7pjf133053x2sdl1ka3s&url=http%3A%2F%2Fwww.cultofmac.com%2F&referrer=https%3A%2F%2Fduckduckgo.com%2F"
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