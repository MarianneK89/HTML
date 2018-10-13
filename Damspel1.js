function Startspel() {
    var board = [];

    //vlakken definiëren
    var zwart = true;
    for(i=0; i<10;i++) {
        board[i]=[];
        zwart=!zwart;
           for(j=0; j<10;j++){
            var elm = document.createElement("div");
            if (zwart) { 
                s = "Vlak zwartvlak";
            } 
            else { 
                s = "Vlak witvlak";
            };
            zwart = !zwart;
            elm.setAttribute("class",s);
            board[i][j]=elm;
        }
    }
    console.log(board);
    var elm = document.getElementById("table");
    for(i=0; i<10;i++) {
           for(j=0; j<10;j++){
            elm.appendChild(board[i][j]);
        }
    }
}
