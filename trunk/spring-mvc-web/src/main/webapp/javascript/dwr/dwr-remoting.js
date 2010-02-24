
function DwrRemotingEvent(){}

DwrRemotingEvent.getPersonById = function(id) {
	
	DwrPersonJavascript.getPersonById(id, function(result){
		DwrRemotingEvent.handleGetPersonById(result);
	});
}

DwrRemotingEvent.handleGetPersonById = function(result) {
	$('personDetails').style.display = "block";
	
	dwr.util.setValue('personFname',result.firstName);
	dwr.util.setValue('personInitial',result.middleInitial);
	dwr.util.setValue('personLname',result.lastName);
	dwr.util.setValue('personAdd1',result.streetAddress1);
	dwr.util.setValue('personAdd2',result.streetAddress2);
	dwr.util.setValue('personCity',result.city);
}