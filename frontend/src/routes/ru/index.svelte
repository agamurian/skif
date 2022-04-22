<script>
    // Components
    // Libraries
    import {locale, t} from '$lib/translations';
</script>
  <!-- Marketing messaging and featurettes
  ================================================== -->
  <!-- Wrap the rest of the page in another container to center all the content. -->
<div class="container">
  <br>
  <div class="row">
  <div class="col-lg-6 col-sm-12">
    <i><h1 style="font-size: 95px; padding-top: 10px;"><img src="/skif.webp" style="margin-top:10px; margin-right:-20px;" height="240px" width="240px"><img> skif</h1>
      </i>
  </div>
  <div class="col-lg-6 col-sm-12">
    <i><h2 style="font-size: 35px; padding-top: 40px;">Маленький и способный <nobr>фреймворк-шаблон</nobr> для быстрого развертывания веб-приложений</h2>
      </i>
      <br>
      <h5 style="font-weight: 900;">Фуллстак стартер на Flask и Sveltekit</h5>
  </div>
  </div>
</div>
<br><br>
  <div class="container marketing">

    <!-- Three columns of text below the carousel -->
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12 card">
        <div class="card-header" style="border:none;border-radius:5px;">
          <h2 class="mt-2">основан на SKIS</h2>
        </div>
        <ul class="nav nav-tabs btn-group my-3" id="myTab" role="tablist" style="border:none;">
  <li class="nav-item" role="presentation">
    <button class="nav-link active btn m-1" id="sveltekit-tab" data-bs-toggle="tab" data-bs-target="#sveltekit" type="button" role="tab" aria-controls="home" aria-selected="true">SvleteKit</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link btn m-1" id="mdsvex-tab" data-bs-toggle="tab" data-bs-target="#mdsvex" type="button" role="tab" aria-controls="profile" aria-selected="false">Mdsvex</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link btn m-1" id="i18n-tab" data-bs-toggle="tab" data-bs-target="#i18n" type="button" role="tab" aria-controls="contact" aria-selected="false">i18n</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="card-body tab-pane fade show active" id="sveltekit" role="tabpanel" aria-labelledby="home-tab">
    <h2>SvelteKit</h2>
        <h5>dynamic routing and static site generation, also svelte support</h5>
        <hr>
  </div>
  <div class="card-body tab-pane fade" id="mdsvex" role="tabpanel" aria-labelledby="profile-tab">
        <h2 class="dropdown">Markdown support</h2>
        <p>just edit .md files and place them in folders! Inside mdsvex files you can also embed dynamic svelte components or any svelte code.</p>
        <hr>
  </div>
  <div class=" card-body tab-pane fade" id="i18n" role="tabpanel" aria-labelledby="contact-tab">
        <h3>Internatiolisation</h3>
        <p>Just put your files inside folders routes/en and routes/ru - locale switcher is included skis.</p>
        <p>Also you can rule global language variables in configs</p>
        <hr>
  </div>
</div>
      </div><!-- /.col-lg-4 -->
      <div class="col-lg-6 col-md-6 col-sm-12 card">
        <div class="card-header" style="border:none;border-radius:5px;">
          <h2 class="mt-2">Flask Based</h2>
        </div>
        <ul class="nav nav-tabs btn-group my-3" id="myTab" role="tablist" style="border:none;">
  <li class="nav-item" role="presentation">
    <button class="nav-link active btn m-1" id="flask-tab" data-bs-toggle="tab" data-bs-target="#flask" type="button" role="tab" aria-controls="home" aria-selected="true">Flask</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link btn m-1" id="marshmallow-tab" data-bs-toggle="tab" data-bs-target="#marshmallow" type="button" role="tab" aria-controls="profile" aria-selected="false">Marshmallow</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link btn m-1" id="python-tab" data-bs-toggle="tab" data-bs-target="#python" type="button" role="tab" aria-controls="contact" aria-selected="false">Python</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="card-body tab-pane fade show active" id="flask" role="tabpanel" aria-labelledby="home-tab">
    <h2>основан на Flask</h2>
        <h5>ответы API, много доступных плагинов и минималистичный подход к бэкенду, а также довольно безопасный и стабильный фреймворк</h5>
        <hr>
  </div>
  <div class="card-body tab-pane fade" id="marshmallow" role="tabpanel" aria-labelledby="profile-tab">
        <h2 class="dropdown">Marshmallow для API схем</h2>
        <p>just edit rout names and place app.py</p>
        <hr>
  </div>
  <div class=" card-body tab-pane fade" id="python" role="tabpanel" aria-labelledby="contact-tab">
        <h3>Сила Python</h3>
        <p>Just put your python files inside foldlers and import them in your app.py</p>
        <p>Packages are tested versions and freezed in Pipfile, just pipenv shell!</p>
        <hr>
</div>
      </div><!-- /.col-lg-4 -->
      </div><!-- /.col-lg-4 -->
      <div class="col-lg-12 col-md-12 col-sm-12 card my-3">
        
      </div><!-- /.col-lg-4 -->
        <br>
    </div><!-- /.row -->

  </div><!-- /.container -->
