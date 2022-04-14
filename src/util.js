export const Utils = {
    sortCountriesByCases: (countriesInfo) => {
        return countriesInfo?.sort((a, b) => a.cases > b.cases ? -1 : 1)
    }
}