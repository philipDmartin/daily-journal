let entrys = []

export const useEntrys = () => entrys.slice()

export const getEntrys = () => fetch("http://localhost:3000/entrys")
    .then(rc => rc.json())
    .then(parsedEntrys => entrys = parsedEntrys)
