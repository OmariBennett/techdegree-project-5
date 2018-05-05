function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}

let statesList = [
    ["AL", "Alabama"],
    ["AK", "Alaska"],
    ["AZ", "Arizona"],
    ["AR", "Arkansas" ],
    ["CA", "California"],
    ["CO", "Colorado"],
    ["CT", "Connecticut"],
    ["DE", "Delaware"],
    ["FL", "Florida"],
    ["GA", "Georgia"],
    ["HI", "Hawaii"],
    ["ID", "Idaho"],
    ["IL", "Illinois"],
    ["IN", "Indiana"],
    ["IA", "Iowa"],
    ["KS", "Kansas"],
    ["KY", "Kentuck},"],
    ["LA", "Louisiana"],
    ["ME", "Maine"],
    ["MD", "Maryland"],
    ["MA", "Massachusetts"],
    ["MI", "Michigan"],
    ["MN", "Minnesota"],
    ["MS", "Mississippi"],
    ["MO", "Missouri"],
    ["MT", "Montana"],
    ["NE", "Nebraska"],
    ["NV", "Nevada"],
    ["NH", "New Hampshire"],
    ["NJ", "New Jersey"],
    ["NM", "New Mexico"],
    ["NY", "New York"],
    ["NC", "North Carol},na"],
    ["ND", "North Dakota"],
    ["OH", "Ohio"],
    ["OK", "Oklahoma"],
    ["OR", "Oregon"],
    ["PA", "Pennsylvania"],
    ["RI", "Rhode Island"],
    ["SC", "South Carolina"],
    ["SD", "South Dakota"],
    ["TN", "Tennessee"],
    ["TX", "Texas"],
    ["UT", "Utah"],
    ["VT", "Vermont"],
    ["VA", " Virginia"],
    ["WA","Washington"],
    ["WV", "West Virginia"],
    ["WI", "Wisconsin"],
    ["WY", "Wyoming"]
]

$.getJSON({
  url: 'https://randomuser.me/api/?results=12&nat=us',
  dataType: 'json',
  success: function(data) {

    const ul = document.querySelector('ul');
    let employeeHTML = '',
        employee = data.results;

    //Loop through ajax data and set up HTML tags
    for(let i = 0; i < employee.length; i++) {
        employeeHTML += `<li class="employeeCard">`;
        employeeHTML += `<img src="${employee[i].picture.large}" class="employeeImg">`;
        employeeHTML += `<p class="f_Name">${titleCase(employee[i].name.first)} ${titleCase(employee[i].name.last)}</p>`;
        employeeHTML += `<p class="cardStyle">${employee[i].email}</p>`;
        employeeHTML += `<p class="cardStyle">${titleCase(employee[i].location.city)}</p>`;
        employeeHTML += `</li>`;

    } //End of the for loop

    //append the string to the page
    $(ul).html(employeeHTML);

    //Set event listener to each Modal window displays on the page
    for(let i = 0; i < ul.children.length; i++) {
        ul.children[i].addEventListener('click', ()=> {

            //Change employee state to it's abbreviation state i.e. Maryland to MD
            function abbreviationState(state) {
                for(let j = 0; j < statesList.length; j++) {
                    if (state === statesList[j][1].toLowerCase()) {
                        return statesList[j][0];
                    }
                }
            }

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

            employeeInfo += `<hr><p class="cardStyle moreInfo">${data.results[i].cell}</p>`;
            employeeInfo += `<p class="cardStyle moreInfo">${titleCase(data.results[i].location.street)}, ${abbreviationState(data.results[i].location.state)} ${data.results[i].location.postcode}</p>`;
            employeeInfo += `<p class="cardStyle moreInfo">Birthday: ${data.results[i].dob.replace(/\d\d(\d\d)-(\d\d)-(\d\d).*/, '$2/$3/$1')}</p>`;
            employeeInfo += `</div>`;

            //Set attruibutes
            overlay.setAttribute('class', 'overlay');

            //Append HTML to the page
            $(overlay).html(employeeInfo);
            body.insertBefore(overlay, h1);

            //Set up exit "X" button
            $('.btn').on('click', ()=> {
                $('.overlay').remove();
            });
            
        });
    
    }//End of the for loop

    console.dir(data.results);
  }
});

    	

