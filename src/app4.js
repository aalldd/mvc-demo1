import './app4.css'
import $ from 'jquery'
$('.circle').on('mouseenter',()=>{
    $('.circle').addClass('active')
}).on('mouseleave',()=>{
    $('.circle').removeClass('active')
})