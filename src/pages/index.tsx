// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
// import Profile from './components/profile'
// import Gallery from './components/gallery'
// import Gallery from './qcomps/gallery_props'
// import List from './qcomps/list_keys_id'
import RecipeList from './qcomps/recipes'
// import Gallery from './components/state'
import Gallery from './qcomps/state'
import PersonData from './components/stateObj'
// import Form from './qcomps/stuckForm'
import RequestTracker from './qcomps/shoppingCart'
import Form from './components/updObjects'
import Scoreboard from './qcomps/updObjectsForm'
import List from './qcomps/artistsRemoveArr'
// Profile

export default function Home() {
  return (
    <List />
    // <List />
    // <RecipeList />
  )
}
