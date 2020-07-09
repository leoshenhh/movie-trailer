module.exports = `
doctype html
html
  head
    meta(charset="utf-8")
    meta(name="viewport" content="width=device-width,initial=1")
    title Koa server Pug
    link(href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.0.0-beta.2/css/bootstrap.min.css" rel="stylesheet")
    script(src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js")
    script(src="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.0.0-beta.2/js/bootstrap.bundle.min.js")
  body
    .container
      .row
        .col-md-8
          h1 Hi #{you}
          p this is #{me} 
        .col-md-4
          p 测试动态pug模板
`