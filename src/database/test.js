const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    // insert data into the table
    await saveOrphanage(db, {
        lat: "-23.5601917",
        lng: "-46.651581",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontram em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "344324444",
        images: [
            "https://images.unsplash.com/photo-1602958169956-a279ffff1b29?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1602571833724-984f81111ce1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 8h até 18h",
        open_on_weekends: "0"

    })

    // query data in the table
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // // consult only 1 orphanage by id
    // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    // console.log(orphanage)

    // // delete data from table
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '6'"))
})