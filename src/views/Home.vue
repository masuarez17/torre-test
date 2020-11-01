<template>
  <div class="container-fluid bg-dark h-100 p-3">
    <div class="row justify-content-center mb-4">
      <Navbar />
    </div>
    <div class="row align-items-start justify-content-center">
      <div class="shadow bg-dark card w-75 p-4 border border-dark">
        <div class="card-body">
          <div class="input-group input-group-lg">
            <div class="input-group-prepend">
              <div class="d-none d-sm-block border border-secondary bg-dark input-group-text">
                <font-awesome-icon icon="user-circle"/>
              </div>
            </div>
            <input
              v-model="searchQuery"
              type="text"
              class="form-control border border-secondary bg-dark text-white"
              aria-label="Large"
              placeholder="Search by name"
              @keypress.enter="fetchUsers"
            />
            <div class="input-group-append">
              <button type="button" :disabled="isSearching" @click="fetchUsers" class="btn btn-outline-secondary">
              <div v-if="isSearching">
                <div class="spinner-border text-white" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
              <div v-else>
                Search
              </div>
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5 justify-content-center" v-if="isSearching">
      <div class="spinner-border text-white" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div class="row mt-5 justify-content-center" v-if="haveResults">
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
                <button type="button" @click="item.isComparing ? removeFromCompare(item) : addToCompare(item)" :class="item.isComparing ? 'btn btn-danger' : 'btn btn-success'">{{item.isComparing ? 'Remove from compare list' : 'Add to compare list'}}</button>
              </template>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <br/>
    <br/>
    <div class="row justify-content-center" v-if="haveResults">
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
  computed: {
    haveResults () {
      return this.$store.state.haveResults
    },
    isSearching () {
      return this.$store.state.isSearching
    }
  },
  methods: {
    getItems () {
      console.log('ITEMS: ', this.items)
      this.items = this.$store.state.usersTableData
      console.log('ITEMS: ', this.items)
      this.totalRows = this.items.length
      this.paginate(this.perPage, 0)
    },
    addToCompare (user) {
      user.isComparing = true
      this.$store.dispatch('addToCompare', user)
    },
    removeFromCompare (user) {
      user.isComparing = false
      this.$store.dispatch('removeFromCompare', user)
    },
    fetchUsers () {
      if (this.searchQuery === '' || !/\S/.test(this.searchQuery) || this.isSearching) {
        return
      }
      const query = {
        name: this.searchQuery
      }
      const request = this.$store.dispatch('fetchUsers', query)
      request.then(() => {
        this.getItems()
      })
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
  }
}
</script>
