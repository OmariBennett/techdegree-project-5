function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}
titleCase("I'm a little tea pot");



$.getJSON({
  url: 'https://randomuser.me/api/?results=12&nat=us',
  dataType: 'json',
  success: function(data) {

    let employeeHTML = '<ul>';
    $.each( data.results, function( index, employee) {
    	employeeHTML += `<li class="employeeCard">`;
    	employeeHTML += `<img src="${employee.picture.large}" class="employeeImg">`;
    	employeeHTML += `<p class="f_Name">${titleCase(employee.name.first)} ${titleCase(employee.name.last)}</p>`;
    	employeeHTML += `<p class="email">${employee.email}</p>`;
    	employeeHTML += `<p class="state">${titleCase(employee.location.city)}</p></li>`;
    });
    employeeHTML += '</ul>';
    $('#employeeList').html(employeeHTML);

    $('.employeeCard').on('click', ()=> {
    	console.log(`Card info!`);

    	// let employeeInfo = `<img src="${employee.picture.large}" class="employeeImg moreInfo">`;

    	// // employeeInfo += `<img src="${employee.picture.large}" class="employeeImg moreInfo">`;
    	// employeeInfo += `<p class="f_Name"${titleCase(employee.name.first)} ${titleCase(employee.name.last)}</p>`;
    	// employeeInfo += `<p class="cardStyle">${employee.email}</p>`;
    	// employeeInfo += `<p class="cardStyle"${titleCase(employee.location.city)}</p><hr>`;

    	// employeeInfo += `<p class="cardStyle">${employee.phone}</p>`;
    	// employeeInfo += `<p class="cardStyle">${titleCase(employee.location.street)}, ${titleCase(employee.location.state)} ${employee.location.postcode}</p>`;
    	// employeeInfo += `<p class="cardStyle">Birthday: ${employee.location.dob}</p></div>`;

    	// console.log(employeeInfo);
    	/*
    		<div class='lightBox'>
    			<img class="employeeImg moreInfo">
    			<p class="f_Name">Full Name</p>
    			<p class="cardStyle">Email</p>
    			<p class="cardStyle">State</p>
    			<hr>
    			<p class="cardStyle">Phone#</p>
    			<p class="cardStyle">Address</p>
    			<p class="cardStyle">B-day</p>
    		</div>
    	*/
    });
    
    console.dir(data.results);
  }
});

    	

