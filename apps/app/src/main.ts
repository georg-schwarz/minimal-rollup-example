import { URI } from 'vscode-uri';
import { Either, left, isLeft } from 'fp-ts/lib/Either';

console.log('Start testing some scenarios...');

const isUri = URI.isUri({}); // use functionality of commonjs module
console.log('Using commonjs libs: ' + !isUri);

const either: Either<true, false> = left(true);
console.log(
  'Importing nested modules: ' + (isLeft(either) ? either.left : false)
);
