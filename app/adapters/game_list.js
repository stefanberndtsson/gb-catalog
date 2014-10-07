import DS from "ember-data";

export default DS.ActiveModelAdapter.extend({
    host: "http://localhost:3012",
    buildURL: function() {
	console.log("buildURL");
	return this.host+"/games";
    }
});
