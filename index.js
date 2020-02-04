// This should not violate the import/order rule
import eslint from 'eslint';
import foo from './foo'

// This should violate the import/no-extraneous-dependencies rule
console.log(require('chalk').red('Hello there'));
