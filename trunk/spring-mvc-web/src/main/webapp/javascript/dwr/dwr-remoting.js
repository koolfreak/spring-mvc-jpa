
function DwrRemotingEvent(){}

DwrRemotingEvent.getPersonById = function(id) {
	
	DwrPersonJavascript.getPersonById(id, function(result){
		DwrRemotingEvent.handleGetPersonById(result);
	});
}

DwrRemotingEvent.handleGetPersonById = function(result) {
	//dwr.util.byId('personDetails').style.display = "block";
	$("#personDetails").show("slow");
	dwr.util.setValue('personFname',result.firstName);
	dwr.util.setValue('personInitial',result.middleInitial);
	dwr.util.setValue('personLname',result.lastName);
	dwr.util.setValue('personAdd1',result.address.streetAddress1);
	dwr.util.setValue('personAdd2',result.address.streetAddress2);
	dwr.util.setValue('personAddCity',result.address.city);
	dwr.util.setValue('personAddState',result.address.state);
	dwr.util.setValue('personAddZip',result.address.zip);
}