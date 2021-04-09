---
title: 角色管理
---
<template>
  <my-wrapper title="角色管理">
    <el-row :class="{ 'is-fit': fit }" :gutter="14">
      <el-col :span="6" :xs="24">
        <my-panel
          theme="border-left"
          :fit="fit"
          shadow="never"
          title="角色列表"
        >
          <template v-slot:handle>
            <el-button
              size="mini"
              type="primary"
              icon="el-icon-plus"
              circle
              @click="handleAddRole"
            ></el-button>
            <!-- <el-button
              size="mini"
              type="danger"
              icon="el-icon-delete"
              circle
            ></el-button> -->
          </template>
          <div style="height: calc(70vh); overflow: auto;">
            <div class="role-container" ref="scrollTopList">
              <div
                v-for="r of roles"
                :key="r.code"
                class="role-item"
                :class="{ selected: checkedRole.id == r.id }"
                @click="changeRole(r)"
              >
                <div style="float:left;width: 80%;">
                  <p class="title">{{ r.name }}</p>
                  <my-paragraph ellipsis>{{ r.remark }}</my-paragraph>
                </div>
                <div style="float:right;width: 15%;height: 100%;text-align: center;">
                  <div style="padding: 50% 0;"><el-link slot="reference" icon="el-icon-delete" type="danger">删除</el-link></div>
                </div>
              </div>
            </div>
          </div>
        </my-panel>
      </el-col>
      <el-col :span="18" :xs="24">
        <my-panel theme="border-left" :fit="fit" shadow="never">
          <template v-slot:title>
            <my-text type="secondary">当前角色：</my-text>
            <el-tag size="small">{{ currentTitle }}</el-tag>
          </template>
          <template v-slot:handle>
            <el-button
              size="mini"
              icon="el-icon-edit"
              v-show="checkedRole != null"
            > 刷新
            </el-button>
          </template>
          <el-tabs value="0" v-show="checkedRole != null">
            <el-tab-pane label="角色编辑" name="0">
              <div style="height: calc(65vh); overflow: auto;">
                <my-form ref="rolrForm" label-width="100px" :model="checkedRole" @submit="handleSubmit">
                  <el-divider>基本信息</el-divider>
                  <my-input label="角色名称" name="name" placeholder="角色名称"></my-input>
                  <my-input label="角色描述" name="remark" :props="{type:'textarea'}"></my-input>
                  <my-radio label="状态" name="disabled" :options="[{label:'开启',value:true},{label:'禁用',value:false}]" :rules="{required:true, message:'内容不能为空'}"></my-radio>
                  <el-divider>权限设置</el-divider>
              <!-- <div style="height: calc(65vh); overflow: auto;">
                <el-tree
                  ref="tree"
                  show-checkbox
                  v-treeConnect
                  :data="menus"
                  node-key="id"
                  props="{children: 'children',label: 'text'}"
                  highlight-current
                ></el-tree>
              </div>
              <div style="height: calc(65vh); overflow: auto;"></div> -->
                </my-form>
              </div>
            </el-tab-pane>
            <el-tab-pane label="角色成员" name="1">
              <div>
                <my-table ref="table" toolbar fit
                  mode="scroll"
                  max-height="500"
                  :columns="columns"
                  :loader="loaderRoleUsers"
                  :page="1" :page-size="40"
                >
                  <template v-slot:actions>
                    <el-button type="primary" icon="el-icon-plus" size="mini" @click="handleAddRoleUsers">新增</el-button>
                    <el-button type="danger" icon="el-icon-delete" size="mini" @click="handleRemoveRoleUsers">删除</el-button>
                  </template>
                </my-table>
              </div>
            </el-tab-pane>
          </el-tabs>
        </my-panel>
      </el-col>
    </el-row>
  </my-wrapper>
</template>

<script>
  import SysRoleApi from '$my/code/mixin/sys-role-api'
  import treeConnect from '$ui/directives/tree-connect'
  // import {create} from '$ui/utils/tree'
export default {
  mixins: [SysRoleApi],
  directives: { treeConnect },
  inject: ['myPro'],
  data() {
    return {
      roles: [],
      checkedRole: null,
      menus: [],
      columns: [
        { type: 'selection' },
        { type: 'index', label: '#' },
        { label: '账号', prop: 'name' },
        { label: '昵称', prop: 'id' },
        { label: '手机', prop: 'age' },
        { label: '邮箱', prop: 'age' }
      ],
      query: {keyword: ''}
    }
  },
  created() {
    this.init();
  },
  mounted () {
    window.addEventListener('scroll', this.bindScroll(), false) // 监听（绑定）滚轮滚动事件
    // this.$refs.scrollTopList.addEventListener('scroll', this.bindScroll(), true)
    // window.addEventListener('scroll', this.bindScroll(), false) // 监听（绑定）滚轮滚动事件
  },
  // destroyed () {
  //   window.removeEventListener('scroll', this.scroll) //  离开页面清除（移除）滚轮滚动事件
  // },
  computed: {
    fit() {
      return this.myPro.fixed
    },
    currentTitle() {
      if (!this.checkedRole) return '新建角色》》'
      return this.checkedRole.name
    }
  },
  methods: {
    init() {
      // 角色加载
      this.fetchSysRoleApi({
        data: {
          limit: -1
        }
      }).then((data) => {
        this.roles = data.list
        if (data.list.length > 0 && this.checkedRole == null) {
          // 默认选中第一个
          this.checkedRole = this.roles[0]
        }
      })
    },
    loaderDicts(model, {name, dict}) {
      return Promise.resolve(this.$store.getters.getDict(dict))
    },
    changeRole(r) {
      this.checkedRole = r
    },
    handleSubmit(model) {
      this.addSysRoleApi({
        data: model
      }).then(data => {
        this.$message.success('添加成功');
        this.init();
      })
    },
    handleAddRole() {
      this.checkedRole = {}
      this.checkedRole.name = '新建角色'
    },
    // 滚动加载分页
    bindScroll () {
      console.info('-滚动加载分页')
      if(this.$refs.scrollTopList.scrollTop + this.$refs.scrollTopList.clientHeight >= this.$refs.scrollTopList.scrollHeight - 50) {
        console.info('---------滚动加载分页1111')
        // if(this.pageSize > this.total) {
        //   return false
        // }else{
        //   this.pageSize = this.pageSize + 10 // 显示条数新增
        //   this.getpageList() // 请求列表list 接口方法
        // } 
      }else{
        return false
      }
    },
    // 加载角色成员
    loaderRoleUsers(page, pageSize) {
      return new Promise(resolve => {

      })
    },
    // 添加角色用户
    handleAddRoleUsers () {

    },
    // 删除角色用户
    handleRemoveRoleUsers () {

    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/style/_vars.scss";

.role-container {
  padding: 0;
  .role-item {
    height: 100px;
    padding: 5px 10px;
    border-bottom: 1px solid $--color-primary-light-9;
    &:hover {
      background: $--color-primary-light-10;
      cursor: pointer;
    }
    &.selected {
      border-left: 3px solid $--color-primary;
      background: $--color-primary-light-9;
      cursor: pointer;
    }
    .title {
      font-size: 16px;
      font-weight: bold;
      color: $--link-color;
    }
  }
}
</style>
