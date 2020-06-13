<template>
  <my-container>
    <StatCard></StatCard>
    <TableDemo></TableDemo>
    <List></List>
    <Detail></Detail>
    <Crud></Crud>
    <Avatar></Avatar>
    <Menu></Menu>
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <DataInput></DataInput>
    <Contextmenu></Contextmenu>
    <Anchor></Anchor>
    <Box></Box>
    <Basic></Basic>

    <Pro v-if="false"></Pro>
  </my-container>
</template>

<script>
  import StatCard from '@/components/unit/ui/StatCard'
  import Basic from '@/components/unit/ui/Basic'
  import Pro from '@/components/unit/ui/Pro'
  import Box from '@/components/unit/ui/Box'
  import Anchor from '@/components/unit/ui/Anchor'
  import Contextmenu from '@/components/unit/ui/Contextmenu'
  import Menu from '@/components/unit/ui/Menu'
  import Navbar from '@/components/unit/ui/Navbar'
  import Sidebar from '@/components/unit/ui/Sidebar'
  import DataInput from '@/components/unit/ui/DataInput'
  import Avatar from '@/components/unit/ui/Avatar'
  import Crud from '@/components/unit/ui/Crud'
  import Detail from '@/components/unit/ui/Detail'
  import List from '@/components/unit/ui/List'
  import TableDemo from '@/components/unit/ui/Table'

  export default {
    components: {
      TableDemo,
      List,
      Detail,
      Crud,
      Avatar,
      DataInput,
      Basic,
      StatCard,
      Pro,
      Box,
      Anchor,
      Contextmenu,
      Menu,
      Navbar,
      Sidebar
    }
  }
</script>

<style scoped>

</style>
