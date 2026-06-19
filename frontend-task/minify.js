const fs = require('fs');
const path = require('path');

// Helper to minify CSS
function minifyCSS(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '') // remove multi-line comments
    .replace(/\s+/g, ' ')             // collapse multiple whitespaces
    .replace(/\s*([\{\}:;,])\s*/g, '$1') // remove space around separators
    .replace(/;}/g, '}')              // remove last semicolon in blocks
    .trim();
}

// Helper to minify JS (safely removes comments and collapses space without breaking code strings)
function minifyJS(js) {
  return js
    .replace(/\/\*[\s\S]*?\*\//g, '') // remove block comments
    // Clean line comments while avoiding URL strings like 'https://...'
    .replace(/(?:^|[^:])\/\/.*$/gm, (match) => {
      // If it starts with https: or http: ignore it
      if (match.includes('http://') || match.includes('https://')) {
        return match;
      }
      return match.substring(0, match.indexOf('//'));
    })
    .replace(/\s+/g, ' ') // collapse spacing
    .replace(/\s*([\{\}\(\)=\+\-\*\/,;:<>])\s*/g, '$1') // remove spacing around operator symbols
    .trim();
}

// Run minification
try {
  console.log('Starting minification...');

  // Minify style.css
  const stylePath = path.join(__dirname, 'css', 'style.css');
  const styleMinPath = path.join(__dirname, 'css', 'style.min.css');
  if (fs.existsSync(stylePath)) {
    const styleContent = fs.readFileSync(stylePath, 'utf8');
    const styleMin = minifyCSS(styleContent);
    fs.writeFileSync(styleMinPath, styleMin, 'utf8');
    console.log(`Minified CSS written to: ${styleMinPath} (${styleContent.length}B -> ${styleMin.length}B)`);
  }

  // Minify responsive.css
  const responsivePath = path.join(__dirname, 'css', 'responsive.css');
  const responsiveMinPath = path.join(__dirname, 'css', 'responsive.min.css');
  if (fs.existsSync(responsivePath)) {
    const responsiveContent = fs.readFileSync(responsivePath, 'utf8');
    const responsiveMin = minifyCSS(responsiveContent);
    fs.writeFileSync(responsiveMinPath, responsiveMin, 'utf8');
    console.log(`Minified CSS written to: ${responsiveMinPath} (${responsiveContent.length}B -> ${responsiveMin.length}B)`);
  }

  // Minify app.js
  const appPath = path.join(__dirname, 'js', 'app.js');
  const appMinPath = path.join(__dirname, 'js', 'app.min.js');
  if (fs.existsSync(appPath)) {
    const appContent = fs.readFileSync(appPath, 'utf8');
    const appMin = minifyJS(appContent);
    fs.writeFileSync(appMinPath, appMin, 'utf8');
    console.log(`Minified JS written to: ${appMinPath} (${appContent.length}B -> ${appMin.length}B)`);
  }

  console.log('Minification completed successfully!');
} catch (error) {
  console.error('Error during minification:', error);
  process.exit(1);
}
