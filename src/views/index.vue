---
title: 工作台
---
<template>
  <my-wrapper :header="null">
    <el-row class="stat-row" :gutter="14">
      <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="6">
        <my-stat-card title="总销售量" icon="el-icon-pie-chart">
          <my-number slot="total" value="3345"></my-number>
        </my-stat-card>
      </el-col>
      <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="6">
        <my-stat-card title="访问量" icon="el-icon-data-board" icon-type="success">
          <my-number slot="total" value="3345"></my-number>
        </my-stat-card>
      </el-col>
      <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="6">
        <my-stat-card title="支付笔数" icon="el-icon-data-line" icon-type="warning">
          <my-number slot="total" value="3345"></my-number>
        </my-stat-card>
      </el-col>
      <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="6">
        <my-stat-card title="运营活动效果" icon="el-icon-data-analysis" icon-type="danger">
          <my-number slot="total" value="3345"></my-number>
        </my-stat-card>
      </el-col>
    </el-row>
    <el-row class="chart-row">
      <my-panel title="销售额" theme="border-left">
        <template v-slot:handle>
          <el-radio-group size="mini" v-model="range">
            <el-radio-button label="year">年</el-radio-button>
            <el-radio-button label="month">月</el-radio-button>
            <el-radio-button label="day">日</el-radio-button>
          </el-radio-group>
        </template>
        <my-chart-line :data="chartData" :settings="settings" :extend="extend"></my-chart-line>
      </my-panel>
    </el-row>
    <el-row :gutter="14">
      <el-col :span="12" :sm="24" :xs="24" :md="12" :lg="12" style="height: 600px">
        <my-panel title="热门搜索" theme="border-left" fit>
          <my-table :columns="columns" :loader="loader" :page-size="8" fit>
            <template v-slot:percent="{row}">
              <my-number :value="row.percent" :precision="2" percentage trend="up"></my-number>
            </template>
          </my-table>
        </my-panel>
      </el-col>
      <el-col :span="12" :sm="24" :xs="24" :md="12" :lg="12" style="height: 600px">
        <my-panel title="关键字" theme="border-left" fit>
          <my-chart-cloud :data="cloudData"></my-chart-cloud>
        </my-panel>
      </el-col>
    </el-row>
  </my-wrapper>
</template>

<script>
  const chartData = {
    columns: ['月份', '访问量', '留存率'],
    rows: [
      ['一月', 100, 30],
      ['二月', 60, 20],
      ['三月', 78, 25],
      ['四月', 90, 40],
      ['五月', 110, 70],
      ['六月', 87, 60],
      ['七月', 90, 76],
      ['八月', 75, 45],
      ['九月', 63, 46],
      ['十月', 80, 70],
      ['十一月', 90, 85],
      ['十二月', 105, 96]
    ]
  }
  const cloudData = {
    columns: ['标签', '权重'],
    rows: [
      ['直接访问', 1],
      ['邮件营销', 2],
      ['联盟广告', 2],
      ['视频广告', 3],
      ['搜索引擎', 4]
    ]
  }

  export default {
    data() {
      return {
        range: 'year',
        chartData: chartData,
        cloudData: cloudData,
        settings: {
          valueAxis: ['访问量', '留存率'],
          bars: ['访问量']
        },
        extend: {
          color: ['#91d5ff', '#1890ff'],
          'series.0.barCategoryGap': '50%',
          grid: {
            left: 50,
            right: 50,
            top: 50,
            bottom: 30,
            backgroundColor: 'transparent'
          },
          yAxis: {
            splitLine: false
          }
        },
        columns: [
          {type: 'index', label: '排名'},
          {label: '关键字', prop: 'keyword'},
          {label: '用户数', prop: 'count'},
          {label: '周涨幅', prop: 'percent'}
        ]
      }
    },
    methods: {
      loader(page, limit) {
        const data = []
        for (let i = 0; i < limit; i++) {
          data.push({
            id: Math.random() * 1000,
            keyword: `关键字 ${(page - 1) * limit + i}`,
            count: Math.floor(Math.random() * 100),
            percent: Math.random()
          })
        }
        return Promise.resolve({
          list: data,
          total: 1000
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

  .el-col {
    margin-bottom: 14px;
  }

  .stat-row {
    .el-col {
      margin-bottom: 14px;
    }
  }

  .chart-row {
    margin-top: 0 !important;
    margin-bottom: 14px;
  }

  .el-row {
    &:last-child {
      margin-bottom: 0;
    }
  }

  .my-wrapper {
    /deep/ {
      .my-wrapper__body {
        padding-bottom: 0 !important;
      }
    }

  }


</style>
