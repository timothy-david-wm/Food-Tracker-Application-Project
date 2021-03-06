/**
 * Created by session2 on 10/22/15.
 */
/**
 * Created by session2 on 10/20/15.
 */


var nameInput = document.getElementById("name");
var descInput = document.getElementById("desc");
var dateInput = document.getElementById("date");
var lifeInput = document.getElementById("life");
var expInput = document.getElementById("exp");
var calInput = document.getElementById("cal");

    /*Get Table From DOM*/
        var tableOutput = document.getElementById("table");

    /*Main Update Function, Calls When Submit Button Is Clicked*/
        function update() {
                var newItem = getInputItem();
                updateTable(newItem);
            }

/*Get New Item From Input Form*/
    function getInputItem() {
        var item;
        item = {
            name: nameInput.value,
            desc: descInput.value,
            life: lifeInput.value,
            date: dateInput.value,
            exp: expInput.value,
            cal: calInput.value,
        };
    return item;
}

    /*Update Table With New Item*/
        function updateTable(item) {
                /*If Item Is Empty, Dont Update Table*/
                    if(item.name == "" || item.desc == "" || item.date == "" || item.life == "" || item.exp == "" || item.cal == ""){alert("Please fill thw whole chart before proceeding"); return;}

                    /*Create New TR And TD For Table Output*/
                        var tablerow = document.createElement("tr");
                var name = document.createElement("td");
                var cal = document.createElement("td");
                var desc = document.createElement("td");
                var life = document.createElement("td");
                var date = document.createElement("td");
                var exp = document.createElement("td");

                    /*Update New TD Elements With Item Info*/
                name.innerHTML = item.name;
                cal.innerHTML = item.cal;
                desc.innerHTML = item.desc;
                date.innerHTML = item.date;
                life.innerHTML = item.life;
                exp.innerHTML = item.exp;

                    /*If Shelf Life Is Less Than 3 Days, Set Background To Red*/

                        if(parseFloat(item.life) <= 1) life.style.backgroundColor = "darkRed";
                if(parseFloat(item.life) === 2) life.style.backgroundColor = "red";
                if(parseFloat(item.life) === 3) life.style.backgroundColor = "pink";
                if(parseFloat(item.life) === 4) life.style.backgroundColor = "blue";
                if(parseFloat(item.life) === 5) life.style.backgroundColor = "green";
                if(parseFloat(item.life) === 6) life.style.backgroundColor = "lightGray";
                if(parseFloat(item.life) === 7) life.style.backgroundColor = "gold";
                if(parseFloat(item.life) === 8) life.style.backgroundColor = "green";
                if(parseFloat(item.life) > 8) life.style.backgroundColor = "honeydew";
                /*Append New Elements To Table*/
                    tablerow.appendChild(name);
                tablerow.appendChild(cal);
                tablerow.appendChild(desc);
               tablerow.appendChild(life);
                tablerow.appendChild(date);
                tablerow.appendChild(exp);
                tableOutput.appendChild(tablerow);
                $(".header").on('click', function(){
                    tablerow.appendChild("Name");
                    tablerow.appendChild("Calories");
                    tablerow.appendChild("Description");
                    tablerow.appendChild("Life");
                    tablerow.appendChild("Date");
                    tablerow.appendChild("Expiration Date");
                    tableOutput.appendChild(tablerow);
                });
                $('tr').on('click', function() {$(this).remove();});
            }


