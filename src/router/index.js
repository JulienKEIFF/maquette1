import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Categorie from '../views/Categorie.vue'
import Product from '../views/Product.vue'
import User from '../views/User.vue'

import Admin from '../views/Admin.vue'
import Customer from '../views/Customer.vue'
import Stock from '../views/Stock.vue'
import Shop from '../views/Shop.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cat',
    name: 'categorie',
    component: Categorie
  },
  {
    path: '/product',
    name: 'product',
    component: Product
  },
  {
    path: '/user',
    name: 'user',
    component: User
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/admin/customer',
    name: 'customer',
    component: Customer
  },
  {
    path: '/admin/stock',
    name: 'stock',
    component: Stock
  },
  {
    path: '/admin/shop',
    name: 'shop',
    component: Shop
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router