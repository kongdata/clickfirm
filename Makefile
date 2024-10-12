# Makefile

ZIP_NAME := clickfirm.zip

all:
	rm -f $(ZIP_NAME)
	zip -r $(ZIP_NAME) manifest.json content.js icons/