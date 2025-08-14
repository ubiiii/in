const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing image paths for GitHub Pages...');

// Function to recursively find HTML files
function findHtmlFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findHtmlFiles(fullPath));
    } else if (item.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to fix image paths in HTML content
function fixImagePaths(content) {
  // Fix absolute image paths to include /in/ prefix
  let fixed = content.replace(/src="\/([^"]*\.(png|jpg|jpeg|svg|gif|webp))"/g, 'src="/in/$1"');
  
  // Fix href paths for favicons and other assets (avoid double prefix)
  fixed = fixed.replace(/href="\/in\/in\/(favicons\.png)"/g, 'href="/in/$1"');
  fixed = fixed.replace(/href="\/(favicons\.png)"/g, 'href="/in/$1"');
  
  // Fix preload image paths (avoid double prefix)
  fixed = fixed.replace(/href="\/in\/in\/([^"]*\.(png|jpg|jpeg|svg|gif|webp))"/g, 'href="/in/$1"');
  fixed = fixed.replace(/href="\/([^"]*\.(png|jpg|jpeg|svg|gif|webp))"/g, 'href="/in/$1"');
  
  return fixed;
}

// Main execution
const outDir = './out';
if (!fs.existsSync(outDir)) {
  console.error('❌ Build output directory "out" not found. Run "npm run build" first.');
  process.exit(1);
}

const htmlFiles = findHtmlFiles(outDir);
console.log(`📁 Found ${htmlFiles.length} HTML files to process`);

let fixedCount = 0;
for (const file of htmlFiles) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    const fixedContent = fixImagePaths(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(file, fixedContent, 'utf8');
      fixedCount++;
      console.log(`✅ Fixed: ${path.relative(outDir, file)}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${file}:`, error.message);
  }
}

console.log(`🎉 Fixed image paths in ${fixedCount} files!`);
console.log('✅ Ready for GitHub Pages deployment!');
