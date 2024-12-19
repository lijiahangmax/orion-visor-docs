import{_ as a,c as n,a2 as p,o as i}from"./chunks/framework.DPuwY6B9.js";const k=JSON.parse('{"title":"普通安装","description":"orion-visor 普通安装","frontmatter":{"title":"普通安装","description":"orion-visor 普通安装"},"headers":[],"relativePath":"quickstart/install.md","filePath":"quickstart/install.md","lastUpdated":1733219106000}'),e={name:"quickstart/install.md"};function l(t,s,r,o,c,h){return i(),n("div",null,s[0]||(s[0]=[p(`<div class="info custom-block"><p class="custom-block-title">使用须知</p><p><strong>在使用本项目前，请您仔细阅读 <a href="/quickstart/license.html">开源协议</a> 及 <a href="/quickstart/disclaimer.html">免责声明</a>，确保您已充分理解其中的内容</strong></p></div><h3 id="所需环境" tabindex="-1">所需环境 <a class="header-anchor" href="#所需环境" aria-label="Permalink to &quot;所需环境&quot;">​</a></h3><ul><li>jdk 1.8</li><li>mysql 8.0.+</li><li>redis 6.0.+</li><li>maven 3.5.+</li><li>node 18.12.+</li><li>pnpm 9.1.+</li><li>nginx</li></ul><div class="tip custom-block"><p class="custom-block-title">提示</p><p>⚡ maven 推荐使用阿里云 mirror<br> ⚡ npm 建议使用淘宝镜像 <code>npm config set registry https://registry.npmmirror.com/</code><br> ⚡ pnpm 建议使用淘宝镜像 <code>pnpm config set registry https://registry.npmmirror.com/</code></p></div><h3 id="拉取代码" tabindex="-1">拉取代码 <a class="header-anchor" href="#拉取代码" aria-label="Permalink to &quot;拉取代码&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># github</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --depth=1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/dromara/orion-visor</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># gitee</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --depth=1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://gitee.com/dromara/orion-visor</span></span></code></pre></div><h3 id="初始化数据库" tabindex="-1">初始化数据库 <a class="header-anchor" href="#初始化数据库" aria-label="Permalink to &quot;初始化数据库&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 执行脚本</span></span>
<span class="line"><span>orion-visor/sql/init-1-schema-databases.sql</span></span>
<span class="line"><span>orion-visor/sql/init-2-schema-tables.sql</span></span>
<span class="line"><span>orion-visor/sql/init-3-schema-quartz.sql</span></span>
<span class="line"><span>orion-visor/sql/init-4-data.sql</span></span></code></pre></div><h3 id="构建后端代码" tabindex="-1">构建后端代码 <a class="header-anchor" href="#构建后端代码" aria-label="Permalink to &quot;构建后端代码&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 修改配置文件 (mysql, redis, secret-key)</span></span>
<span class="line"><span>orion-visor/orion-visor-launch/src/main/resources/application-prod.yaml</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 进入代码目录</span></span>
<span class="line"><span>cd orion-visor</span></span>
<span class="line"><span># 编译</span></span>
<span class="line"><span>mvn -U clean install -DskipTests</span></span></code></pre></div><h3 id="构建前端代码" tabindex="-1">构建前端代码 <a class="header-anchor" href="#构建前端代码" aria-label="Permalink to &quot;构建前端代码&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 进入代码目录</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> orion-visor/orion-visor-ui</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 下载 pnpm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 下载依赖</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 编译</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span></code></pre></div><h3 id="修改-nginx-配置" tabindex="-1">修改 nginx 配置 <a class="header-anchor" href="#修改-nginx-配置" aria-label="Permalink to &quot;修改 nginx 配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen       80;</span></span>
<span class="line"><span>    server_name  localhost;</span></span>
<span class="line"><span>    client_max_body_size 1024m;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 是否启动 gzip 压缩</span></span>
<span class="line"><span>    gzip  on;</span></span>
<span class="line"><span>    # 需要压缩的常见静态资源</span></span>
<span class="line"><span>    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;</span></span>
<span class="line"><span>    # 如果文件大于 1k 就启动压缩</span></span>
<span class="line"><span>    gzip_min_length 1k;</span></span>
<span class="line"><span>    # 缓冲区</span></span>
<span class="line"><span>    gzip_buffers 4 16k;</span></span>
<span class="line"><span>    # 压缩的等级</span></span>
<span class="line"><span>    gzip_comp_level 2;</span></span>
<span class="line"><span>    # access_log  /var/log/nginx/host.access.log  main;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        root   /usr/share/nginx/html;</span></span>
<span class="line"><span>        index  index.html index.htm;</span></span>
<span class="line"><span>        proxy_set_header Host $host;</span></span>
<span class="line"><span>        proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-Proto $scheme;</span></span>
<span class="line"><span>        # web history 模式 404</span></span>
<span class="line"><span>        try_files $uri $uri/ /index.html;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location /orion-visor/api {</span></span>
<span class="line"><span>        proxy_pass    http://localhost:9200/orion-visor/api;</span></span>
<span class="line"><span>        proxy_set_header Host $host;</span></span>
<span class="line"><span>        proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-Proto $scheme;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     location /orion-visor/keep-alive {</span></span>
<span class="line"><span>        proxy_pass    http://localhost:9200/orion-visor/keep-alive;</span></span>
<span class="line"><span>        proxy_http_version 1.1;</span></span>
<span class="line"><span>        proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span>        proxy_set_header Connection &quot;upgrade&quot;;</span></span>
<span class="line"><span>        proxy_set_header Host $host;</span></span>
<span class="line"><span>        proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-Proto $scheme;</span></span>
<span class="line"><span>        proxy_read_timeout 3600s;</span></span>
<span class="line"><span>        proxy_send_timeout 3600s;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span>    location = /50x.html {</span></span>
<span class="line"><span>        root   /usr/share/nginx/html;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="部署" tabindex="-1">部署 <a class="header-anchor" href="#部署" aria-label="Permalink to &quot;部署&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>复制 orion-visor/orion-visor-ui/dist/* 到 /usr/share/nginx/html</span></span>
<span class="line"><span>复制 orion-visor/orion-visor-launch/target/orion-visor-launch.jar 到 /data/orion-visor-space</span></span>
<span class="line"><span># 启动后台服务</span></span>
<span class="line"><span>nohup java -jar orion-visor-launch.jar --spring.profiles.active=prod 2&gt;&amp;1 &amp;</span></span>
<span class="line"><span># 启动 nginx</span></span>
<span class="line"><span>service nginx start</span></span></code></pre></div><h3 id="测试访问" tabindex="-1">测试访问 <a class="header-anchor" href="#测试访问" aria-label="Permalink to &quot;测试访问&quot;">​</a></h3><p>等待后端服务启动后 (2min±) 在浏览器中输入 <a href="http://localhost:1081/" target="_blank" rel="noreferrer">http://localhost:1081/</a> 访问 账号: <code>admin</code><br> 密码: <code>admin</code></p>`,18)]))}const g=a(e,[["render",l]]);export{k as __pageData,g as default};
