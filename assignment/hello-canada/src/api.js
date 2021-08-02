import provinces from './data/provinces-data'
import territories from './data/territories-data'

const getProvincesData = () => {
    return new Promise((resolve, reject) => {
        resolve(provinces)
    })
}

const getTerritories = () => {
    return new Promise((resolve, reject) => {
        resolve(territories)
    })
}

export { getProvincesData, getTerritories };