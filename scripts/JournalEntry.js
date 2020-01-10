const JournalEntryComponent = (entry) => {
    return `
    <section class="sec">
        <section id="entry--${entry.id}" class="Entries">
            <h4 class="dat">${entry.date}</h4>
            <h4 class="con">${entry.concept}</h4>
            <h4 class="ent">${entry.entry}</h4>
            <h4 class="moo">${entry.mood}</h4>
    
        </section>
    </section>
    `
}

export default JournalEntryComponent