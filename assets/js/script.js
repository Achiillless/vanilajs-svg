let floorCell = document.querySelector('#floor')
let flatsCell = document.querySelector('#flats')
const floors = document.querySelectorAll('.floor')

floors.forEach(item => {
    console.log(item);

    item.addEventListener('mouseover', () => {


        let dataFloor = item.getAttribute('data-floor')
        let dataFlats = item.getAttribute('data-flats')
       
        floorCell.innerText = dataFloor;
        flatsCell.innerText = dataFlats;
    })
})