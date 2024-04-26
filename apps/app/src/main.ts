import { URI } from 'vscode-uri';
import { Either, left, isLeft } from 'fp-ts/lib/Either';
import { default as JSZip } from 'jszip';

console.log('Start testing some scenarios...');

const isUri = URI.isUri({});
console.log('Using commonjs libs: ' + !isUri);
// Learning: default config works fine

const either: Either<true, false> = left(true);
console.log(
  'Importing nested modules: ' + (isLeft(either) ? either.left : false)
);
// Learning: default config works fine

const jszip = JSZip();
console.log('Instantiating a default import: ' + jszip.name);
// Replace `import * as JSZip from 'jszip';` with `import { default as JSZip } from 'jszip';`
