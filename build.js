import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { publicPath } from 'ultraviolet-static';
import { uvPath } from '@titaniumnetwork-dev/ultraviolet';
import { baremuxPath } from '@mercuryworkshop/bare-mux/node';
import { epoxyPath } from '@mercuryworkshop/epoxy-transport';

// Create dist directory
mkdirSync('dist', { recursive: true });

// Copy static files
console.log('Copying static files...');
copyFileSync(join(publicPath, 'index.html'), join('dist', 'index.html'));
copyFileSync(join(publicPath, 'uv.config.js'), join('dist', 'uv.config.js'));

// Copy UV files
console.log('Copying UV files...');
mkdirSync(join('dist', 'uv'), { recursive: true });
copyFileSync(join(uvPath, 'uv.bundle.js'), join('dist', 'uv', 'uv.bundle.js'));
copyFileSync(join(uvPath, 'uv.handler.js'), join('dist', 'uv', 'uv.handler.js'));
copyFileSync(join(uvPath, 'uv.sw.js'), join('dist', 'uv', 'uv.sw.js'));

// Copy Epoxy files
console.log('Copying Epoxy files...');
mkdirSync(join('dist', 'epoxy'), { recursive: true });
copyFileSync(join(epoxyPath, 'epoxy.bundle.js'), join('dist', 'epoxy', 'epoxy.bundle.js'));
copyFileSync(join(epoxyPath, 'epoxy.handler.js'), join('dist', 'epoxy', 'epoxy.handler.js'));
copyFileSync(join(epoxyPath, 'epoxy.sw.js'), join('dist', 'epoxy', 'epoxy.sw.js'));

// Copy Baremux files
console.log('Copying Baremux files...');
mkdirSync(join('dist', 'baremux'), { recursive: true });
copyFileSync(join(baremuxPath, 'baremux.bundle.js'), join('dist', 'baremux', 'baremux.bundle.js'));
copyFileSync(join(baremuxPath, 'baremux.handler.js'), join('dist', 'baremux', 'baremux.handler.js'));
copyFileSync(join(baremuxPath, 'baremux.sw.js'), join('dist', 'baremux', 'baremux.sw.js'));

console.log('Build completed!');
