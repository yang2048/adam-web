---
title: 字典管理
---
<template>
  <my-wrapper title="字典管理">
    <my-panel title="容器标题" shadow="never" fit>
      <template v-slot:handle>
          <el-button size="mini" icon="el-icon-plus" @click="showSearch=!showSearch">搜索</el-button>
          <el-button size="mini" type="primary" icon="el-icon-plus" @click="openDialog">新增</el-button>
      </template>

      <my-container v-show="showSearch">
        <my-filter label-width="60px" >
          <my-input label="关键词" name="name"></my-input>
          <my-select label="性别" name="sex" :options="[{label:'男',value:1},{label:'女',value:0}]"></my-select>
        </my-filter>
      </my-container>

      <my-table ref="table" :columns="columns" :data="tableData" :page="1" :page-size="5" @expand-change="expandChange">
        <template v-slot:handle="{row}">
            <el-link icon="el-icon-edit" type="primary" @click="handleEdit(row)">编辑</el-link>
            <el-divider direction="vertical"></el-divider>
            <el-link icon="el-icon-s-operation" type="primary" @click="openDialogSub(row)">添加值</el-link>
            <el-divider direction="vertical"></el-divider>
            <el-popconfirm title="确认删除该条数据?" @confirm="handleRemove(row)">
              <el-link slot="reference" icon="el-icon-delete" type="danger">删除</el-link>
            </el-popconfirm>
          </template>
        <template v-slot:expand="">
            <!-- 字典属性 -->
            <el-table ref="tableSub" :data="tableDataSub" size="mini" max-height="250" border >
              <el-table-column
                type="selection"
                width="50">
              </el-table-column>
              <el-table-column
                prop="label"
                label="参数名称">
              </el-table-column>
              <el-table-column
                prop="value"
                label="参数值">
              </el-table-column>
              <el-table-column
                prop="extend"
                label="扩展">
              </el-table-column>
              <el-table-column
                prop="remark"
                label="字典描述">
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-link icon="el-icon-edit" type="primary" @click="handleEditSub(scope.row)">编辑</el-link>
                  <el-divider direction="vertical"></el-divider>
                  <el-popconfirm title="确认删除该条数据?" @confirm="handleRemoveSub(scope.row)">
                    <el-link slot="reference" icon="el-icon-delete" type="danger">删除</el-link>
                  </el-popconfirm>
                </template>
              </el-table-column>
            </el-table>
         </template>
      </my-table>
 
    </my-panel>

    <!-- 字典添加 -->
    <my-dialog :visible.sync="dialogVisible" target="body" title="字典组编辑" width="60%" draggable :footer="false">
      <my-form :model="dictModel" label-width="90px" footer-align="right" @submit="handleSubmit">
        <el-row>
          <el-col :span="12">
            <my-input name="label" label="字典名称" :rules="{required:true, message:'内容不能为空'}"></my-input>
          </el-col>
          <el-col :span="12">
            <my-input name="value" label="字典编码" :rules="{required:true, message:'内容不能为空'}"></my-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <my-input name="type" label="字典类型" v-show="false"></my-input>
            <my-input name="remark" label="描述"></my-input>
          </el-col>
          <el-col :span="12">
            <my-input name="extend" label="扩展"></my-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <my-radio label="状态" name="disabled" :options="[{label:'开启',value:true},{label:'禁用',value:false}]" :rules="{required:true, message:'内容不能为空'}"></my-radio>
<!-- <my-radio label="状态" name="disabled" dict="sys_disable_status" :loader="loaderDicts" :rules="{required:true, message:'内容不能为空'}"></my-radio> -->
          </el-col>
          <el-col :span="12">
            <my-input-number label="排序" name="sort" :props="{controlsPosition:'right',min:0}" width="300px"></my-input-number>
          </el-col>
        </el-row>
      </my-form>
    </my-dialog>

    <!-- 字典属性添加 -->
    <my-dialog :visible.sync="dialogVisibleSub" target="body" title="字典项编辑" width="60%" draggable :footer="false">
      <my-form :model="dictModelSub" label-width="90px" footer-align="right" :on-submit="handleSubmitSub">
        <el-row>
          <el-col :span="12">
            <my-input name="label" label="字典名称" :rules="{required:true, message:'内容不能为空'}"></my-input>
          </el-col>
          <el-col :span="12">
            <my-input name="value" label="字典值" :rules="{required:true, message:'内容不能为空'}"></my-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <my-input name="extend" label="扩展"></my-input>
          </el-col>
          <el-col :span="12">
            <my-input name="remark" label="描述"></my-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <my-radio label="状态" name="disabled" :options="[{label:'开启',value:true},{label:'禁用',value:false}]" :rules="{required:true, message:'内容不能为空'}"></my-radio>
          </el-col>
          <el-col :span="12">
            <my-input-number label="排序" name="sort" :props="{controlsPosition:'right',min:0}" width="300px"></my-input-number>
          </el-col>
        </el-row>
      </my-form>
    </my-dialog>
  </my-wrapper>
</template>

<script>
  import SysDictApi from '$my/code/mixin/sys-dict-api'

  export default {
    mixins: [SysDictApi],
    data() {
      return {
        page: 1,
        limit: 5,
        showSearch: false,
        columns: [
          {type: 'selection', width: '50'},
          {type: 'expand', prop: 'expand'},
          {label: '字典名称', prop: 'label'},
          {label: '字典编码', prop: 'value'},
          {label: '扩展', prop: 'extend'},
          {label: '描述', prop: 'remark'},
          {label: '操作', prop: 'handle'}
        ],
        tableData: [], // 字典数据
        tableDataSub: [], // 字段属性列表
        dialogVisible: false,
        dialogVisibleSub: false,
        dictModel: {},
        dictModelSub: {}
      }
    },
    created() {
      this.loaderTable(this.page, this.limit);
    },
    methods: {
      loaderDicts(model, {name, dict}) {
        return Promise.resolve(this.$store.getters.getDict(dict))
      },
      loaderTable(page, limit) {
        return this.fetchSysDictApi({
          data: {
            parentId: 0,
            page,
            limit
          }
        }).then(data => {
          this.tableData = data.list
        })
      },
      expandChange(row, expandedRows) {
        return this.fetchSysDictApi({
          data: {
            parentId: row.id
          }
        }).then(data => {
          this.tableDataSub = data.list
        })
      },
      openDialog() {
        this.dialogVisible = true
        this.dictModel = {}
        this.dictModel.parentId = 0
      },
      openDialogSub(row) {
        this.dialogVisibleSub = true
        this.dictModelSub = {}
        this.dictModelSub.parentId = row.id
      },
      handleSubmit(model) {
        this.addSysDictApi({
          data: model
        }).then(data => {
          this.$message.success('添加成功');
          this.loaderTable(this.page, this.limit);
          this.dialogVisible = false
        })
      },
      handleSubmitSub(model) {
        this.addSysDictApi({
          data: model
        }).then(data => {
          this.$message.success('添加成功');
          this.expandChange(this.dictModelSub);
          this.dialogVisible = false
        })
      },
      handleEdit(row) {
        this.dialogVisible = true
        this.dictModel = row
      },
      handleEditSub(row) {
        this.dialogVisibleSub = true
        this.dictModelSub = row
      },
      handleRemove(row) {
        this.removeSysDictApi({
          id: row.id
        }).then(r => {
          this.$message.success('删除成功')
          this.loaderTable(this.page, this.limit);
        })
      },
      handleRemoveSub(row) {
        this.removeSysDictApi({
          id: row.id
        }).then(r => {
          this.$message.success('删除成功')
          this.expandChange(this.dictModelSub);
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
