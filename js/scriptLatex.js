MathJax.Hub.Config({
		    tex2jax: {
		        inlineMath: [['$','$'], ['\\(','\\)']],
		        processEscapes: true
		    },
		    jax: ["input/TeX","input/MathML","input/AsciiMath","output/CommonHTML"],
		    extensions: ["tex2jax.js","mml2jax.js","asciimath2jax.js","MathMenu.js","MathZoom.js","AssistiveMML.js", "[Contrib]/a11y/accessibility-menu.js"],
		    TeX: {
		        extensions: ["AMSmath.js","AMSsymbols.js","noErrors.js","noUndefined.js"],
		        equationNumbers: {
		            autoNumber: "AMS"
		        }
		    }
		});

		// js/scriptLatex.js

// Função utilitária para reprocessar LaTeX após mudanças dinâmicas
function renderLatex() {
  if (window.MathJax && window.MathJax.typesetPromise) {
    // MathJax v3
    return window.MathJax.typesetPromise();
  }
  return Promise.resolve();
}

// Expor globalmente (se quiser usar no script principal)
window.renderLatex = renderLatex;