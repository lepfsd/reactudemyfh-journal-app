import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar/>

            <div className="notes_content">
                <input
                    type="text"
                    placeholder="some awesome title"
                    className="notes__title-input"
                />
                <textarea
                    placeholder="what happend today"
                    className="notes__textarea"
                >
                </textarea>
                <div className="notes__image">
                    <img
                        src="https://neliosoftware.com/es/wp-content/uploads/sites/3/2018/07/aziz-acharki-549137-unsplash-1200x775.jpg"
                        alt="imagen"
                    />
                </div>
            </div>
        </div>
    )
}
