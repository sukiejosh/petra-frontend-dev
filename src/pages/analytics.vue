<template>
  <div class="py-5">
    <!-- <div class="lg:text-8xl text-5xl flex items-center justify-start">Analytics</div> -->
    <div>
      <chart height="500" type="area" :options="chartOptions" :series="series" />
    </div>
  </div>
</template>
<script lang="ts">
import chart from 'vue3-apexcharts'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    chart
  },
  data: function () {
    return {
      chartOptions: {
        chart: {
          id: 'analytics-chart',
        },
        xaxis: {
          categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', "November", "December"],
        },
        stroke: {
          curve: 'smooth',
        },
        dataLabels: {
          enabled: false,
        },
        // tooltip: {
        //   //@ts-ignore
        //   custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        //     return '<div class="arrow_box">' +
        //       '<span>' + series[seriesIndex][dataPointIndex] + '</span>' +
        //       '</div>'
        //   }
        // }
      },

      series: [{
        data: [30, 40, 45, 50, 49, 60, 70, 81]
      }]
    }
  },
  methods: {
    updateChart() {
      const max = 90;
      const min = 20;
      const newData = this.series[0].data.map(() => {
        return Math.floor(Math.random() * (max - min + 1)) + min
      })
      // In the same way, update the series option
      this.series = [{
        data: newData
      }]
    }
  }
})
</script>
<route lang="yaml">
meta:
  layout: home
</route>
