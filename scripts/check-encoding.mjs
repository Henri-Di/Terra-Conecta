import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const TARGET_DIRS = ['apps', 'packages', 'src'];
const FILE_EXTENSIONS = new Set([
  '.ts',
  '.tsx',
  '.js',
  '.jsx',
  '.json',
  '.css',
  '.html',
  '.md',
  '.yml',
  '.yaml',
]);

const suspiciousPatterns = [
  ' ',
  'ÃƒÂ¡',
  'ÃƒÂ¢',
  'ÃƒÂ£',
  'ÃƒÂ§',
  'ÃƒÂ©',
  'ÃƒÂª',
  'ÃƒÂ­',
  'ÃƒÂ³',
  'ÃƒÂµ',
  'ÃƒÂº',
  'Ã¢â‚¬â„¢',
  'Ã¢â‚¬Å“',
  'Ã¢â‚¬Â',
  'Ã¢â‚¬â€œ',
  'Ã¢â‚¬â€',
  '  ',
];

const ignoredDirs = new Set([
  'node_modules',
  'dist',
  'build',
  '.git',
  '.next',
  '.turbo',
  'coverage',
]);

const matches = [];

function walk(dir) {
  if (!fs.existsSync(dir)) return;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ignoredDirs.has(entry.name)) continue;

    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }

    const ext = path.extname(entry.name);
    if (!FILE_EXTENSIONS.has(ext)) continue;

    const content = fs.readFileSync(fullPath, 'utf8');

    for (const pattern of suspiciousPatterns) {
      if (content.includes(pattern)) {
        matches.push({ file: fullPath, pattern });
        break;
      }
    }
  }
}

for (const dir of TARGET_DIRS) {
  walk(path.join(ROOT, dir));
}

if (matches.length > 0) {
  console.error('\nArquivos com possivel problema de encoding:\n');
  for (const match of matches) {
    console.error(`- ${match.file} -> padrao suspeito: "${match.pattern}"`);
  }
  console.error('\nFalhando verificacao de encoding.\n');
  process.exit(1);
}

console.log('Encoding check OK.');