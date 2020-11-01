<template>
  <div class="container-fluid bg-success h-100 p-3">
    <div class="row align-items-start justify-content-center">
      <div class="card w-75 p-4 border border-dark">
        <div class="card-body">
          <div class="input-group input-group-lg">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <span>u</span>
              </div>
            </div>
            <input
              type="text"
              class="form-control"
              aria-label="Large"
              placeholder="Buscar usuario"
              @keypress.enter="haveResults = !haveResults"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5 justify-content-center" v-if="haveResults">
      <div class="card-deck w-75">
        <div class="card">
          <div class="card-img-top">
            <h1>
              <img class="w-100 justify-self-center" src="https://starrgate.s3.amazonaws.com:443/users/e33c47a328f9feeb11964aedf21be1ca3dca33ea/profile_idno8iE.jpg"/>
            </h1>
          </div>
          <div class="card-body">
            <h1>Hola</h1>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h1>Hola</h1>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h1>Hola</h1>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h1>Hola</h1>
          </div>
        </div>
      </div>
    </div>
    <br/>
    <br/>
    <div class="row justify-content-center" v-if="haveResults">
      <div class="card w-75 bg-white">
        <div class="card-body">
          <div class="d-flex justify-content-end">
            <h1>Pagination</h1>
          </div>
        </div>
      </div>
    </div>
    <br/>
    ,<br/>
    <div class="row justify-content-center align-content-end">
      <div class="container-fluid d-flex flex-wrap justify-content-center">
        <div class="copyright d-flex flex-wrap">
          <span>
            &copy; Hecho por <a href="https://github.com/masuarez17">Marcos Suarez</a>&nbsp;
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data: () => {
    return {
      haveResults: false
    }
  }
}
</script>

<style scoped>
</style>
