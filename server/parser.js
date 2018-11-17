import fs from 'fs'
import async from 'async'

const promise = {
    resolve : null,
    reject : null,
}

function insertSnippet (html, snippet, find) {
    const splits = html.split(find)
    return splits.join(`${snippet}${find}`)
}

function insertSnippets (html, config, base) {
    const parallels = config.snippets.map(snippet => {
        const path = `${base.path}${base[snippet].entry}`
        return (cb) => fs.readFile(path, 'utf8', cb)
    })
    async.parallel(parallels, (err, results) => {
        if (err) return promise.reject(err)

        config.snippets.map(snippet => {
            const selector = base[snippet].selector
            html = insertSnippet(html, results.shift(), selector)
        })

        promise.resolve(html)
    })
}

function replaceSnippets (html, config, base) {
    base.snippets.map(snippet => {
        const match = html.match(snippet.selector)
        if (!match) return

        let placeholder = snippet.placeholder

        if (snippet.insert)
            placeholder = snippet.placeholder.replace('{insert}', config[snippet.insert])

        html = html.replace(match[0], placeholder)
    })
    return html
}

export default function (config, base) {
    return new Promise( (resolve, reject) => {
        promise.resolve = resolve
        promise.reject = reject

        fs.readFile(`${config.path}${config.entry}`, 'utf8', (err, html) => {
            if (err) return reject(err)

            html = replaceSnippets(html, config, base)
            insertSnippets(html, config, base)
        })
    })
}
