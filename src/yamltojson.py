import sys
import json
import yaml

def yamltojson(filehandle):
    y = yaml.load(filehandle)
    return json.dumps(y)

def main():
    print yamltojson(sys.stdin)
        
if __name__ == "__main__":
    main()