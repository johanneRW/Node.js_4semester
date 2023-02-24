
fetch("/api/visitors")
    .then(response => response.json())
    .then(result => {
        upDateVisitorCount(result.data)

    })

function upDateVisitorCount(visitorCount) {
    const visitorCountDiv = document.getElementById("visitor-count")
    visitorCountDiv.innerText = visitorCount
}

function writeInLog() {
    fetch("/api/visitors", {
        method: "PUT",
        headers: { "Content-Type": "applicarion.json" }
    })
        .then(response => response.json())
        .then(result => 
            upDateVisitorCount(result.data)
        )}

