import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import * as sass from 'sass'

// 定义输出和输出路径
const srcDir = path.dirname(fileURLToPath(import.meta.url))
const scssPath = path.join(srcDir, 'index.scss')
const cssDir = 'dist'
const cssPath = path.resolve(cssDir, 'index.css')

// 编译
const result = sass.compile(scssPath)

// 将编译后的字符串写进文件里
if(!fs.existsSync(cssDir)){
  fs.mkdirSync(cssDir, { recursive: true })
}

fs.writeFileSync(cssPath, result.css)
