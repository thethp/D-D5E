# Just like USA: Characters Welcome [![Build Status](https://travis-ci.org/thethp/D-D5E.svg?branch=master)](https://travis-ci.org/thethp/D-D5E) 
[![Code Climate](https://codeclimate.com/github/thethp/D-D5E/badges/gpa.svg)](https://codeclimate.com/github/thethp/D-D5E) [![Issue Count](https://codeclimate.com/github/thethp/D-D5E/badges/issue_count.svg)](https://codeclimate.com/github/thethp/D-D5E) 

* npm i
* npm i -g gulp
* gulp

#Principles, as they come up

* always use foo.get just for consistency, even if we're inside- use that over this.attributes.bar
* returns and functions should always be a blank line before them
* variables are always at the very top of their container
* no blank lines in single line functions
* blank lines after variable declarations
* blank lines before imports that are truly just for that page
* only have blank lines in 'it' unit tests if there are variable declarations or event work before should statements [see setup.spec.js for example]
* tabs not spaces [display them as whatever size you want in your editor of choice]
* ' = '
* ' />'
* if react component has more than one attribute, multiline them
* opening bracket always on the same line
* we love '', we hate ""
* cost is always in CP