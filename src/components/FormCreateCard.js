export function FormCreateCard(){
    return(
        <form>
            <label>
                Передняя сторона карточки:
                <input type="text" name="fronttext"/>
            </label>
            <label>
                Задняя сторона карточки:
                <input type="submit" value="Создать карточку"/>
            </label>
        </form>
    )
}