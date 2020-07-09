const Koa = require('koa')
const app = new Koa()
const {html,ejsTpl ,pugTpl} = require('./tpl')
const views = require('koa-views')
const {resolve} = require('path')
const ejs = require('ejs')
const pug = require('pug')

app.use(views(resolve(__dirname,'./views'),{
  extension: 'pug'
}))

app.use(async(ctx,next)=>{
  await ctx.render('index',{
    you: 'shen',
    me: '啦啦啦'
  })
})

app.listen(4455)