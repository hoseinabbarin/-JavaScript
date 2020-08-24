let app={
    config:{
        rows:[8,7,6,5,4,3,2,1],
        cols:['a','b','c','d','e','f','g','h']
    },

    run(){
        let board = this.generateBoard();
        document.body.innerHTML=board;
        this.insertFiguresOnDesk();
        this.insertPawns();
        this.insertRowsNumbers();
        this.insertColsChars();
    },

    /**
     * Метод генерирует игровое поле 8 на 8.
     * @returns {string} html разметка в виде строки.
     */

    generateBoard(){
       let board ='';
       let rowStardWithColor ='white';
       for(let i=0; i<this.config.rows.length;i++){
           let row='';
           if(rowStardWithColor == 'white'){
                 row = this.generateRow(rowStardWithColor,this.config.rows[i]);
                 rowStardWithColor ='black';
           }else{
               row =this.generateRow(rowStardWithColor,this.config.rows[i]);
               rowStardWithColor='white';
           }
           board +=row;
       }
       return `<table><tbody>${board}<tbody></table>`;
    },
    /**
     * Метод герерирует тег tr(строку игровой доски) с закрашенными тегами
     * td (ячейкам).
     * @param {string} starWithColor с какого цвета строка начинается от левого края
     * н.б "white","black"/
     * @param {number} rowNum номер строки от 8 до 1 т.к.шахматная доска формируется 
     * сверху вниз. поэтому номер начинается с 8.
     * @returns {string} html-разметка ,тег tr с оформленными внутри тегами td.
     */
    generateRow(starWithColor,rowNum){
       let curentColorClass = starWithColor;
       let row ="";
       for(let i=0;i<this.config.cols.length;i++){
           let field="";
           if(curentColorClass === 'white'){
               field = this.generateField('white',rowNum,this.config.cols[i]);
               curentColorClass = 'blackField';
           }else{
               field=this.generateField('black',rowNum,this.config.cols[i]); 
               curentColorClass = 'white';
           }
           row +=field;
       }
       return `<tr>${row}</tr>`;
    },

    /**
     * Метод генерирует ячейку(тег td) с нужным классом цвета
     * и координатами на поле.
     * @param {string} color класс цвета ячейкаи н.б. "white","black". 
     * @param {number} rowNum rowNum номер строки игровой доски. 
     * @param {string} colChar буква колонки игровой доски.
     * @returns {string} html-разметка с заполненными атрибутами координат и классом цвета.
     */
    generateField(color,rowNum,colChar){
       return `<td data-rownum="${rowNum}" data-colchar="${colChar}" class="${color}"></td>`;
    },

    /**
     * Метод вставляет на существующую доску колонку 
     * слева с указанием номера строки.
     */

    insertRowsNumbers(){
       let trs=document.querySelectorAll('tr');
       for(let i=0;i<trs.length;i++){
           let td=document.createElement('td');
           td.innerHTML = this.config.rows[i];
           trs[i].insertAdjacentElement('afterbegin',td);
       }   
    },

    /**
     * Метод создает строку (tr) с названиями колонок в виде букв,
     * а ткаие в начале вставляет пустую ячейку, которая идет под
     * цифрами.
     */


    insertColsChars(){
          let tr = document.createElement('tr');
          tr.innerHTML += '<td></td>';
          for(let i=0;i<this.config.cols.length;i++){
              tr.innerHTML +=`<td>${this.config.cols[i]}</td>`;
          }
          let tbody = document.querySelector('tbody');
          tbody.insertAdjacentElement("beforeend",tr);
    },

    insertFiguresOnDesk(){
        for(let i=0;i<positions.length;i++){
            let cell=document.querySelector(`[data-rownum="${positions[i].coordRow}"][data-colchar="${positions[i].coordCol}"]`);
            let figure = this.getFigure(positions[i].figure,positions[i].color+"Figure"); 
            cell.innerHTML = figure;
        } 
    },

    getFigure(name,colorClass){
           return `<i class="fas fa-chess-${name} ${colorClass}"></i>`;
    },

    insertPawns(){
        let whitePawnsRow = document.querySelectorAll('tr:nth-child(7) td');
        for(let i=0;i<whitePawnsRow.length;i++){
            whitePawnsRow[i].innerHTML =this.getFigure('pawn','whiteFigure');
        }

        let blackPawnsRow =document.querySelectorAll('tr:nth-child(2) td');
        for(let i=0;i<blackPawnsRow.length;i++){
            blackPawnsRow[i].innerHTML = this.getFigure('pawn','blackFigure');
        }
    }
};

app.run();