<template>
  <Bar :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey"
    :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width" :height="height" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { supabase } from '@/supabase'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 100
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => { }
    },
    plugins: {
      type: Object,
      default: () => { }
    }
  },
  setup() {
    const drinks = async () => {
      return await supabase.from('drinks').select('*')
    }
    const voters = async () => {
      return await supabase.from('Voters').select('*')
    }
    return { drinks, voters }
  },
  beforeMount() {
    this.getDataSets()
  },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: []
      },
      chartOptions: {
        plugins: { legend: { display: false }, },
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true
          }
        },
        responsive: true,
        interaction: {
          intersect: false,
        },
        indexAxis: 'x',
      }
    }
  },
  methods: {
    async getDataSets() {

      const d = (await this.drinks()).body
      const v = (await this.voters()).body


      console.log(d)
      console.log(v)

      const dlables = []
      d.forEach(drinks => dlables.push(drinks.name))

      this.chartData.labels = dlables

      v.forEach(voter => {
        if (voter.abgesagt == false) {
          const color = this.getRandomColor()

          voter.selectedDrinks.forEach(sDrink => {
            this.chartData.datasets.push(
              {
                label: voter.votername,
                data: [{ x: dlables[sDrink - 1], y: 1 }],
                stack: 'Stack 0',
                backgroundColor: color,
              }
            )
          })

          voter.bringsDrinks.forEach(bDrink => {
            this.chartData.datasets.push(
              {
                label: voter.votername,
                data: [{ x: dlables[bDrink - 1], y: 1 }],
                stack: 'Stack 1',
                backgroundColor: color,
              }
            )
          })
        }
      })


    },
    getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  }
}
</script>
