class Song {
    constructor(name,chords,tempo) {
        
    }
}

let botonTri1 = document.getElementById('i1')
let botonTris = () => {
    const chordsTristes = [
        'Arrancarmelo: C/G - Gm - F - Fm / Key Fmajor / Bpm 82',
        'Dandelions: F - Am - C - G / Key C#major / Bpm 117'
    ];

    return chordsTristes[Math.floor(Math.random() * chordsTristes.length)];

}
const activarTris = () => {
    return document.getElementById('f').innerHTML = botonTris()
}

botonTri1.onclick = activarTris



let botonSeptimas = () => {
    const chordsSeptimas = [
        'Una rosa: B - Ebm - C#m - E / Key Bmajor / Bpm 77'
    ]
    
    return chordsSeptimas[Math.floor(Math.random() * chordsSeptimas.length)]
    
}

setTimeout(() => {
    return document.getElementById('r').innerHTML = 'Te amo amor bello'
}, 2000);



