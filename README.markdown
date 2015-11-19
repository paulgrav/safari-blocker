# About

Project to create Safair Content Blocking rules from

I find it easier to write/maintain Yaml than JSON, so this project takes any Yaml files found in `./resources` and creates `dist/rules.json` for use by a Safari Content Blocker extension.

# Build status

[![Circle CI](https://circleci.com/gh/paulgrav/safari-blocker.svg?style=svg)](https://circleci.com/gh/paulgrav/safari-blocker)

# Requirements

  - node
  - python2.7
  - make
  - virtualenv
  
# Dependencies

	pip install -r requirements.txt
	npm install
  
# Build

	npm run build
  
# Tests

	npm test
  