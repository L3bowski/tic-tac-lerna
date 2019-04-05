require('dts-generator').default({
    project: './',
    out: './dist/index.d.ts',
    resolveModuleId: (params) => {
 		if (params.currentModuleId === 'index') {
			return 'tic-tac-lerna-grid';
		}
		else {
			return null; // Leave other module ids untouched
		}
	},
});