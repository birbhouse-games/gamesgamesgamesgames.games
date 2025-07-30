// Module imports
import configBirbhouseBase from '@birbhouse/eslint-config'
import configBirbhouseTypescript from '@birbhouse/eslint-config-typescript'
import { FlatCompat } from '@eslint/eslintrc'
import tseslint from 'typescript-eslint'





// Constants
const compat = new FlatCompat({})





export default tseslint.config(
	configBirbhouseBase,
	configBirbhouseTypescript,
	{ files: ['src/**/*.{ts,tsx}'] },
	...compat.config({
		extends: ['next'],
	}),
)
