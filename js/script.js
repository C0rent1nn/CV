
document.getElementById('mail').addEventListener('click', (event) => {
    const myMail = event.target.innerText
    navigator.clipboard.writeText(myMail).then(() => {
        alert(`Le mail ${myMail} a bien été copié dans le presse papier.`)
    }).catch(() => {
        alert(`Impossible de copier dans le presse papier.`)
    })
    document.getElementById("mail").animate([
        // keyframes
        { transform: 'translateY(0px)' },
        { transform: 'translateY(-300px)' }
    ], {
        // timing options
        duration: 100,
        iterations: Infinity
    });
})
