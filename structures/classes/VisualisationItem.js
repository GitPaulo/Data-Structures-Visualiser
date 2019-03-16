
/***
 * Rules of extending this class.
 * All operation methods are expected to be of type "AsyncGeneratorFunc"
 *  - Yield where a step should be.
 * 
 * IF you want there to be more than one algorithm for a certain operation:
 * (Multi operations are advised to be implemented this way)
 *  1. Operation function will be of regular "Func" type.
 *  2. Arguments will be parsed in operation function. 
 *      - If correct then return apropriate coroutine (stored anywhere)
 *      - Else return message object
 */
class VisualisationItem {
    constructor(id, descriptiveData) {
        this.id 			 = id;
        this.descriptiveData = descriptiveData; // from yaml object
        this.storage         = [];
    }
        
    insert() {
        throw `Insert operation is not implemented for ${this.constructor.name}.`;
    }

    remove() {
        throw `Remove operation is not implemented for ${this.constructor.name}.`;
    }

    search() {
        throw `Search operation is not implemented for ${this.constructor.name}.`;
    }

    sort() {
        throw `Sort operation is not implemented for ${this.constructor.name}.`;
    }

    draw() {
        throw `Draw function not implemented.`;
    }

    storeState() {
        throw `Function not implemented.`;
    }

    clearStorage() {
        this.storage = [];
        console.log(`Cleared step-state storage for ${this.constructor.name}.`);
    }
}

module.exports = VisualisationItem;