const { useState, useEffect } = React

import { mailService } from '../services/mail.service.js'

import { MailList } from '../cmps/MailList.jsx'
import { MailHeader } from '../cmps/MailHeader.jsx'

export function MailIndex() {
    
    const [ mails, setMails ] = useState([])

    useEffect(() => {
        mailService.query()
            .then(mails => setMails(mails))
    }, [])

    function removeMail(mailId) {
        mailService.remove(mailId)
            .then(() => {
                setMails(prevMails => prevMails.filter(mail => mail.id !== mailId))
            })
            .catch(err => {
                console.log('err:', err)
            })
    }

    return (
        <section className="mail-index">
            <MailHeader />
            <main>
                <section className="side-menu">Side Menu</section>
                <section className="mail-list">
                    <MailList mails={mails} onRemove={removeMail} />
                </section>
            </main>
        </section>
    )
}

