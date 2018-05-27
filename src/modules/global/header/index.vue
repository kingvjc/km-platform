<template>
<div id="header">
<header class="header">
    <div class="brand">
        <h2>KM平台</h2>
    </div>
    <ul class="header">
        <router-link tag="li" to="/name-rules">命名规则</router-link>
        <router-link tag="li" to="/question-share">问题分享</router-link>
        <router-link tag="li" to="/code-share">代码分享</router-link>
        <router-link tag="li" to="/person-center">个人中心</router-link>
    </ul>
</header>
</div>
</template>
<style scoped lang="stylus">
#header
    background #1B1E85
.header
    color white
    height 45px
    display flex
    flex-direction row
    justify-content flex-start
    align-items center
    h2
       padding-left 20px
       padding-right 100px
ul
    padding 0
    margin 0
    list-style none
    li
        padding 14px 20px
        cursor pointer
        &:hover
           background #2C2A73
.router-link-active
    background #242260
</style>