import { c as create_ssr_component } from "../../../chunks/index-bb157ef7.js";
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"container"}"><br>
    <i><h1 style="${"font-size: 95px; padding-top: 10px;"}"><img src="${"/saw.webp"}" style="${"margin-top:-10px;"}" height="${"90px"}" width="${"90px"}"><img> SAW</h1></i>
<br><br>
<h1>skis</h1>
<h4>Static Site Generator based on sveltekit + mdsvex + i18n + bootstrap5</h4>
<hr>
<p>skis (aka lyzhy (ru,komi)) is a nice simple instrument to get faster!</p>
<h4>skis uses:</h4>
<ul><li><p><em>sveltekit</em></p></li>
<li><p><em>i18n</em></p></li>
<li><p><em>svelte_mdsvex</em></p>
<p>thats also why it named SKIS</p></li></ul>
<hr>
<h2>Install:</h2>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">git clone https://github.com/agamurian/skis.git
cd skis
yarn
</code>`}<!-- HTML_TAG_END --></pre>
<hr>
<h2>Run development server:</h2>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">yarn dev --host
</code>`}<!-- HTML_TAG_END --></pre>
<hr>
<h2>Build static site:</h2>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">yarn build
</code>`}<!-- HTML_TAG_END --></pre>
<hr>
<div class="${"col-12 col-sm-12 my-5"}">
    <div class="${"row"}"><div class="${"col-lg-5 col-md-6 col-sm-11 card"}"><div class="${"card-header"}" style="${"border:none;border-radius:5px;"}"><h2 class="${"mt-2"}">SKIS Based</h2></div>
        <ul class="${"nav nav-tabs btn-group my-3"}" id="${"myTab"}" role="${"tablist"}" style="${"border:none;"}"><li class="${"nav-item"}" role="${"presentation"}"><button class="${"nav-link active btn m-1"}" id="${"sveltekit-tab"}" data-bs-toggle="${"tab"}" data-bs-target="${"#sveltekit"}" type="${"button"}" role="${"tab"}" aria-controls="${"home"}" aria-selected="${"true"}">SvleteKit</button></li>
  <li class="${"nav-item"}" role="${"presentation"}"><button class="${"nav-link btn m-1"}" id="${"mdsvex-tab"}" data-bs-toggle="${"tab"}" data-bs-target="${"#mdsvex"}" type="${"button"}" role="${"tab"}" aria-controls="${"profile"}" aria-selected="${"false"}">Mdsvex</button></li>
  <li class="${"nav-item"}" role="${"presentation"}"><button class="${"nav-link btn m-1"}" id="${"i18n-tab"}" data-bs-toggle="${"tab"}" data-bs-target="${"#i18n"}" type="${"button"}" role="${"tab"}" aria-controls="${"contact"}" aria-selected="${"false"}">i18n</button></li></ul>
<div class="${"tab-content"}" id="${"myTabContent"}"><div class="${"card-body tab-pane fade show active"}" id="${"sveltekit"}" role="${"tabpanel"}" aria-labelledby="${"home-tab"}"><h2>Based on SvelteKit</h2>
        <h5>dynamic routing and static site generation, also svelte support</h5>
        <hr></div>
  <div class="${"card-body tab-pane fade"}" id="${"mdsvex"}" role="${"tabpanel"}" aria-labelledby="${"profile-tab"}"><h2 class="${"dropdown"}">Markdown support</h2>
        <p>just edit .md files and place them in folders! Inside mdsvex files you can also embed dynamic svelte components or any svelte code.</p>
        <hr></div>
  <div class="${"card-body tab-pane fade"}" id="${"i18n"}" role="${"tabpanel"}" aria-labelledby="${"contact-tab"}"><h3>Internatiolisation</h3>
        <p>Just put your files inside folders routes/en and routes/ru - locale switcher is included skis.</p>
        <p>Also you can rule global language variables in configs</p>
        <hr></div></div>
      </div>
      <div class="${"col-lg-6 col-md-5 col-sm-11 card"}"><div class="${"card-header"}" style="${"border:none;border-radius:5px;"}"><h2 class="${"mt-2"}">SKIS Based</h2></div>
        <ul class="${"nav nav-tabs btn-group my-3"}" id="${"myTab"}" role="${"tablist"}" style="${"border:none;"}"><li class="${"nav-item"}" role="${"presentation"}"><button class="${"nav-link active btn m-1"}" id="${"sveltekit-tab"}" data-bs-toggle="${"tab"}" data-bs-target="${"#sveltekit"}" type="${"button"}" role="${"tab"}" aria-controls="${"home"}" aria-selected="${"true"}">SvleteKit</button></li>
  <li class="${"nav-item"}" role="${"presentation"}"><button class="${"nav-link btn m-1"}" id="${"mdsvex-tab"}" data-bs-toggle="${"tab"}" data-bs-target="${"#mdsvex"}" type="${"button"}" role="${"tab"}" aria-controls="${"profile"}" aria-selected="${"false"}">Mdsvex</button></li>
  <li class="${"nav-item"}" role="${"presentation"}"><button class="${"nav-link btn m-1"}" id="${"i18n-tab"}" data-bs-toggle="${"tab"}" data-bs-target="${"#i18n"}" type="${"button"}" role="${"tab"}" aria-controls="${"contact"}" aria-selected="${"false"}">i18n</button></li></ul>
<div class="${"tab-content"}" id="${"myTabContent"}"><div class="${"card-body tab-pane fade show active"}" id="${"sveltekit"}" role="${"tabpanel"}" aria-labelledby="${"home-tab"}"><h2>Based on SvelteKit</h2>
        <h5>dynamic routing and static site generation, also svelte support</h5>
        <hr></div>
  <div class="${"card-body tab-pane fade"}" id="${"mdsvex"}" role="${"tabpanel"}" aria-labelledby="${"profile-tab"}"><h2 class="${"dropdown"}">Markdown support</h2>
        <p>just edit .md files and place them in folders! Inside mdsvex files you can also embed dynamic svelte components or any svelte code.</p>
        <hr></div>
  <div class="${"card-body tab-pane fade"}" id="${"i18n"}" role="${"tabpanel"}" aria-labelledby="${"contact-tab"}"><h3>Internatiolisation</h3>
        <p>Just put your files inside folders routes/en and routes/ru - locale switcher is included skis.</p>
        <p>Also you can rule global language variables in configs</p>
        <hr></div>
      </div>
      </div>
      <div class="${"col-lg-11 col-md-11 col-sm-11 card m-3"}"></div>
        <br>
    </div>
  </div>
<div class="${"col-md-12 col-sm-12 my-5 card"}"><h1>Capabilities:</h1>
<h4>All svelte capabilities + sveltekit routing and ssg + mdsvex amazing preprocessing + i18n built in + Bootstrap5 css</h4>
<p>Make fast sites, fast.</p>
<hr>
<p>skis is developed by AGAMURIAN</p></div></div>`;
});
export { About as default };
