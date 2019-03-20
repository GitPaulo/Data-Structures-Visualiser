/* global VisualisationItem */

/*************************************************************
 *  THIS IS AN EXAMPLE FILE ON ADDING A DATA STRUCTURE ITEM 
 ************************************************************/
class ExampleDataStructure extends VisualisationItem {
	constructor(itemData) {
		super(
			"Name", 
			itemData,
			[], // state (Array of Graphic Element - each element must implement draw(env))
		);
	}

	// In detail example:
	async* insert(index, value) {
		// State changing code
		// ........

		// Define Step
		this.shouldYield() ? yield : this.storeState();
		await this.sleep();

		// State changing code
		// ........

		// Return result
		return { success:true, message:`` };
	}

	async* remove(index) {
		yield;

		return { success:true, message:`` };
	}

	async* search(value) {
		yield;
        
		return { success:true, message:`` };
	}

	// Multi-operation support: This method will return approiate coroutine!
	async *sort(method, type) {
		yield;

		return { success:true, message:`` };
	}

	// Extra methods: shouldYield(), resetState(), storeState(), clearStorage(), draw() (Override if extra functionality needed)
}

ExampleDataStructure.prototype.insert.help = ``;
ExampleDataStructure.prototype.remove.help = ``;
ExampleDataStructure.prototype.search.help = ``;
ExampleDataStructure.prototype.sort.help   = ``;

module.exports = ExampleDataStructure;