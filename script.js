
//task 2a
document.getElementById("submit_button").onclick = function validation()
{
	const fullname = document.getElementById("full_name");
	if((fullname.value).length == 0)
	{
		alert("Full Name is missing");
	}
	else
	{
		alert(fullname.value);
	}
	
};
document.getElementById("male_radio").onclick = function val()
{
	
	alert("Male");
}
document.getElementById("female_radio").onclick = function val()
{
	
	alert("Female");
}
