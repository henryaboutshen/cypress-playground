/// <reference types="cypress" />
const cucumber = require('cypress-cucumber-preprocessor').default
const fs = require('fs-extra')
const path = require('path')
const XLSX = require('xlsx')

/**
 * Get configuration from json file
 * @param {*} file 
 */
function getConfigurationByFile(file) {
    const pathToConfigFile = path.resolve('config', `${file}.json`)

    return fs.readJson(pathToConfigFile)
}

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
    on('file:preprocessor', cucumber())

    on('task', {
        readExcel(path) {
            // return XLSX.readFile(path, { cellDates: true })
            return XLSX.readFile(path)
        },
        sheet2Json(sheet) {
            return XLSX.utils.sheet_to_json(sheet)
        }
    })

    const file = config.env.NODE_ENV || 'production'
    return getConfigurationByFile(file).then(configFromFile => {
        return { ...config, ...configFromFile }
    })
}
