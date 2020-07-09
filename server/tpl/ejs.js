module.exports = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial=1">
      <title>Koa Server HTML</title>
      <link href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.0.0-beta.2/css/bootstrap.min.css" rel="stylesheet">
      <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.0.0-beta.2/js/bootstrap.bundle.min.js"></script>
    </head>
    <body>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h1>Hi <%= you %></h1>
            <p>This is <%= me %></p>
          </div>
          <div class="col-md-4">
            <p>测试动态ejs模板</p>
          </div>
        </div>
      </div>
    </body>
  </html>
`