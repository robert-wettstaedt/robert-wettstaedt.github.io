import util from 'util'
import fs from 'fs'

const debug = true

function sendRaw (res, err, code) {
    res.writeHead(code || 500, { 'Content-Type': 'application/javascript' })
    res.end(util.inspect(err))
    console.log(new Date(), util.inspect(err))
}

function send (res, err, fileName, code) {
    const path = '/usr/share/nginx/html/'
    fs.readFile(`${path}${fileName}`, 'utf8', (err, html) => {
        if (err) return sendRaw(res, err)

        res.writeHead(code, { 'Content-Type': 'text/html' })
        res.end(html)
        console.log(new Date(), util.inspect(err))
    })
}


export default {

    base : function (res, err, fileName, code) {
        console.log(arguments)
        if (debug)
            sendRaw(res, err, code)
        else
            send(res, err, fileName, code)
    },

    x4 : function (res, err) {
        const fileName = '404.html'
        const code = 404
        this.base(res, err, fileName, code)
    },

    x5 : function (res, err) {
        const fileName = '50x.html'
        const code = 500
        this.base(res, err, fileName, code)
    },

}
