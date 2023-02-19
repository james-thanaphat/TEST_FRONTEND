<template>
  <div>
    <section class="container" style="height: 868px; color: #FFFFFF;">
      <div class="row align-items-center h-100">
        <div class="col">
          <div class="row">
            <div class="col-5">
              <div class="title">
                <h1>LOREM</h1>
                <h1 style="color: #D9EF0C;">IPSUM</h1>
              </div>
              <div class="custom-m-t-6" style="width: 440px;">
                <p style="font-style: normal;font-weight: 600;font-size: 20px;line-height: 24px;">
                  Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply
                </p>
                <p style="font-style: normal;font-weight: 400;font-size: 18px;line-height: 150%;">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                  has been the
                  industry's
                </p>
              </div>
            </div>
            <div class="col-7">
              <img src="@/assets/bicycle.png" class="img-fluid" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section style="height: 900px; color: #FFFFFF;">
      <div class="row align-items-center h-100">
        <div class="col">
          <div class="row">
            <div class="col-12" style="margin-bottom: 7rem;">
              <h1
                style="font-weight: 700;font-size: 60px;line-height: 73px;text-align: center;text-transform: uppercase;">
                <span>LOREM </span>
                <span>IPSUM </span>
                <span style="color:#D9EF0C;">LOREM</span>
              </h1>
            </div>
            <div class="col-12">
              <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner text-center">
                  <div class="carousel-item active">
                    <img src="@/assets/ellipse.png" class="mb-5" alt="">
                    <div class="m-auto" style="width: 303px;">
                      <p style="font-style: normal;font-weight: 600;font-size: 26px;line-height: 32px;">
                        Lorem Ipsum is simply
                      </p>
                    </div>
                    <div class="m-auto" style="width: 856px;">
                      <p style="font-style: normal;font-weight: 400;font-size: 18px;line-height: 150%;">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of
                        type and scrambled it to make a type specimen book.
                      </p>
                    </div>
                  </div>
                </div>
                <button class="carousel-control-prev justify-content-start" type="button"
                  data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span class="p-2 px-3" style="background: #C4C4C4; color: #000000;">
                    <i class="fa-solid fa-arrow-left"></i>
                  </span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next justify-content-end" type="button" data-bs-target="#carouselExample"
                  data-bs-slide="next">
                  <span class="p-2 px-3" style="background: #D9EF0C; color: #000000;">
                    <i class="fa-solid fa-arrow-right"></i>
                  </span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section style="height: 900px; color: #000000; background: #D9EF0C;">
      <section class="container h-100">
        <div class="row align-items-center h-100">
          <div class="col">
            <div class="row">
              <div class="col-12" style="margin-bottom: 7rem;">
                <h1
                  style="font-weight: 700;font-size: 60px;line-height: 73px;text-align: center;text-transform: uppercase;">
                  <span>LOREM IPSUM</span>
                </h1>
              </div>
              <div class="col-12">
                <div v-if="products.length" class="d-flex justify-content-center">
                  <div 
                    v-for="(list, index) of products"
                    :key="index"
                    class="card mx-2" 
                    style="width: 416px; height: 443px; border-radius: 4px; box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.06);"
                  >
                    <img :src="list.thumbnail" class="card-img-top" alt="" width="416" height="236">
                    <div class="card-body pb-5">
                      <h5 class="card-title">{{ list.title }}</h5>
                      <p class="card-text">{{ list.description }}</p>
                    </div>
                  </div>
                </div>
                <div v-else>-</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
    <section class="container" style="height: 1003px;">
      <div class="row align-items-center h-100">
        <div class="col">
          <div class="row">
            <div class="col-auto">
              <div class="d-flex align-items-center h-100">
                <img src="@/assets/bicycle.png" alt="" class="img-fluid" style="width: 719; height: 423px;">
              </div>
            </div>
            <div class="col-4" style="margin-left: 5rem;">
              <div>
                <form class="contact-form d-flex flex-column mb-3">
                  <h1 class="mb-5" style="color: #FFFFFF;">ติดต่อเรา</h1>
                  <div class="form-field">
                    <input class="input-text" type="text" placeholder="ชื่อ - นามสกุล">
                  </div>
                  <div class="form-field">
                    <input class="input-text" type="text" placeholder="เบอร์ติดต่อ">
                  </div>
                  <div class="form-field">
                    <input class="input-text" type="text" placeholder="อีเมล">
                  </div>
                  <div class="form-field">
                    <datepicker input-class="input-date p-0 custom-p-s-6 pe-5 pb-2" format="dd/MM/yyyy" :typeable="true"
                      :hideInput="false" :calendar-class="'custom'" :icon-color="'white'" :wrapper-class="'w-100'" />
                    <label class="label-date">วันที่</label>
                  </div>
                </form>
                <div class="mb-5"
                  style="max-width:290px; color: #FFFFFF; font-style: normal; font-weight: 400; font-size: 16px; line-height: 140.9%;">
                  <dd>Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy te</dd>
                </div>
                <button class="lorem-button btn">LOREM</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
  
<script>
import Datepicker from 'vuejs3-datepicker';
import Api from '@/services/endpoint/public.service.js';

export default {
  name: 'HomeIndex',
  components: {
    Datepicker
  },
  data() {
    return {
      products: []
    }
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      await Api.Products.lists('?limit=3').then(response => {
        this.products = response.data.products;
      }).catch(error => {
        console.log(error, 'product error');
      });
    }
  }
}
</script>

<style>
.title {
  width: 552px;
  height: 234px;
}

.title h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  line-height: 117px;
  text-transform: uppercase;
  text-shadow: 0px 4px 30px #21612F;
}

.contact-form {
  position: relative;
  font-family: 'Kanit', sans-serif;
}

.contact-form .form-field {
  position: relative;
  margin: 14px 0;
}

.contact-form .input-text {
  display: block;
  width: 100%;
  height: 36px;
  background: none;
  border-width: 0 0 2px 0;
  border-color: #F5F5F5;
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  color: #EDEDEE;
}

.contact-form .input-date {
  display: block;
  min-width: 100% !important;
  height: 36px;
  background: none;
  border-width: 0 0 2px 0;
  border-color: #F5F5F5;
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  color: #EDEDEE;
  border-radius: 0 !important;
}

.contact-form .input-date:focus {
  outline: none;
}

.contact-form .input-text:focus {
  outline: none;
}

.input-text::placeholder {
  color: #EDEDEE;
}

.input-date::placeholder {
  color: #EDEDEE;
}

.input-date::-webkit-calendar-picker-indicator {
  color: transparent;
  background: none;
  z-index: 1;
}

.input-date:before {
  color: transparent;
  background: none;
  display: block;
  font-family: 'FontAwesome';
  content: '\f073';
  width: 15px;
  height: 20px;
  position: absolute;
  top: 4px;
  right: 10px;
  color: #EDEDEE;
}

.lorem-button {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #000000;
  background: linear-gradient(180deg, #DEE34B 0%, #D9EF0C 35.94%, #87A30D 100%);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.35);
  border-radius: 50px;
  width: 290px;
  height: 56px;
}

.vuejs3-datepicker__typeablecalendar {
  position: absolute;
  top: 5px !important;
  right: 10px !important;
  left: inherit;
}

.vuejs3-datepicker__calendar {
  right: 0 !important;
}

.vuejs3-datepicker__calendar-topbar {
  display: none !important;
}

.vuejs3-datepicker__calendar-actionarea header>.day__month_btn,
.vuejs3-datepicker__calendar-actionarea header>.month__year_btn,
.vuejs3-datepicker__calendar-actionarea header>span:not(.prev, .next) {
  position: relative;
  left: -42px;
}

.vuejs3-datepicker__calendar-actionarea>header {
  position: relative;
  min-width: 100%;
  height: 60px;
  border-style: solid;
  border-width: 0 0 1px;
  border-color: #DBDADE;
  margin-bottom: 1rem;
}

.vuejs3-datepicker__calendar header span {
  width: 60.428571%;
}

.vuejs3-datepicker__calendar-actionarea>header>.prev {
  border-radius: 100% !important;
  background: rgba(75, 70, 92, 0.08);
  position: relative;
  right: -176px;
}

.vuejs3-datepicker__calendar-actionarea>header>.next {
  border-radius: 100% !important;
  background: rgba(75, 70, 92, 0.08);
  position: relative;
  right: -24px;
}

.vuejs3-datepicker__calendar .cell.selected {
  border-radius: 100% !important;
  background: #DEE34B;
  color: #231F20;
}

.vuejs3-datepicker__calendar .cell.day:hover {
  border-radius: 100% !important;
  background: #DEE34B;
  color: #231F20;
}

.label-date {
  position: absolute;
  color: #FFFFFF;
  top: 1px;
  left: 0;
}

.custom-p-s-6 {
  padding-left: 6rem !important;
}

.custom-m-t-6 {
  margin-top: 6rem !important;
}
</style>