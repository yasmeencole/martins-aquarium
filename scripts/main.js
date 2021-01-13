import { useFish } from './FishDataProvider.js'

const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}

// Import the FishList here


FishList()

import {FishList} from './FishList.js'