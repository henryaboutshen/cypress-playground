import { When } from "cypress-cucumber-preprocessor/steps";

const EXCEL_FILE = 'cypress/fixtures/excel/sample.xlsx'

When(`I get data from excel file`, () => {
    cy.task('readExcel', EXCEL_FILE).then((workbook) => {
        cy.log(workbook)
        const worksheet = workbook.Sheets[workbook.SheetNames[0]]
        cy.task('sheet2Json', worksheet).then((obj) => {
            cy.log(obj)
            let date = new Date(1900, 0, obj[0]['Date'] - 1)
            cy.log(date.toISOString())
        })
    })
})