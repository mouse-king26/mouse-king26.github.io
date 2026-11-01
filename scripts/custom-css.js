hexo.extend.injector.register('head_end', '<link rel="stylesheet" href="/css/custom.css">');


// KaTeX 行内公式支持:主题的 auto-render 调用没配单 $ 分隔符,这里补一次
// 注意用 String.raw:注入的内联脚本里要保留 "\\(",写成普通模板串会被转义成 "("
hexo.extend.injector.register('body_end', String.raw`<script>
window.addEventListener("load", function() {
    function renderMath() {
        if (typeof renderMathInElement !== "function") return;
        document.querySelectorAll('[role="article"] > .content').forEach(function(el) {
            renderMathInElement(el, {
                delimiters: [
                    {left: "$$", right: "$$", display: true},
                    {left: "$", right: "$", display: false},
                    {left: "\\(", right: "\\)", display: false},
                    {left: "\\[", right: "\\]", display: true}
                ],
                ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"]
            });
        });
    }
    renderMath();
    document.addEventListener("pjax:success", renderMath);
});
</script>`);
