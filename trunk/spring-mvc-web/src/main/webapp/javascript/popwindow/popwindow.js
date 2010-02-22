/**
 * @author emanux
 */

 function CreatePopWindow(){}
 
 CreatePopWindow.createWin = function(newIdx) {
 	
	var winHolder = document.getElementById("winHolder");
	
	var newWin = document.createElement("div");
	newWin.setAttribute("id",newIdx);
	newWin.setAttribute("class","window");
	newWin.style.left = "50px";
	newWin.style.top = "150px";
	newWin.style.width = "700px";
	
		var newTitleBar = document.createElement("div");
		newTitleBar.setAttribute("class","titleBar");
		
			var newSpan = document.createElement("span");
			newSpan.setAttribute("class","titleBarText");
			newSpan.style.lineHeight = "10px";
			newSpan.style.fontWeight = "bold";
			newSpan.style.marginTop = "2px";
			newSpan.innerHTML = "WayBill Information";
		
			newTitleBar.appendChild(newSpan);
			
			var newImg = document.createElement("img");
			newImg.setAttribute("class","titleBarButtons");
			newImg.src = imgUrlPopupWin;
			newImg.setAttribute("usemap",'#'+newIdx);
			newImg.width = "50";
			newImg.height = "14";
			
			newTitleBar.appendChild(newImg);
			
			var newMap = document.createElement("map");
			newMap.setAttribute("id",newIdx);
			newMap.setAttribute("name",newIdx);
			
				var newMapArea1 = document.createElement("area");
				newMapArea1.setAttribute("shape","rect");
				newMapArea1.setAttribute("coords","0,0,15,13");
				newMapArea1.setAttribute("onclick","this.parentWindow.minimize();return false;");
				newMapArea1.title = "Minimize";
				newMap.appendChild(newMapArea1);
				
				var newMapArea2 = document.createElement("area");
				newMapArea2.setAttribute("shape","rect");
				newMapArea2.setAttribute("coords","16,0,31,13");
				newMapArea2.setAttribute("onclick","this.parentWindow.restore();return false;");
				newMapArea2.title = "Restore";
				newMap.appendChild(newMapArea2);
				
				var newMapArea3 = document.createElement("area");
				newMapArea3.setAttribute("shape","rect");
				newMapArea3.setAttribute("coords","34,0,49,13");
				newMapArea3.setAttribute("onclick","this.parentWindow.close();return false;");
				newMapArea3.title = "Close";
				newMap.appendChild(newMapArea3);
				
			newTitleBar.appendChild(newMap);
	
	newWin.appendChild(newTitleBar);
	
	var newClientArea = document.createElement("div");
	newClientArea.className = "clientArea";
	newClientArea.style.height = "200px";
	
	/** start the content here **/
	
	/** header **/
	var header3 = document.createElement("h3");
	header3.appendChild(document.createTextNode(newIdx));
	newClientArea.appendChild(header3);
	
	/** starts the first table **/
	var clientDetailsTable = document.createElement("table");
	clientDetailsTable.width = "100%";
	
	var row1 = clientDetailsTable.insertRow(0);
	var th1 = document.createElement("th");
	th1.setAttribute("colspan","4");
	th1.innerHTML = 'Client Details';
	row1.appendChild(th1);
		
	var row2 = clientDetailsTable.insertRow(1);
	row2.className = "content1b";
		var td2 = row2.insertCell(0);
			td2.setAttribute("nowrap","nowrap");
			td2.vAlign = "top";
			td2.appendChild(document.createTextNode("Name:"));
			
			td2 = row2.insertCell(1);
			td2.vAlign = "top";
			td2.innerHTML = '<div id='+ "client_name"+newIdx +'>';
	
			td2 = row2.insertCell(2);
			td2.setAttribute("nowrap","nowrap");
			td2.vAlign = "top";
			td2.appendChild(document.createTextNode("Booking Date:"));
			
			td2 = row2.insertCell(3);
			td2.vAlign = "top";
			td2.innerHTML = '<div id='+ "shipmentDate"+newIdx +'>';
			
	var row3 = clientDetailsTable.insertRow(2);
	row3.className = "content1b";
		var td3 = row3.insertCell(0);
			td3.setAttribute("nowrap","nowrap");
			td3.vAlign = "top";
			td3.appendChild(document.createTextNode("Client As:"));
			
			td3 = row3.insertCell(1);
			td3.vAlign = "top";
			td3.innerHTML = '<div>';
	
			td3 = row3.insertCell(2);
			td3.setAttribute("nowrap","nowrap");
			td3.vAlign = "top";
			td3.appendChild(document.createTextNode("Client Document Reference:"));
			
			td3 = row3.insertCell(3);
			td3.vAlign = "top";
			td3.innerHTML = '<div id='+ "clientRefDoc"+newIdx +'>';
			
	var row4 = clientDetailsTable.insertRow(3);
	row4.className = "content1b";
		var td4 = row4.insertCell(0);
			td4.setAttribute("nowrap","nowrap");
			td4.vAlign = "top";
			td4.appendChild(document.createTextNode("Reservation Agent:"));
			
			td4 = row4.insertCell(1);
			td4.vAlign = "top";
			td4.innerHTML = '<div id='+ "reservationAgent"+newIdx +'>';
	
			td4 = row4.insertCell(2);
			td4.setAttribute("nowrap","nowrap");
			td4.vAlign = "top";
			td4.appendChild(document.createTextNode("Contact Number:"));
			
			td4 = row4.insertCell(3);
			td4.vAlign = "top";
			td4.innerHTML = '<div id='+ "reservationPhoneNumber"+newIdx +'>';
			
	newClientArea.appendChild(clientDetailsTable);
	/** end the first table **/
	
	/** starts the 2nd table **/
	var shipperDetailsTable = document.createElement("table");
	shipperDetailsTable.width = "100%";
	
	row1 = shipperDetailsTable.insertRow(0);
	th1 = document.createElement("th");
	th1.setAttribute("colspan","4");
	th1.innerHTML = 'Shipper Details';
	row1.appendChild(th1);
		
	row2 = shipperDetailsTable.insertRow(1);
	row2.className = "content1b";
			 td2 = row2.insertCell(0);
			td2.setAttribute("nowrap","nowrap");
			td2.vAlign = "top";
			td2.appendChild(document.createTextNode("Name:"));
			
			td2 = row2.insertCell(1);
			td2.vAlign = "top";
			td2.innerHTML = '<div id='+ "shipperName"+newIdx +'>';
	
			td2 = row2.insertCell(2);
			td2.setAttribute("nowrap","nowrap");
			td2.vAlign = "top";
			td2.appendChild(document.createTextNode("Address:"));
			
			td2 = row2.insertCell(3);
			td2.vAlign = "top";
			td2.innerHTML = '<div id='+ "shipperAddress"+newIdx +'>';
			
	row3 = shipperDetailsTable.insertRow(2);
	row3.className = "content1b";
			 td3 = row3.insertCell(0);
			td3.setAttribute("nowrap","nowrap");
			td3.vAlign = "top";
			td3.appendChild(document.createTextNode("Contact Person:"));
			
			td3 = row3.insertCell(1);
			td3.vAlign = "top";
			td3.innerHTML = '<div id='+ "shipperContactPerson"+newIdx +'>';
	
			td3 = row3.insertCell(2);
			td3.setAttribute("nowrap","nowrap");
			td3.vAlign = "top";
			td3.appendChild(document.createTextNode("Contact Number:"));
			
			td3 = row3.insertCell(3);
			td3.vAlign = "top";
			td3.innerHTML = '<div id='+ "shipperContactNumber"+newIdx +'>';
			
	row4 = shipperDetailsTable.insertRow(3);
	row4.className = "content1b";
		    td4 = row4.insertCell(0);
			td4.setAttribute("nowrap","nowrap");
			td4.vAlign = "top";
			td4.appendChild(document.createTextNode("Landmark:"));
			
			td4 = row4.insertCell(1);
			td4.vAlign = "top";
			td4.innerHTML = '<div id='+ "shipperLandmark"+newIdx +'>';
	
			td4 = row4.insertCell(2);
			td4.setAttribute("nowrap","nowrap");
			td4.vAlign = "top";
			td4.appendChild(document.createTextNode("Quadrant:"));
			
			td4 = row4.insertCell(3);
			td4.vAlign = "top";
			td4.innerHTML = '<div id='+ "shipperQuadrant"+newIdx +'>';
			
	row5 = shipperDetailsTable.insertRow(4);
	row5.className = "content1b";
		    td5 = row5.insertCell(0);
			td5.setAttribute("nowrap","nowrap");
			td5.vAlign = "top";
			td5.appendChild(document.createTextNode("Email:"));
			
			td5 = row5.insertCell(1);
			td5.vAlign = "top";
			td5.innerHTML = '<div id='+ "shipperEmailAddress"+newIdx +'>';
	
			td5 = row5.insertCell(2);
			td5.setAttribute("nowrap","nowrap");
			td5.vAlign = "top";
			td5.appendChild(document.createTextNode("Additional Info:"));
			
			td5 = row5.insertCell(3);
			td5.vAlign = "top";
			td5.innerHTML = '<div id='+ "shippeAddInfo"+newIdx +'>';
			
	newClientArea.appendChild(shipperDetailsTable);
	/** end the 2nd table **/
	
	/** starts the 3rd table **/
	var consigneeDetailsTable = document.createElement("table");
	consigneeDetailsTable.width = "100%";
	
	row1 = consigneeDetailsTable.insertRow(0);
	th1 = document.createElement("th");
	th1.setAttribute("colspan","4");
	th1.innerHTML = 'Consignee Details';
	row1.appendChild(th1);
		
	row2 = consigneeDetailsTable.insertRow(1);
	row2.className = "content1b";
			 td2 = row2.insertCell(0);
			td2.setAttribute("nowrap","nowrap");
			td2.vAlign = "top";
			td2.appendChild(document.createTextNode("Name:"));
			
			td2 = row2.insertCell(1);
			td2.vAlign = "top";
			td2.innerHTML = '<div id='+ "consigneeName"+newIdx +'>';
	
			td2 = row2.insertCell(2);
			td2.setAttribute("nowrap","nowrap");
			td2.vAlign = "top";
			td2.appendChild(document.createTextNode("Address:"));
			
			td2 = row2.insertCell(3);
			td2.vAlign = "top";
			td2.innerHTML = '<div id='+ "consigneeAddress"+newIdx +'>';
			
	row3 = consigneeDetailsTable.insertRow(2);
	row3.className = "content1b";
			 td3 = row3.insertCell(0);
			td3.setAttribute("nowrap","nowrap");
			td3.vAlign = "top";
			td3.appendChild(document.createTextNode("Contact Person:"));
			
			td3 = row3.insertCell(1);
			td3.vAlign = "top";
			td3.innerHTML = '<div id='+ "consigneeContactPerson"+newIdx +'>';
	
			td3 = row3.insertCell(2);
			td3.setAttribute("nowrap","nowrap");
			td3.vAlign = "top";
			td3.appendChild(document.createTextNode("Contact Number:"));
			
			td3 = row3.insertCell(3);
			td3.vAlign = "top";
			td3.innerHTML = '<div id='+ "consigneeContactNumber"+newIdx +'>';
			
	row4 = consigneeDetailsTable.insertRow(3);
	row4.className = "content1b";
		    td4 = row4.insertCell(0);
			td4.setAttribute("nowrap","nowrap");
			td4.vAlign = "top";
			td4.appendChild(document.createTextNode("Landmark:"));
			
			td4 = row4.insertCell(1);
			td4.vAlign = "top";
			td4.innerHTML = '<div id='+ "consigneeLandmark"+newIdx +'>';
	
			td4 = row4.insertCell(2);
			td4.setAttribute("nowrap","nowrap");
			td4.vAlign = "top";
			td4.appendChild(document.createTextNode("Quadrant:"));
			
			td4 = row4.insertCell(3);
			td4.vAlign = "top";
			td4.innerHTML = '<div id='+ "consigneeQuadrant"+newIdx +'>';
			
	row5 = consigneeDetailsTable.insertRow(4);
	row5.className = "content1b";
		    var td5 = row5.insertCell(0);
			td5.setAttribute("nowrap","nowrap");
			td5.vAlign = "top";
			td5.appendChild(document.createTextNode("Email:"));
			
			td5 = row5.insertCell(1);
			td5.vAlign = "top";
			td5.innerHTML = '<div id='+ "consigneeEmailAddress"+newIdx +'>';
	
			td5 = row5.insertCell(2);
			td5.setAttribute("nowrap","nowrap");
			td5.vAlign = "top";
			td5.appendChild(document.createTextNode("Additional Info:"));
			
			td5 = row5.insertCell(3);
			td5.vAlign = "top";
			td5.innerHTML = '<div id='+ "consigneeAddInfo"+newIdx +'>';
			
	newClientArea.appendChild(consigneeDetailsTable);
	/** end the 3rd table **/
	
	/** starts the 4th table **/
	var bookingDetailsTable = document.createElement("table");
	bookingDetailsTable.width = "100%";
	
	row1 = bookingDetailsTable.insertRow(0);
	th1 = document.createElement("th");
	th1.setAttribute("colspan","4");
	th1.innerHTML = 'Booking Details';
	row1.appendChild(th1);
		
	row2 = bookingDetailsTable.insertRow(1);
	row2.className = "content1b";
			 td2 = row2.insertCell(0);
			td2.setAttribute("nowrap","nowrap");
			td2.vAlign = "top";
			td2.appendChild(document.createTextNode("Product:"));
			
			td2 = row2.insertCell(1);
			td2.vAlign = "top";
			td2.innerHTML = '<div id='+ "productType"+newIdx +'>';
	
			td2 = row2.insertCell(2);
			td2.setAttribute("nowrap","nowrap");
			td2.vAlign = "top";
			td2.appendChild(document.createTextNode("Service Mode:"));
			
			td2 = row2.insertCell(3);
			td2.vAlign = "top";
			td2.innerHTML = '<div id='+ "serviceMode"+newIdx +'>';
			
	row3 = bookingDetailsTable.insertRow(2);
	row3.className = "content1b";
			 td3 = row3.insertCell(0);
			td3.setAttribute("nowrap","nowrap");
			td3.vAlign = "top";
			td3.appendChild(document.createTextNode("Product Category:"));
			
			td3 = row3.insertCell(1);
			td3.vAlign = "top";
			td3.innerHTML = '<div id='+ "productCategory"+newIdx +'>';
	
			td3 = row3.insertCell(2);
			td3.setAttribute("nowrap","nowrap");
			td3.vAlign = "top";
			td3.appendChild(document.createTextNode("Handling Instructions:"));
			
			td3 = row3.insertCell(3);
			td3.vAlign = "top";
			td3.innerHTML = '<div id='+ "handlingInstructions"+newIdx +'>';
			
	row4 = bookingDetailsTable.insertRow(3);
	row4.className = "content1b";
		    td4 = row4.insertCell(0);
			td4.setAttribute("nowrap","nowrap");
			td4.vAlign = "top";
			td4.appendChild(document.createTextNode("Transport Mode:"));
			
			td4 = row4.insertCell(1);
			td4.vAlign = "top";
			td4.innerHTML = '<div id='+ "transportMode"+newIdx +'>';
	
			td4 = row4.insertCell(2);
			td4.setAttribute("nowrap","nowrap");
			td4.vAlign = "top";
			//td4.appendChild(document.createTextNode("Quadrant:"));
			
			td4 = row4.insertCell(3);
			td4.vAlign = "top";
			//td4.innerHTML = '<div id='+ "consigneeQuadrant"+newIdx +'>';
			
	row5 = bookingDetailsTable.insertRow(4);
	row5.className = "content1b";
		    var td5 = row5.insertCell(0);
			td5.setAttribute("nowrap","nowrap");
			td5.vAlign = "top";
			td5.appendChild(document.createTextNode("Origin Port:"));
			
			td5 = row5.insertCell(1);
			td5.vAlign = "top";
			td5.innerHTML = '<div id='+ "bookingOriginPort"+newIdx +'>';
	
			td5 = row5.insertCell(2);
			td5.setAttribute("nowrap","nowrap");
			td5.vAlign = "top";
			td5.appendChild(document.createTextNode("Destination Port:"));
			
			td5 = row5.insertCell(3);
			td5.vAlign = "top";
			td5.innerHTML = '<div id='+ "bookingDestinationPort"+newIdx +'>';
			
	var row6 = bookingDetailsTable.insertRow(5);
	row6.className = "content1b";
		    var td6 = row6.insertCell(0);
			td6.setAttribute("nowrap","nowrap");
			td6.vAlign = "top";
			td6.appendChild(document.createTextNode("Origin Hub:"));
			
			td6 = row6.insertCell(1);
			td6.vAlign = "top";
			td6.innerHTML = '<div id='+ "bookingOriginHub"+newIdx +'>';
	
			td6 = row6.insertCell(2);
			td6.setAttribute("nowrap","nowrap");
			td6.vAlign = "top";
			td6.appendChild(document.createTextNode("Destination Hub:"));
			
			td6 = row6.insertCell(3);
			td6.vAlign = "top";
			td6.innerHTML = '<div id='+ "bookingDestionationHub"+newIdx +'>';
			
	var row7 = bookingDetailsTable.insertRow(6);
	row7.className = "content1b";
		    var td7 = row7.insertCell(0);
			td7.setAttribute("nowrap","nowrap");
			td7.vAlign = "top";
			td7.appendChild(document.createTextNode("Origin Sub-Hub:"));
			
			td7 = row7.insertCell(1);
			td7.vAlign = "top";
			td7.innerHTML = '<div id='+ "bookingOriginSubHub"+newIdx +'>';
	
			td7 = row7.insertCell(2);
			td7.setAttribute("nowrap","nowrap");
			td7.vAlign = "top";
			td7.appendChild(document.createTextNode("Destination Sub-Hub:"));
			
			td7 = row7.insertCell(3);
			td7.vAlign = "top";
			td7.innerHTML = '<div id='+ "bookingDestionationSubHub"+newIdx +'>';
			
	var row8 = bookingDetailsTable.insertRow(7);
	row8.className = "content1b";
		    var td8 = row8.insertCell(0);
			td8.setAttribute("nowrap","nowrap");
			td8.vAlign = "top";
			td8.appendChild(document.createTextNode("Origin Area:"));
			
			td8 = row8.insertCell(1);
			td8.vAlign = "top";
			td8.innerHTML = '<div id='+ "bookingOriginArea"+newIdx +'>';
	
			td8 = row8.insertCell(2);
			td5.setAttribute("nowrap","nowrap");
			td8.vAlign = "top";
			td8.appendChild(document.createTextNode("Destination Area:"));
			
			td8 = row8.insertCell(3);
			td8.vAlign = "top";
			td8.innerHTML = '<div id='+ "bookingDestionationArea"+newIdx +'>';
			
			
	newClientArea.appendChild(bookingDetailsTable);
	/** end the 4th table **/
	
	/** starts the 5th table **/
	var pickupDetailsTable = document.createElement("table");
	pickupDetailsTable.width = "100%";
	
	row1 = pickupDetailsTable.insertRow(0);
	th1 = document.createElement("th");
	th1.setAttribute("colspan","4");
	th1.innerHTML = 'Pick-Up Details';
	row1.appendChild(th1);
		
	row2 = pickupDetailsTable.insertRow(1);
	row2.className = "content1b";
			 td2 = row2.insertCell(0);
			td2.setAttribute("nowrap","nowrap");
			td2.vAlign = "top";
			td2.appendChild(document.createTextNode("From Date:"));
			
			td2 = row2.insertCell(1);
			td2.vAlign = "top";
			td2.innerHTML = '<div id='+ "pickupDetailsFromDate"+newIdx +'>';
	
			td2 = row2.insertCell(2);
			td2.setAttribute("nowrap","nowrap");
			td2.vAlign = "top";
			td2.appendChild(document.createTextNode("To Date:"));
			
			td2 = row2.insertCell(3);
			td2.vAlign = "top";
			td2.innerHTML = '<div id='+ "pickupDetailsToDate"+newIdx +'>';
			
	row3 = pickupDetailsTable.insertRow(2);
	row3.className = "content1b";
			 td3 = row3.insertCell(0);
			td3.setAttribute("nowrap","nowrap");
			td3.vAlign = "top";
			td3.appendChild(document.createTextNode("From Time:"));
			
			td3 = row3.insertCell(1);
			td3.vAlign = "top";
			td3.innerHTML = '<div id='+ "pickupDetailsFromTimeStart"+newIdx +'>';
	
			td3 = row3.insertCell(2);
			td3.setAttribute("nowrap","nowrap");
			td3.vAlign = "top";
			td3.appendChild(document.createTextNode("From Time:"));
			
			td3 = row3.insertCell(3);
			td3.vAlign = "top";
			td3.innerHTML = '<div id='+ "pickupDetailsToTimeStart"+newIdx +'>';
			
	row4 = pickupDetailsTable.insertRow(3);
	row4.className = "content1b";
		    td4 = row4.insertCell(0);
			td4.setAttribute("nowrap","nowrap");
			td4.vAlign = "top";
			td4.appendChild(document.createTextNode("To Time:"));
			
			td4 = row4.insertCell(1);
			td4.vAlign = "top";
			td4.innerHTML = '<div id='+ "pickupDetailsFromTimeEnd"+newIdx +'>';
	
			td4 = row4.insertCell(2);
			td4.setAttribute("nowrap","nowrap");
			td4.vAlign = "top";
			td4.appendChild(document.createTextNode("To Time:"));
			
			td4 = row4.insertCell(3);
			td4.vAlign = "top";
			td4.innerHTML = '<div id='+ "pickupDetailsToTimeEnd"+newIdx +'>';
			
	row5 = pickupDetailsTable.insertRow(4);
	row5.className = "content1b";
		    var td5 = row5.insertCell(0);
			td5.setAttribute("nowrap","nowrap");
			td5.vAlign = "top";
			td5.appendChild(document.createTextNode("Special Instructions:"));
			
			td5 = row5.insertCell(1);
			td5.vAlign = "top";
			td5.innerHTML = '<div id='+ "pickupDetailsInstructions"+newIdx +'>';
	
			td5 = row5.insertCell(2);
			td5.setAttribute("nowrap","nowrap");
			td5.vAlign = "top";
			//td5.appendChild(document.createTextNode("Destination Port:"));
			
			td5 = row5.insertCell(3);
			td5.vAlign = "top";
			//td5.innerHTML = '<div id='+ "bookingDestinationPort"+newIdx +'>';
	
	newClientArea.appendChild(pickupDetailsTable);
	/** end the 5th table **/
	
	/** starts the 6th table **/
	var deliveryDetailsTable = document.createElement("table");
	deliveryDetailsTable.width = "100%";
	
	row1 = deliveryDetailsTable.insertRow(0);
	th1 = document.createElement("th");
	th1.setAttribute("colspan","4");
	th1.innerHTML = 'Delivery Details';
	row1.appendChild(th1);
		
	row2 = deliveryDetailsTable.insertRow(1);
	row2.className = "content1b";
			 td2 = row2.insertCell(0);
			td2.setAttribute("nowrap","nowrap");
			td2.vAlign = "top";
			td2.appendChild(document.createTextNode("From Date:"));
			
			td2 = row2.insertCell(1);
			td2.vAlign = "top";
			td2.innerHTML = '<div id='+ "deliveryDetailsfromDate"+newIdx +'>';
	
			td2 = row2.insertCell(2);
			td2.setAttribute("nowrap","nowrap");
			td2.vAlign = "top";
			td2.appendChild(document.createTextNode("To Date:"));
			
			td2 = row2.insertCell(3);
			td2.vAlign = "top";
			td2.innerHTML = '<div id='+ "deliveryDetailstoDate"+newIdx +'>';
			
	row3 = deliveryDetailsTable.insertRow(2);
	row3.className = "content1b";
			 td3 = row3.insertCell(0);
			td3.setAttribute("nowrap","nowrap");
			td3.vAlign = "top";
			td3.appendChild(document.createTextNode("From Time:"));
			
			td3 = row3.insertCell(1);
			td3.vAlign = "top";
			td3.innerHTML = '<div id='+ "deliveryDetailsfromTimeStart"+newIdx +'>';
	
			td3 = row3.insertCell(2);
			td3.setAttribute("nowrap","nowrap");
			td3.vAlign = "top";
			td3.appendChild(document.createTextNode("From Time:"));
			
			td3 = row3.insertCell(3);
			td3.vAlign = "top";
			td3.innerHTML = '<div id='+ "deliveryDetailsfromTimeEnd"+newIdx +'>';
			
	row4 = deliveryDetailsTable.insertRow(3);
	row4.className = "content1b";
		    td4 = row4.insertCell(0);
			td4.setAttribute("nowrap","nowrap");
			td4.vAlign = "top";
			td4.appendChild(document.createTextNode("To Time:"));
			
			td4 = row4.insertCell(1);
			td4.vAlign = "top";
			td4.innerHTML = '<div id='+ "deliveryDetailstoTimeStart"+newIdx +'>';
	
			td4 = row4.insertCell(2);
			td4.setAttribute("nowrap","nowrap");
			td4.vAlign = "top";
			td4.appendChild(document.createTextNode("To Time:"));
			
			td4 = row4.insertCell(3);
			td4.vAlign = "top";
			td4.innerHTML = '<div id='+ "deliveryDetailstoTimeEnd"+newIdx +'>';
			
	row5 = deliveryDetailsTable.insertRow(4);
	row5.className = "content1b";
		    var td5 = row5.insertCell(0);
			td5.setAttribute("nowrap","nowrap");
			td5.vAlign = "top";
			td5.appendChild(document.createTextNode("Instructions:"));
			
			td5 = row5.insertCell(1);
			td5.vAlign = "top";
			td5.innerHTML = '<div id='+ "deliveryDetailsIinstructions"+newIdx +'>';
	
			td5 = row5.insertCell(2);
			td5.setAttribute("nowrap","nowrap");
			td5.vAlign = "top";
			//td5.appendChild(document.createTextNode("Destination Port:"));
			
			td5 = row5.insertCell(3);
			td5.vAlign = "top";
			//td5.innerHTML = '<div id='+ "bookingDestinationPort"+newIdx +'>';
	
	newClientArea.appendChild(deliveryDetailsTable);
	/** end the 6th table **/
	
	/** start the 7th table **/
	var carrierDtailsTable = document.createElement("table");
	carrierDtailsTable.width = "100%";
	
	row1 = document.createElement("tr");
	th1 = document.createElement("th");
	th1.setAttribute("colspan","9");
	th1.innerHTML = 'Carrier Details';
	row1.appendChild(th1);
	carrierDtailsTable.appendChild(row1);
	
	row2 = document.createElement("tr");
	var thh1 = document.createElement("th");
		thh1.appendChild(document.createTextNode("Carrier Schedules"));
		row2.appendChild(thh1);
		
		thh1 = document.createElement("th");
		thh1.appendChild(document.createTextNode("EDD/ETD"));
		row2.appendChild(thh1);
		
		thh1 = document.createElement("th");
		thh1.appendChild(document.createTextNode("EDA/ETA"));
		row2.appendChild(thh1);
		
		thh1 = document.createElement("th");
		thh1.appendChild(document.createTextNode("Carrier"));
		row2.appendChild(thh1);
		
		thh1 = document.createElement("th");
		thh1.appendChild(document.createTextNode("Vessel"));
		row2.appendChild(thh1);
		
		thh1 = document.createElement("th");
		thh1.appendChild(document.createTextNode("Voyage"));
		row2.appendChild(thh1);
		
		thh1 = document.createElement("th");
		thh1.appendChild(document.createTextNode("Aircraft"));
		row2.appendChild(thh1);
		
		thh1 = document.createElement("th");
		thh1.appendChild(document.createTextNode("Origin"));
		row2.appendChild(thh1);
		
		thh1 = document.createElement("th");
		thh1.appendChild(document.createTextNode("Destination"));
		row2.appendChild(thh1);
		carrierDtailsTable.appendChild(row2);
		
		var newTableBody = document.createElement("tbody");
		newTableBody.setAttribute("id","carrierDetails"+newIdx);
		newTableBody.className = "content1b";
		newTableBody.align = "center";
		carrierDtailsTable.appendChild(newTableBody);
		
	newClientArea.appendChild(carrierDtailsTable);
	/** end the 7th table **/
	
	/** start the 8th table **/
	var cargoDtailsTable = document.createElement("table");
	cargoDtailsTable.width = "100%";
	
	row1 = document.createElement("tr");
	th1 = document.createElement("th");
	th1.setAttribute("colspan","9");
	th1.innerHTML = 'Cargo Information';
	row1.appendChild(th1);
	cargoDtailsTable.appendChild(row1);
	
	row2 = document.createElement("tr");
	var thh1 = document.createElement("th");
		thh1.appendChild(document.createTextNode("Total Quantity"));
		row2.appendChild(thh1);
		
		thh1 = document.createElement("th");
		thh1.appendChild(document.createTextNode("Item Code"));
		row2.appendChild(thh1);
		
		thh1 = document.createElement("th");
		thh1.appendChild(document.createTextNode("Description Articles"));
		row2.appendChild(thh1);
		
		thh1 = document.createElement("th");
		thh1.appendChild(document.createTextNode("Dimensions (LxWxH)"));
		row2.appendChild(thh1);
		
		thh1 = document.createElement("th");
		thh1.appendChild(document.createTextNode("Unit CBM"));
		row2.appendChild(thh1);
		
		thh1 = document.createElement("th");
		thh1.appendChild(document.createTextNode("Unit Weight"));
		row2.appendChild(thh1);
		
		thh1 = document.createElement("th");
		thh1.appendChild(document.createTextNode("Unit Vol. Weight"));
		row2.appendChild(thh1);
		
		thh1 = document.createElement("th");
		thh1.appendChild(document.createTextNode("Unit Value"));
		row2.appendChild(thh1);
		
		thh1 = document.createElement("th");
		thh1.appendChild(document.createTextNode("Cargo Label(Start - End)"));
		row2.appendChild(thh1);
		cargoDtailsTable.appendChild(row2);
		
		var newTableBody = document.createElement("tbody");
		newTableBody.setAttribute("id","waybillCargo"+newIdx);
		newTableBody.className = "content1b";
		newTableBody.align = "center";
		cargoDtailsTable.appendChild(newTableBody);
		
	newClientArea.appendChild(cargoDtailsTable);
	/** end the 8th table **/
	
	/** start the 8th table **/
	var cargoTotalsDtailsTable = document.createElement("table");
	cargoTotalsDtailsTable.width = "100%";
	
	row1 = document.createElement("tr");
	th1 = document.createElement("th");
	th1.setAttribute("colspan","7");
	th1.innerHTML = 'Cargo Totals';
	row1.appendChild(th1);
	cargoTotalsDtailsTable.appendChild(row1);
	
	row2 = document.createElement("tr");
	thh1 = document.createElement("th");
		thh1.appendChild(document.createTextNode("Unit"));
		row2.appendChild(thh1);
		
	thh1 = document.createElement("th");
		thh1.appendChild(document.createTextNode("Total Quantity"));
		row2.appendChild(thh1);
		
	thh1 = document.createElement("th");
		thh1.appendChild(document.createTextNode("Total CBM"));
		row2.appendChild(thh1);
		
	thh1 = document.createElement("th");
		thh1.appendChild(document.createTextNode("Total Weight"));
		row2.appendChild(thh1);
		
	thh1 = document.createElement("th");
		thh1.appendChild(document.createTextNode("Total Volume Weight"));
		row2.appendChild(thh1);
		
	thh1 = document.createElement("th");
		thh1.appendChild(document.createTextNode("Total Value"));
		row2.appendChild(thh1);
		
	thh1 = document.createElement("th");
		thh1.appendChild(document.createTextNode("Summary of Articles"));
		row2.appendChild(thh1);
		cargoTotalsDtailsTable.appendChild(row2);
		
	row3 = cargoTotalsDtailsTable.insertRow(2);
	row3.align = "center";
	row3.className = "content1b";
	
		td2 = row3.insertCell(0);
		td2.innerHTML = '<div id='+ "cargo_unit"+newIdx +'>';
		
		td2 = row3.insertCell(1);
		td2.innerHTML = '<div id='+ "cargo_total_quantity"+newIdx +'>';
		
		td2 = row3.insertCell(2);
		td2.innerHTML = '<div id='+ "cargo_total_cbm"+newIdx +'>';
		
		td2 = row3.insertCell(3);
		td2.innerHTML = '<div id='+ "cargo_total_weight"+newIdx +'>';
		
		td2 = row3.insertCell(4);
		td2.innerHTML = '<div id='+ "cargo_total_vol_weight"+newIdx +'>';
		
		td2 = row3.insertCell(5);
		td2.innerHTML = '<div id='+ "cargo_total_dec_value"+newIdx +'>';
		
		td2 = row3.insertCell(6);
		td2.innerHTML = '<div id='+ "cargo_summ_art"+newIdx +'>';
	
	newClientArea.appendChild(cargoTotalsDtailsTable);
	/** end the 8th table **/
	
	/** start the 9th table **/
	var rateCalculationDtailsTable = document.createElement("table");
	rateCalculationDtailsTable.width = "100%";
	
	row1 = rateCalculationDtailsTable.insertRow(0);
	th1 = document.createElement("th");
	th1.setAttribute("colspan","6");
	th1.innerHTML = 'Rate Calculation';
	row1.appendChild(th1);
		
	row2 = rateCalculationDtailsTable.insertRow(1);
	row2.className = "content1b";
			 td2 = row2.insertCell(0);
			td2.setAttribute("nowrap","nowrap");
			td2.vAlign = "top";
			td2.appendChild(document.createTextNode("Length (cm):"));
			
			td2 = row2.insertCell(1);
			td2.vAlign = "top";
			td2.innerHTML = '<div id='+ "waybill_rate_calc_length"+newIdx +'>';
	
			td2 = row2.insertCell(2);
			td2.setAttribute("nowrap","nowrap");
			td2.vAlign = "top";
			td2.appendChild(document.createTextNode("Actual Weight (Kg):"));
			
			td2 = row2.insertCell(3);
			td2.vAlign = "top";
			td2.innerHTML = '<div id='+ "waybil_rate_calc_actaul_weight"+newIdx +'>';
			
			td2 = row2.insertCell(4);
			td2.setAttribute("nowrap","nowrap");
			td2.vAlign = "top";
			td2.appendChild(document.createTextNode("Volumetric Weight (Kg):"));
			
			td2 = row2.insertCell(5);
			td2.vAlign = "top";
			td2.innerHTML = '<div id='+ "waybill_rate_calc_vol_weight"+newIdx +'>';
			
	row3 = rateCalculationDtailsTable.insertRow(2);
	row3.className = "content1b";
			 td3 = row3.insertCell(0);
			td3.setAttribute("nowrap","nowrap");
			td3.vAlign = "top";
			td3.appendChild(document.createTextNode("Width (cm):"));
			
			td3 = row3.insertCell(1);
			td3.vAlign = "top";
			td3.innerHTML = '<div id='+ "waybill_rate_calc_width"+newIdx +'>';
	
			td3 = row3.insertCell(2);
			td3.setAttribute("nowrap","nowrap");
			td3.vAlign = "top";
			td3.appendChild(document.createTextNode("Allowable Weight (Kg):"));
			
			td3 = row3.insertCell(3);
			td3.vAlign = "top";
			td3.innerHTML = '<div id='+ "waybill_rate_calc_allow_weight"+newIdx +'>';
			
			td3 = row3.insertCell(4);
			td3.setAttribute("nowrap","nowrap");
			td3.vAlign = "top";
			td3.appendChild(document.createTextNode("Chargeable Weight (Kg):"));
			
			td3 = row3.insertCell(5);
			td3.vAlign = "top";
			td3.innerHTML = '<div id='+ "waybill_rate_calc_charge_weight"+newIdx +'>';
			
	row4 = rateCalculationDtailsTable.insertRow(3);
	row4.className = "content1b";
		    td4 = row4.insertCell(0);
			td4.setAttribute("nowrap","nowrap");
			td4.vAlign = "top";
			td4.appendChild(document.createTextNode("Height (cm):"));
			
			td4 = row4.insertCell(1);
			td4.vAlign = "top";
			td4.innerHTML = '<div id='+ "waybill_rate_calc_rate_height"+newIdx +'>';
	
			td4 = row4.insertCell(2);
			td4.setAttribute("nowrap","nowrap");
			td4.vAlign = "top";
			td4.appendChild(document.createTextNode("Weight in Excess (Kg):"));
			
			td4 = row4.insertCell(3);
			td4.vAlign = "top";
			td4.innerHTML = '<div id='+ "waybill_rate_calc_excess_weight"+newIdx +'>';
			
			td4 = row4.insertCell(4);
			td4.setAttribute("nowrap","nowrap");
			td4.vAlign = "top";
			td4.appendChild(document.createTextNode("Declared Value (Php):"));
			
			td4 = row4.insertCell(5);
			td4.vAlign = "top";
			td4.innerHTML = '<div id='+ "waybill_rate_calc_declare_value"+newIdx +'>';
	
	newClientArea.appendChild(rateCalculationDtailsTable);
	/** end the 9th table **/
	
	/** start the 10th table **/
	var chargesDetailsTable = document.createElement("table");
	chargesDetailsTable.width = "100%";
	
	row1 = chargesDetailsTable.insertRow(0);
	th1 = document.createElement("th");
	th1.setAttribute("colspan","6");
	th1.innerHTML = 'Charges';
	row1.appendChild(th1);
		
	row2 = chargesDetailsTable.insertRow(1);
	row2.className = "content1b";
			 td2 = row2.insertCell(0);
			td2.setAttribute("nowrap","nowrap");
			td2.vAlign = "top";
			td2.appendChild(document.createTextNode("Freight Charge:"));
			
			td2 = row2.insertCell(1);
			td2.vAlign = "top";
			td2.innerHTML = '<div id='+ "waybill_charges_freighhtCharge"+newIdx +'>';
	
			td2 = row2.insertCell(2);
			td2.setAttribute("nowrap","nowrap");
			td2.vAlign = "top";
			td2.appendChild(document.createTextNode("Waybill Fee:"));
			
			td2 = row2.insertCell(3);
			td2.vAlign = "top";
			td2.innerHTML = '<div id='+ "waybill_charges_fee"+newIdx +'>';
			
			td2 = row2.insertCell(4);
			td2.setAttribute("nowrap","nowrap");
			td2.vAlign = "top";
			td2.appendChild(document.createTextNode("Other Charges:"));
			
			td2 = row2.insertCell(5);
			td2.vAlign = "top";
			td2.innerHTML = '<div id='+ "waybill_charges_other"+newIdx +'>';
			
	row3 = chargesDetailsTable.insertRow(2);
	row3.className = "content1b";
			 td3 = row3.insertCell(0);
			td3.setAttribute("nowrap","nowrap");
			td3.vAlign = "top";
			td3.appendChild(document.createTextNode("Valuation Charge:"));
			
			td3 = row3.insertCell(1);
			td3.vAlign = "top";
			td3.innerHTML = '<div id='+ "waybill_charges_valuationCharge"+newIdx +'>';
	
			td3 = row3.insertCell(2);
			td3.setAttribute("nowrap","nowrap");
			td3.vAlign = "top";
			td3.appendChild(document.createTextNode("Handling Fee:"));
			
			td3 = row3.insertCell(3);
			td3.vAlign = "top";
			td3.innerHTML = '<div id='+ "waybill_charges_handling_fee"+newIdx +'>';
			
			td3 = row3.insertCell(4);
			td3.setAttribute("nowrap","nowrap");
			td3.vAlign = "top";
			td3.appendChild(document.createTextNode("VAT:"));
			
			td3 = row3.insertCell(5);
			td3.vAlign = "top";
			td3.innerHTML = '<div id='+ "waybill_charges_vat"+newIdx +'>';
			
	row4 = chargesDetailsTable.insertRow(3);
	row4.className = "content1b";
		    td4 = row4.insertCell(0);
			td4.setAttribute("nowrap","nowrap");
			td4.vAlign = "top";
			td4.appendChild(document.createTextNode("Fuel & Insurance Charge:"));
			
			td4 = row4.insertCell(1);
			td4.vAlign = "top";
			td4.innerHTML = '<div id='+ "waybill_charges_fuelInsCharge"+newIdx +'>';
	
			td4 = row4.insertCell(2);
			td4.setAttribute("nowrap","nowrap");
			td4.vAlign = "top";
			td4.appendChild(document.createTextNode("Doc Stamp:"));
			
			td4 = row4.insertCell(3);
			td4.vAlign = "top";
			td4.innerHTML = '<div id='+ "waybill_charges_docStamp"+newIdx +'>';
			
			td4 = row4.insertCell(4);
			td4.setAttribute("nowrap","nowrap");
			td4.vAlign = "top";
			td4.appendChild(document.createTextNode("Total Charges:"));
			
			td4 = row4.insertCell(5);
			td4.vAlign = "top";
			td4.innerHTML = '<div id='+ "waybill_charges_total"+newIdx +'>';
			
	row5 = chargesDetailsTable.insertRow(4);
			td5 = row5.insertCell(0);
			td5.innerHTML = "&nbsp;";
			
	row6 = chargesDetailsTable.insertRow(5);
	row6.className = "content1b";
			td6 = row6.insertCell(0);
			td6.vAlign = "top";
			td6.innerHTML = "<b>PaymentMode:</b>";
			
			td6 = row6.insertCell(1);
			td6.vAlign = "top";
			td6.innerHTML = '<div id='+ "waybill_charges_payment_mode"+newIdx +'>';
			
			td6 = row6.insertCell(2);
			td6 = row6.insertCell(3);
			
			td6 = row6.insertCell(4);
			td6.vAlign = "top";
			td6.innerHTML = "<b>O.R. No.:</b>";
			
			td6 = row6.insertCell(5);
			td6.vAlign = "top";
			td6.innerHTML = '<div id='+ "waybill_charges_orno"+newIdx +'>';
	
	newClientArea.appendChild(chargesDetailsTable);
	
	/** end the 9th table **/
	
	/** end the content here **/
		
	newWin.appendChild(newClientArea);
	winHolder.appendChild(newWin);
 }
