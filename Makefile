all: build
	
build:
	cat resources/*.yml | python src/yamltojson.py > dist/rules.json
	
clean:
	rm dist/rules.json