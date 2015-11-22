var Blocker = (function() {
	
    // "private" variables 
    var _rules;

    // constructor
    function Blocker(rules_path) {
    	_rules = require(rules_path);
		_rules = _rules.filter(function(rule) { return (rule.action.type != "css-display-none") });
    };

    Blocker.prototype.checkURL = function(url) {
		var matching_rule = null;
		for(i in _rules) {
			var rule = _rules[i];
			filter = rule.trigger["url-filter"];
			var re = new RegExp(filter);
			if(re.test(url)) {
				return rule.action.type;
			}
		};
		return null;
    };
    return Blocker;
})();

exports.Blocker = Blocker;

// b = new Blocker(process.argv[2]);
// console.log(b.checkURL(process.argv[3]));
