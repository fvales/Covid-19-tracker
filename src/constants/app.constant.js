export class AppConst {
    static ROOT_PATH = '/'
    static COUNTRIES = '/countries'
    static ALL = '/all'
    static WORLDWIDE = 'worldwide'
    static HISTORICAL = '/historical'
    static ZOOM_VALUE = '5'
    static RECOVERED = 'recovered'
    static CASES = 'cases'
    static DEATHS = 'deaths'

    static getConfByCaseType = {
        cases: {
            multiplier: 800,
            hex: '#CC1034'
        },
        recovered: {
            multiplier: 1000,
            hex: '#7dd71d'
        },
        deaths: {
            multiplier: 2000,
            hex: '#fb4443'
        }
    }
}