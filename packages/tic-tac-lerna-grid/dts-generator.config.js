require('dts-generator').default({
    project: './',
    out: './lib/index.d.ts',
    resolveModuleId: (params) => {
 		if (params.currentModuleId === 'index') {
			return 'tic-tac-lerna-grid';
		}
		else {
			return null; // Leave other module ids untouched
		}
	},
});