import { useEntrys } from "./JournalDataProvider.js"
import JournalEntryComponent from "./JournalEntry.js"

const entryLog = document.querySelector("#jounalEntries")

const EntryListComponent = () => {
    const entries = useEntrys()
    
     entryLog.innerHTML += `
   
        <section class="entryList">
        ${
        entries.map(
            (currentEntries) => {
                return JournalEntryComponent(currentEntries)
            }
        ).join("")
        }
    </section>
    `
}


export default EntryListComponent
