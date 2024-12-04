let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('tema')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}
if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

function displayDate() {
    const dateElement = document.getElementById('date-display');
    const today = new Date();
    const formattedDate = today.toLocaleDateString('sl-SI', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    dateElement.textContent = ` ${formattedDate}`;
}
displayDate();