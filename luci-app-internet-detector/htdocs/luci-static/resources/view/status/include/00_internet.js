'use strict';
'require baseclass';
'require fs';
'require uci';

return baseclass.extend({
	title      : _('Internet'),
	appName    : 'internet-detector',
	execPath   : '/usr/bin/internet-detector',
	inetStatus : null,

	load: async function() {
		if(!(
			'uiCheckIntervalUp' in window &&
			'uiCheckIntervalDown' in window &&
			'currentAppMode' in window
		)) {
			await uci.load(this.appName).then(data => {
				window.uiCheckIntervalUp   = Number(uci.get(this.appName, 'config', 'ui_interval_up'));
				window.uiCheckIntervalDown = Number(uci.get(this.appName, 'config', 'ui_interval_down'));
				window.currentAppMode      = uci.get(this.appName, 'config', 'mode');
			}).catch(e => {});
		};

		if(window.currentAppMode === '1' || window.currentAppMode === '2') {
			window.internetDetectorCounter = ('internetDetectorCounter' in window) ?
				++window.internetDetectorCounter : 0;

			if(!('internetDetectorState' in window)) {
				window.internetDetectorState = 2;
			};

			if(window.currentAppMode === '1' && (
				(window.internetDetectorState === 0 && window.internetDetectorCounter % window.uiCheckIntervalUp) ||
				(window.internetDetectorState === 1 && window.internetDetectorCounter % window.uiCheckIntervalDown)
			)) {
				return;
			};

			window.internetDetectorCounter = 0;
			return L.resolveDefault(fs.exec(this.execPath, [ 'inet-status' ]), null);
		}
		else {
			window.internetDetectorState = 2;
		};
	},

	render: function(data) {
		if(window.currentAppMode === '0') {
			return
		};

		if(data) {
			this.inetStatus = (data.code === 0) ? data.stdout.trim() : null;
			if(this.inetStatus === 'up') {
				window.internetDetectorState = 0;
			}
			else if(this.inetStatus === 'down') {
				window.internetDetectorState = 1;
			}
			else {
				window.internetDetectorState = 2;
			};
		};

		let internetStatus = E('span', { 'class': 'label' });

		if(window.internetDetectorState === 0) {
			internetStatus.textContent      = _('Connected');
			internetStatus.style.background = '#46a546';
			internetStatus.style.color      = '#ffffff';
		}
		else if(window.internetDetectorState === 1) {
			internetStatus.textContent      = _('Disconnected');
			internetStatus.style.background = '#ff4953';
			internetStatus.style.color      = '#ffffff';
		}
		else {
			internetStatus.textContent      = _('Undefined');
			internetStatus.style.background = '#9b9b9b';
			internetStatus.style.color      = '#ffffff';
		};

		return E('div', {
			'class': 'cbi-section',
			'style': 'margin-bottom:1em',
		}, internetStatus);
	},
});
