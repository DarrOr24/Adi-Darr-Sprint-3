import { utilService } from '../../../services/util.service.js'

export function MailPreview({ mail }) {
    const sentDate = new Date(mail.sentAt)
    const day = sentDate.getDate()
    const monthName =  utilService.getMonthName(sentDate)

    // const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true }
    const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true }
    const formattedTime = sentDate.toLocaleTimeString('en-IL', timeOptions).toLocaleUpperCase()
    
    return (
        <article className="mail-preview">
            <h3>{mail.from}</h3>
            <h3>{mail.subject}</h3>
            <p>{mail.body}</p>
            <p>{monthName} {day} {formattedTime}</p>
        </article>
    )
}
