
const JournalForm = () => {
    return `
    <form action="">
        <fieldset class="Journal">
            <label class="journl" for="journalDate" style="font-family: fantasy;">Date Of Entry</label>
            <input class="journ" type="date" name="journalDate" id="journalDate">
        </fieldset>
        <fieldset class="Journal">
            <label class="journl" for="journalConcepts" style="font-family: fantasy;">Concepts Covered</label>
            <input class="journ" type="concepts" name="journalConcepts" id="journalConcepts">
        </fieldset>
        <fieldset class="Journal">
            <label class="journl" for="journalEntry" style="font-family: fantasy;">Journal Entry</label>
            <input class="journ" type="entry" name="journalEntry" id="journalEntry">
        </fieldset>
        <fieldset class="Journal">
            <label class="journl" for="journalMood" style="font-family: fantasy;">Mood for the Day</label>
            <select class="journ">
                <option value="vary happy">Vary Happy</option>
                <option value="good">Good</option>
                <option value="could be better">Could be better</option>
                <option value="bad">Bad</option>
                <option value="fckn quit">Fckn Quit</option>
                </select>
        </fieldset>
        <button type="button">Record Journal Entry</button>
    </form> 
    `
}

export default JournalForm
