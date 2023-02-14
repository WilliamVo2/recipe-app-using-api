import React from "react"
import { Chart } from 'react-google-charts'

const RecipesPieChart = (props) =>{

  return (
    <div className="my-chart-container">
      <div>
        <h2>RecipesPieChart</h2>
        <Chart
          width={'500px'}
          height={'300px'}
          chartType='PieChart'
          loader={<div>Loading Chart</div>}
          data={[
            ['Recipes', 'Calories per service'],
            ['Chicken Vesuvio', 1057],
            ['Chicken Paprikash', 758],
            ['Baked Chicken', 157],
            ['Catalan Chicken', 278],
            ['Chicken Stew', 411],
            ['Chicken Liver Pate', 191]
          ]}
          options={{
            title: 'Result for per search chickens ingredient',
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    </div>
  )
}

export default RecipesPieChart