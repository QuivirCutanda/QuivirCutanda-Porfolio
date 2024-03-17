var txtInput = getElementByClass('txtInput');
var emailInput = getElementByClass('emailInput');
var msgInput = getElementByClass('msgInput');
var submit = getElementByClass('submit');

submit.onClick = function(){
    txtInput.innerHTML = "";
    emailInput.innerHTML = "";
    msgInput.innerHTML = "";
}