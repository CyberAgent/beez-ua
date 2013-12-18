#
# Beez Project: Makefile
#

PROJECTNAME=beez-ua
DESC="beez"
DIST="dist"
RELEASE="release"
REPORT="report"

__tar=$(shell which tar)
__tar_package_prefix=$(__tar)

__r_js=node_modules/requirejs/bin/r.js
__jshint=node_modules/jshint/bin/jshint
__jsdoc=node_modules/jsdoc/jsdoc
__plato=node_modules/plato/bin/plato
__mocha=node_modules/mocha/bin/mocha

R_JS_CONFIG=build.js
DIST_FILE=dist/beez-ua/index.js
NONE_RELEASE_FILE=release/beez.ua.js
OPTIMIZE_RELEASE_FILE=release/beez.ua.min.js

all: clean init setver jshint test release jsdoc last
release: release-none release-uglify

init:
	@echo ""
	@echo "####################"
	@echo "# -- target: init"

	npm install .
	mkdir -p $(RELEASE)
	mkdir -p $(REPORT)

clean:
	@echo ""
	@echo "####################"
	@echo "# -- target: clean"

	rm -rf $(DIST)

setver:
	@echo ""
	@echo "####################"
	@echo "# -- target: setver"

	./setver

jsdoc:
	@echo ""
	@echo "####################"
	@echo "# -- target: jsdoc"

	$(__jsdoc) -c .jsdoc3.json -d docs -p -r -l s

jshint:
	@echo ""
	@echo "####################"
	@echo "# -- target: jshint"
	$(__jshint) --config .jshintrc s

report:
	@echo ""
	@echo "####################"
	@echo "# -- target: report"

	$(__plato) -d ./report -r ./s

test:
	@echo ""
	@echo "####################"
	@echo "# -- target: test"

	$(__mocha) test/test-*.js

release-none:
	@echo ""
	@echo "####################"
	@echo "# -- target: build-none"
	$(__r_js) -o $(R_JS_CONFIG) optimize=none
	cp -f $(DIST_FILE) $(NONE_RELEASE_FILE)

release-uglify:
	@echo ""
	@echo "####################"
	@echo "# -- target: build-uglify"

	$(__r_js) -o $(R_JS_CONFIG) optimize=uglify2
	cp -f $(DIST_FILE) $(OPTIMIZE_RELEASE_FILE)

last:
	@echo ""
	@echo "####################"
	@echo "# Successful!!!!"
	@echo "####################"
	@echo "release output"
	@echo " - $(NONE_RELEASE_FILE)"
	@echo " - $(OPTIMIZE_RELEASE_FILE)"
	@echo ""
	@echo ""

.PHONY: all release init clean setver jsdoc jshint report test release-none release-uglify last
