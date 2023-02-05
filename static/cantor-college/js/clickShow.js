const elements = document.querySelectorAll('.clickable');
elements.forEach(element => {
    element.addEventListener('click', () => {
        if(element.id == 'studentInfoBtn'){
            toggle(document.querySelector('#StudentInfo'));
            return;
        }
        else if(element.id == 'staffInfoBtn'){
            toggle(document.querySelector('#StaffInfo'));
            return;
        }
        elDiv = element.querySelector('div');
        toggle(elDiv);
    });
});
function toggle(elDiv){
    document.querySelectorAll('.shown').forEach(shownElement => {
        if(shownElement == elDiv) return;
        shownElement.classList.remove('shown');
        shownElement.classList.add('hidden');
    });
    if(elDiv.classList.contains('hidden')){
        elDiv.classList.remove('hidden');
        elDiv.classList.add('shown');
    }
    else{
        elDiv.classList.remove('shown');
        elDiv.classList.add('hidden');
    }
}