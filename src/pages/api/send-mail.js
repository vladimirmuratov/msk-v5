import nodemailer from 'nodemailer'


export default function handler(req, res) {

    const message1 = {
        from: process.env.ADDRESS_FROM,
        to: [process.env.ADDRESS_TO_1, process.env.ADDRESS_TO_2, process.env.ADDRESS_TO_3, process.env.ADDRESS_TO_4],
        subject: `Поступила заявка на звонок: ${new Date().toLocaleString('ru-RU', {timeZone: 'Europe/Moscow'})}`,
        html: ` <p>Имя: ${req.body.person}</p>
                <p>Дата рождения: ${req.body.dateBirth ?? 'Нет'}</p>
                <p>Телефон: ${req.body.phone}</p>
                <p>Email: ${req.body.email ?? 'Нет'}</p>
                <p>Информация: ${req.body.info ?? 'Нет'}</p>
                <p>Сообщение пришло с сайта: mskdoctor.ru</p>`,
    }

    let transporter = nodemailer.createTransport({
        service: 'mail.ru',
        auth: {
            user: process.env.ADDRESS_FROM,
            pass: process.env.PASSWORD,
        },
    })

    if (req.method === 'POST') {
        transporter.sendMail(message1, (err, info) => {

            if (err) {
                res.status(404).json({
                    error: `Connection refused at ${err.address}`
                })
            } else {
                res.status(250).json({
                    success: `Message delivered to ${info.accepted}`
                })
            }
        })
    }

    //-------------------------------------

    if(req.body.email){
        const message2 = {
            from: process.env.ADDRESS_FROM,
            to: [req.body.email],
            subject: `Вы оставили заявку на звонок на сайте mskdoctor.ru ${new Date().toLocaleString('ru-RU', {timeZone: 'Europe/Moscow'})}`,
            html: ` <p>Имя: ${req.body.person}</p>
                    <p>Дата рождения: ${req.body.dateBirth ?? 'Нет'}</p>
                    <p>Телефон: ${req.body.phone}</p>
                    <p>Email: ${req.body.email ?? 'Нет'}</p>
                    <p>Информация: ${req.body.info ?? 'Нет'}</p>`,
        }

        transporter.sendMail(message2)
    }
}
