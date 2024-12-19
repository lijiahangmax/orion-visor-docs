import{_ as a,c as n,a2 as i,o as e}from"./chunks/framework.DPuwY6B9.js";const k=JSON.parse('{"title":"本地调试","description":"orion-visor 本地调试","frontmatter":{"title":"本地调试","description":"orion-visor 本地调试"},"headers":[],"relativePath":"quickstart/dev.md","filePath":"quickstart/dev.md","lastUpdated":1733219106000}'),t={name:"quickstart/dev.md"};function l(p,s,r,o,c,d){return e(),n("div",null,s[0]||(s[0]=[i(`<div class="info custom-block"><p class="custom-block-title">使用须知</p><p><strong>在使用本项目前，请您仔细阅读 <a href="/quickstart/license.html">开源协议</a> 及 <a href="/quickstart/disclaimer.html">免责声明</a>，确保您已充分理解其中的内容</strong></p></div><h3 id="所需环境" tabindex="-1">所需环境 <a class="header-anchor" href="#所需环境" aria-label="Permalink to &quot;所需环境&quot;">​</a></h3><ul><li>jdk 1.8</li><li>mysql 8.0.+</li><li>redis 6.0.+</li><li>maven 3.5.+</li><li>node 18.12.+</li><li>pnpm 9.1.+</li></ul><div class="tip custom-block"><p class="custom-block-title">提示</p><p>⚡ maven 推荐使用阿里云 mirror<br> ⚡ npm 建议使用淘宝镜像 <code>npm config set registry https://registry.npmmirror.com/</code><br> ⚡ pnpm 建议使用淘宝镜像 <code>pnpm config set registry https://registry.npmmirror.com/</code></p></div><h3 id="拉取代码" tabindex="-1">拉取代码 <a class="header-anchor" href="#拉取代码" aria-label="Permalink to &quot;拉取代码&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># github</span></span>
<span class="line"><span>git clone --depth=1 https://github.com/dromara/orion-visor</span></span>
<span class="line"><span># gitee</span></span>
<span class="line"><span>git clone --depth=1 https://gitee.com/dromara/orion-visor</span></span></code></pre></div><h3 id="初始化数据库" tabindex="-1">初始化数据库 <a class="header-anchor" href="#初始化数据库" aria-label="Permalink to &quot;初始化数据库&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 执行脚本</span></span>
<span class="line"><span>orion-visor/sql/init-1-schema-databases.sql</span></span>
<span class="line"><span>orion-visor/sql/init-2-schema-tables.sql</span></span>
<span class="line"><span>orion-visor/sql/init-3-schema-quartz.sql</span></span>
<span class="line"><span>orion-visor/sql/init-4-data.sql</span></span></code></pre></div><h3 id="修改后端配置" tabindex="-1">修改后端配置 <a class="header-anchor" href="#修改后端配置" aria-label="Permalink to &quot;修改后端配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 修改配置文件 (mysql, redis, secret-key)</span></span>
<span class="line"><span>orion-visor/orion-visor-launch/src/main/resources/application-prod.yaml</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 进入代码目录</span></span>
<span class="line"><span>cd orion-visor</span></span>
<span class="line"><span># 编译</span></span>
<span class="line"><span>mvn -U clean install -DskipTests</span></span>
<span class="line"><span># 启动</span></span>
<span class="line"><span>com.orion.visor.launch.LaunchApplication</span></span></code></pre></div><h3 id="修改前端配置" tabindex="-1">修改前端配置 <a class="header-anchor" href="#修改前端配置" aria-label="Permalink to &quot;修改前端配置&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 进入代码目录</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> orion-visor/orion-visor-ui</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 下载 pnpm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 下载依赖</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 运行</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div><h3 id="测试访问" tabindex="-1">测试访问 <a class="header-anchor" href="#测试访问" aria-label="Permalink to &quot;测试访问&quot;">​</a></h3><p>启动前端后会自动打开浏览器 输入<br> 账号: <code>admin</code><br> 密码: <code>admin</code></p><h3 id="文档" tabindex="-1">文档 <a class="header-anchor" href="#文档" aria-label="Permalink to &quot;文档&quot;">​</a></h3><p>文档只有在 <code>dev</code> 环境才可以访问</p><ul><li><code>swagger 文档</code> <a href="http://127.0.0.1:9200/doc.html" target="_blank" rel="noreferrer">http://127.0.0.1:9200/doc.html</a></li><li><code>druid console</code> <a href="http://127.0.0.1:9200/druid/index.html" target="_blank" rel="noreferrer">http://127.0.0.1:9200/druid/index.html</a></li><li><code>actuator endpoint</code> <a href="http://127.0.0.1:9200/actuator" target="_blank" rel="noreferrer">http://127.0.0.1:9200/actuator</a></li><li><code>admin console</code> <a href="http://127.0.0.1:9200/admin" target="_blank" rel="noreferrer">http://127.0.0.1:9200/admin</a></li></ul>`,17)]))}const m=a(t,[["render",l]]);export{k as __pageData,m as default};
