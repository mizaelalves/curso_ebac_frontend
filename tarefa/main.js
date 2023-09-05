$(document).ready(function () {
    id = 0
    $('form').on('submit', function (e) {

        const nomeTarefa = $('#nome-tarefa').val()
        e.preventDefault();
        const novoItem = $('<li></li>')
        $(`<span id=${id}>${nomeTarefa}</span>`).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(3000);
        $('#nome-tarefa').val()
        id++;
    })
    $('ul').on('click', 'span', function () {
        const spanId = $(this).attr('id');
        console.log("Clicou em span com ID: " + spanId);
        $(`#${spanId}`).css('text-decoration', 'line-through');
    });

})
