
function preventCache() {
    const scripts = document.getElementsByTagName("script"),
        src = scripts[scripts.length - 1].src;
    scripts[scripts.length - 1].src = `${src}?v=${Math.random()}`
}


function fetchInsert(url, eid) {
    // Fetch the HTML content
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            // Insert the fetched HTML into the content div
            const el = document.getElementById(eid)
            if (el) {
                el.innerHTML = data;

            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}


function onClickPrint() {
    document.getElementById('print').addEventListener('click', function () {
        const collapsibles = document.querySelectorAll('.collapse');
        collapsibles.forEach(collapse => {
            const bsCollapse = new bootstrap.Collapse(collapse, {
                toggle: true
            });
        });

        setTimeout(()=>{
            window.print()
        }, 500)
    });
    
}

document.addEventListener("DOMContentLoaded", function () {

    fetchInsert("resume.html", "resume")
    preventCache()
    onClickPrint()
});

