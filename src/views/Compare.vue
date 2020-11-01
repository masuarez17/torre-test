<template>
  <div class="container-fluid bg-dark h-100 p-3">
    <div class="row justify-content-center mb-4">
      <Navbar />
    </div>
    <div class="row mt-5 justify-content-center" v-if="items.length !== 0">
      <b-container class="w-75">
        <b-row>
          <b-col cols="12" sm="4" class="my-1" :key="index" v-for="(item, index) in paginatedItems">
            <b-card
              :img-src="item.picture === null ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png' : item.picture"
              class="shadow bg-dark text-white text-center"
              img-top
              footer-tag="footer"
            >
              <h4 class="card-text">{{item.name}}</h4>
              <span class="">{{item.professionalHeadline}}</span>
              <p class="card-text">{{item.locationName}}</p>
              <template #footer>
                <button type="button" @click="removeFromCompare(item)" class="btn btn-danger">Remove from compare list</button>
              </template>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="row mt-5 text-center align-items-start justify-content-center" v-else>
      <h1 class="text-white text-center">Add users to compare</h1>
    </div>
    <br/>
    <br/>
    <div class="row justify-content-center" v-if="items.length !== 0">
      <div class="card shadow bg-dark w-75 border border-dark">
          <div class="d-flex justify-content-end">
            <b-pagination
              @change="onPageChanged"
              :total-rows="totalRows"
              :per-page="perPage"
              v-model="currentPage"
              :container-class="'pagination'"
              :pageClass="'page-item'"
              :pageLinkClass="'page-link-item'"
            />
        </div>
      </div>
    </div>
    <br/>
    ,<br/>
    <div class="row justify-content-center text-white align-content-end mb-5">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default {
  name: 'Home',
  components: {
    Footer,
    Navbar
  },
  data: () => {
    return {
      searchQuery: '',
      items: [],
      paginatedItems: [],
      currentPage: 1,
      perPage: 3,
      totalRows: 0
    }
  },
  methods: {
    getItems () {
      console.log('ITEMS: ', this.items)
      this.items = this.$store.state.compareTableData
      console.log('ITEMS: ', this.items)
      this.totalRows = this.items.length
      this.paginate(this.perPage, 0)
    },
    removeFromCompare (user) {
      user.isComparing = false
      this.$store.dispatch('removeFromCompare', user)
      this.getItems()
    },
    paginate (pageSize, pageNumber) {
      const itemsToParse = this.items
      this.paginatedItems = itemsToParse.slice(
        pageNumber * pageSize,
        (pageNumber + 1) * pageSize
      )
    },
    onPageChanged (page) {
      this.paginate(this.perPage, page - 1)
    }
  },
  mounted () {
    this.getItems()
    console.log(this.items.length)
  }
}
</script>
