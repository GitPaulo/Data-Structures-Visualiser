/* global util, activeOperation */
/* eslint-disable require-yield */
class VisualisationItem {
    constructor(id, descriptiveData, state) {
        this.id 			     = id;
        this.descriptiveData     = descriptiveData; // from yaml object
        this.state = this._state = state; // 007 double-agent mega secrative *bad dum ba dum*
        this.storage             = [];
    }
        
    async* insert() {
        throw `Insert operation is not implemented for ${this.constructor.name}.`;
    }

    async* remove() {
        throw `Remove operation is not implemented for ${this.constructor.name}.`;
    }

    async* search() {
        throw `Search operation is not implemented for ${this.constructor.name}.`;
    }

    async* sort() {
        throw `Sort operation is not implemented for ${this.constructor.name}.`;
    }
    /*******
     * Below methods are encorouged to be overwritten if
     * extra functionality is needed!
    */
   
    shouldYield() {
        return activeOperation.shouldYield;
    }

    shiftState(index) {
        console.log("Shfiting state to: ", index);
        this.state = (index >= this.storage.length-1) ? this._state : this.state = this.storage[index];
    }

    shiftStateToResume(){
        console.log("Shfiting state to resume! (007 boi)");
        this.state = this._state;
    }

	resetState() {
		if (this.storage[0]) {
            Object.assign(this.state, this.storage[0]);
            console.log(`State reset for ${this.constructor.name}.`);
		} else {
			throw "No initial state to reset to!";
		}
	}

	storeState() {
        // Currently there are no circular objects (but just in case) [AVOID THEM BTW]
		let copy = util.cloneCircular(this.state);
		this.storage.push(copy);
    }
    
    clearStorage() {
        this.storage = [];
        console.log(`Cleared step-state storage for ${this.constructor.name}.`);
    }

    draw(env) {
		for (let element of this.state) {
			element.draw(env);
		}
    }

    async step(ms) {
        this.storeState();

        if (this.shouldYield())
            return true;

        await this.sleep(ms);
        return false;
    }
    
    async sleep(ms=600) {
        let t = ms/activeOperation.speed;
        //console.log(`Sleeping animation of ${this.constructor.name} for: ${t}ms.`);
        await util.sleep(t);
    }
}

/***** Help Strings For Operations *****/
VisualisationItem.prototype.insert.help =
    VisualisationItem.prototype.remove.help = 
        VisualisationItem.prototype.search.help = 
            VisualisationItem.prototype.sort.help = `[OPERATION NOT AVAILABLE/IMPLMENETED]`;

/***** Constants *****/
VisualisationItem.ASCENDING_SORTING_TYPE = "Ascending Order";

VisualisationItem.SORTING_TYPES = {
	["asc"] 		: VisualisationItem.ASCENDING_SORTING_TYPE,
	["ascending"]	: VisualisationItem.ASCENDING_SORTING_TYPE,
	["desc"]		: VisualisationItem.DESCENDING_SORTING_TYPE,
	["descending"]	: VisualisationItem.DESCENDING_SORTING_TYPE,
}

VisualisationItem.COLORS = {
	"success" : [50, 255, 50],
	"fail"	  : [255, 60, 50],
	"pointer" : [50, 80, 255],
	"ordered" : [90, 220, 90],
}

module.exports = VisualisationItem;