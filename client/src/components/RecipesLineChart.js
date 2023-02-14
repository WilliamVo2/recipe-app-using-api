import React from 'react'
import { Chart } from 'react-google-charts'

const RecipesLineChart = (props) => {
  let data = [
      ['Recipes', 'Fat(g)', 'Carbs(g)'],
      ['Roast sirloin of beef', 279, 88],
      ['Beef Tacos', 97, 147],
      ['Beef Brisket', 350, 92],
      ['Barbecued Beef Bristket', 278, 274]
    ]
  
  return (
    <div className={"my-chart-container"}>
      <div>
        <h2> RecipesLineChart</h2>
        <Chart
          chartType='LineChart'
          data={data}
          options={{}}
          graph_id='LineChart'
          width='100%'
          height='400px'
        />
      </div>
    </div>
  )
}

export default RecipesLineChart