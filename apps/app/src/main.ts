import { URI } from 'vscode-uri';
import { Either, left, isLeft } from 'fp-ts/lib/Either';
import { default as JSZip } from 'jszip';
import { dependencyA } from '@org/dependencyA';
import { Database } from 'sqlite3';

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
// Learning: replace `import * as JSZip from 'jszip';` with `import { default as JSZip } from 'jszip';`

const dependencyResult = dependencyA();
console.log('Importing library nia nx typescript path: ' + dependencyResult);
// Learning: default config works fine

const db = new Database('foobar.sqlite')
db.run("CREATE TABLE lorem (info TEXT)");