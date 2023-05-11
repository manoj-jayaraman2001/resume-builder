const databaseName = "mydatabase";
const objectStoreName = "pdfs";
const dbVersion = 1;
export function save(pdfBlob, filename) {
  const openRequest = indexedDB.open("mydatabase", 1);

  // stroing blobs in indexedDB database

  openRequest.onupgradeneeded = function (event) {
    const db = event.target.result;
    const objectStore = db.createObjectStore("pdfs", { keyPath: "id" });
    
  }

  openRequest.onsuccess = function (event) {
    
    const db = event.target.result;
    const objectStore = db.transaction("pdfs", "readwrite").objectStore("pdfs");

    const date = new Date();
    // for exact time when resume is saved.
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
    const pdfObject = {
      id: filename,
      blob: pdfBlob,
      time: timeCreated,
    };
    const request = objectStore.put(pdfObject);
    request.onsuccess = function (event) {

      db.close()
    };
  };
}
//  function to get all the resume,to using to display all resumes.
export function getResumes() {
  return new Promise((resolve, reject) => {
    const dbRequest = indexedDB.open("mydatabase");
    dbRequest.onerror = () => {
      reject(new Error("Failed to open database"));
    };
    dbRequest.onsuccess = () => {
      const db = dbRequest.result;
      const transaction = db.transaction('pdfs', "readonly");
      const store = transaction.objectStore('pdfs');
      
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

// function to delete a resume by filename
export function removeResume(filename) {
  const openRequest = indexedDB.open("mydatabase", 1);
  openRequest.onsuccess = function (event) {
    const db = event.target.result;
    const objectStore = db.transaction("pdfs", "readwrite").objectStore("pdfs");
    const deleteRequest = objectStore.delete(filename);

    deleteRequest.onsuccess = (event) => {
      db.close()
    };
    deleteRequest.onerror = (event) => {
      console.log("Something went wrong!!!")
    };
  };
}
