class result_writer
{
	writer(i)
	{
		document.getElementById("t_table").appendChild(i);
	}
	input(i)
	{
		var chTag_td=document.createElement("td");
		chTag_td.innerHTML="&lt- "+(i?i.toString():"undefined");
		var chTag_tr=document.createElement("tr");
		chTag_tr.style="background-color:#ffffff;";
		chTag_tr.appendChild(chTag_td);
		this.writer(chTag_tr);
	}
	output(i)
	{
		var chTag_td=document.createElement("td");
		chTag_td.innerHTML="-&gt "+(i?i.toString():"undefined");
		var chTag_tr=document.createElement("tr");
		chTag_tr.style="background-color:#a8a8a8;";
		chTag_tr.appendChild(chTag_td);
		this.writer(chTag_tr);
	}
	error(i)
	{
		var chTag_td=document.createElement("td");
		chTag_td.innerHTML="!- "+(i?i.toString():"undefined");
		var chTag_tr=document.createElement("tr");
		chTag_tr.style="background-color:#ff5e3c;";
		chTag_tr.appendChild(chTag_td);
		this.writer(chTag_tr);
	}
	others(i)
	{
		var chTag_td=document.createElement("td");
		chTag_td.innerHTML="-- "+(i?i.toString():"undefined");
		var chTag_tr=document.createElement("tr");
		chTag_tr.appendChild(chTag_td);
		this.writer(chTag_tr);
	}
}


function run(i)
{
	writer.input(i.toString());
	try {
		writer.output(eval(i.toString()));
	} catch(e) {
		writer.error(e);
	}
	
}


loader();

function loader()
{
	var dom=document.body;
	var data=document.createElement("h1");
	data.innerHTML="hi this is text";
	dom.appendChild(data);
}

var writer=new result_writer();
//var engine=new repl();

function sendKey(event)
{
	if(event.keyCode==13)
	{
		run(document.getElementById("t_box").value);
		return false;
	}
	return true;

}

// class fake_console
// {
// 	log(a){alert(a);}
// }

// var console=new fake_console();
