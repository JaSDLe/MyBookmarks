<template>
  <div>
    <div v-if="data.length > 0">
      <!-- <div v-for="(item, index) in data" :key="index">
        <result-item v-if="isArray(item)" :data="item" />
        <div v-else>
          <div v-if="item.type == 'A'" class="content-a">
            <div class="link">
              <div>
                <img width="16" :src="item.icon">
              </div>
              <div class="text-link" @click="open(item.href)">{{ item.value }}</div>
            </div>
            <div class="time">添加时间：{{ item.addDate | getDate }}</div>
          </div>
          <div v-else class="content-h">
            <h3>{{ item.value }}</h3>
            <div class="row-time">
              <div class="time">添加时间：{{ item.addDate | getDate }}</div>
              <div class="time">修改时间：{{ item.lastModified | getDate }}</div>
            </div>
          </div>
        </div>
      </div> -->
      <my-card>
        <template #header>
          123
        </template>
        <template #body>
          456
        </template>
      </my-card>
      <div v-for="(item, index) in data" :key="index">
        <result-item v-if="isArray(item)" :data="item" />
        <div v-else>
          <div v-if="item.type == 'A'" class="content-a">
            <div class="link">
              <div>
                <img width="16" :src="item.icon">
              </div>
              <div class="text-link" @click="open(item.href)">{{ item.value }}</div>
            </div>
            <div class="time">添加时间：{{ item.addDate | getDate }}</div>
          </div>
          <div v-else class="content-h">
            <h3>{{ item.value }}</h3>
            <div class="row-time">
              <div class="time">添加时间：{{ item.addDate | getDate }}</div>
              <div class="time">修改时间：{{ item.lastModified | getDate }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>else {{ data.length }}</div>
    <div></div>
  </div>
</template>

<script>
import MyCard from '@/components/my-card'

export default {
  name: 'ResultItem',

  components: {
    MyCard
  },

  props: {
    data: [Array, Object]
  },

  data() {
    return {}
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  filters: {
    getDate(timeStamp) {
      if (timeStamp != null && timeStamp != "") {
        timeStamp = parseInt(timeStamp)
        const now = new Date(timeStamp)
        const y = now.getFullYear()
        const m = ("0" + (now.getMonth() + 1)).slice(-2)
        const d = ("0" + now.getDate()).slice(-2)
        return y + "-" + m + "-" + d + " " + now.toTimeString().substr(0, 8)
      }
      return "-"
    }
  },

  methods: {
    isArray(val) {
      return val instanceof Array
    },
    open(url) {
      window.open(url, '_blank')
    }
  },
}
</script>

<style>
.content-a {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.link {
  display: flex;
  align-items: center;
}
.text-link {
  word-break: break-all;
  cursor: pointer;
  color: #0a81cb;
}
.text-link:hover {
  color: #0a9aee;
}
.time {
  color: #909399;
  font-size: 14px;
  white-space: nowrap;
}
.content-h {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.row-time {
  display: flex;
  flex-direction: column;
}
</style>
