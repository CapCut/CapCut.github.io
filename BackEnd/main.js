const ingresar_texto = document.getElementById('recibir_texto');
const mostrar_texto = document.getElementById('resultado_texto');
const lista_numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function vacio(){
    if (ingresar_texto.value === ''){
        console.log("Campo de texto vacío. Ingrese un texto （￣︶￣）↗　");
}
}

function encriptar(){
    vacio();

    if (ingresar_texto.value) {
        var texto = ingresar_texto.value;

        var salida = '';
        var mufa = false;

        for (var i = 0; i < texto.length; i++) {
            if ((texto[i] == "1") || (texto[i] == "2") || (texto[i] == "3") || (texto[i] == "4") || (texto[i] == "5") || (texto[i] == "6") || (texto[i] == "7") || (texto[i] == "8") || (texto[i] == "9") || (texto[i] == "10")) {
                salida = '';  
                mufa = true;
                break;      
            }

            switch (texto[i]) {
                case 'a':
                    salida+= 'ei';
                    break;
                case 'e':
                    salida+= 'nahida';
                    break;
                case 'i':
                salida+= 'mona';
                    break;
                case 'o':
                    salida+= 'venti';
                    break;
                case 'u':
                    salida+= 'zhongli';
                    break;
                case 'A':
                    salida+= 'nohelle';
                    break;
                case 'E':
                    salida+= 'mei';
                    break;
                case 'I':
                salida+= 'makoto';
                    break;
                case 'O':
                    salida+= 'miko';
                    break;
                case 'U':
                    salida+= 'diluc';
                    break;
            
                default:
                    salida+= texto[i]
                    break;
            }
            
        }

        if (mufa) {
            alert('Ingrese un texto que no contenga números （￣︶￣）↗　.');
        }
        else{
            mostrar_texto.value = salida;
        }
    }
    else{
        alert('Ingrese un texto para continuar con la encriptación （￣︶￣）↗　.');
    }
}

function des_encriptar(){
    vacio();

    var texto = ingresar_texto.value;

    if (ingresar_texto.value) {
        var texto = ingresar_texto.value;

        var salida = texto.replaceAll(/ei/g, 'a').replaceAll(/nahida/g, 'e').replaceAll(/mona/g, 'i').replaceAll(/venti/g, 'o').replaceAll(/zhongli/g, 'u').replaceAll(/nohelle/g, 'A').replaceAll(/mei/g, 'E').replaceAll(/makoto/g, 'I').replaceAll(/miko/g, 'O').replaceAll(/diluc/g, 'U');
        mostrar_texto.value = salida;
    }
    else{
        alert('ingrese un texto para des-encriptar （￣︶￣）↗　.');
    }
}

function copiar_texto() {
    mostrar_texto.select();
    document.execCommand('copy');
}

function guardar_archivo() {
    var contenido = document.getElementById('resultado_texto').value;
    var guardar_contenido = 'Mensaje_encriptado.txt';

    var ruta = document.createElement('a');
    ruta.href = 'data:text/plain:charset=utf-8,' + encodeURIComponent(contenido);
    ruta.download = guardar_contenido;
    ruta.style.display = 'none';
    document.body.appendChild(ruta);
    ruta.click();
    document.body.removeChild(ruta);
}