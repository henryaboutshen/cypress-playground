import './commands';
import addContext from 'mochawesome/addContext';

Cypress.on('test:after:run', (test, runnable) => {
    if (test.state === 'failed') {
        let item = runnable;
        const nameParts = [runnable.title];
        while (item.parent) {
            nameParts.unshift(item.parent.title);
            item = item.parent;
        }
        const fullTestName = nameParts.filter(Boolean).join(' -- ');
        const imageUrl = encodeURI(`../screenshots/${Cypress.spec.name}/${fullTestName} (failed).png`).replace('#', '%23');
        addContext({ test }, imageUrl);
    }
});
