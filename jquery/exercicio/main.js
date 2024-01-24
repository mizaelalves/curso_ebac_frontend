$(document).ready(function(){
  $('#iCEP').mask('00000-000');
  $('#iCPF').mask('000.000.000-00', {reverse: true});
  $('#iNumero').mask('(00) 0000-0000');
})