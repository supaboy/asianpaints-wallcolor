function changeColor(){
    var wallId = Number(document.getElementById('wall_id').value);
    var wallColor = document.getElementById('wall_color').value;
    console.log(wallId);
    document.getElementById(`${wallId}`).style.backgroundColor = wallColor;

    document.getElementById('wall_color').value = "";
    document.getElementById('wall_id').value = "";
}


function resetAll() {
    for(let i=1; i<=9; i++){
        document.getElementById(`${i}`).style.backgroundColor = 'transparent';
    }
}