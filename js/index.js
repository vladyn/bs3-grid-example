import { addTextToBody } from './modules/fetcher';
import { foo } from './modules/logger';

addTextToBody('bar');

console.log(foo());