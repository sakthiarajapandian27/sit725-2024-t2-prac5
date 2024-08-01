

const clickMe = () => {
    $.ajax({url: "http://localhost:3040/addTwoNumber?n1=12&n2=12", success: function(result){
     alert(result?.data)
      }});
    // alert("Thanks for clicking me. Hope you have a nice day!")
}
$(document).ready(function () {
 
    $('.materialboxed').materialbox();
    $('#clickMeButton').click(() => {
        clickMe();
    })
});