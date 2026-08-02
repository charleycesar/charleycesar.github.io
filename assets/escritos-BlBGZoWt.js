var l={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o;function x(){if(o)return n;o=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function h(p,a,r){var t=null;if(r!==void 0&&(t=""+r),a.key!==void 0&&(t=""+a.key),"key"in a){r={};for(var d in a)d!=="key"&&(r[d]=a[d])}else r=a;return a=r.ref,{$$typeof:s,type:p,key:t,ref:a!==void 0?a:null,props:r}}return n.Fragment=e,n.jsx=h,n.jsxs=h,n}var c;function k(){return c||(c=1,l.exports=x()),l.exports}var i=k();const j={titulo:"Estrutura vence disciplina",resumo:"Por que automatizar a decisão funciona melhor do que tentar tomá-la certo toda vez.",data:"2026-08-01",tags:["engenharia","processo"],draft:!0};function u(s){const e={blockquote:"blockquote",code:"code",figure:"figure",h2:"h2",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...s.components};return i.jsxs(i.Fragment,{children:[i.jsxs(e.blockquote,{children:[`
`,i.jsxs(e.p,{children:[i.jsx(e.strong,{children:"Rascunho gerado como andaime."}),` O esqueleto abaixo existe para você ver o
pipeline de MDX funcionando — frontmatter tipado, tabela, bloco de código,
âncora de heading. Reescreva com a sua voz e o seu exemplo, ou apague o
arquivo. Enquanto `,i.jsx(e.code,{children:"draft: true"}),", ele não aparece em produção."]}),`
`]}),`
`,i.jsx(e.p,{children:`Toda vez que um processo depende de alguém lembrar de fazer a coisa certa, ele
falha na primeira semana ruim. A alternativa não é tentar mais — é mudar a
estrutura para que o caminho certo seja o caminho padrão.`}),`
`,i.jsx(e.h2,{id:"o-padrão",children:"O padrão"}),`
`,i.jsxs(e.p,{children:[`Sempre que eu vejo um time discutindo "precisamos ter mais cuidado com X", a
pergunta melhor é: `,i.jsx(e.strong,{children:"o que faria X acontecer sozinho?"})]}),`
`,i.jsxs(e.table,{children:[i.jsx(e.thead,{children:i.jsxs(e.tr,{children:[i.jsx(e.th,{children:"Depende de lembrar"}),i.jsx(e.th,{children:"Vira estrutura"})]})}),i.jsxs(e.tbody,{children:[i.jsxs(e.tr,{children:[i.jsx(e.td,{children:'"revisar antes do merge"'}),i.jsx(e.td,{children:"required check no CI"})]}),i.jsxs(e.tr,{children:[i.jsx(e.td,{children:'"não commitar segredo"'}),i.jsx(e.td,{children:"pre-commit hook + scanner"})]}),i.jsxs(e.tr,{children:[i.jsx(e.td,{children:'"manter o CHANGELOG"'}),i.jsx(e.td,{children:"gerar do commit convencional"})]})]})]}),`
`,i.jsx(e.p,{children:"A coluna da esquerda custa atenção toda vez. A da direita custa uma vez."}),`
`,i.jsx(e.h2,{id:"onde-isso-quebra",children:"Onde isso quebra"}),`
`,i.jsxs(e.p,{children:[`Automatizar cedo demais congela uma decisão que você ainda não entendeu. A regra
que uso: `,i.jsx(e.strong,{children:"automatize depois da terceira vez que doeu"}),`, nunca antes da
primeira.`]}),`
`,i.jsx(e.figure,{"data-rehype-pretty-code-figure":"",children:i.jsx(e.pre,{style:{"--shiki-dark":"#e1e4e8","--shiki-light":"#24292e","--shiki-dark-bg":"#24292e","--shiki-light-bg":"#fff"},tabIndex:"0","data-language":"ts","data-theme":"github-dark github-light",children:i.jsxs(e.code,{"data-language":"ts","data-theme":"github-dark github-light",style:{display:"grid"},children:[i.jsx(e.span,{"data-line":"",children:i.jsx(e.span,{style:{"--shiki-dark":"#6A737D","--shiki-light":"#6A737D"},children:"// Antes: cada chamador lembra de validar."})}),`
`,i.jsxs(e.span,{"data-line":"",children:[i.jsx(e.span,{style:{"--shiki-dark":"#F97583","--shiki-light":"#D73A49"},children:"function"}),i.jsx(e.span,{style:{"--shiki-dark":"#B392F0","--shiki-light":"#6F42C1"},children:" salvar"}),i.jsx(e.span,{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"},children:"("}),i.jsx(e.span,{style:{"--shiki-dark":"#FFAB70","--shiki-light":"#E36209"},children:"entrada"}),i.jsx(e.span,{style:{"--shiki-dark":"#F97583","--shiki-light":"#D73A49"},children:":"}),i.jsx(e.span,{style:{"--shiki-dark":"#B392F0","--shiki-light":"#6F42C1"},children:" Entrada"}),i.jsx(e.span,{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"},children:") {"})]}),`
`,i.jsxs(e.span,{"data-line":"",children:[i.jsx(e.span,{style:{"--shiki-dark":"#B392F0","--shiki-light":"#6F42C1"},children:"  gravar"}),i.jsx(e.span,{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"},children:"(entrada);"})]}),`
`,i.jsx(e.span,{"data-line":"",children:i.jsx(e.span,{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"},children:"}"})}),`
`,i.jsx(e.span,{"data-line":"",children:" "}),`
`,i.jsx(e.span,{"data-line":"",children:i.jsx(e.span,{style:{"--shiki-dark":"#6A737D","--shiki-light":"#6A737D"},children:"// Depois: impossível chamar errado."})}),`
`,i.jsxs(e.span,{"data-line":"",children:[i.jsx(e.span,{style:{"--shiki-dark":"#F97583","--shiki-light":"#D73A49"},children:"function"}),i.jsx(e.span,{style:{"--shiki-dark":"#B392F0","--shiki-light":"#6F42C1"},children:" salvar"}),i.jsx(e.span,{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"},children:"("}),i.jsx(e.span,{style:{"--shiki-dark":"#FFAB70","--shiki-light":"#E36209"},children:"entrada"}),i.jsx(e.span,{style:{"--shiki-dark":"#F97583","--shiki-light":"#D73A49"},children:":"}),i.jsx(e.span,{style:{"--shiki-dark":"#B392F0","--shiki-light":"#6F42C1"},children:" EntradaValidada"}),i.jsx(e.span,{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"},children:") {"})]}),`
`,i.jsxs(e.span,{"data-line":"",children:[i.jsx(e.span,{style:{"--shiki-dark":"#B392F0","--shiki-light":"#6F42C1"},children:"  gravar"}),i.jsx(e.span,{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"},children:"(entrada);"})]}),`
`,i.jsx(e.span,{"data-line":"",children:i.jsx(e.span,{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"},children:"}"})})]})})}),`
`,i.jsx(e.p,{children:"O tipo não pede disciplina. Ele torna o erro inexprimível."}),`
`,i.jsx(e.h2,{id:"o-que-eu-levaria-disso",children:"O que eu levaria disso"}),`
`,i.jsx(e.p,{children:`Quando algo falha repetidamente, a pergunta não é "quem esqueceu" — é "por que
era possível esquecer".`})]})}function g(s={}){const{wrapper:e}=s.components||{};return e?i.jsx(e,{...s,children:i.jsx(u,{...s})}):u(s)}const m=Object.freeze(Object.defineProperty({__proto__:null,default:g,meta:j},Symbol.toStringTag,{value:"Module"}));export{m as _,i as j};
