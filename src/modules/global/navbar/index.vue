<script>
export default {
    created() {
        this.init();
    },
    computed: {
    },
    data() {
        return{
            routers: []
        };
    }, 
    methods: {
        init() {
            const router = this.$router.options.routes;
            this.routes = router.slice(2, router.length);
        }
    }
}
</script>
<template>
<div class="nav-bar">
<aside>
    <el-menu
      mode="vertical"
      :unique-opened="true"
      default-active="/name-rules/center"
      class="el-menu-vertical-demo">
        <template v-for="item in routes">
            <el-submenu :index="item.name" :key="item.name">
                <template slot="title">
                    <i :class="item.icon"></i>
                    <span>{{item.meta.label}}</span>
                </template>
                <template v-for="child in item.children">
                    <router-link :key="child.name" :to="item.path + '/' + child.path">
                        <el-menu-item :index="item.path+'/'+child.path">
                            {{child.meta.label}}
                        </el-menu-item>
                    </router-link>
                </template>
            </el-submenu>
        </template>
    </el-menu>
</aside>
</div>
</template>
<style scoped lang="stylus">
.nav-bar
    position absolute
    top 45px
    bottom 0
    color #fff
    aside
        height 100%
        width 200px
        text-direction none
        ul
            height 100%
            a
                text-decoration none

</style>
