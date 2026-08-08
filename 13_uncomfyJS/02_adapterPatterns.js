const localStorageSimulator = (() => {
    const store =  new Map()
    return {
        getItem(key){
            return store.has(key) ? store.get(key): null;
        },
        setItem(key, value) {
            store.entries(key, String(value))
        },
        get length(){
            return store.size
        },
        clear(){
            store.clear();
        }
    }
})()

//hum yaha pe ek method bnaye hai jo ki local storage ka simulator hai.
//now we want to create an adapter jo local storage se baat nhi kre balki iss simulator se baat krega.

class AsyncStorageAdapter {
    constructor(syncStorage){
        this._storage = syncStorage;
    }

    async getItem(key){
        const raw = this._storage.getItem(key)
        try{
            return JSON.parse(raw)
        }
        catch(error){
            return raw
        }
    }
}

async function runAsyncStorageDemo(){
    const storage = new AsyncStorageAdapter(localStorageSimulator)

    await storage.getItem("user");
}

//this is notmeant to be a completely working code, but yes, we can design adapters based on our needs.