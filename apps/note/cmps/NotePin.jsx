import { noteService } from "../services/note.service.js"

const { useState, useEffect } = React

export function NotePin({note: noteToPin ,onPinNote}){
        
        const [ note, setNote ] =useState(noteToPin)
        const [isPin, setIsPin] = useState(noteToPin.isPinned)
        
        const [noteClass, setNoteClass] = useState('')
       
        
        useEffect(() => {
                if (isPin) setNoteClass('pinned')
            }, [])
                

        function togglePin(ev){
                ev.stopPropagation()
                
                if(noteClass) setNoteClass('')
                else setNoteClass('pinned')

        
                setNote(prevNote =>({...prevNote, isPinned: !isPin}) )
                setIsPin(prevIsPin => !prevIsPin)


                if(note.id){ //to avoid saving unsaved notes in addnote form
                        noteService.save(note)
                        .then((updatedNote) => onPinNote(updatedNote))
                }

                else{onPinNote(!isPin)} //To make sure I am sending the current state
                
        }

       

        return <div onClick={togglePin} className={`action-icon note-pin ${noteClass}`}>
                        <img src="assets\img\pin.svg" alt="" />
                        <span className="action-name">Pin Note</span>
                </div>

       
}