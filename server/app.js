import http from 'http'

import parser from './parser'
import error from './error'

import config from './config.json'
import data from '../client/data.json'

const hostname = '127.0.0.1'
const port = 8008
const defaultSite = 'r-wettstaedt'
const defaultData = {
    id: defaultSite,
    name: defaultSite,
    description: 'Website of Robert Wettstädt, Student, Web Developer, JavaScript Enthusiast',
}

http.createServer( (req, res) => {
    if (req.url === '/404.html') return error.x4(res)

    const siteName = req.headers.host.replace('www.', '')
    const subdomain = siteName.split('.')[0]
    const path = req.url.slice(1)

    const site = Object.assign({},
        config.sites[subdomain] || config.sites[defaultSite],
        data.data.filter((el) => subdomain === el.id)[0] || defaultData
    )

    if (path) {
        site.path = site.path.replace('{path}', path)
    }

    console.log(new Date(), `${req.headers.host}${req.url}`)

    parser(site, config.base).then(h => {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(h)
    }, (err) => error.x5(res, err))

}).listen(port, hostname, () => {
    console.log(new Date(), `Server running at http://${hostname}:${port}/`)
})
