# -*- coding: utf-8 -*-
import fileinput
import json
import yaml

def 
with open('rules.json', 'r') as f:
    j = json.load(f)
    print yaml.safe_dump(j, default_flow_style=False)
