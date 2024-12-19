import{_ as r,c as o,a2 as d,j as e,a as l,t as a,o as s}from"./chunks/framework.DPuwY6B9.js";const p=JSON.parse('{"title":"批量执行","description":"orion-visor 批量执行","frontmatter":{"title":"批量执行","description":"orion-visor 批量执行"},"headers":[],"relativePath":"operator/exec.md","filePath":"operator/exec.md","lastUpdated":1734074503000}'),n={name:"operator/exec.md"};function c(i,t,x,f,h,y){return s(),o("div",null,[t[4]||(t[4]=d('<h3 id="命令执行" tabindex="-1">命令执行 <a class="header-anchor" href="#命令执行" aria-label="Permalink to &quot;命令执行&quot;">​</a></h3><p>使用当前用户的主机配置, 批量执行 ssh 主机 shell 脚本。</p><p>⚡ <a href="./exec.html#params">内置参数</a><br> ⚡ 如果只需要保存日志的原始输出则需要修改 <code>application.yaml</code> <code>app.exec-log.append-ansi</code> 为 <code>false</code></p><ul><li>重置: 重置全部参数</li><li>执行: 执行所输入的命令</li><li>返回: 返回到执行命令页面</li><li>从模板中选择: 从模板中选择需要执行的命令</li><li>执行历史: 点击历史命令可以快速填入</li></ul><h3 id="执行日志" tabindex="-1">执行日志 <a class="header-anchor" href="#执行日志" aria-label="Permalink to &quot;执行日志&quot;">​</a></h3><p>查看批量执行任务日志。</p><ul><li>执行命令: 跳转到批量执行页面</li><li>清空: 清空执行日志</li><li>删除: 删除执行日志</li><li>重新执行: 重新执行此命令</li><li>命令: 查看执行时的命令</li><li>参数: 查看执行时的参数</li><li>中断: 中断命令执行</li><li>日志: 查看执行日志 <code>ctrl + 左键</code> 点击会用新页面打开</li><li>下载: 下载执行日志</li></ul><h3 id="任务列表" tabindex="-1">任务列表 <a class="header-anchor" href="#任务列表" aria-label="Permalink to &quot;任务列表&quot;">​</a></h3><p>维护计划任务, 定时执行命令。<br> 创建后默认使用创建人作为执行用户, 使用执行用户的主机配置, 定时执行 ssh 主机 shell 脚本。</p><p>⚡ <a href="./exec.html#params">内置参数</a></p><ul><li>新增: 新增计划任务</li><li>详情: 查看计划任务详情</li><li>状态: 修改计划任务状态</li><li>手动触发: 手动触发计划任务</li><li>删除: 删除计划任务</li><li>修改任务: 修改计划任务配置</li><li>修改执行用户: 修改任务执行的用户</li></ul><h3 id="任务日志" tabindex="-1">任务日志 <a class="header-anchor" href="#任务日志" aria-label="Permalink to &quot;任务日志&quot;">​</a></h3><p>查看计划任务执行日志</p><p>⚡ 如果只需要保存日志的原始输出则需要修改 <code>application.yaml</code> <code>app.exec-log.append-ansi</code> 为 <code>false</code></p><ul><li>清空: 清空执行日志</li><li>删除: 删除执行日志</li><li>命令: 查看执行时的命令</li><li>参数: 查看执行时的参数</li><li>中断: 中断命令执行</li><li>日志: 查看执行日志 <code>ctrl + 左键</code> 点击会用新页面打开</li><li>下载: 下载执行日志</li></ul><h3 id="批量上传" tabindex="-1">批量上传 <a class="header-anchor" href="#批量上传" aria-label="Permalink to &quot;批量上传&quot;">​</a></h3><p>将文件批量上传到远程服务器。</p><ul><li>重置: 重置表单参数</li><li>返回: 返回到表单页面</li><li>开始上传: 执行文件上传</li><li>取消上传: 取消文件上传</li><li>清空: 清空已选择的文件</li><li>选择文件: 批量选择上传的文件</li><li>选择文件夹: 选择上传的文件夹</li></ul><blockquote><p>上传路径可以使用内置变量来替换。</p></blockquote><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th><th>参数示例</th></tr></thead><tbody><tr><td style="text-align:left;">${username}</td><td style="text-align:left;">用户名</td><td>admin</td></tr><tr><td style="text-align:left;">${home}</td><td style="text-align:left;">用户家目录</td><td>/home/admin</td></tr></tbody></table><h3 id="上传任务" tabindex="-1">上传任务 <a class="header-anchor" href="#上传任务" aria-label="Permalink to &quot;上传任务&quot;">​</a></h3><p>查看批量上传任务列表。</p><ul><li>上传: 跳转到批量上传页面</li><li>清空: 清空上传任务</li><li>删除: 删除上传任务</li><li>详情: 查看上传任务详情</li><li>取消: 取消文件上传</li></ul><h3 id="执行模板" tabindex="-1">执行模板 <a class="header-anchor" href="#执行模板" aria-label="Permalink to &quot;执行模板&quot;">​</a></h3>',24)),e("p",null,[t[0]||(t[0]=l("用来维护批量执行的命令模板, 支持动态参数, 使用 ")),e("code",null,"@"+a(i.xxx),1),t[1]||(t[1]=l(" 来替换命令参数。"))]),t[5]||(t[5]=d('<ul><li>新增: 新增执行模板</li><li>执行: 打开命令执行框并且带入模板参数</li><li>修改: 修改执行模板</li><li>删除: 删除执行模板</li></ul><h3 id="日志面板快捷键" tabindex="-1">日志面板快捷键 <a class="header-anchor" href="#日志面板快捷键" aria-label="Permalink to &quot;日志面板快捷键&quot;">​</a></h3><ul><li>回车: <code>Enter</code></li><li>全选: <code>ctrl</code> <code>A</code></li><li>复制: <code>ctrl</code> <code>C</code></li><li>搜索: <code>ctrl</code> <code>F</code></li><li>清空: <code>ctrl</code> <code>L</code></li><li>向上滚动一行: <code>↑</code></li><li>向上滚动一页: <code>Home</code></li><li>向下滚动一行: <code>↓</code></li><li>向下滚动一页: <code>End</code></li></ul><h3 id="params" tabindex="-1">命令内置参数 <a class="header-anchor" href="#params" aria-label="Permalink to &quot;命令内置参数{#params}&quot;">​</a></h3>',4)),e("p",null,[t[2]||(t[2]=l("⚡ 使用 ")),e("code",null,"@"+a(i.xxx),1),t[3]||(t[3]=l(" 来替换命令参数"))]),t[6]||(t[6]=d('<table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th><th>参数示例</th></tr></thead><tbody><tr><td style="text-align:left;">source</td><td style="text-align:left;">执行来源 (BATCH/JOB)</td><td>JOB</td></tr><tr><td style="text-align:left;">sourceId</td><td style="text-align:left;">执行来源id (JOB特有)</td><td>6</td></tr><tr><td style="text-align:left;">seq</td><td style="text-align:left;">执行序列 (JOB特有)</td><td>920</td></tr><tr><td style="text-align:left;">userId</td><td style="text-align:left;">执行用户id (JOB为0)</td><td>1</td></tr><tr><td style="text-align:left;">username</td><td style="text-align:left;">执行用户名 (JOB为system)</td><td>admin</td></tr><tr><td style="text-align:left;">execId</td><td style="text-align:left;">执行记录id</td><td>2000</td></tr><tr><td style="text-align:left;">hostId</td><td style="text-align:left;">执行主机id</td><td>1</td></tr><tr><td style="text-align:left;">hostName</td><td style="text-align:left;">执行主机名称</td><td>server-127.0.0.1</td></tr><tr><td style="text-align:left;">hostCode</td><td style="text-align:left;">执行主机编码</td><td>server</td></tr><tr><td style="text-align:left;">hostAddress</td><td style="text-align:left;">执行主机地址</td><td>127.0.0.1</td></tr><tr><td style="text-align:left;">hostPort</td><td style="text-align:left;">执行主机端口</td><td>22</td></tr><tr><td style="text-align:left;">hostUsername</td><td style="text-align:left;">执行主机用户名</td><td>root</td></tr><tr><td style="text-align:left;">osType</td><td style="text-align:left;">执行主机系统版本</td><td>LINUX</td></tr><tr><td style="text-align:left;">charset</td><td style="text-align:left;">SSH 编码集</td><td>UTF-8</td></tr><tr><td style="text-align:left;">scriptExec</td><td style="text-align:left;">是否使用脚本执行 (0否1是)</td><td>1</td></tr><tr><td style="text-align:left;">scriptPath</td><td style="text-align:left;">脚本文件路径</td><td>/root/orion/orion-visor/script/exec_2000_1.sh</td></tr><tr><td style="text-align:left;">uuid</td><td style="text-align:left;">生成任务维度 uuid</td><td>82b20e52-cea9-455b-a0b4-e4e25654e22b</td></tr><tr><td style="text-align:left;">uuidShort</td><td style="text-align:left;">生成任务维度 uuid 无 &#39;-&#39;</td><td>82b20e52cea9455ba0b4e4e25654e22b</td></tr><tr><td style="text-align:left;">hostUuid</td><td style="text-align:left;">生成机器维度 uuid</td><td>2687b09e-1046-4e8d-9cc2-a7e697836b88</td></tr><tr><td style="text-align:left;">hostUuidShort</td><td style="text-align:left;">生成机器维度 uuid 无 &#39;-&#39;</td><td>2687b09e10464e8d9cc2a7e697836b88</td></tr><tr><td style="text-align:left;">timestampMillis</td><td style="text-align:left;">时间戳毫秒</td><td>1715173200848</td></tr><tr><td style="text-align:left;">timestamp</td><td style="text-align:left;">时间戳</td><td>1715173200</td></tr><tr><td style="text-align:left;">date</td><td style="text-align:left;">执行时间 <br><code>yyyy-MM-dd</code></td><td><code>2024-01-01</code></td></tr><tr><td style="text-align:left;">datetime</td><td style="text-align:left;">执行时间 <br><code>yyyy-MM-dd HH:mm:ss</code></td><td><code>2024-01-01 21:00:00</code></td></tr></tbody></table>',1))])}const g=r(n,[["render",c]]);export{p as __pageData,g as default};
