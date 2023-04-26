const databaseName = "mydatabase";
const objectStoreName = "pdfs";
const dbVersion = 1;
export function save(pdfBlob, filename) {
  console.log(pdfBlob);
  const openRequest = indexedDB.open("mydatabase", 1);


  openRequest.onupgradeneeded = function (event) {
    const db = event.target.result;
    const objectStore = db.createObjectStore("pdfs", { keyPath: "id" });
    
  }

  openRequest.onsuccess = function (event) {
    
    const db = event.target.result;
    const objectStore = db.transaction("pdfs", "readwrite").objectStore("pdfs");

    const date = new Date();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = monthNames[date.getMonth()];
    const timeCreated = `${month} ${date.getDate()}, ${date.getHours()}:${date.getMinutes()}`;
    console.log(date);
    const pdfObject = {
      id: filename,
      blob: pdfBlob,
      time: timeCreated,
    };
    const request = objectStore.put(pdfObject);
    request.onsuccess = function (event) {
      console.log("PDF added to store");

      db.close()
    };
  };
}

export function getResumes() {
  return new Promise((resolve, reject) => {
    const dbRequest = indexedDB.open("mydatabase");
    dbRequest.onerror = () => {
      reject(new Error("Failed to open database"));
    };
    dbRequest.onsuccess = () => {
      const db = dbRequest.result;
      const transaction = db.transaction('pdfs', "readonly");
      try{
      const store = transaction.objectStore('pdfs');
      }catch{
        const request = indexedDB.deleteDatabase(dbName);
      }
      const getAllRequest = store.getAll();
      getAllRequest.onerror = () => {
        reject(new Error("Failed to retrieve data from store"));
      };
      getAllRequest.onsuccess = () => {
        resolve(getAllRequest.result);
      };

      db.close()
    };
  });
}


export function removeResume(filename) {
  const openRequest = indexedDB.open("mydatabase", 1);
  openRequest.onsuccess = function (event) {
    const db = event.target.result;
    const objectStore = db.transaction("pdfs", "readwrite").objectStore("pdfs");
    const deleteRequest = objectStore.delete(filename);

    deleteRequest.onsuccess = (event) => {
      console.log("Record deleted successfully");
      db.close()
    };
    deleteRequest.onerror = (event) => {
      console.log("Error deleting record");
    };
  };
}
