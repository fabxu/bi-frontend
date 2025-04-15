<template>
  <fc-designer
    ref="designer"
    :config="config"
    :handle="handle"
    :locale="locale"
  >
    <template #handle>
      <div class="handle">
        <el-dropdown>
          <div class="el-dropdown-link">
            <span>导航</span>
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="gotoHome">首页</el-dropdown-item>
              <el-dropdown-item @click="gotoFormList"
                >表单列表</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </template>
  </fc-designer>
</template>

<script setup lang="ts">
// import { ref } from 'vue'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ZhCn from '@senseauto-v2x-cloud/form-create-designer/locale/zh-cn'
import { useRouter } from 'vue-router'

const locale = ZhCn

const config = {
  autoActive: true,
  fieldReadonly: false,
  showSaveBtn: true,
  showDevice: false,
  showInputData: false,
}

const handle: { label: string; handle: () => void }[] = []

const router = useRouter()

const gotoHome = () => {
  router.push('/home')
}

const gotoFormList = () => {
  router.push('/design/list')
}
</script>

<style lang="scss" scoped>
.handle {
  margin-right: 20px;

  :global(:focus-visible) {
    outline: none;
  }
}
</style>
