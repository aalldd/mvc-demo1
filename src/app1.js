import './app1.css'
import $ from 'jquery'
const $number=$('#number')

const calnum={
    n:parseInt($number.text()),
    init:()=>{
        calnum.n=localStorage.getItem('number')
        $number.text(calnum.n)
        calnum.bindEvents()
    },
    events:{
        '#add1':'add',
        '#sub1':'sub',
        '#mul1':'mul',
        '#divide1':'divide',
    },
    bindEvents:()=>{
        for(let key in calnum.events){
            if(calnum.events.hasOwnProperty(key)){
                const value=calnum.events[key]
                $(key).on('click',calnum[value])
            }
        }
    },
    setNum:()=>{
        $number.text(calnum.n)
        localStorage.setItem('number',calnum.n)
    },
    add:()=>{
        calnum.n++
        calnum.setNum()
    },
    sub:()=>{
        calnum.n--
        calnum.setNum()
    },
    mul:()=>{
        calnum.n*=2
        calnum.setNum()
    },
    divide:()=>{
        calnum.n/=2
        calnum.setNum()
    }
}
calnum.init()

