all: build
	
build:
	mkdir -p dist
	cat resources/*.yml | $$(npm bin)/js-yaml > dist/rules.json
	
clean:
	rm -rf dist
