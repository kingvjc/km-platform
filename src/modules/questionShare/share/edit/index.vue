
<script>
import {mapActions, mapGetters} from 'vuex';
import quillEditor from 'components/quillEditor';
export default {
	created(){
        this.init();
	},
	data() {
		return {
            article: {
                title: '',
                content: ''
            }
		};
	},
    props: {
    },
	methods: {
        init() {
            const {type, id} = this.$route.query;
            console.log(type,id)
            if (+type === 1) {
                this.articleDetail(id)
            }

        },
        async articleDetail(id) {
            try {
                const {status, message, list} = await this.getArticleDetail({id});
                if (status === 0) {
                    this.article.title = list.title;
                    this.article.content = list.article;
                }
            }  catch (e) {
                throw e;
            }
        },
		handlerEdit(type) {
            switch(type) {
                case 0:
                    this.$router.push({
                        name: 'articleList'
                    });
                    break;
                case 1:
                    this.validArticle('article');
                    break;
            }
		},
        validArticle(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.handlerArticleSave(this.article);
                } else {
                    return false;
                }
            });
        },
        async handlerArticleSave(val) {
            try {
                const {status, message} = await this.articleSave(val);
                if (status === 0) {
                    this.$message.success(message);
                    this.$router.push({
                        name: 'articleList'
                    });
                }
            } catch (e) {
                throw e;
            }
        },
        ...mapActions('questionShare', ['getArticleDetail', 'articleSave'])
	},
    computed: {
        ...mapGetters('questionShare', [])
    },
    components: {
        quillEditor
    }
}
</script>
<template>
<div class="editor-share">
    <el-container>
        <el-form ref="article" :model="article">
            <el-form-item
             prop="title"
             label="文章标题5-100字"
             :rules="[{ required: true, message: '不能为空', trigger: 'change' }]"
            >
                <el-input
                  v-model="article.title"
                  placeholder="请输入文章标题"
                  clearable
                ></el-input>
            </el-form-item>
        </el-form>
        <quill-editor
          :article="article"
        ></quill-editor>
        <el-footer class="footer">
            <el-button type="success" size="small" @click="handlerEdit(1)">保存</el-button>
            <el-button size="small" @click="handlerEdit(0)">取消</el-button>
        </el-footer>
    </el-container>
</div>
</template>
<style scoped lang="stylus">
.editor-share
    padding 5px
.el-footer
    margin-top 10px
    text-align center

</style>