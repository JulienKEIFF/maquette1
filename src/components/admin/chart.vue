<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  name: "chart",
  data: () => ({
    chartdata: {
      labels: ['Janvier', 'Ferier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
      datasets: [{
        label: 'C.A via site (%)',
        backgroundColor: '#f87979',
        data: [20, 25, 20, 30, 40, 0, 0, 0,0 ,0 ,0 ,0]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  }),
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>

<style scoped lang="scss">
  #bar-chart{
    padding-top: 10vh;
  }
</style>