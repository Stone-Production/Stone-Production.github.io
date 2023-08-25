async function live_status_update() {
    const data = await fetch(`https://discord.com/users/238477261781598219`).then(res => res.json())
    if(data.data.discord_status === 'online' || data.data.discord_status === 'dnd') {
        document.querySelectorAll(".status-circle").forEach(circle => {
            circle.classList.remove("offline")
        })
        document.querySelectorAll(".status-circle").forEach(circle => {
            circle.classList.add("online")
        })
    } else if(data.data.discord_status === 'offline' || data.data.discord_status === 'idle') {
        document.querySelectorAll(".status-circle").forEach(circle => {
            circle.classList.remove("online")
        })
        document.querySelectorAll(".status-circle").forEach(circle => {
            circle.classList.add("offline")
        })
    }
}
live_status_update()
setInterval(live_status_update, 5000)
