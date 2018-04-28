function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}

$.getJSON({
  url: 'https://randomuser.me/api/?results=12&nat=us',
  dataType: 'json',
  success: function(data) {

    // let employeeHTML = '<ul>';
    // $.each( data.results, function( index, employee) {
    // 	employeeHTML += `<li class="employeeCard">`;
    // 	employeeHTML += `<img src="${employee.picture.large}" class="employeeImg">`;
    // 	employeeHTML += `<p class="f_Name">${titleCase(employee.name.first)} ${titleCase(employee.name.last)}</p>`;
    // 	employeeHTML += `<p class="email">${employee.email}</p>`;
    // 	employeeHTML += `<p class="state">${titleCase(employee.location.city)}</p></li>`;
    // });
    // employeeHTML += `<li class="employeeCard">`;;
    // $('#employeeList').html(employeeHTML);

    const ul = document.querySelector('ul');
    let employeeHTML = '',
        employee = data.results;

    for(let i = 0; i < employee.length; i++) {
        employeeHTML += `<li class="employeeCard">`;
        employeeHTML += `<img src="${employee[i].picture.large}" class="employeeImg">`;
        employeeHTML += `<p class="f_Name">${titleCase(employee[i].name.first)} ${titleCase(employee[i].name.last)}</p>`;
        employeeHTML += `<p class="cardStyle">${employee[i].email}</p>`;
        employeeHTML += `<p class="cardStyle">${titleCase(employee[i].location.city)}</p>`;
        employeeHTML += `</li>`;

    } //End of the for loop

    $(ul).html(employeeHTML);

    for(let i = 0; i < ul.children.length; i++) {
        ul.children[i].addEventListener('click', (e)=> {
            console.log(`Card info!`);
            console.log(i);
            
            //Create HTML Elements
            const body = document.querySelector('body'),
                  h1 = document.querySelector('h1'),
                  overlay = document.createElement('div'),
                  div = document.createElement('div'),
                  xBtn = document.createElement('p');

            let employeeInfo = '';

            employeeInfo += `<div class="employeeCard overlayBox"><span class="btn">X</span>`;
            employeeInfo += `<img src="${data.results[i].picture.large}" class="employeeImg pic">`;
            employeeInfo += `<p class="f_Name moreInfo">${titleCase(data.results[i].name.first)} ${titleCase(data.results[i].name.last)}</p>`;
            employeeInfo += `<p class="cardStyle moreInfo">${data.results[i].email}</p>`;
            employeeInfo += `<p class="cardStyle moreInfo">${titleCase(data.results[i].location.city)}</p>`;

            employeeInfo += `<hr><p class="cardStyle moreInfo">${data.results[i].phone}</p>`;
            employeeInfo += `<p class="cardStyle moreInfo">${titleCase(data.results[i].location.street)}, ${titleCase(data.results[i].location.state)} ${data.results[i].location.postcode}</p>`;
            employeeInfo += `<p class="cardStyle moreInfo">Birthday: ${data.results[i].dob}</p>`;
            employeeInfo += `</div>`;

            //Set attruibutes
            overlay.setAttribute('class', 'overlay');

            //Append HTML to the page
            $(overlay).html(employeeInfo);
            body.insertBefore(overlay, h1);
        });
    }
    // $('.employeeCard').on('click', ()=> {
    //     console.log(`Card info!`);
        // //variables
        // const xBtn = document.createElement('p'),
        //       div = document.querySelector('.employeeCard'),
        //       img = document.querySelector('.employeeImg'),
        //       fullName = document.querySelector('.f_Name'),
        //       email = img.nextSibling;
        //       city = img.nextSibling.nextSibling;
        //       hr = document.querySelector('hr');
        //       phone = hr.nextSibling;
        //       street = hr.nextSibling.nextSibling;
        //       dob = hr.nextSibling.nextSibling.nextSibling;

        // //Setting attruibutes
        // xBtn.innerHTML = 'X';
        // xBtn.setAttribute('class', 'btn');
        // img.setAttribute('class', 'employeeImg pic');
        // fullName.setAttribute('class', 'f_Name moreInfo');
        // email.setAttribute('class', 'cardStyle moreInfo');
        // city.setAttribute('class', 'cardStyle moreInfo');
        // hr.setAttribute('class', 'enable');
        // phone.setAttribute('class', 'cardStyle moreInfo');
        // street.setAttribute('class', 'cardStyle moreInfo');
        // dob.setAttribute('class', 'cardStyle moreInfo');

        // $('ul li .employeeCard').append(xBtn);
    // }); //End of the on method

    // $('#employeeList ul').on('click', ()=> {
    //     console.log(`Card info!`);
    //     console.log( $(this).index())
    // 	// let employeeInfo = `<img src="${employee.picture.large}" class="employeeImg moreInfo">`;

    // 	// // employeeInfo += `<img src="${employee.picture.large}" class="employeeImg moreInfo">`;
    // 	// employeeInfo += `<p class="f_Name"${titleCase(employee.name.first)} ${titleCase(employee.name.last)}</p>`;
    // 	// employeeInfo += `<p class="cardStyle">${employee.email}</p>`;
    // 	// employeeInfo += `<p class="cardStyle"${titleCase(employee.location.city)}</p><hr>`;

    // 	// employeeInfo += `<p class="cardStyle">${employee.phone}</p>`;
    // 	// employeeInfo += `<p class="cardStyle">${titleCase(employee.location.street)}, ${titleCase(employee.location.state)} ${employee.location.postcode}</p>`;
    // 	// employeeInfo += `<p class="cardStyle">Birthday: ${employee.location.dob}</p></div>`;

    // 	// console.log(employeeInfo);
    // 	/*
    // 		<div class='lightBox'>
    // 			<img class="employeeImg moreInfo">
    // 			<p class="f_Name">Full Name</p>
    // 			<p class="cardStyle">Email</p>
    // 			<p class="cardStyle">State</p>
    // 			<hr>
    // 			<p class="cardStyle">Phone#</p>
    // 			<p class="cardStyle">Address</p>
    // 			<p class="cardStyle">B-day</p>
    // 		</div>
    // 	*/
    // });
    
    console.dir(data.results);
  }
});

    	

