<template>
<nav-bar></nav-bar>
<side-bar></side-bar>
<router-view></router-view>
</template>
<script type="text/javascript">
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'

  export default{
    data()
    {
       return {
        name:'tajul'
       }
    },
    components : {
      NavBar,
      SideBar
    }
  }
</script>