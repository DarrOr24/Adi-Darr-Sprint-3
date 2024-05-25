import { NotePreview } from "./NotePreview.jsx"


export function NoteList({ notes, onRemove, onEdit, onPinNote }) {


    return <section className="note-list">
        <ul>
            {notes.map(note => 
            <li  key={note.id }   >
                <NotePreview note={note} onRemove = {onRemove} onEdit={onEdit} onPinNote={onPinNote} />
                
            </li>)}
            
        </ul>

        
    </section>
}


