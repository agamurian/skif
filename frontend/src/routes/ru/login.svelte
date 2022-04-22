<script>
  import { onMount} from "svelte";

  let username;
  let password;
  let csrfToken;
  let isAuthenticated = false;

  onMount(() => {
    fetch("http://localhost:5000/api/getsession", {
      credentials: "include",
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.login == true) {
        isAuthenticated = true;
      } else {
        isAuthenticated = false;
        csrf();
      }
    })
    .catch((err) => {
      console.log(err);
    });
  });

  const csrf = () => {
    fetch("http://localhost:5000/api/getcsrf", {
      credentials: "include",
    })
    .then((res) => {
      csrfToken = res.headers.get(["X-CSRFToken"]);
      // console.log(csrfToken);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const login = () => {
    fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken
      },
      credentials: "include",
      body: JSON.stringify({ username: username, password: password }),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.login == true) {
        isAuthenticated = true;
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const whoami = () => {
    fetch("http://localhost:5000/api/data", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      },
      credentials: "include",
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      alert(`Welcome, ${data.username}!`);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const logout = () => {
    fetch("http://localhost:5000/api/logout", {
      credentials: "include",
    })
    .then(() => {
      isAuthenticated = false;
    })
    .catch((err) => {
      console.log(err);
    });
  };
</script>

<style>
  .container {
    padding-top: 80px;
  }
</style>

  <div class="container">
    {#if isAuthenticated}
    <center>
      <h1 >Вы авторизованы!</h1>
      <!-- Button trigger modal -->
      <div >
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Запустить окошко
</button>

<!-- Modal -->
<div class="modal fade" style="position:abssolute" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="false">
  <div class="modal-dialog" style="margin-top:80px;margin-bottom: 40px;">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Заголовок окошка</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
        <button type="button" class="btn btn-primary">Сохранить</button>
      </div>
    </div>
  </div>
</div>

      <button type="button" on:click={whoami} class="btn">Хто я?</button>
      <button type="button" on:click={logout} class="btn">Выйти</button>
      </div>
    </center>
    {:else}
      <h1 class="mx-auto center text-center">Войти</h1>
      <br>
<form id="form" class="form my-3 w-50 text-left mx-auto">
          <div class="mb-3 text-left">
            <label for="text" class="form-label text-left">Имя пользователя</label>
            <input type="text" class="form-text form-control" bind:value={username} />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Пароль</label>
            <input type="password" class="form-control" bind:value={password} />
            <br>
          </div>
        <button type="button" on:click={login} class="btn">Войти</button>
      </form>
    {/if}
  </div>
