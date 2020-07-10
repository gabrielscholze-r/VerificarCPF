function opacidade(){
    document.getElementById("insta").style.transition = "0.3s"
    document.getElementById("dev").style.transition = "0.3s"
    document.getElementById("insta").style.opacity = "100%"
    document.getElementById("dev").style.opacity = "100%"
}
function opacidade2(){
    document.getElementById("insta").style.opacity = "50%"
    document.getElementById("dev").style.opacity = "0%"
}

function formataCPF(cpf) {
    const elementoAlvo = cpf
    const cpfAtual = cpf.value   
    
    let cpfAtualizado;
    
    cpfAtualizado = cpfAtual.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, 
     function( regex, argumento1, argumento2, argumento3, argumento4 ) {
            return argumento1 + '.' + argumento2 + '.' + argumento3 + '-' + argumento4;
    })  
    elementoAlvo.value = cpfAtualizado; 
    }  

function verificar(){
    var cpf = document.getElementById("verify").value
    
    var cpf2 = cpf.length
    if (cpf2 < 11 || cpf2 > 11){
        document.getElementById("verify").value = ""
        return alert("Valor inválido")
        
    }
    var a = cpf.substring(0,1)
    var b = cpf.substring(1,2)
    var c = cpf.substring(2,3)
    var d = cpf.substring(3,4)
    var e = cpf.substring(4,5)
    var f = cpf.substring(5,6)
    var g = cpf.substring(6,7)
    var h = cpf.substring(7,8)
    var i = cpf.substring(8,9)
    var x= cpf.substring(9, 10)
    var y = cpf.substring(10, 11)
    var multiply = a*b*c*d*e*f*g*h*i*x*y
    if (isNaN(multiply)==true){
        document.getElementById("verify").value = ""
        return alert("Valor Invalido")
        
    }
    if (cpf2 == 11){
        var a = cpf.substring(0,1)*10
        var b = cpf.substring(1,2)*9
        var c = cpf.substring(2,3)*8
        var d = cpf.substring(3,4)*7
        var e = cpf.substring(4,5)*6
        var f = cpf.substring(5,6)*5
        var g = cpf.substring(6,7)*4
        var h = cpf.substring(7,8)*3
        var i = cpf.substring(8,9)*2
        var soma = a+b+c+d+e+f+g+h+i
        var soma21 = (soma*10) % 11
        if (soma21 == cpf.substring(9, 10)) {
            var a = cpf.substring(0,1)*11
            var b = cpf.substring(1,2)*10
            var c = cpf.substring(2,3)*9
            var d = cpf.substring(3,4)*8
            var e = cpf.substring(4,5)*7
            var f = cpf.substring(5,6)*6
            var g = cpf.substring(6,7)*5
            var h = cpf.substring(7,8)*4
            var i = cpf.substring(8,9)*3
            var j = cpf.substring(9, 10)*2
            var soma1 = a+b+c+d+e+f+g+h+i+j
            var soma22 = (soma1*10) % 11
            if (soma22 == cpf.substring(10, 11)) {
                alert(`CPF ${cpf} válido!`)
                document.getElementById("verify").value = ""
            }
            if (soma22 != cpf.substring(10, 11)) {
                alert(`CPF ${cpf} inválido!`)
                document.getElementById("verify").value = ""
            }
        

        }
        if (soma21 != cpf.substring(9, 10)) {
            alert(`CPF ${cpf} inválido!`)
            document.getElementById("verify").value = ""
        }
        
    }
}
