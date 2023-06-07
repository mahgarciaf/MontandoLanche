const vm = new Vue({
    el:'#app',
    data: {
        inputTipoPao: '',
        inputSalada: [],
        inputMolhos: [],
        inputTipoHamburguer: '',
        etapa: 1,
        inputNome: '',
        inputEmail: '',
        novoPedidoAssincrono: null
    },
    computed: {
        pao() {
            switch (this.inputTipoPao) {
                case 'gergelim':
                    return [
                        "imagens/pao_gergelim_superior.png",
                        "imagens/pao_gergelim_inferior.png"
                    ]
                case 'australiano':
                    return [
                        "imagens/pao_australiano_superior.png",
                        "imagens/pao_australiano_inferior.png"
                    ]
                default:
                    return [
                        "imagens/padrao/pao_superior.png",
                        "imagens/padrao/pao_inferior.png"
                    ]
            }
        },
        alface() {
            if(this.inputSalada.includes('alface'))
                return "imagens/alface.png"
            else
                return "imagens/padrao/alface.png"
        },
        ketchup() {
            if(this.inputMolhos.includes('ketchup'))
                return "imagens/ketchup.png"
            else
                return "imagens/padrao/molho.png"
        },
        mostarda() {
            if(this.inputMolhos.includes('mostarda'))
                return "imagens/mostarda.png"
            else
                return "imagens/padrao/molho.png"
        },
        maionese() {
            if(this.inputMolhos.includes('maionese'))
                return "imagens/maionese.png"
            else
                return "imagens/padrao/molho.png"
        },
        hamburguer() {
            switch (this.inputTipoHamburguer) {
                case 'bovino':
                    return [
                        "imagens/bovino.png"
                    ]
                case 'frango':
                    return [
                        "imagens/frango.png"
                    ]
                case 'soja':
                    return [
                        "imagens/soja.png"
                    ]   
                default:
                    return [
                        "imagens/padrao/hamburguer.png"
                    ]
            }
        }

    },
    methods: {
        fazerPedido() {
            if (this.inputTipoPao && this.inputTipoHamburguer) {
                this.etapa = 2
            } else {
                alert('Você precisa pelo menos selecionar o pão e o hamburguer.')
            }
        },
        confirmarPedido() {
            if (this.inputNome && this.inputEmail) {
                this.etapa = 3
                this.novoPedidoAssincrono = setTimeout(() => this.novoPedido(), 10000)
            } else {
                alert('Você precisa informar os seus dados.')
            }
        },
        novoPedido() {
            this.inputTipoPao = ''
            this.inputSalada = []
            this.inputMolhos = []
            this.inputTipoHamburguer = ''
            this.etapa = 1
            this.inputNome = ''
            this.inputEmail = ''

        }
    },
    watch:{
        etapa(novoValor) {
            if (novoValor == 1)
                clearTimeout(this.novoPedidoAssincrono)
        }
    }
})