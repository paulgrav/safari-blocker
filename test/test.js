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
	  "http://www.bbc.co.uk",
		"http://static1.dmcdn.net/images/header/logo.svg.vfe44cd7bde0eb7289",
		"https://upload.facebook.com/ajax/composerx/attachment/media/saveunpublished?target_id=100000218740350&image_height=100&image_width=100&letterbox=0&av=100000218740350&qn=83cbbe5e9945ba7ea4f889dfb77ce687&__pc=EXP1%3ADEFAULT&__user=100000218740350&__a=1&__dyn=7AmanEzUFlym5Q9UoHaEWCueyrhEK5EKiWFaay9VCC_826m5-9V8C3F6y8-bxu3fzoaqwFUyp1Zi28b9J1efSiVWxeUlxiex2bwTADzpo9XDyVqCgS2W&__req=u&fb_dtsg=AQFmLGz9lpBT&ttstamp=26581701097671122571081126684&__rev=2105809",
		"https://pixel.facebook.com/ajax/photos/logging/waterfallx.php?__a=1&__dyn=7AmanEzUFlym5Q9UrEwlg94qbxqbyaFaay9VQC_826m6oDAyoeAq8zUK5Uc-dwFG2Dy9A7R88wICQ4U_pbDG4Xxm2e48K3OudBwDKubBGp3o&__req=m&__rev=2105809&__user=100000218740350&asyncSignal=9348&data=%7B%22step%22%3A%22client_select_success%22%2C%22qn%22%3A%225%22%2C%22uploader%22%3A%22web_composer%22%2C%22ref%22%3A%22feed%22%2C%22volume%22%3A1%2C%22method%22%3A%22dragdrop%22%7D&fb_dtsg=AQEx4y1QSela&ttstamp=26581691205212149818310110897",
		"https://upload.twitter.com/i/media/upload.json?origin=https%3A%2F%2Ftwitter.com"
  ];
	var expected = null;
		
  urls.forEach(function(url) {
    it('does not block ' + url, function() {
      assert.equal(blocker.checkURL(url), expected);
    });
  });
});