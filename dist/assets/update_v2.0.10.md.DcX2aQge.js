import{_ as i,c as a,a2 as e,o as t}from"./chunks/framework.DPuwY6B9.js";const c=JSON.parse('{"title":"v2.0.10 升级文档","description":"orion-visor v2.0.10 升级文档","frontmatter":{"title":"v2.0.10 升级文档","description":"orion-visor v2.0.10 升级文档"},"headers":[],"relativePath":"update/v2.0.10.md","filePath":"update/v2.0.10.md","lastUpdated":1733219106000}'),l={name:"update/v2.0.10.md"};function n(h,s,p,k,r,d){return t(),a("div",null,s[0]||(s[0]=[e('<h3 id="v2-0-10" tabindex="-1">v2.0.10 <a class="header-anchor" href="#v2-0-10" aria-label="Permalink to &quot;v2.0.10&quot;">​</a></h3><h3 id="sql-脚本-dml" tabindex="-1">sql 脚本 - DML <a class="header-anchor" href="#sql-脚本-dml" aria-label="Permalink to &quot;sql 脚本 - DML&quot;">​</a></h3><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ALTER</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TABLE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `preference`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">MODIFY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> COLUMN </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`type`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> char</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CHARACTER</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> SET</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> utf8mb4 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">COLLATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> utf8mb4_general_ci </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NULL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> DEFAULT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> COMMENT </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;偏好类型&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> AFTER</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `user_id`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="shell-脚本" tabindex="-1">shell 脚本 <a class="header-anchor" href="#shell-脚本" aria-label="Permalink to &quot;shell 脚本&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 修改 docker-volumes 路径</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /data/orion-visor-space/docker-volumes/orion-visor-service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /data/orion-visor-space/docker-volumes/service</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /data/orion-visor-space/docker-volumes/orion-visor-mysql</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /data/orion-visor-space/docker-volumes/mysql</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /data/orion-visor-space/docker-volumes/orion-visor-redis</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /data/orion-visor-space/docker-volumes/redis</span></span></code></pre></div>',5)]))}const F=i(l,[["render",n]]);export{c as __pageData,F as default};