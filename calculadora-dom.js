class Calculator
{
	constructor()
	{
	
	}

	calculate (expression)
	{
		try
	 {
		return eval(expression)
	 }
	catch
	 {
        alert("ERROR!")
		return "";
	 }
    }
}

function posicionarElementoEnLayout (layoutObj , nroFila, nroColumna, element)
{

  layout.childNodes[0].childNodes[nroFila]
  layout.childNodes[0].childNodes[nroFila].childNodes[nroColumna]

  layoutObj.childNodes[0].childNodes[nroFila].childNodes[nroColumna].appendChild(element);

}



class CalculatorView extends HTMLElement
{
        constructor()
        {

        	super();

			this.controller = new CalculatorController();

        	this.display = document.createELement("input");
        	this.display.type = "text";
			this.display.className = "display";
			this.display.placeholder = "0";

        	this.button1 = document.createElement("button");
        	this.button1.innerText = "1";
        	this.button1.classList.add("numberButton" , "blueButton");

        	this.button2 = document.createElement("button");
        	this.button2.innerText = "2";
        	this.button2.classList.add("numberButton" , "blueButton");

        	this.button3 = document.createElement("button");
        	this.button3.innerText = "3";
        	this.button3.classList.add("numberButton" , "blueButton");

        	this.button4 = document.createElement("button");
        	this.button4.innerText = "4";
        	this.button4.classList.add("numberButton" , "blueButton");

        	this.button5 = document.createElement("button");
        	this.button5.innerText = "5";
        	this.button5.classList.add("numberButton" , "blueButton");

        	this.button6 = document.createElement("button");
        	this.button6.innerText = "6"
        	this.button6.classList.add("numberButton", "blueButton");

        	this.button7 = document.createElement("button");
        	this.button7.innerText = "7";
        	this.button7.classList.add("numberButton" , "blueButton");

        	this.button8 = document.createElement("button");
        	this.button8.innerText = "8";
        	this.button8.classList.add("numberButton" , "blueButton");

        	this.button9 = document.createElement("button");
        	this.button9.innerText = "9";
        	this.button9.classList.add("numberButton" , "blueButton");

        	this.button0 = document.createElement("button");
        	this.button0.innerText = "0";
        	this.button0.classList.add("numberButton" , "blueButton");

        	this.buttonSum = document.createElement("button");
        	this.buttonSum.innerText = "+";
        	this.buttonSum.classList.add("numberButton" , "greemButton");

        	this.buttonRest = document.createElement("button");
        	this.buttonRest.innerText = "-";
        	this.buttonRest.classList.add("numberButton" , "greenButton");

        	this.buttonMultiply = document.createElement("button");
        	this.buttonMultiply.innerText = "x";
        	this.buttonMultiply.classList.add("numberButton" , "greenButton");

        	this.buttonDivide = document.createElement("button");
        	this.buttonDivide.innerText = "/";
        	this.buttonDivide.classList.add("numberButton" , "greenButton");

        	this.buttonEqual = document.createElement("button");
        	this.buttonEqual.innerText = "=";
        	this.buttonEqual.classList.add("numberButton" , "yellowButton");

        	this.buttonDecimal = document.createElement("button");
        	this.buttonDecimal.innerText = ".";
        	this.buttonDecimal.classList.add("numberButton" , "yellowButton");

        	this.buttonDelete = document.createElement("button");
        	this.buttonDelete.innerText = "Delete";
        	this.buttonDelete.classList.add("deleteButton")

        	this.layout = document.createElement("table");
        	for (let i = 0 ; i<4 ; i++)
             {
             	let filaActual = this.layout.insertRow();

             	for ( let c = 0 ; c<4 ; i++)
             	{
             		filaActual.insertCell();
             	}

             	let lastCell = this.layout.insertRow().insertCell();
	            lastCell.setAttribute("colspan", 4);
              }


        }

        connectedCallback()
        {
        	posicionarElementoEnLayout(this.layout,0,0,this.button7);
	        posicionarElementoEnLayout(this.layout,0,1,this.button8);
	        posicionarElementoEnLayout(this.layout,0,2,this.button9);
	        posicionarElementoEnLayout(this.layout,0,3,this.buttonSum);
	        posicionarElementoEnLayout(this.layout,1,0,this.button4);
	        posicionarElementoEnLayout(this.layout,1,1,this.button5);
	        posicionarElementoEnLayout(this.layout,1,2,this.button6);
	        posicionarElementoEnLayout(this.layout,1,3,this.buttonRest);
            posicionarElementoEnLayout(this.layout,2,0,this.button3);
	        posicionarElementoEnLayout(this.layout,2,1,this.button2);
	        posicionarElementoEnLayout(this.layout,2,2,this.button1);
	        posicionarElementoEnLayout(this.layout,2,3,this.buttonMultiply);
	        posicionarElementoEnLayout(this.layout,3,0,this.button0);
	        posicionarElementoEnLayout(this.layout,3,1,this.buttonDecimal);
	        posicionarElementoEnLayout(this.layout,3,2,this.buttonEqual);
	        posicionarElementoEnLayout(this.layout,3,3,this.buttonDivide);
	        posicionarElementoEnLayout(this.layout,4,0,this.buttonDelete);

	        this.appendChild(this.display);
	        this.appendChild(this.layout);
        }


	//EVENT LISTENERS
	
	this.buttonDecimal.addEventListener ('click', () =>{

		this.controller.onclickbuttonDecimal()
		this.display.value = this.controller.operator;
	});

	this.button0.addEventListener ('click', () =>{

		this.controller.onclickbutton0()
		this.display.value = this.controller.operator;
    });

	this.button1.addEventListener ('click',() =>{

		this.controller.onclickbutton1()
		this.display.value = this.controller.operator;
    });

	this.button2.addEventListener ('click',() =>{

		this.controller.onclickbutton2()
		this.display.value = this.controller.operator;
    });

	this.button3.addEventListener ('click', () =>{

		this.controller.onclickbutton3()
		this.display.value = this.controller.operator;
    });
	
	this.button4.addEventListener ('click', () =>{

		this.controller.onclickbutton3()
		this.display.value = this.controller.operator;
    });

	this.button5.addEventListener ('click', () =>{

		this.controller.onclickbutton5()
		this.display.value = this.controller.operator;
    });

	this.button6.addEventListener ('click', () =>{

		this.controller.onclickbutton6()
		this.display.value = this.controller.operator;
    });

	this.button7.addEventListener ('click', () =>{

		this.controller.onclickbutton7()
		this.display.value = this.controller.operator;
    });

	this.button8.addEventListener ('click', () =>{

		this.controller.onclickbutton8()
		this.display.value = this.controller.operator;
    });

	this.button9.addEventListener ('click', () =>{

		this.controller.onclickButton9()
		this.display.value = this.controller.operator;
    });
	
	this.buttonDelete.addEventListener ('click', () =>{

		this.controller.onclickbuttonDelete()
		this.display.value = this.controller.operator;
    });

	this.buttonSum.addEventListener ('click', () =>{

		this.controller.onclickbuttonSum()
		this.display.value = this.controller.operator;
    });

	this.buttonRest.addEventListener ('click', () =>{

		this.controller.onclickbuttonRest()
		this.display.value = this.controller.operator;
    });

	this.buttonMultiply.addEventListener ('click', () =>{

		this.controller.onclickbuttonMultiply()
		this.display.value = this.controller.operator;
    });

	this.buttonDivide.addEventListener ('click', () =>{

		this.controller.onclickbuttonDivide()
		this.display.value = this.controller.operator;
    });

	this.buttonEqual.addEventListener ('click', () =>{

		this.controller.onclickButtonEqual()
		this.display.value = this.controller.operator;
    });

	
}
        
class CalculatorController

	{

		constructor()
		{
		

		}

		





		
	}
        		

        

  customElements.define('x-calculator', CalculatorView);

  let calc = new CalculatorView();
  document.body.appendChild(calc);
}