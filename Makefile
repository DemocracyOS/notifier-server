#
# DemocracyOS Makefile
#

BABEL="./node_modules/.bin/babel-node"

ifndef DEBUG
  DEBUG="democracyos:notifier-server*"
endif

ifndef NODE_ENV
  NODE_ENV="development"
endif

run: packages
	@echo "Starting application..."
	@NODE_PATH=. DEBUG=$(DEBUG) $(BABEL) index.js

packages:
	@echo "Installing dependencies..."
	@npm install
	@echo "Done.\n"

clean:
	@echo "Removing dependencies, components and built assets."
	@rm -rf node_modules components public
	@echo "Done.\n"


.PHONY: clean