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
		"https://go.goroost.com/api/pageview?rdt=null&rid=null&appKey=muobfzrh9txl7pjf133053x2sdl1ka3s&url=http%3A%2F%2Fwww.cultofmac.com%2F&referrer=https%3A%2F%2Fduckduckgo.com%2F",
		"http://www.lequipe.fr/v6/js/global_v65.min.js?201603200102512032"
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
		"https://upload.twitter.com/i/media/upload.json?origin=https%3A%2F%2Ftwitter.com",
		"https://pixel.facebook.com/ajax/photos/logging/waterfallx.php?__a=1&__dyn=5V5yAW8-aloAwmgDxyIGzGomyrhEK5EK8GAEG8zCC_826m5-9V8CdwIhEyfyUnwPzUaqwXhUnkwy6UnQ4XyRhbDG4Xxm58CEiGta3iinDBBzopKqcBHWzElxrxOcx2q5omw&__req=36&__rev=2227162&__user=100000218740350&asyncSignal=4453&data=%7B%22step%22%3A%22client_transfer_fail%22%2C%22qn%22%3A%22dfa805de-68e0-4e42-8fd5-07c0e6aaea29%22%2C%22uploader%22%3A%22web_react_composer%22%2C%22ref%22%3A%22feedx%22%2C%22bytes%22%3A51269%2C%22error_code%22%3A1004%2C%22error_info%22%3A%22Something%20went%20wrong.%20We're%20working%20on%20getting%20this%20fixed%20as%20soon%20as%20we%20can.%20You%20may%20be%20able%20to%20try%20again.%22%2C%22auto_retry_count%22%3A1%2C%22dt%22%3A6.290000000037253%2C%22custom_tags%22%3A%7B%22manual_retry%22%3Afalse%7D%7D&fb_dtsg=AQE2SOSEUS5t%3AAQH-uMnybkcS&ttstamp=26581695083798369858353116586581724511777110121981079983"
  ];
	var expected = null;
		
  urls.forEach(function(url) {
    it('does not block ' + url, function() {
      assert.equal(blocker.checkURL(url), expected);
    });
  });
});