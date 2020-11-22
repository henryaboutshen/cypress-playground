/// <reference types="cypress" />
const cucumber = require('cypress-cucumber-preprocessor').default
const fs = require('fs-extra')
const path = require('path')

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

    const file = config.env.NODE_ENV || 'production'
    return getConfigurationByFile(file).then(configFromFile => {
        return { ...config, ...configFromFile }
    })
}
