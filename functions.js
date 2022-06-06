function sendMessage(mess) {
        webhook_url = "https://discord.com/api/webhooks/983222273081245726/YW9JOXOk42838M154hk9QIZgBA7n9p05-DqP0tBKaPnpc0PZ-Gtw7_-4FhxtsMghwb5L"
        console.log(mess)
        var request = new XMLHttpRequest();
        request.open("POST", webhook_url);

        request.setRequestHeader('Content-type', 'application/json');

        var params = {
                username: "no u",
                avatar_url: "https://cdn.discordapp.com/avatars/687108508130213935/c58c1e5cb19c3f6a0a1d817d14713ab2.webp",
                content: mess
        }

        request.send(JSON.stringify(params));
}
