// let's go bro
const Pageres = require('pageres');
const pkg = require('./package.json')

let dest = process.argv[2]
let url = process.argv[3]

if (!url) {
  url = dest
  dest = __dirname
}

if (!url) {
  throw new Error('Argument error')
}

const pageres = new Pageres({
    delay: 2,
    filename: '<%= date %>_<%= time%>_<%= url %>_<%= size %><%= crop %>',
    format: 'png',
    userAgent: `sshowbot/${pkg.version} pageres#${pkg.dependencies.pageres}`,
    delay: 3
  })
  .src(url, ['1366x6000', '1920x1080'])
  .dest(dest)
  .run()
  .then(() => console.log(`Screens for '${url}' in '${dest}'`));
