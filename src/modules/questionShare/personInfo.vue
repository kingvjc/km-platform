<script>
export default {
	created(){
	},
	data() {
		return {
		};
	},
	methods: {
		edit() {
		}
	}
}
</script>
<template>
<div class="left">
	<div><span>个人简介</span><el-button size="mini"type="success" @click="edit">编辑</el-button></div>
	<div ref="instro">1111</div>
</div>
</template>
<style scoped lang="stylus">
.left
    width 250px
    min-height 300px
    border 1px solid green
    padding 10px
    div:first-child
        background url(../../../static/img/person.png) no-repeat
        padding-left 50px
        span
            margin-right 70px
    div:nth-child(2)
        margin-top 10px
        padding 5px
        height 90px
        border 1px solid lightgray
        background #D7D7D7

</style>
