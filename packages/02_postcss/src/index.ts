import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import * as path from "node:path";
import * as fs from "node:fs";
import {fileURLToPath} from "node:url";

const srcDir = path.dirname(fileURLToPath(import.meta.url))
const cssPath = path.join(srcDir, 'index.css')
const style = fs.readFileSync(cssPath, "utf8")

postcss([autoprefixer({overrideBrowserslist: 'last 10 versions'})])
  .process(style)
  .then(res => console.log(res.css))

