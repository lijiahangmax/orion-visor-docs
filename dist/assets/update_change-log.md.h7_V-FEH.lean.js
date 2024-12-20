import{_ as e,c as i,a2 as o,o as a}from"./chunks/framework.DPuwY6B9.js";const p=JSON.parse('{"title":"更新日志","description":"orion-visor 更新日志","frontmatter":{"title":"更新日志","description":"orion-visor 更新日志"},"headers":[],"relativePath":"update/change-log.md","filePath":"update/change-log.md","lastUpdated":1734624158000}'),d={name:"update/change-log.md"};function c(r,l,t,h,s,n){return a(),i("div",null,l[0]||(l[0]=[o('<div class="tip custom-block"><p class="custom-block-title">提示</p><p>版本号严格遵循 Semver 规范。</p></div><h3 id="升级须知" tabindex="-1">升级须知 <a class="header-anchor" href="#升级须知" aria-label="Permalink to &quot;升级须知&quot;">​</a></h3><ul><li>应用 <strong>不支持</strong> 跨版本升级, 可以进行 <strong>多次升级</strong></li><li>docker 安装的 sql 脚本可以在 <code>adminer</code> 中执行</li><li>执行完成菜单 sql 后请刷新缓存 <code>系统设置</code> &gt; <code>系统菜单</code> &gt; <code>刷新缓存</code></li><li>执行完成字典 sql 后请刷新缓存 <code>系统设置</code> &gt; <code>数据字典项</code> &gt; <code>刷新缓存</code></li></ul><h3 id="docker-升级流程" tabindex="-1">docker 升级流程 <a class="header-anchor" href="#docker-升级流程" aria-label="Permalink to &quot;docker 升级流程&quot;">​</a></h3><ul><li>备份 <code>volumes</code> (必要时可以回滚)</li><li>进入 <code>adminer</code> 执行升级的 <code>sql</code> 脚本</li><li>执行 升级的 <code>bash</code> 脚本</li><li>进入 代码目录执行 <code>sh ./docker-upgrade.sh</code> 进行容器升级 <code>down</code> &gt; <code>up -d</code></li></ul><h3 id="v2-2-2" tabindex="-1">v2.2.2 <a class="header-anchor" href="#v2-2-2" aria-label="Permalink to &quot;v2.2.2&quot;">​</a></h3><p><code>2024-12-24</code> <code>release</code></p><ul><li>🐳 修改 Docker 命名空间改为 <code>lijiahangmax -&gt; orionsec</code></li><li>🐞 修复 菜单停用后管理员角色依然可操作的问题</li><li>🐞 修复 普通用户无法创建主机分组的问题</li><li>🌈 添加 新用户需要修改密码</li><li>🌈 添加 主机系统类型</li><li>🌈 添加 批量上传添加错误信息</li><li>🌈 添加 定时任务添加执行人, 使用用户主机配置</li><li>🌈 添加 终端底部命令编辑器</li><li>🔨 去除 终端命令输入框</li><li>🔨 优化 批量执行使用用户主机配置</li><li>🔨 优化 批量上传使用用户主机配置</li><li>🔨 优化 优化前端打包配置</li><li>🔨 优化 优化前端路由配置</li><li>🔨 优化 修改密码逻辑</li><li>🔨 优化 主机配置获取逻辑</li><li>🔨 修改 mysql 字符排序规则</li></ul><p><a href="/update/v2.2.2.html">如何升级</a></p><h3 id="v2-2-1" tabindex="-1">v2.2.1 <a class="header-anchor" href="#v2-2-1" aria-label="Permalink to &quot;v2.2.1&quot;">​</a></h3><p><code>2024-12-10</code> <code>release</code></p><ul><li>🚀 升级 <code>orion-kit</code> 到 <code>2.0.1</code></li><li>🐞 修复 计划任务创建后状态为禁用却仍然自动执行的问题</li><li>🔨 修改 前端代码结构 调整语义</li></ul><h3 id="v2-2-0" tabindex="-1">v2.2.0 <a class="header-anchor" href="#v2-2-0" aria-label="Permalink to &quot;v2.2.0&quot;">​</a></h3><p><code>2024-11-01</code> <code>release</code></p><ul><li>🚀 升级 <code>orion-kit</code> 到 <code>2.0.0</code></li><li>🔨 修改 包结构为 <code>org.dromara.visor</code></li><li>🌈 添加 宝塔面板适配</li></ul><h3 id="v2-1-8" tabindex="-1">v2.1.8 <a class="header-anchor" href="#v2-1-8" aria-label="Permalink to &quot;v2.1.8&quot;">​</a></h3><p><code>2024-10-24</code> <code>release</code></p><ul><li>🚀 升级 <code>orion-kit</code> 到 <code>1.0.9</code></li><li>🌈 添加 动态设置 SFTP 文件预览大小 (去除 VITE_SFTP_PREVIEW)</li><li>🐞 修复 代码生成器模板错误</li><li>🔨 优化 前端自定义按钮组件</li><li>🔨 优化 终端获取最近连接主机逻辑</li><li>🔨 优化 修改文件预览文件获取逻辑</li><li>🔨 优化 修改文件预览文件保存逻辑</li><li>🔨 修改 终端模块元数据 (菜单, 字典, 操作日志)</li><li>🔨 修改 主机连接日志模块元数据 (表名, 菜单, 字典, 操作日志)</li></ul><p><a href="/update/v2.1.8.html">如何升级</a></p><h3 id="v2-1-7" tabindex="-1">v2.1.7 <a class="header-anchor" href="#v2-1-7" aria-label="Permalink to &quot;v2.1.7&quot;">​</a></h3><p><code>2024-09-27</code> <code>release</code></p><ul><li>🐞 修复 批量执行命令时偶发性报错</li><li>🔨 优化 优化批量上传逻辑</li><li>🔨 优化 保存批量上传文件实际上传路径</li></ul><p><a href="/update/v2.1.7.html">如何升级</a></p><h3 id="v2-1-6" tabindex="-1">v2.1.6 <a class="header-anchor" href="#v2-1-6" aria-label="Permalink to &quot;v2.1.6&quot;">​</a></h3><p><code>2024-09-02</code> <code>release</code></p><ul><li>🐞 修复 主机列表查询失败</li></ul><h3 id="v2-1-5" tabindex="-1">v2.1.5 <a class="header-anchor" href="#v2-1-5" aria-label="Permalink to &quot;v2.1.5&quot;">​</a></h3><p><code>2024-09-02</code> <code>release</code></p><ul><li>🐞 修复 e2e 测试执行失败</li><li>🐞 修复 quartz 配置不生效</li><li>🐞 修复 请求多次转发获取客户端地址错误</li><li>🐞 修复 修复开发环境 mockjs blob 处理错误</li><li>🐞 修复 修复开启 webgl 后终端数量超过核心线时显示错误</li><li>🐞 修复 修复命令执行主机超过核心数时日志显示错误</li><li>🌈 添加 清理数据时添加条数限制</li><li>🔨 优化 清理数据时添加条数限制</li><li>🔨 优化 卡片页面去除首个添加卡片</li><li>🔨 优化 无权限时的报错提示 (元数据缓存无权限)</li><li>🔨 优化 后端异常处理逻辑</li><li>🔨 修改 文档中的超链接 <code>orionsec.cn</code></li></ul><p><a href="/update/v2.1.5.html">如何升级</a></p><h3 id="v2-1-4" tabindex="-1">v2.1.4 <a class="header-anchor" href="#v2-1-4" aria-label="Permalink to &quot;v2.1.4&quot;">​</a></h3><p><code>2024-08-22</code> <code>release</code></p><ul><li>🌈 添加 登录失败发送站内信</li><li>🩰 添加 终端内置主题</li><li>🩰 优化 字典值表格样式</li><li>🔨 优化 终端全屏模式逻辑</li><li>🔨 优化 操作日志表格显示错误信息</li><li>🔨 修改 容器健康检测间隔</li><li>🔨 修改 SSH 客户端版本</li></ul><p><a href="/update/v2.1.4.html">如何升级</a></p><h3 id="v2-1-3" tabindex="-1">v2.1.3 <a class="header-anchor" href="#v2-1-3" aria-label="Permalink to &quot;v2.1.3&quot;">​</a></h3><p><code>2024-08-08</code> <code>release</code></p><ul><li>🚀 升级 <code>orion-kit</code> 到 <code>1.0.8</code></li><li>🌈 添加 <code>docker-compose</code> .env 文件</li><li>🌈 添加 快速连接主机按钮</li><li>🌈 添加 终端上传文件按钮</li><li>🔨 修改 终端主题无需刷新页面</li><li>🔨 修改 终端响铃声音</li><li>🔨 修改 终端默认字体</li><li>🔨 优化 终端 tab 颜色显示</li><li>🔨 优化 命令片段处理逻辑</li><li>🔨 优化 标签路径处理逻辑</li><li>🔨 优化 文本复制逻辑</li><li>🔨 去除 <code>command_snippet</code> 无用字段</li></ul><p><a href="/update/v2.1.3.html">如何升级</a></p><h3 id="v2-1-2" tabindex="-1">v2.1.2 <a class="header-anchor" href="#v2-1-2" aria-label="Permalink to &quot;v2.1.2&quot;">​</a></h3><p><code>2024-07-29</code> <code>release</code></p><ul><li>🐞 修复 分配数据权限无效的问题</li><li>🐞 修复 新版本 sql 脚本错误的问题</li><li>🔨 调整 分页 hook 目录</li><li>🔨 修改 <code>docker</code> 容器名称</li></ul><div class="info custom-block"><p class="custom-block-title">本次升级时请先执行删除容器</p><p>docker compose down<br> sh ./docker-upgrade.sh</p></div><h3 id="v2-1-1" tabindex="-1">v2.1.1 <a class="header-anchor" href="#v2-1-1" aria-label="Permalink to &quot;v2.1.1&quot;">​</a></h3><p><code>2024-07-26</code> <code>release</code></p><ul><li>🐞 修复 SFTP 文件上传样式显示错误</li><li>🐞 修复 SFTP 文件传输列表数据显示错误</li><li>🐞 修复 新版本 TS 打包错误</li><li>🩰 调整 页面滚动条显示方式</li><li>🔨 调整 SFTP 删除文件提示</li></ul><h3 id="v2-1-0" tabindex="-1">v2.1.0 <a class="header-anchor" href="#v2-1-0" aria-label="Permalink to &quot;v2.1.0&quot;">​</a></h3><p><code>2024-07-25</code> <code>release</code></p><ul><li>🐞 修复 SFTP 下载根目录文件报错</li><li>🐞 修复 批量上传文件宽度显示不正确</li><li>🐞 修复 批量上传进度显示 NaN 的问题</li><li>🐞 修复 windows 文件备份失败</li><li>🐞 修复 批量执行后执行历史显示为空</li><li>🩰 调整 卡片列表大小</li><li>🩰 调整 页面滚动条显示方式</li><li>🌈 添加 主机复制功能</li><li>🔨 重构 主机及主机配置模块</li><li>🔨 重构 SFTP 上传下载逻辑</li><li>🔨 去除 代码中的抑制注解</li><li>🔨 去除 card 列表右键菜单</li></ul><p><a href="/update/v2.1.0.html">如何升级</a></p><h3 id="v2-0-11" tabindex="-1">v2.0.11 <a class="header-anchor" href="#v2-0-11" aria-label="Permalink to &quot;v2.0.11&quot;">​</a></h3><p><code>2024-07-11</code> <code>release</code></p><ul><li>🐞 修复 终端 closeTab 不生效</li><li>🐞 修复 终端关闭后重置大小失败</li><li>🐞 修复 用户操作日志分页查询失败</li><li>🐞 修复 e2e 测试执行失败</li><li>🩰 修改 主机身份选择器样式</li><li>🌈 添加 计划任务添加参数</li><li>🔨 修改 主机终端主题配置到字典表</li><li>🔨 修改 执行模板参数处理逻辑</li></ul><p><a href="/update/v2.0.11.html">如何升级</a></p><h3 id="v2-0-10" tabindex="-1">v2.0.10 <a class="header-anchor" href="#v2-0-10" aria-label="Permalink to &quot;v2.0.10&quot;">​</a></h3><p><code>2024-06-27</code> <code>release</code></p><ul><li>🐞 修复 系统设置中机器码获取失败</li><li>🐞 修复 字典值排序不生效</li><li>🌈 添加 <code>github workflow</code> e2e testing</li><li>🌈 添加 主机连接日志自动清理配置</li><li>🔨 添加 <code>docker-compose</code> 容器健康检测</li><li>🔨 修改 <code>docker-volumes</code> 的路径 (简化)</li><li>🔨 修改 清理历史文件配置</li><li>🔨 修改 前端代码结构</li><li>🔨 修改 spring 配置描述文件</li><li>🔐 修改 ip 获取逻辑 (防止伪造)</li></ul><p><a href="/update/v2.0.10.html">如何升级</a></p><h3 id="v2-0-9" tabindex="-1">v2.0.9 <a class="header-anchor" href="#v2-0-9" aria-label="Permalink to &quot;v2.0.9&quot;">​</a></h3><p><code>2024-06-19</code> <code>release</code></p><ul><li>🐞 修复 定时清理 <code>命令片段</code> 和 <code>路径书签</code> 报错</li><li>🚀 升级 <code>arco design</code> 版本</li><li>🌈 添加 <code>系统管理</code> &gt; <code>系统设置</code> 页面</li><li>🔨 修改 <code>logout</code> 前端处理逻辑</li><li>🔨 修改 <code>docker</code> 目录</li></ul><p><a href="/update/v2.0.9.html">如何升级</a></p><h3 id="v2-0-8" tabindex="-1">v2.0.8 <a class="header-anchor" href="#v2-0-8" aria-label="Permalink to &quot;v2.0.8&quot;">​</a></h3><p><code>2024-06-12</code> <code>release</code></p><ul><li>🔨 优化 标准数据模型</li><li>🔨 修改 终端默认字间距为 <code>0</code></li><li>✨ orion-visor 现已贡献至 <code>dromara</code> <a href="https://dromara.org/" target="_blank" rel="noreferrer">开源社区</a></li></ul><div class="info custom-block"><p class="custom-block-title">项目已贡献到 dromara 开源社区 需要修改 .git/config</p><p><a href="https://gitee.com/dromara/orion-visor.git" target="_blank" rel="noreferrer">https://gitee.com/dromara/orion-visor.git</a><br><a href="https://github.com/dromara/orion-visor.git" target="_blank" rel="noreferrer">https://github.com/dromara/orion-visor.git</a></p></div><h3 id="v2-0-7" tabindex="-1">v2.0.7 <a class="header-anchor" href="#v2-0-7" aria-label="Permalink to &quot;v2.0.7&quot;">​</a></h3><p><code>2024-06-11</code> <code>release</code></p><ul><li>🐞 修复 登录后提示系统异常的问题</li></ul><h3 id="v2-0-6" tabindex="-1">v2.0.6 <a class="header-anchor" href="#v2-0-6" aria-label="Permalink to &quot;v2.0.6&quot;">​</a></h3><p><code>2024-06-11</code> <code>release</code></p><ul><li>🐞 修复 <code>channel</code> 关闭后终端还显示已连接的问题</li><li>🐞 修复 <code>channel</code> 关闭后文件还显示传输中的问题</li><li>🔨 添加 <code>@keep</code> 配置</li><li>🔨 修改 <code>bean</code> 名称生成逻辑</li><li>🔨 修改 未开启的控制台地址不在 <code>banner</code> 中显示</li><li>🔨 修改 去除日志打印 <code>sign</code> 参数</li><li>🔨 优化 规范化 <code>handler</code> 模块命名</li><li>🔨 优化 规范化 <code>model</code> 注释</li><li>🔨 优化 规范化 <code>mybatis</code> 自定义类型命名</li><li>🔨 优化 登录日志查询</li></ul><h3 id="v2-0-5" tabindex="-1">v2.0.5 <a class="header-anchor" href="#v2-0-5" aria-label="Permalink to &quot;v2.0.5&quot;">​</a></h3><p><code>2024-06-06</code> <code>release</code></p><ul><li>🚀 升级 <code>xterm.js</code> 版本</li><li>🚀 升级 <code>stylelint</code> 版本</li><li>🌈 添加 终端插件配置中 添加 <code>unicode</code> 支持</li><li>🌈 添加 终端显示配置中 添加 <code>字间距</code> 配置项</li><li>🔨 优化 SFTP 下载大文件时浏览器卡死</li><li>🔨 修改 spring 配置</li><li>🔨 修改 redisson 配置</li></ul><h3 id="v2-0-4" tabindex="-1">v2.0.4 <a class="header-anchor" href="#v2-0-4" aria-label="Permalink to &quot;v2.0.4&quot;">​</a></h3><p><code>2024-06-03</code> <code>release</code></p><ul><li>🩰 修改 表格 UI 样式</li><li>🐞 修复 删除密钥/身份 用户自定义配置更新失败</li><li>🌈 添加 主机列表批量删除</li><li>🌈 添加 密钥列表批量删除</li><li>🌈 添加 身份列表批量删除</li><li>🌈 添加 计划任务列表批量删除</li><li>🌈 添加 执行模板列表批量删除</li><li>🌈 添加 字典配置项批量删除</li><li>🌈 添加 用户列表批量删除</li></ul><p><a href="/update/v2.0.4.html">如何升级</a></p><h3 id="v2-0-3" tabindex="-1">v2.0.3 <a class="header-anchor" href="#v2-0-3" aria-label="Permalink to &quot;v2.0.3&quot;">​</a></h3><p><code>2024-05-29</code> <code>release</code></p><ul><li>🐞 修复 部分 ui 显示错误</li><li>🐞 修复 计划任务编辑时报错</li><li>🐞 修复 计划任务手动触发时报错</li><li>🩰 修改 logo</li><li>🔨 修改 docker 时区</li></ul><h3 id="v2-0-2" tabindex="-1">v2.0.2 <a class="header-anchor" href="#v2-0-2" aria-label="Permalink to &quot;v2.0.2&quot;">​</a></h3><p><code>2024-05-24</code> <code>release</code></p><ul><li>🐞 修复 资产授权密钥时间显示错误</li><li>🌈 添加 演示模式</li><li>⭐ 支持 Chrome PWA</li></ul><h3 id="v2-0-1" tabindex="-1">v2.0.1 <a class="header-anchor" href="#v2-0-1" aria-label="Permalink to &quot;v2.0.1&quot;">​</a></h3><p><code>2024-05-21</code> <code>release</code></p><ul><li>⭐ 添加 cron 组件</li><li>🐞 修复 批量执行后日志偶尔不展示的问题</li><li>🐞 修复 批量上传进度条显示异常的问题</li></ul><h3 id="v2-0-0" tabindex="-1">v2.0.0 <a class="header-anchor" href="#v2-0-0" aria-label="Permalink to &quot;v2.0.0&quot;">​</a></h3><p><code>2024-05-17</code> <code>release</code></p><ul><li>⭐ 修改 项目名称为 <code>orion-visor</code></li><li>🩰 修改 终端默认字体</li></ul><p><a href="/update/v2.0.0.html">如何升级</a></p><h3 id="v1-0-8" tabindex="-1">v1.0.8 <a class="header-anchor" href="#v1-0-8" aria-label="Permalink to &quot;v1.0.8&quot;">​</a></h3><p><code>2024-05-15</code> <code>release</code></p><ul><li>🌈 新增 站内信模块</li><li>🔨 优化 执行命令日志跳转逻辑</li><li>🔨 修改 <code>exitStatus</code> 改为 <code>exitCode</code></li></ul><p><a href="/update/v1.0.8.html">如何升级</a></p><h3 id="v1-0-7" tabindex="-1">v1.0.7 <a class="header-anchor" href="#v1-0-7" aria-label="Permalink to &quot;v1.0.7&quot;">​</a></h3><p><code>2024-05-13</code> <code>release</code></p><ul><li>🐞 修复 查看计划任务日志时提示日志不存在</li><li>🩰 修改 命令执行日志 UI 修改</li><li>🌈 新增 文件传输列表添加操作栏</li><li>🌈 新增 主机在线会话功能</li><li>🌈 新增 文件批量上传功能</li></ul><p><a href="/update/v1.0.7.html">如何升级</a></p><h3 id="v1-0-6" tabindex="-1">v1.0.6 <a class="header-anchor" href="#v1-0-6" aria-label="Permalink to &quot;v1.0.6&quot;">​</a></h3><p><code>2024-04-26</code> <code>release</code></p><ul><li>🐞 修复 终端页签关闭后不会自动切换</li><li>🩰 修改 命令执行日志 UI 修改</li><li>🌈 新增 命令执行模板配置默认主机</li><li>🌈 新增 主机终端书签路径</li><li>🌈 新增 命令执行日志添加 <code>ansi</code> 日志 <code>app.exec-log.append-ansi</code></li><li>🌈 新增 定时删除命令执行日志文件 <code>app.exec-log.auto-clear</code></li><li>🌈 新增 终端设置添加了几个全局快捷键</li><li>🔨 优化 通用分组模型添加 <code>userId</code></li><li>🔨 优化 退出登录不重定向</li><li>🔨 优化 动态设置页面标题</li><li>🔨 优化 终端断开后回车重连</li><li>🔨 优化 自动删除未使用的命令片段分组</li><li>🔨 优化 添加分布式锁工具类</li></ul><p><a href="/update/v1.0.6.html">如何升级</a></p><h3 id="v1-0-5" tabindex="-1">v1.0.5 <a class="header-anchor" href="#v1-0-5" aria-label="Permalink to &quot;v1.0.5&quot;">​</a></h3><p><code>2024-04-22</code> <code>release</code></p><ul><li>🐞 修复 用户列表用户名显示错误</li><li>🐞 修复 主机分组页面无法编辑的问题</li><li>🐞 修复 资产授权时提示数据发生变更的问题</li><li>🐞 修复 删除资产时授权记录未删除的问题</li><li>🐞 修复 命令执行权限控制失效的问题</li><li>🌈 新增 定时删除未引用的 <code>tag</code></li><li>🌈 新增 执行命令时可使用脚本文件执行</li><li>🌈 新增 主机身份添加类型字段</li><li>🔨 优化 文件传输列表进度显示</li><li>🔨 优化 命令执行日志持续时间</li><li>🔨 优化 命令执行添加内置参数</li><li>🔨 优化 tracker 监听文件可配置 <code>app.tracker</code></li><li>🔨 优化 sftp 上传文件重复处理可配置 <code>app.sftp</code></li><li>🔨 优化 用户状态调整交互逻辑</li><li>🔨 优化 角色状态调整交互逻辑</li><li>🔨 优化 优化资产授权交互逻辑</li><li>🔨 优化 SFTP 交互逻辑</li><li>🧹 删除 用户锁定状态</li></ul><p><a href="/update/v1.0.5.html">如何升级</a></p><h3 id="v1-0-4" tabindex="-1">v1.0.4 <a class="header-anchor" href="#v1-0-4" aria-label="Permalink to &quot;v1.0.4&quot;">​</a></h3><p><code>2024-04-15</code> <code>release</code></p><ul><li>🚀 升级 <code>orion-kit</code> 到 <code>1.0.7</code></li><li>🐞 修复 批量执行选择模板后默认参数未自动设置</li><li>🐞 修复 主机列表卡片视图重置条件后 tag 消失</li><li>🐞 修复 主机分组授权页面刷新不显示 loading</li><li>🐞 修复 面包屑组件路径显示不全的问题</li><li>🐞 修复 数据字典历史提示无权限</li><li>🐞 修复 批量执行较短命令日志不显示</li><li>🩰 修改 主机终端亮色模式配色</li><li>🩰 修改 执行模板 UI 修改</li><li>🌈 新增 计划任务模块</li><li>🌈 新增 计划任务日志模块</li><li>🔨 添加 quartz 配置</li><li>🔨 修改 redisson 配置</li><li>🔨 优化 orion-ops-framework 配置规范化</li><li>🔨 优化 前端 props 命名规范化</li></ul><p><a href="/update/v1.0.4.html">如何升级</a></p><h3 id="v1-0-3" tabindex="-1">v1.0.3 <a class="header-anchor" href="#v1-0-3" aria-label="Permalink to &quot;v1.0.3&quot;">​</a></h3><p><code>2024-03-25</code> <code>release</code></p><ul><li>🚀 升级 <code>arco design</code> 到 <code>2.55.0</code></li><li>🐞 修复 新创建的用户登录会跳转到 <strong>404</strong></li><li>🐞 修复 分配菜单模态框没有子菜单不显示的问题</li><li>🐞 修复 工作台页面快捷操作面板会展示隐藏的菜单</li><li>🐞 修复 主机终端无法粘贴 (浏览器安全策略)</li><li>🐞 修复 卡片列表组件控制台 warn 提示</li><li>🐞 修复 关闭终端时控制台提示 handleResize 错误信息</li><li>🔨 修改 系统菜单渲染逻辑 (移除 JSX 构建时不会提示 JSX.IntrinsicElements)</li></ul><p><a href="/update/v1.0.3.html">如何升级</a></p><h3 id="v1-0-2" tabindex="-1">v1.0.2 <a class="header-anchor" href="#v1-0-2" aria-label="Permalink to &quot;v1.0.2&quot;">​</a></h3><p><code>2024-03-22</code> <code>release</code></p><ul><li>🐞 修复 SFTP 加载失败后一直 loading</li><li>🐞 修复 主机终端搜索框报错</li><li>🐞 修复 SSH 配置未启用还可以连接</li><li>🐞 修复 主机配置保存后无法修改状态</li><li>🐞 修复 添加快捷命令时编辑器无代码提示</li><li>🔨 修改 菜单路由命名逻辑修改</li><li>🔨 优化 前端组件命名规范化</li><li>🔨 优化 前端 emit 命名规范化</li><li>🌈 新增 双击终端会话 Tab 快速复制</li><li>🌈 新增 批量执行命令</li><li>🌈 新增 命令执行日志</li><li>🌈 新增 执行模板功能</li></ul><p><a href="/update/v1.0.2.html">如何升级</a></p><h3 id="v1-0-1" tabindex="-1">v1.0.1 <a class="header-anchor" href="#v1-0-1" aria-label="Permalink to &quot;v1.0.1&quot;">​</a></h3><p><code>2024-03-06</code> <code>release</code></p><ul><li>🐞 修复 用户操作日志条件重置后类型框数据不正常的问题</li><li>🩰 修改 主机连接日志 UI</li><li>🌈 新增 SFTP 使用日志列表</li><li>🌈 新增 主机连接日志强制下线会话</li><li>🌈 新增 主机连接日志删除/清理</li><li>🌈 新增 用户操作日志日志删除/清理</li><li>🌈 新增 用户操作日志日志删除/清理</li><li>🔨 优化 用户锁定次数/时间可配置 <code>app.authentication</code></li></ul><p><a href="/update/v1.0.1.html">如何升级</a></p><h3 id="v1-0-0" tabindex="-1">v1.0.0 <a class="header-anchor" href="#v1-0-0" aria-label="Permalink to &quot;v1.0.0&quot;">​</a></h3><p><code>2024-03-01</code> <code>release</code></p><ul><li>🌈 新增 用户自定义终端标签颜色</li><li>🔨 拓展数据模块添加缓存</li></ul><p><a href="/update/v1.0.0.html">如何升级</a></p><h3 id="v1-0-0-beta-1" tabindex="-1">v1.0.0-beta.1 <a class="header-anchor" href="#v1-0-0-beta-1" aria-label="Permalink to &quot;v1.0.0-beta.1&quot;">​</a></h3><p><code>2024-02-28</code> <code>preview</code></p><ul><li>🌈 主机管理</li><li>🌈 主机密钥</li><li>🌈 主机身份</li><li>🌈 资产授权</li><li>🌈 主机终端</li><li>🌈 连接日志</li><li>🌈 角色管理</li><li>🌈 用户管理</li><li>🌈 操作日志</li><li>🌈 系统菜单</li><li>🌈 数据字典项</li><li>🌈 数据字典值</li></ul>',130)]))}const v=e(d,[["render",c]]);export{p as __pageData,v as default};
