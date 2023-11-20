declare const __dirname: string;

const CracoLessPlugin = require('craco-less');
import { resolve } from 'path'

export default {
	webpack: {
		alias: {
			'@': resolve(__dirname, 'src'), // 将 @ 符号指向 src 目录
		},
	},
	plugins: [
		{
			plugin: CracoLessPlugin,
		},
	],
};
