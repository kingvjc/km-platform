<script>
import {mapActions} from 'vuex';
export default {
	created(){
	},
    props: {
    },
	data() {
		return {
            keyWord: {
                title: ''
            }
		};
	},
	methods: {
        addArticle() {
            this.$router.push({
                name: 'articleEdit'
            })
        },
        ...mapActions('questionShare', [
            'getArticleList'
        ])
	}
}
</script>
<template>
<div class="quetion-search">
<el-row :gutter="20">
    <el-col :span="4">
        <el-input
         class="space-input"
         v-model="keyWord.title"
         placeholder="请输入关键词"
         size="small"
         clearable>
        </el-input>
    </el-col>
    <el-col :span="4">
        <el-button
         size="small"
         type="success"
         @click="getArticleList(keyWord)"
         @keyup.enter="getArticleList(keyWord)"
         >搜索</el-button>
    </el-col>
    <el-col :span="16" class="article-right">
        <el-button 
         size="small"
         type="text"
         icon="el-icon-plus"
         @click="addArticle"
        >写文章</el-button>
    </el-col>
</el-row>
</div>
</template>
<style scoped lang="stylus">
.quetion-search
    margin-top 10px
    .space-input
        margin-left 5px
    .article-right
        text-align right
        .el-button
            margin-right 5px
</style>
