/* 광고 삭제 */
try {
    let advertising = document.querySelector('body > div.wrapper > div.container.content > div.text-center.no-print > a > img.visible-xs-block')
    advertising.parentElement.removeChild(advertising)
} catch {
    
}