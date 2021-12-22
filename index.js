let medicalDetails = [];

        function user(){
            let docName = prompt("What's your name, Doc?");
            let patName =  prompt("What's the patient's name?")

            document.getElementById('doc').innerText += " " + docName;
            document.getElementById('pat').innerText += " " + patName;
        }
        user()

        if(localStorage.getItem('Medical Receipt')){
            let c = localStorage.getItem('Medical Receipt')
            console.log(JSON.parse(c));
            medicalDetails = JSON.parse(c)
            display()
        }

        function display(){
            table.innerHTML =  `
            <th>Qty</th>
            <th>Description</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Remove Items</th>`

            medicalDetails.forEach(function(element,i) {
                table.innerHTML +=`
                <td>${element.qty}</td>
                <td>${element.dscp}</td>
                <td>${element.amt}</td>
                <td>${element.price}</td>
                <td><button onclick = del(${i})>Delete</button></td>`
            });
        }

        function add() {
            let inpt1 = document.getElementById('inp1').value
            let inpt2 = document.getElementById('inp2').value
            let inpt3 = document.getElementById('inp3').value
            let inpt4 = document.getElementById('inp4').value

            let newDetails = {qty: inpt1, dscp: inpt2, amt: inpt3, price: inpt4}
            medicalDetails.push(newDetails);
            display()
            console.log(medicalDetails);

            localStorage.setItem('Medical Receipt', JSON.stringify(medicalDetails))
            let b = localStorage.getItem('medicalDetails')
            console.log(JSON.parse(b));
            
        }
        function del(params) {
            medicalDetails.splice(params, 1)
            display()
        }
        display()