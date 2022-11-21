import {useState} from "react"
import {AddItemButton} from "./styles"
import {NewItemFormContainer, NewItemButton, NewItemInput} from "./styles"

type AddNewItemProps = {
    onAdd(text: string): void
    toggleButtonText: string
    dark?: boolean
}
type NewItemFormProps = { onAdd(text: string): void }
export const NewItemForm = ({onAdd}: NewItemFormProps) => {
    const [text, setText] = useState("")
    return (
        <NewItemFormContainer>
            <NewItemInput value={text} onChange={e => setText(e.target.value)}/>
            <NewItemButton onClick={() => onAdd(text)}>
                Create
            </NewItemButton>
        </NewItemFormContainer>
    )
}

export const AddNewItem = (props: AddNewItemProps) => {
    const [showForm, setShowForm] = useState(false);
    const {onAdd, toggleButtonText, dark} = props;
    if (showForm) {
        return (
            <NewItemForm onAdd={text => {
                onAdd(text); setShowForm(false)
            }}/>
        )
    }
    return (
        <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
            {toggleButtonText}
        </AddItemButton>
    )
}
