// console.log('storm.! storm..!! storm...!!!');

// alert('Storm is coming.....!!!!!!!');

const maComing = () => {
    alert('Ammu is coming. Open the book...!!!');
}

const askPicnic = () => {
    const response = confirm('Are you going to picnic?');
    console.log(response);
    if (response === true) {
        alert('Amake fee ta manage koira de');
    } else {
        console.log('DGM:: Dure Giya Mor');
    }
}

const askName = () => {
    const name = prompt('What is Your Name?');
    if (name) {
        console.log(name);
    }
}