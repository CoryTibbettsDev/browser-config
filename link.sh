#!/bin/sh

# Link browser config files

# We assume argument 1 is the source directory containing our config files
# This is so we can run link.sh from another directory and still be able to
# find our files
if [ -z "${1}" ]; then
	# Arg 1 is null assume the dir with our config files is the one we are in
	# This could be the case if we are simply running from the shell and not
	# from another script or from another directory
	source_dir="$(pwd)"
elif [ ! -d "${1}" ]; then
	printf "Argument one %s: is an invalid directory" "${1}" 2>&1
	exit 1
else
	# Have not found any errors so argument 1 seems valid
	# Make sure it does not have a trailing slash in the pathname
	source_dir="${1%/}"
fi

# One last check on our chosen directory
if [ ! -d "${source_dir}" ]; then
	printf "source_dir %s: is an invalid directory" "${source_dir}" 2>&1
	exit 1
fi

# Assume our files are in the source directory we have found
firefox_user_js="${source_dir}/user.js"
chromium_input_file="${source_dir}/preferences.json"
chromium_output_file="${source_dir}/Preferences"

# Check to make sure our config files are there
if [ ! -f "${firefox_user_js}" ]; then
	printf "%s: is an invalid file" "${firefox_user_js}" 2>&1
	exit 1
fi
if [ ! -f "${chromium_input_file}" ]; then
	printf "%s: is an invalid file" "${chromium_input_file}" 2>&1
	exit 1
fi

# Firefox
# Find firefox profile directory with suffix from argument 1 to function
firefox_profile_dir=
get_firefox_profile_dir() {
	# Check to make sure the profile dir is not set already
	[ -z "${firefox_profile_dir}" ] &&
		firefox_profile_dir="$(find $HOME/.mozilla/firefox/ -type d -path *.default-${1})"
}
# Try all the firefox profile directory suffixes I know
get_firefox_profile_dir "release"
get_firefox_profile_dir "esr"

# If we found the right directory link the user.js
[ -n "${firefox_profile_dir}" ] &&
	ln -sfv "${firefox_user_js}" "${firefox_profile_dir}" ||
	printf "Could not find firefox profile directory\n"

# Chromium
# Strip all whitespace from the chromium json file
# This may not be needed by some sources say chromium does not like
# whitespace in the Preferences file so it seems safer to do it to me
tr -d " \n\r" < "${chromium_input_file}" > "${chromium_output_file}"

chromium_config_dir="$HOME/.config/chromium/Default"
[ -d "${chromium_config_dir}" ] ||
	mkdir -p "${chromium_config_dir}"

ln -svf "${chromium_output_file}" "${chromium_config_dir}/Preferences"
