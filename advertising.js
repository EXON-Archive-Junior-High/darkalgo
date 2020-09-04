/* 광고 삭제 */
try {
    let advertising = document.querySelector('body > div.wrapper > div.container.content > div.text-center.no-print > a')
    advertising.parentElement.removeChild(advertising)
} catch {
    console.log('광고 삭제 실패')
}
