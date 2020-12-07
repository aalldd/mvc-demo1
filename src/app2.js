import './app2.css'
import $ from 'jquery'
$('.tabBar').on('click',"li",e=>{
    const $tab=$(e.currentTarget)
    $tab.addClass('selected').siblings().removeClass('selected')
    let index=$tab.index()
    $('.tabContent').children().eq(index).addClass('active').siblings().removeClass('active')
})
$('.tabBar').children().eq(0).trigger('click')