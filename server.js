const express = require("express")

const app = express()

const port = 3000


const videoGames = [
    {
        name:"Mass Effect",
        genre: "Science Fiction",
    },
    {
        name:"Dragon Age",
        genre: "Fantasy",
    },
    {
        name:"Skyrim",
        genre: "Fantasy",
    },
    {
        name:"Hollow Knight",
        genre: "Fantasy",
    },
    {
        name:"Pokemon",
        genre: "Fantasy",
    }
]

const fs = require("fs") 
const { url } = require("inspector")
app.engine("madeline", (filePath, options, callback) => { 
    fs.readFile(filePath, (err, content) => {
        if (err) return callback(err)
        const rendered = content.toString()
            .replace("#title#", "<title>" + options.title + "</title>")
            .replace("#message#", "<h1>" + options.message + "</h1>")
            .replace("#quote#","<h3>" + options.quote + "</h3>" )
            .replace("#content#", "<p>" + options.content + "</p>")
            .replace("#heading#","<h1>" + options.heading + "</h1>")
            .replace("#link#", options.link) 
            .replace("#url1#", options.url1)
            .replace("#url2#", options.url2)
            .replace("#url3#", options.url3)
            .replace("#url4#", options.url4)
            .replace("#url5#", options.url5)
            .replace("#point1#", "<h4>" + options.point1 + "</h4>")
            .replace("#point2#", "<h4>" + options.point2 + "</h4>")
            .replace("#point3#", "<h4>" + options.point3 + "</h4>")
            .replace("#point4#", "<h4>" + options.point4 + "</h4>")
            .replace("#point5#", "<h4>" + options.point5 + "</h4>")
            .replace("#favCharacter#", "<h4>" + options.favCharacter + "</h4>")
        return callback(null, rendered)
    })
})

app.set("views", "./views")

app.set("view engine", "madeline")


app.get("/", (req,res) => {
    res.render("home-template", {
        title:`Some Of My Favorite Video Games`, 
        heading:`Some Of My Favorite Video Games`, 
        link: "https://gamesscore-forum.com/wp-content/uploads/2022/05/Top-10-best-selling-consoles_tcm25-551954.webp",
        point1: "Mass Effect",
        url1:`/mass-effect`,
        point2: "Dragon Age",
        url2:`/dragon-age`,
        point3: "Skyrim",
        url3:`/skyrim`,
        point4: "Hollow Knight",
        url4:`/hollow-knight`,
        point5: "Pokemon",
        url5:`/pokemon`,
    })
})

app.get("/mass-effect", (req,res) => {
    res.render("template", {
        title: `${videoGames[0].name}`,
        message: `${videoGames[0].name}`,
        quote: "'Does this unit have a soul?' - Legion ",
        content: "Best characters, story, environment, etc. But horrible ending. If we forget about the ending, 1000/10.",
        link: "https://media.contentapi.ea.com/content/dam/masseffect/images/2020/10/me-featured-image-mele-keyart-logo.jpg.adapt.crop16x9.1023w.jpg",
        favCharacter: "Best Companion",
        url1:"/mass-effect/fav",
        url2:"/",
    })
})




app.get("/dragon-age", (req,res) => {
    res.render("template", {
        title: `${videoGames[1].name}`,
        message: `${videoGames[1].name}`,
        quote: "'I like the stories where the villain was the man beside you the whole time' - Varric ",
        content: "Most of the characters are really cool and the story is really interesting. And the music is amazing. However, there are a few characters that feel forgettable especially from the second game. 9/10",
        link: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2022/01/Dragon-Age-Origins-logo-(left)-Dragon-Age-Inquisition-cover-(centre)-Dragon-Age-2-logo-(right).jpg",
        favCharacter: "Best Companion",
        url1:"/dragon-age/fav",
        url2:"/",
    })
})

app.get("/skyrim", (req,res) => {
    res.render("template", {
        title: `${videoGames[2].name}`,
        message: `${videoGames[2].name}`,
        quote: "'My cousins out fighting dragons, and what do I get? Guard duty.' - Random Guard ",
        content: "Great replayability. The game doesn't take itself too seriously which makes it fun. And the music is amazing. Great game to relax to. 10/10 ",
        link: "https://cdn1.epicgames.com/offer/c8738a4d1ead40368eab9688b3c7d737/EGS_SkyrimSpecialEdition_BethesdaGameStudios_S2_1200x1600-ae5d13f6510e81460fe80aa1ca19cf4c",
        favCharacter: "Best Companion",
        url1:"/skyrim/fav",
        url2:"/",
    })
})

app.get("/hollow-knight", (req,res) => {
    res.render("template", {
        title: `${videoGames[3].name}`,
        message: `${videoGames[3].name}`,
        quote: "'Your home is where you keep your most prized possession-yourself' - Zote The Mighty",
        content: "Really fun game to play. Although can be frustrating at times. Wish there were more characters to interact with but the ones you can are really interesting. 9/10 ",
        link: "https://cdn.akamai.steamstatic.com/steam/apps/367520/capsule_616x353.jpg?t=1625363925",
        favCharacter: "Best Character",
        url1:"/hollow-knight/fav",
        url2:"/",
    })
})

app.get("/pokemon", (req,res) => {
    res.render("template", {
        title: `${videoGames[4].name}`,
        message: `${videoGames[4].name}`,
        quote: "'You can't expect to win every single battle.' - Brock",
        content: "Might be very biased because this was my childhood. Each game is fun to play even though the format of the game is the same. However, the newer games are far too easy. The older games were better. 10/10",
        link: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/p/pokemon-legends-arceus-switch/hero",
        favCharacter: "Favorite Pokemon",
        url1:"/pokemon/fav",
        url2:"/",
    })
})

app.get("/mass-effect/fav", (req,res) => {
    res.render("fav-template", {
        title: "Garrus",
        heading: "Garrus",
        link: "https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/dataimagejpegbase649j4AAQSkZJRgABAQAAAQABAAD2wBDAA-3c63ca985bac4050d469ab5939dfef83.jpg",
        content: "All I have to say is that he's awesome!",
        url2:"/",
    })
})

app.get("/dragon-age/fav", (req,res) => {
    res.render("fav-template", {
        title: "Dorian",
        heading: "Dorian",
        link: "https://gamingtrend.com/wp-content/uploads/2014/11/dorian1.jpg",
        content: "A fun character to interact with in the Dragon Age Inquistion. Also very good in a fight.",
        url2:"/",
    })
})

app.get("/skyrim/fav", (req,res) => {
    res.render("fav-template", {
        title: "Paarthurnax",
        heading: "Paarthurnax",
        link: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/01/Paarthurnax.jpg?q=50&fit=crop&w=1500&dpr=1.5",
        content: "The only dragon that is willing to have a conversation. ",
        url2:"/",
    })
})

app.get("/hollow-knight/fav", (req,res) => {
    res.render("knight-template", {
        title: "Hello!",
        content: "Sorry I couldn't help myself...",
        url2:"/",
    })
})

app.get("/pokemon/fav", (req,res) => {
    res.render("fav-template", {
        title: "Vulpix",
        heading: "Vulpix",
        link: "https://archives.bulbagarden.net/media/upload/thumb/6/60/037Vulpix.png/250px-037Vulpix.png",
        content: "Adorable and in my opinion a good fire type.",
        url2:"/",
    })
})

app.listen(port,() => {
    console.log("listening on port", port)
})