const workboxVersion="5.0.0";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"Ray's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"b60d7c65470db102b80add8bfdee80bd",url:"./404.html"},{revision:"713c26991575d02f2e461842b975acf7",url:"./about/index.html"},{revision:"57ce18fd02924bb4c885d65cdc363a7e",url:"./archives/index.html"},{revision:"ec6ce4749fafd345e1e072dd9e1040aa",url:"./aria2ng/index.html"},{revision:"a72b2417179029b7d5c043bdd935267e",url:"./categories/cdn/index.html"},{revision:"8f767fa8c25b354069348989b0e22eee",url:"./categories/chrome/index.html"},{revision:"438261408f3ed92b8ffb1d2eb67b3f78",url:"./categories/ci/index.html"},{revision:"f80fcd81941ec73acdcfdf064e9c1a35",url:"./categories/github/index.html"},{revision:"8cb1955c961b8891d325016c60db4f66",url:"./categories/hosts/index.html"},{revision:"f56ad0934af0eca1e3c88e65d32e1843",url:"./categories/html/index.html"},{revision:"5e82759b83b3107d519a0f8f58aae3d0",url:"./categories/html入门/index.html"},{revision:"01b392a182058a63604a11dc51c27af4",url:"./categories/hugo/index.html"},{revision:"59cc4d82222e2cd4677b6d858ad76c0b",url:"./categories/index.html"},{revision:"e42b5d3ad395e43505b813dc3b14ebab",url:"./categories/picgo/index.html"},{revision:"ebf3702ecb37b420cd6097aab78fd737",url:"./categories/python/index.html"},{revision:"243f3f7c820efaac042c43ac81af2709",url:"./categories/python关键字/index.html"},{revision:"812cf332bf2de3b604d5eb3cc776f101",url:"./categories/python学习笔记/index.html"},{revision:"ad283511b3f4a39ca40a8cc6438fe6f4",url:"./categories/代理/index.html"},{revision:"800410bc94d1da4878731aee6f737699",url:"./categories/免费空间/index.html"},{revision:"d2d693fbb75b96872934abf43ae9a660",url:"./categories/博客/index.html"},{revision:"2959503222f965b3f6b67b2eaf17a803",url:"./categories/吐槽/index.html"},{revision:"359684c9b693242db24080d60d0ccda2",url:"./categories/图床/index.html"},{revision:"d1419899364f546d00bce533ef852e41",url:"./categories/域名/index.html"},{revision:"86e85179f4a2240bce8535785a00c5a9",url:"./categories/对象存储/index.html"},{revision:"a62af318281f1e7cac84ddeddc47a2a3",url:"./categories/批处理/index.html"},{revision:"dc763ec3f441721462db10b697532ea7",url:"./categories/折腾/index.html"},{revision:"fcd0f3489cd6c3d0fc7ed91979e28a0b",url:"./categories/搞笑/index.html"},{revision:"388c22692b3250d72ba28600c13e63f1",url:"./categories/服务器/index.html"},{revision:"e2dc510f5083729b439ee111d2cc8368",url:"./categories/爬虫/index.html"},{revision:"7308c6388949ee6c8a16f810268e8e4c",url:"./categories/算法/index.html"},{revision:"a4a5a00b8fe84020f2b0fcaa95e8a4b8",url:"./categories/网站/index.html"},{revision:"e27927f534ab97e3fcda369f06c6c9fa",url:"./categories/邮箱/index.html"},{revision:"450f5e15a68bf53bef9ba55287c413be",url:"./css/DPlayer.min.css"},{revision:"ab46869030565993ad52d4ebc193a0d2",url:"./css/font.css"},{revision:"b80750f337f8c130e32e2474fff2e69c",url:"./css/hot-tags.css"},{revision:"4055df09a76134d10681d9614e93fd89",url:"./css/insight.css"},{revision:"cf87a8ecd1d89de9051adb1cb0826d08",url:"./css/main-banner.css"},{revision:"d75c37ed6097f11d7825946af59c27fa",url:"./css/meme.min.adc529e2642275587c05ee35474759b9af700ab8067c9e60040f8b78716ff31f.css"},{revision:"8d2a4fd8cbf836428792bdd7f92af172",url:"./fonts/glyph-correction.woff2"},{revision:"731beb121d7bd263a68792fbda697d31",url:"./goto/index.html"},{revision:"d541c449dd6a369b68516b2a40862683",url:"./index.html"},{revision:"4097986cff510567068128f4b18004a6",url:"./js/DPlayer.min.js"},{revision:"6653527062f3bc0815a3a09e5c8b5e84",url:"./js/flowchart.js"},{revision:"857bd850aa7ae067f385ed9fdc5ee8dc",url:"./js/flv.min.js"},{revision:"357901ac93910b8a12d24184817573ff",url:"./js/insight.js"},{revision:"67f9bb88641c997d1c325909d9eadb55",url:"./js/instantclick.min.js"},{revision:"2cb90c06cfc2084e0e11ca2b8a10f6c9",url:"./js/jquery.easing.1.3.js"},{revision:"89c45121934ed4664ff3ca811a008226",url:"./js/jquery.lazyload.min.js"},{revision:"4a356126b9573eb7bd1e9a7494737410",url:"./js/jquery.min.js"},{revision:"28ef3dc306be44a30ec0d0ffe2bee109",url:"./js/jquery.waypoints.min.js"},{revision:"c50596fd5295610c129d94194c37a779",url:"./js/linkcard.js"},{revision:"c5a6d23bea20750472bd446f051fb305",url:"./js/meme.min.f36dfafc81a5064b571150628139b6f380711072aab59919073ad59be8fe1ee5.js"},{revision:"d215c2fcffdaa7759bf99e6da9f7c402",url:"./js/raphael.min.js"},{revision:"b106ecb09811bf627fea68cdd9646222",url:"./js/typing.js"},{revision:"7146c9ddd5693d08630a495de9421d4d",url:"./js/Valineex.min.js"},{revision:"6605e9c42a0d7e78cc36d3189d632c47",url:"./json-data/hot-tags.json"},{revision:"dc1c04b0c17e3fbb0bd594abc2567358",url:"./json-data/links.json"},{revision:"d2b3632bcfb08200057a24d02d3cc655",url:"./json-data/main-banner.json"},{revision:"3e79c7a2c0ed690f7143c43fa42e2ed2",url:"./json-data/python.json"},{revision:"23c69cbf088e47f904c101e9db72015c",url:"./learn/index.html"},{revision:"775a091f8fb3e71019e0ec5c5813b1dd",url:"./links/index.html"},{revision:"1e30702f7574486798e24eb996204770",url:"./lunr.json"},{revision:"d383aa931ea48ff061d6ae53cc31c93b",url:"./manifest.json"},{revision:"c0388369aad9d89dd77f17a0356d4e1f",url:"./now.json"},{revision:"428adb725c487e7847f9709860ce7ca8",url:"./p/1000-uv/index.html"},{revision:"bfa6f5fe67f8f9a57fa66b6c055e3299",url:"./p/about-valine/index.html"},{revision:"b902c6bec5cd79383681c944323aa1de",url:"./p/av-and-bv/index.html"},{revision:"b9487449742ddd7d8dd6d9bdfa34c0c6",url:"./p/backblaze-free-object-storage/index.html"},{revision:"35365f83724d0a77a9706a74b4babbdd",url:"./p/build-a-blog-recommendation/index.html"},{revision:"e8ef8eb9e6f0855bb88840fb74e023f7",url:"./p/build-website-with-leancloud/index.html"},{revision:"3a60a87c91965b9427618b5feb2aa389",url:"./p/cf-worker-proxy/index.html"},{revision:"bad808a612ef0841332be21729914637",url:"./p/chrome-crashed/index.html"},{revision:"daf5afa5d77820aa3a0d2f79aa1a0893",url:"./p/cloudmusic-spider-artlist/index.html"},{revision:"791cf9b75b22057afd4efb65033e76c4",url:"./p/cooking-with-cpu/index.html"},{revision:"30bedc216a489fc2dd23118b388c1093",url:"./p/ddos-guard-free-cdn/index.html"},{revision:"df8efa69edda7de0e3e413a8b32b596b",url:"./p/deploy-your-hugo-and-hexo-blog-to-netlify/index.html"},{revision:"90de57a55b86552f4fae446664be42f2",url:"./p/domain-mail/index.html"},{revision:"14a86aaadf84378b60e282a656b12a47",url:"./p/github-hosts/index.html"},{revision:"f640c77e41b218d21ba7ce5228d6c181",url:"./p/github-pages-becomes-faster/index.html"},{revision:"f590bb6e4900aaddbbc3119b52c31c27",url:"./p/goto-transfer-page/index.html"},{revision:"600afb32f0e7c33e445ebffbeecf7b34",url:"./p/how-to-read-google-correctly/index.html"},{revision:"8655fee61fcc3d626e2b410d133effd2",url:"./p/html-1/index.html"},{revision:"2a8487251d5237ec3acfe0d28fed653f",url:"./p/html-2/index.html"},{revision:"bce007b66fb88a736e4603243a17c9a8",url:"./p/hugo-auto-deploy/index.html"},{revision:"356304652727d63e5e6cfe893431b6ce",url:"./p/index.html"},{revision:"6c6d82eefc842154ff33648648b817cc",url:"./p/kodcloud-with-centos7/index.html"},{revision:"6181ec1a571aae3e2974a32f2f4ba405",url:"./p/kugoumusic-spider-artlist/index.html"},{revision:"51500760fb3c2deceba2cb5513d2e6ee",url:"./p/music-spider-downloader/index.html"},{revision:"6075e97f6c75d7f2dd2d272d77e7f589",url:"./p/picgo-and-gitee-markdown-pic/index.html"},{revision:"8c537f60c1f5dfc97cee7365b2faa18d",url:"./p/python-assert/index.html"},{revision:"bed6dfab88aabbbfca5403231ee78b22",url:"./p/python-eval/index.html"},{revision:"66f60a73343f05c5717c9b276bde145b",url:"./p/python-exec/index.html"},{revision:"3f7ddb84ef3eec42b49d80cad40544c0",url:"./p/python-special-characters/index.html"},{revision:"9eed3ad110df8488adc1aa9019c0dfc2",url:"./p/python-with/index.html"},{revision:"7475af890134f3fd46011b4ffda29c00",url:"./p/python-yield/index.html"},{revision:"25472ae53d1dde70d347abc2adc99dc0",url:"./p/qqmusic-spider-artlist/index.html"},{revision:"dbd49b51e68dc57b41ddc6e2ed45830d",url:"./p/spider-api/index.html"},{revision:"b8503a48cbc397e2bb5cc805a220121e",url:"./p/travis-ci-automatically-deploys-hugo-blog/index.html"},{revision:"93d5eda3ea63724f6275dc29443820e2",url:"./p/ulang/index.html"},{revision:"44537823410daddc4d29ee3c6bff4eec",url:"./p/白嫖office365/index.html"},{revision:"b20134e4e5b0faf092e43a70cc5b6f63",url:"./page/1/index.html"},{revision:"3e63c741137838f76ad310ed516ac53b",url:"./page/2/index.html"},{revision:"441c5930607564d7f96c22ad674a1e30",url:"./page/3/index.html"},{revision:"309d6ff6276793aeb9905c269c9e4132",url:"./page/4/index.html"},{revision:"0d4e1cdf4b520d1e2dfb35109e6ade81",url:"./tags/api/index.html"},{revision:"1cc826ac025d6a34aabf82eea527ef48",url:"./tags/backblaze/index.html"},{revision:"e1dbab7019507201d2dc08459286efe2",url:"./tags/bilibili/index.html"},{revision:"ac1b596ad7d20979dc5e6f9883f34f32",url:"./tags/cdn/index.html"},{revision:"d961a6c64a53fd6a5fc473f38b47b3ae",url:"./tags/centos/index.html"},{revision:"04ffd74605f08edf3377f44f1bf6ce61",url:"./tags/chrome/index.html"},{revision:"607568d8e19073015bba7142f9cab95d",url:"./tags/cloudflare/index.html"},{revision:"b078610f18a4e468e4573c838ff1b48f",url:"./tags/cpu/index.html"},{revision:"f4845559b406f6a736447d2bf57f8e21",url:"./tags/git/index.html"},{revision:"3c2a4a8851b59e7b0562ff3b2ab0231a",url:"./tags/gitee/index.html"},{revision:"7763fc395fbcb9b07b61e20a4abc6b8a",url:"./tags/github-pages/index.html"},{revision:"eb34029afc0a179c5fbaf4c0bf3e601d",url:"./tags/github/index.html"},{revision:"a9c2186909c7a0c782ca7a9415fe7e01",url:"./tags/hosts/index.html"},{revision:"459a241e8f8620c205f9b0567fb1dbc7",url:"./tags/html/index.html"},{revision:"088cc87687802bfae17256125914e9b7",url:"./tags/html入门/index.html"},{revision:"7bc3115bb16925918fbd43254f5b36c9",url:"./tags/html结构/index.html"},{revision:"a9b10d8605b05f9d60111d7931c67139",url:"./tags/hugo/index.html"},{revision:"c004b1449b0510c54d44f325fd029868",url:"./tags/index.html"},{revision:"a0aee70aaa52da848fac34f4bbb2f9ee",url:"./tags/js/index.html"},{revision:"68edf1deab2ccf1a5b4ee97cf34bc15c",url:"./tags/netlify/index.html"},{revision:"b9ac5cacab2532903109820e0864c315",url:"./tags/office/index.html"},{revision:"63167f200f0c4bf18ea578e90c58a5ab",url:"./tags/pages/index.html"},{revision:"886cad6d125bd3e35719d412955d62cc",url:"./tags/picgo/index.html"},{revision:"476e08e98c5ac7f075e25057053329e8",url:"./tags/python/index.html"},{revision:"bce1f7eca9cdd6f40fee1df72e419959",url:"./tags/python关键字/index.html"},{revision:"7dc3c0f78d666b27ce998b5482ba662d",url:"./tags/python学习笔记/index.html"},{revision:"51392e4f3051765c87367e6adcd9c2df",url:"./tags/python进阶/index.html"},{revision:"f55b23b20fccb741dc6f0b3be55066af",url:"./tags/qq音乐/index.html"},{revision:"c55c3e4470b0a308909a73ab02df0d1f",url:"./tags/travis-ci/index.html"},{revision:"50e4bda6125748c46f1a22c3f0613e1a",url:"./tags/ulang/index.html"},{revision:"0207a5f88edd74aa127df3f993648619",url:"./tags/中转/index.html"},{revision:"88cfa0f054424928557cf081dfe313a3",url:"./tags/代理/index.html"},{revision:"a99c9d70731b3d39f1c5adb50a0f1f33",url:"./tags/会员/index.html"},{revision:"0ed0f14fc7fc41941b7a270c498c6d89",url:"./tags/免费空间/index.html"},{revision:"1ad9baaf96b137050c7f4ada5b63883e",url:"./tags/关键字/index.html"},{revision:"fbf02b7aec1660fcec3d677652b15d5e",url:"./tags/内置函数/index.html"},{revision:"5e0e7aff05bb27e46dfd8ffe95494957",url:"./tags/加速/index.html"},{revision:"000820ec82e9849a7c7c8a21915a105f",url:"./tags/博客/index.html"},{revision:"fcf914e8105d84d1db366ccdd5757dc3",url:"./tags/域名/index.html"},{revision:"0522bba87f50fa72299a616042d1c561",url:"./tags/多线程/index.html"},{revision:"09dc9288331fe8bcb688c41430d3177e",url:"./tags/对象存储/index.html"},{revision:"c742f77fc0697348a849be4a9536080c",url:"./tags/工具/index.html"},{revision:"0fa2bad23f95fe0e2f857fc87223bdf7",url:"./tags/折腾/index.html"},{revision:"0eafd07a4f6c91062832f7ba87d9c83b",url:"./tags/搞机/index.html"},{revision:"9f706affea9a9a538a1c5755b30c5ec5",url:"./tags/搞笑/index.html"},{revision:"90200288ae860b84619113661c81fd34",url:"./tags/教程/index.html"},{revision:"15369f2a71f591934703d65829213e36",url:"./tags/日常/index.html"},{revision:"2f26c61bb4cbdc00e6bbc57efdb4efce",url:"./tags/服务器/index.html"},{revision:"8038ebef11b4be2c75fc597c278027fc",url:"./tags/爬虫/index.html"},{revision:"5d0a794e5f358fe3389a44b3bb06c73c",url:"./tags/白嫖/index.html"},{revision:"311d37375b27a73d0bca85f101d5d8de",url:"./tags/破解/index.html"},{revision:"9b786afe6213896dbf3b883ca0bbff2f",url:"./tags/福利/index.html"},{revision:"105befcf8abb8d571a4626220c8eeec0",url:"./tags/算法/index.html"},{revision:"90b7eac8fd7a65a9aabbbcb9acaca5a1",url:"./tags/素贞/index.html"},{revision:"81baaad5561110c05119534ca6fe9845",url:"./tags/网易/index.html"},{revision:"7ae27d96b9fc1a6f21a1948553b6ae02",url:"./tags/网盘/index.html"},{revision:"38121fde4938b49ed481e95c1f0a2502",url:"./tags/网站/index.html"},{revision:"6267c5372c4fafeea7ce53f908f17f22",url:"./tags/自定义/index.html"},{revision:"aeefa3238abb4f8ff53978fe255c13f2",url:"./tags/谷歌/index.html"},{revision:"45c2c69390f508dbc93965b39cd53a0a",url:"./tags/酷狗/index.html"},{revision:"50e2607db66ae57041111d0adb2931cd",url:"./tags/音乐/index.html"},{revision:"ec6ce4749fafd345e1e072dd9e1040aa",url:"./tools/aria2ng/index.html"},{revision:"2ba884c84aeb725407039e8c6441aa10",url:"./tools/bv2av/index.html"},{revision:"52c61761741d10fb12b249ae3e916ccf",url:"./tools/cloudmusic/index.html"},{revision:"0b846c6296e461ccb1f76b85587c18a6",url:"./tools/cloudmusic/main.js"},{revision:"e61f536526386ddac89dfbc693a9942c",url:"./tools/index.html"},{revision:"93a6c759d506b2a980d5700d48f7a50b",url:"./writes/index.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/reuixiy\/hugo-theme-meme\/master\/static\/icons\/.*/,new workbox.strategies.CacheFirst({cacheName:"external-images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();