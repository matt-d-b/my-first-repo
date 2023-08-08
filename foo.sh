#!/usr/bin/env bash

#-------------------------------------------------------------------------------
# Script Variables
#-------------------------------------------------------------------------------

unset LOREM_IPSUM
unset LOREM_IPSUM_WRAPPED

#-------------------------------------------------------------------------------
# Script Functions
#-------------------------------------------------------------------------------

function setup_initial_variables() {
	LOREM_IPSUM=""
	LOREM_IPSUM_WRAPPED=""
}

function setup_initial_variable() {
	LOREM_IPSUM="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do \
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo \
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse \
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non \
proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

}

function created_wrapped_text() {
	LOREM_IPSUM_WRAPPED="$(echo "$LOREM_IPSUM" | fold --width=60 --spaces)"
}

function print_out_wrapped_result() {
	printf "\n%s\n" "$LOREM_IPSUM_WRAPPED"
}

#-------------------------------------------------------------------------------
# Main Script Function
#-------------------------------------------------------------------------------
main() {
	setup_initial_variables
	setup_initial_variable
	created_wrapped_text
	print_out_wrapped_result
}

#-------------------------------------------------------------------------------
# Script Runtime
#-------------------------------------------------------------------------------

main

#===============================================================================
# SCRIPT END
#===============================================================================

