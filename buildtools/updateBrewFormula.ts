import * as fs from 'fs';
// @ts-ignore
import * as minimist from 'minimist';
import * as glob from 'glob';
import * as crypto from 'crypto';

// GET commandline args
const args = minimist(process.argv.slice(2));
const formulaPath: string = args.formula;
const distDir: string = args.dist;
const version: string = args.version;

glob(distDir + `/**/ilpma-v${version}.tar.gz`, (_, files) => {
  const packagePath = files[0];

  const packageContent = fs.readFileSync(packagePath);
  const hashSum = crypto.createHash('sha256');
  hashSum.update(packageContent);
  const sha256 = hashSum.digest('hex');

  let url: string;
  if (version.indexOf('-master-') > 0) {
    url = `https://github.com/falconandy/homebrew-ilpma/releases/download/latest/ilpma-v${version}.tar.gz`;
  } else {
    url = `https://github.com/falconandy/homebrew-ilpma/releases/download/v${version}/ilpma-v${version}.tar.gz`;
  }

  const formulaContent = fs.readFileSync(formulaPath, 'utf-8');
  const updatedFormulaContent = formulaContent
    .replace(/url "[^"]*"/, `url "${url}"`)
    .replace(/version "[^"]*"/, `version "${version}"`)
    .replace(/sha256 "[^"]*"/, `sha256 "${sha256}"`);

  fs.writeFileSync(formulaPath, updatedFormulaContent);
  console.log(`SUCCESS: Formula updated to ${url}`);
})
