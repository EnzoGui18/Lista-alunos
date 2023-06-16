function criarRelatorio(){
    var alunos = [
        { nome: "Aluno 1", nota: 8 },
        { nome: "Aluno 2", nota: 7 },
        { nome: "Aluno 3", nota: 9 },
        { nome: "Aluno 4", nota: 6 },
        { nome: "Aluno 5", nota: 7 },
        { nome: "Aluno 6", nota: 8 },
        { nome: "Aluno 7", nota: 5 },
        { nome: "Aluno 8", nota: 9 },
        { nome: "Aluno 9", nota: 6 },
        { nome: "Aluno 10", nota: 8 }
    ];

    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");

    var headerRow = document.createElement("tr");
    var nomeHeader = document.createElement("th");
    nomeHeader.textContent = "Nome";
    var notaHeader = document.createElement("th");
    notaHeader.textContent = "Nota";

    headerRow.appendChild(nomeHeader);
    headerRow.appendChild(notaHeader);
    thead.appendChild(headerRow);

    for (var i = 0; i < alunos.length; i++){
        var aluno = alunos[i];
        var row = document.createElement("tr");
        var nomeCell = document.createElement("td");
        nomeCell.textContent = aluno.nome;
        var notaCell = document.createElement("td");
        notaCell.textContent = aluno.nota;

        row.appendChild(nomeCell);
        row.appendChild(notaCell);
        tbody.appendChild(row);
    }

    table.appendChild(thead);
    table.appendChild(tbody);

    var relatorioDiv = document.getElementById("relatorio");
    relatorioDiv.innerHTML = "";
    relatorioDiv.appendChild(table);
}