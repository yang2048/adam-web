---
title: 自研组件主题样式测试
---
<template>
  <my-container>
    <StatCard></StatCard>
    <Basic></Basic>
    <Box></Box>
    <Anchor></Anchor>
    <Contextmenu></Contextmenu>
    <Menu></Menu>
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <DataInput></DataInput>
    <Avatar></Avatar>
    <Crud></Crud>
    <Detail></Detail>
    <List></List>

  </my-container>
</template>

<script>
  import StatCard from '$apps/suit/components/unit/ui/StatCard'
  import Basic from '$apps/suit/components/unit/ui/Basic'
  // import Pro from '$apps/suit/components/unit/ui/Pro'
  import Box from '$apps/suit/components/unit/ui/Box'
  import Anchor from '$apps/suit/components/unit/ui/Anchor'
  import Contextmenu from '$apps/suit/components/unit/ui/Contextmenu'
  import Menu from '$apps/suit/components/unit/ui/Menu'
  import Navbar from '$apps/suit/components/unit/ui/Navbar'
  import Sidebar from '$apps/suit/components/unit/ui/Sidebar'
  import DataInput from '$apps/suit/components/unit/ui/DataInput'
  import Avatar from '$apps/suit/components/unit/ui/Avatar'
  import Crud from '$apps/suit/components/unit/ui/Crud'
  import Detail from '$apps/suit/components/unit/ui/Detail'
  import List from '$apps/suit/components/unit/ui/List'
  // import TableDemo from '$apps/suit/components/unit/ui/Table'

  export default {
    components: {
      StatCard,
      Basic,
      Box,
      Anchor,
      Contextmenu,
      Menu,
      Navbar,
      Sidebar,
      DataInput,
      Avatar,
      Crud,
      Detail,
      List
    }
  }
</script>

<style scoped>

</style>
