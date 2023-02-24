import React from 'react'
import { Chart } from 'react-google-charts'
import RecipesLineChart from './RecipesLineChart'

import RecipesPieChart from './RecipesPieChart'

const ChartsContainer = (props) => {
  return (
    <div className='my-chart-container'>
      <h1> Recipe App Using API</h1>
      <div>
        <RecipesPieChart />
        <RecipesLineChart />
      </div>
    </div>
  )
}

export default ChartsContainer