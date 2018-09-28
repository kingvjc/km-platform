<script>
import {mapActions, mapGetters} from 'vuex';
import topBar from './topbar';
export default {
	created() {
		this.getArticleList();
	},
	data() {
		return {
		}
	},
	methods: {
		articleEdit(row) {
			this.$router.push({
                name: 'articleEdit',
                query: {
                	id: row.id,
                	type: 1
                }
            })
		},
		...mapActions('questionShare', [
            'articleSave', 'getArticleList'
        ])
	},
	computed: {
		...mapGetters('personCenter', {
		}),
		...mapGetters('questionShare', {
			articleList: 'articleList'
		})
	},
	components: {
		topBar
	}
}
</script>

<template>
<div class="question-share">
    <top-bar></top-bar>
    <div class="article-list">
	    <article>
	        <el-card class="box-card" :body-style="{padding:'10px'}">
	          <div v-for="(item, index) in articleList">
	              <h3>
	                <span>{{index+1}}.{{item.title}} <el-button icon="el-icon-edit" type="text" @click="articleEdit(item)"></el-button></span>
	                <i>创建于:{{item.createTime}}</i>
	              </h3>
	              <div v-html="item.article" class="indent"></div>
	          </div>
	        </el-card>
	    </article>
	</div>
</div>
</template>

<style scoped lang="stylus">
.article-list
    padding 5px
    h3
        display flex
        flex-direction rows
        justify-content space-between
        i
            color gray
            font-weight lighter
            font-size 12px
.indent
    text-indent 2em
    font-size 15px
    font-family  'serif'
    P
        overflow hidden
        text-overflow ellipsis
        display -webkit-box
        -webkit-line-clamp 2
        -webkit-box-orient vertical
</style>

