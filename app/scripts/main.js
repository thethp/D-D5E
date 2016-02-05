var Backbone = require('backbone'),
	AppView = require('./views/app');
'use strict';

Backbone.history.start();
new AppView();