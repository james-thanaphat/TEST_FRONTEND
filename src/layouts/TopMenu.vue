<template>
  <section class="container-fluid p-0">
    <nav class="navbar navbar-expand">
      <div class="container justify-content-start">
        <div class="logo">
          <img src="@/assets/logo.png" class="me-2" alt="logo">
          <a class="navbar-brand" href="javascript:void(0);">
            <span style="color: #FFFFFF;">LOREM </span>
            <span style="color: #D9EF0C;">IPSUM</span>
          </a>
        </div>
        <div class="ms-5">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">
                LOREM
              </router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                LOREM
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link to="/lorem-first" class="dropdown-item">
                    LOREM FIRST
                  </router-link>
                </li>
                
              </ul>
            </li>
            <li class="nav-item">
              <router-link to="/loremipsum" class="nav-link">
                LOREMIPSUM
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/lorem-ipsum" class="nav-link">
                LOREM & IPSUM
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/lorem" class="nav-link">
                LOREM
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </section>
</template>
    
<script>
export default {
  name: 'TopMenu'
}
</script>
    
<style>
.navbar {
  background: inherit;
  height: 150px;
}

.logo img {
  width: 74px;
  height: 87px;
}

.logo a {
  font-style: italic;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;
}

.nav-link {
  color: #FFFFFF !important;
}
</style>  