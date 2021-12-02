<template>
  <div class="py-5 mt-7">
    <!-- <div class="lg:text-8xl text-5xl flex items-center justify-start">Analytics</div> -->
    <div class="flex flex-col space-y-2 px-5 mb-20">
      <div class="flex items-center">
        <div class="font-bold flex-1 text-2xl">Today's trends</div>
        <div class="dropdown dropdown-end lg:hidden">
          <div tabindex="0" class="m-1 btn btn-outline">{{ currentFilter }}</div>
          <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
            <li
              v-for="f in trendFilter"
              :key="f.name"
              class="p-1 m-2"
              :class="{
                '!bordered text-error': f.name == currentFilter
              }"
              @click="changeFilter(f.name)"
            >
              <a>{{ f.name }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row space-y-2 lg:space-y-0 py-2">
        <div
          class="flex-1"
        >As of {{ new Date().toDateString() }}, {{ new Date().toLocaleTimeString() }}</div>
        <div class="flex-none">
          <div class="lg:flex hidden space-x-10">
            <div class="flex font-medium">
              <mdi-filter class="mr-1 text-error" />Filter
            </div>
            <div class="flex space-x-10">
              <div
                v-for="f in trendFilter"
                :key="f.name"
                class="flex items-center cursor-pointer"
                @click="changeFilter(f.name)"
              >
                <div
                  class="w-10 h-1 mr-2 rounded-full bg-gray-400"
                  :class="{
                    '!bg-error': f.name == currentFilter
                  }"
                />
                <div
                  :class="{
                    '!text-error': f.name == currentFilter
                  }"
                >{{ f.name }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <client-only>
        <apexchart height="400" type="area" :options="chartOptions" :series="series" />
      </client-only>
    </div>
    <div class="font-bold lg:pl-6 text-2xl mt-10 text-center lg:text-left">Account expenses</div>
    <div
      v-if="expenses.length > 0"
      class="flex flex-col w-full lg:items-center lg:flex-row lg:space-x-40"
    >
      <client-only>
        <apexchart height="400" type="pie" :options="pieOptions" :series="Pseries" />
      </client-only>
      <div class="grid lg:grid-cols-4 grid-cols-1 lg:p-3 gap-5">
        <div v-for="(e,i) in expenses" :key="e.name" class="col-span-1">
          <div
            class="flex justify-center text-center lg:text-left lg:justify-start space-x-4 items-center"
          >
            <div class="flex-none">
              <div
                class="flex justify-center text-center lg:text-left lg:justify-start p-1 items-center"
              >
                <div
                  :style="{
                    backgroundColor: displayColors[i].deep
                  }"
                  class="rounded-full w-2 h-2 bg-info"
                />
              </div>
            </div>
            <div class="flex-1 text-center lg:text-left">
              <div class="flex flex-col">
                <div class="font-light">{{ e.name }}</div>
                <div class="flex w-full justify-center lg:justify-start font-bold">
                  <div class="text-2xl text-center lg:text-left">${{ e.amount }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">

import { defineComponent, defineAsyncComponent } from 'vue'
export default defineComponent({
  data() {
    return {

      trendFilter: [
        {
          name: 'Days',
          value: 'days',
        },
        {
          name: 'Weeks',
          value: 'weeks',
        },
        {
          name: 'Months',
          value: 'months',
        },
      ],
      chartOptions: {
        chart: {
          id: 'analytics-area-chart',
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        },
        stroke: {
          curve: 'smooth',
        },
        // fill: {
        //   colors: 'red'
        // },
        dataLabels: {
          enabled: false,
        },

      },
      // series: [{
      //   name: 'Trends',
      //   data: [100, 90.40, 70, 50, 80, 65, 55, 30, 28, 20, 40] //[30, 40, 45, 50, 49, 60, 70, 81]
      // }],
      series: [],
      currentFilter: 'Months',
      pieOptions: {
        chart: {
          id: 'analytics-pie-chart',
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          pie: {
            customScale: 0.7,
          },
        },
        legend: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        labels: [], // ['Rent & lease', 'Maintenance', 'Shopping', 'General', 'Administrative', 'Transport', 'Others']
      },
      Pseries: [], // [24.3, 14.4, 14.66, 29.37, 5.5, 7.75, 2.62], //[30, 40, 45, 50, 49, 60, 70, 81],
      expenses: [] as any,
      displayColors: [
        {
          deep: '#60A5FA',
          light: '#DBEAFE',
        },
        {
          deep: '#34D399',
          light: '#D1FAE5',
        },
        {
          deep: '#FBBF24',
          light: '#FDE68A',
        },
        {
          deep: '#F87171',
          light: '#FEE2E2',
        },
        {
          deep: '#4F46E5',
          light: '#C7D2FE',
        },
        {
          deep: '#60A5FA',
          light: '#DBEAFE',
        },
        {
          deep: '#34D399',
          light: '#D1FAE5',
        },
      ],
    }
  },
  mounted() {
    this.getAnalytics()
  },
  methods: {
    getAnalytics() {
      // emulate API fetching

      this.getTrends()
      this.getExpenses()
    },
    getTrends() {
      // Emulate GET trends API fetching
      setTimeout(() => {
        this.series = [{
          name: 'Trends',
          data: [100, 90.40, 70, 50, 80, 65, 55, 30, 28, 20, 40], // [30, 40, 45, 50, 49, 60, 70, 81]
        }] as any
      }, 2000)
    },

    getExpenses() {
      // Emululate GET expenses API fetching

      this.expenses = [
        {
          name: 'Rent & lease',
          amount: '35,040.32',
          percentage: 24.3,
          color: 'rgba(0,143,251,1)',
        },
        {
          name: 'Maintainance',
          amount: '8,223.23',
          percentage: 14.4,
        },
        {
          name: 'Shopping',
          amount: '2,990.00',
          percentage: 14.66,
        },
        {
          name: 'General',
          amount: '45,950.00',
          percentage: 29.37,
        },
        {
          name: 'Administrative',
          amount: '3,200.87',
          percentage: 5.5,
        },
        {
          name: 'Transport',
          amount: '1,240.87',
          percentage: 7.75,
        },
        {
          name: 'Others',
          amount: '950.00',
          percentage: 2.62,
        },
      ] as Array<any>
      // @ts-ignore
      this.pieOptions.labels = this.expenses.map(x => x.name)
      // @ts-ignore
      this.Pseries = this.expenses.map(x => x.percentage)
    },
    changeFilter(filter: string) {
      this.currentFilter = filter
      this.updateChart()
    },
    updateChart() {
      const max = 90
      const min = 20
      if (this.series.length <= 0) return
      //@ts-ignore
      const newData = this.series[0].data.map(() => {
        return Math.floor(Math.random() * (max - min + 1)) + min
      })
      this.series = [{
        //@ts-ignore
        name: 'Trends',
        //@ts-ignore
        data: newData,
      }]
    },
  },
})
</script>
<route lang="yaml">
meta:
  layout: home
</route>
