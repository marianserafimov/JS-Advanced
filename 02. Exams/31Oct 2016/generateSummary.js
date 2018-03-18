function generateSummary(selector) {
    $(selector).on('click', function () {
        let theWholeText = $('#content strong').text()
        createSummary(theWholeText)
    })

    function createSummary(theWholeText) {
        let div = $('<div>')
        let h2 = $('<h2>Summary</h2>')
        div.attr('id', 'summary')
        let p = $('<p>')
        p.text(theWholeText)

        p.appendTo(div)
        h2.appendTo(div)

        let parent = $('#content').parent()
        div.appendTo(parent)
    }
}