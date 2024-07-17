import * as puppeteer from 'puppeteer'

export async function captureWebsiteThumbnail(url: string, outputPath: string) {
  // 启动浏览器
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })
  const page = await browser.newPage()

  // 设置视窗大小，这将影响截图的尺寸
  await page.setViewport({ width: 1280, height: 720 })

  // 访问网页
  await page.goto(url, { waitUntil: 'networkidle2' })

  // 捕获屏幕截图并保存到指定路径
  await page.screenshot({ path: `../images/${outputPath}` })

  // 关闭浏览器
  await browser.close()
}
