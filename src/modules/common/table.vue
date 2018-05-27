<script>
/**
 * @file table组件
 * Dec 6, 2017
 */
import {fixTableHeight} from './dom';
export default {
    created() {
    },
    data() {
        return {
            tableHeight: null,
        };
    },
    props: {
        columns: {
            type: Array,
            required: true
        },
        data: {
            type: Array,
            required: true
        },
        event: {
            type: Function
        },
        selectEvent: {
            type: Function
        },
        initPageOptions: {
            type: Function
        },
        pageOptions: {
            type: Object
        },
        searchEvent: {
            type: Function
        }
    },
    methods: {
        handleCurrentChange(pageNum) {
            this.initPageOptions({pageNum});
            this.searchEvent();
        },
        pageSize(pageSize) {
            this.initPageOptions({pageSize, pageNum: 1});
            this.searchEvent();
        },
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.tableRef.toggleRowSelection(row);
                });
            } else {
                this.$refs.tableRef.clearSelection();
            }
        }
    },
    computed: {
        handleSelectEvent() {
            return this.selectEvent ? this.selectEvent : false;
        }
    },
    mounted() {
        this.tableHeight = fixTableHeight(this.$refs.tableRef.$el, 70);
    }
};
</script>

<template>
<div class="my-table">
<el-table :data="data" :height="tableHeight" border ref="tableRef" @selection-change="handleSelectEvent">
    <el-table-column type="selection" width="55" align="center" solt="selectId" v-if="selectEvent"></el-table-column>
    <slot name="id"></slot>
    <template v-for="column in columns">
        <el-table-column
         :type="column.type"
         :property="column.prop"
         :label="column.label"
         :width="column.width"
         :formatter="column.formatter"
         :show-overflow-tooltip="true"
         :sortable="column.sort"
         align="center">
        </el-table-column>
    </template>
    <slot name="btn-operate"></slot>
</el-table>
<br/>
<footer class="footer-pagination" v-if="pageOptions.total">
    <el-pagination
        @size-change="pageSize"
        @current-change="handleCurrentChange"
        :current-page="pageOptions.pageNum"
        :page-sizes="pageOptions.pageSizeList"
        layout="total, sizes, prev, pager, next"
        :total="pageOptions.total"
        style="text-align:right"
    ></el-pagination>
</footer>
</div>
</template>
<style lang="stylus" scoped>
.my-table
    margin-top 20px
table th
    padding 6px 0
</style>
