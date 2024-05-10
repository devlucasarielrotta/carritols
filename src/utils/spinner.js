export const toggleSpinner = () => {
    
    const section = document.querySelector('section');
    const spinnerExist = document.querySelector('#spinner');
    
    if (spinnerExist) {
        spinnerExist.remove();
    } else {
        const spinnerContainer = document.createElement('div');
        spinnerContainer.classList.add('d-flex', 'justify-content-center', 'align-items-center');
        
        const spinner = document.createElement('div');
        spinner.classList.add('spinner-grow', 'text-primary');
        spinner.id = 'spinner';
        spinner.setAttribute('role', 'status');

        const srOnly = document.createElement('span');
        srOnly.classList.add('visually-hidden');

        spinner.appendChild(srOnly);
        spinnerContainer.appendChild(spinner);
        section.appendChild(spinnerContainer);
    }
}
