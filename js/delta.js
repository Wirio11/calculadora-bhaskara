let delta
let vb
let va
let vc
let botaoNovo2
let botaoNovo1
let x1
let x2

function chamarDelta(){
    va = Number(document.getElementById('a').value)
    vb = Number(document.getElementById('b').value)
    vc = Number(document.getElementById('c').value)
    if(va == 0){
        alert('O valor de "a" não pode ser = 0')
    } else{
        delta = (vb * vb) - (4 * va * vc)
        document.getElementById('dt')
        .innerHTML = "Δ = " + delta + "."

    if(delta > 0){
        document.getElementById('mostrarDelta')
        .innerHTML = 'Possui duas raízes, deseja calculá-las?'
        
        botaoNovo1 = document.getElementById('meuBotao1')
        botaoNovo1.value = 'Sim'
        botaoNovo1.className = 'btt'
        botaoNovo1.hidden = false

    } else if(delta < 0){
        document.getElementById('mostrarDelta')
        .innerHTML = 'Não possui raíz real.'
    } else{
        document.getElementById('mostrarDelta')
        .innerHTML = 'Possui uma raíz, deseja encontrá-la?'   

        botaoNovo1 = document.getElementById('meuBotao1')
        botaoNovo1.value = 'Sim'
        botaoNovo1.className = 'btt'
        botaoNovo1.hidden = false
    }
        botaoNovo2 = document.getElementById('meuBotao2')
        botaoNovo2.textContent = 'Novo delta'
        botaoNovo2.className = 'btt'
        botaoNovo2.hidden = false
    }
}

let botaoSimplifica
let botaoNS
let denominador
let numerador1
let numerador2
let bb
let ab
let mdcFinal
let resto
let numerador1SPF
let numerador2SPF
let denominadorSPF

function bhaskara(){
    document.getElementById('p1')
    .innerHTML = ''
    document.getElementById('p2')
    .innerHTML = ''
    document.getElementById('p3')
    .innerHTML = ''
    document.getElementById('sumir')
    .innerHTML = ''
    botaoNovo1.hidden = true
    denominador = 2 * va
    if(delta % Math.sqrt(delta) != 0 && delta != 0){
        document.getElementById('opcao')
        .innerHTML = 'A raíz quadrada de ' + delta + ' não é exata, como você deseja visualizar o resultado?'
        botaoSimplifica = document.getElementById('botaospf')
        botaoSimplifica.value = 'Fração'
        botaoSimplifica.className = 'btt'
        botaoSimplifica.hidden = false

        botaoNS = document.getElementById('botaoN')
        botaoNS.value = 'Valor decimal'
        botaoNS.className = 'btt'
        botaoNS.hidden = false

    } else if(delta % Math.sqrt(delta) === 0 && delta !== 0){
        numerador1 = (-1 * (vb) + Math.sqrt(delta))
        numerador2 = (-1 * (vb) - Math.sqrt(delta))
        
        if(numerador1 % denominador == 0){
            if (x1 === -0) x1 = x1 + 0
            x1 = numerador1 / denominador    
            document.getElementById('deltainteiro1')
            .innerHTML = 'x1 = ' + x1

        } else{
            ab = Math.abs(numerador1)
            bb = Math.abs(denominador)
            while(bb !== 0){
                resto = ab % bb
                ab = bb
                bb = resto

            }
            mdcFinal = ab
            numerador1SPF = numerador1 / mdcFinal
            denominadorSPF = denominador / mdcFinal

            document.getElementById('deltainteiro1')
            .innerHTML = `
                x1 = 
                <span class="fracao">
                    <span class="span1">${denominadorSPF < 0 ? -1 * numerador1SPF : numerador1SPF}</span>
                    <span>${denominadorSPF  < 0 ? -1 * denominadorSPF : denominadorSPF}</span>
                </span>

            `
        }
        if(numerador2 % denominador == 0){
            x2 = numerador2 / denominador
            x2 = x2 + 0
            document.getElementById('deltainteiro2')
            .innerHTML = 'x2 = ' + x2
        } else{
            ab2 = Math.abs(numerador2)
            bb2 = Math.abs(denominador)
            while(bb2 !== 0){
                let resto2 = ab2 % bb2
                ab2 = bb2
                bb2 = resto2
            }
            
            mdcFinal = ab2
            numerador2SPF = numerador2 / mdcFinal
            denominadorSPF = denominador / mdcFinal
            
                document.getElementById('deltainteiro2')
                .innerHTML = `
                x2 = 
                <span class="fracao">
                    <span class="span1">${denominadorSPF < 0 ? -1 * numerador2SPF : numerador2SPF }</span>
                    <span>${denominadorSPF < 0 ? -1 * denominadorSPF : denominadorSPF}</span>
                </span>

            `  
        }

    } else{
        numerador1 = -1 *(vb)
        if(numerador1 % denominador == 0){
            x1 = numerador1 / denominador
            document.getElementById('deltainteiro1')
            .innerHTML = 'x1 = ' + x1
        } else{
            ab2 = Math.abs(numerador1)
            bb2 = Math.abs(denominador)
            while(bb2 !== 0){
                let resto2 = ab2 % bb2
                ab2 = bb2
                bb2 = resto2
            }
            
            mdcFinal = ab2
            numerador2SPF = numerador1 / mdcFinal
            denominadorSPF = denominador / mdcFinal
            document.getElementById('deltainteiro1')
                .innerHTML = `
                x1 = 
                <span class="fracao">
                    <span class="span1">${denominadorSPF < 0 ? -1 * numerador2SPF : numerador2SPF }</span>
                    <span>${denominadorSPF < 0 ? -1 * denominadorSPF : denominadorSPF}</span>
                </span>
            `
        }
    }
}
function decimal(){
    document.getElementById('opcao')
    .innerHTML = ''
    botaoNS.hidden = true

    if(botaoNS != undefined){
        let raizQ = Math.sqrt(delta)
        let x1 = (-(vb) + raizQ) / (2 * va)
        let x2 = (-(vb) - raizQ) / (2 * va)

        document.getElementById('rx1')
        .innerHTML = "x1 = " + x1
        document.getElementById('rx2')
        .innerHTML = "x2 = " + x2
    }
}

let fora;
let dentro;
let a2;
let vb1;
let va2;
let fora2;

function spf(){
    document.getElementById('opcao')
    .innerHTML = ''
    botaoNovo1.hidden = true
    botaoSimplifica.hidden = true
    a2 = va * 2
    if(botaoSimplifica != undefined){
        fora = 1
        dentro = delta

        for(let i =  Math.floor(Math.sqrt(delta)); i >=2; i--)
            if(delta % (i*i) === 0){
                fora = i
                dentro = delta / (i*i)
                break;
        }
        console.log( fora + '√' + dentro)

            let numeradorFora = vb
            let coefRaiz = fora
            let denomin = a2
            let limiteMDC = Math.min(Math.abs(numeradorFora), Math.abs(coefRaiz), Math.abs(denomin))
            let mdcFinal2 = 1

            for(let i = limiteMDC; i >1; i--){
                if(numeradorFora % i === 0 && coefRaiz % i === 0 && denomin % i === 0){
                    mdcFinal2 = i
                    break;
                }
            }

            if(mdcFinal2 === 0) mdcFinal2 = 1 

            let novoB = -1 * (vb / mdcFinal2)
            let novoFora = fora / mdcFinal2
            let novoForaMenos = -1 * (fora / mdcFinal2)
            let novoA = a2 / mdcFinal2

            if(novoA < 0){
                novoB = novoB * -1
                novoFora = novoFora * -1
                novoForaMenos = novoForaMenos * -1
                novoA = novoA * -1
                let nFora = novoFora
                let nForaMenos = novoForaMenos
                let sinal = "+"
                if (novoFora == 1) novoFora = ""
                if (novoFora == -1) novoFora = "-"
                if (novoForaMenos == 1) novoForaMenos = "" 
                if (novoForaMenos == -1) novoForaMenos = "-"
                if (novoB == 0) sinal = "" 
                const span = document.getElementById('formula1')
                span.innerHTML = `
                x1 =
                <span class="fracao">
                    <span class="span1">${(novoB == 0 ? "" : novoB)} ${(nFora < 0 ? novoFora : sinal + novoFora)}√${dentro}</span>
                    <span>${novoA}</span>
                </span>
                `
                document.getElementById('formula2')
                .innerHTML = `
                x2 =
                <span class="fracao">
                    <span class="span1">
                        ${(novoB == 0 ? "" : novoB)} ${(nForaMenos < 0 ? novoForaMenos : sinal + novoForaMenos)}√${dentro}
                    </span>
                    <span>${novoA}</span>
                </span>
                `
            }else{
                const span = document.getElementById('formula1')
                span.innerHTML = `
                x1 =
                <span class="fracao">
                    <span class="span1">${(novoB == 0 ? "" : novoB)} ${(novoB == 0 ? "" : "+")} ${(novoFora == 1 ? "" : novoFora)}√${dentro}</span>
                    <span>${novoA}</span>
                </span>
                `
                const span2 = document.getElementById('formula2')
                span2.innerHTML = `
                x2 =
                <span class="fracao">
                    <span class="span1">
                        ${(novoB == 0 ? "" : novoB)} ${(novoForaMenos == -1 ? "-" : novoForaMenos)}√${dentro}
                    </span>
                    <span>${novoA}</span>
                </span>
                `
            }
    } 
}              
