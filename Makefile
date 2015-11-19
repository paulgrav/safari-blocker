all: build
	
build:
	mkdir dist
	cat resources/*.yml | python src/yamltojson.py > dist/rules.json
	
clean:
	rm dist/rules.json