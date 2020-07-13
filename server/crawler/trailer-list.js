const url = `https://movie.douban.com/tag/#/?sort=U&range=6,10&tags=`
const puppeteer = require('puppeteer')
const sleep = time => new Promise(resovle => { setTimeout(resovle, time) })
console.log(1)
  !(async () => {
    const browser = await puppeteer.launch({
      args: ['--no-sanbox'],
      dumpio: false
    });
    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: 'networkidle2'
    });
    await sleep(3000)
    await page.waitForSelector('.more')
    for (i = 0; i < 1; i++) {
      await sleep(3000)
      await page.click('.more')
    }

    const result = await page.evaluate(() => {
      var $ = window.$
      var items = $('.list-wp a')
      var links = []
      if (items.length >= 1) {
        items.each((index, item) => {
          let doubanId = $(item).find('div').data('id')
          let titile = $(item).find('.title').text()
          let rate = Number($(item).find('.rate').text())
          let poster = $(item).find('img').attr('src').replace('s_ratio', 'l_ratio')
          links.push({
            doubanId,
            titile,
            rate,
            poster
          })
        })
      }
      return links
    })

    await browser.close();
    console.log(result)

  })();