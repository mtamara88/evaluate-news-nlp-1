// js files
import { checkForName } from './js/nameChecker';
import { handleSubmit } from './js/formHandler';
import { updateUI } from './js/formHandler';
import { checkURL } from './js/urlChecker';


// sass files
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/resets.scss'

console.log(checkForName);

//alert("I EXIST")
//console.log("CHANGE!!");

export { checkURL, handleSubmit, updateUI };