document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    var db = window.openDatabase("hunterpedia", "1.0", "hunterpedia", 1000000);
    var i = 1;
    db.transaction(populateDB, errorCB, successCB);

    function populateDB(tx) {
        tx.executeSql('DROP TABLE IF EXISTS ARMOR');
        tx.executeSql('CREATE TABLE IF NOT EXISTS ARMOR (id unique, name, type, rank, img_alias)');
        //HIGH-RANK BLADEMASTER
        tx.executeSql('INSERT INTO ARMOR (id, name, type, rank, img_alias) VALUES (' + i + ', "Leather S Armor", "Blademaster", "High", "leather")');i++;
        tx.executeSql('INSERT INTO ARMOR (id, name, type, rank, img_alias) VALUES (' + i + ', "Yukumo Sky Armor", "Blademaster", "High", "yukumo")');i++;
        tx.executeSql('INSERT INTO ARMOR (id, name, type, rank, img_alias) VALUES (' + i + ', "Piscine S Armor", "Blademaster", "High", "piscine")');i++;

        tx.executeSql('INSERT INTO ARMOR (id, name, type, rank, img_alias) VALUES (' + i + ', "Wroggi X Armor", "Blademaster", "G", "wroggi")');i++;
        tx.executeSql('INSERT INTO ARMOR (id, name, type, rank, img_alias) VALUES (' + i + ', "Volvidon X Armor", "Blademaster", "G", "volvidon")');i++;
        tx.executeSql('INSERT INTO ARMOR (id, name, type, rank, img_alias) VALUES (' + i + ', "Lagombi X Armor", "Blademaster", "G", "lagombi")');i++;
        tx.executeSql('INSERT INTO ARMOR (id, name, type, rank, img_alias) VALUES (' + i + ', "Baggi X Armor", "Blademaster", "G", "baggi")');i++;
//        tx.executeSql('INSERT INTO ARMOR (id, name, type, rank, img_alias) VALUES (' + i + ', "", "Blademaster", "", "")');i++;
//        tx.executeSql('INSERT INTO ARMOR (id, name, type, rank, img_alias) VALUES (' + i + ', "", "Blademaster", "", "")');i++;
//        tx.executeSql('INSERT INTO ARMOR (id, name, type, rank, img_alias) VALUES (' + i + ', "", "Blademaster", "", "")');i++;
//        tx.executeSql('INSERT INTO ARMOR (id, name, type, rank, img_alias) VALUES (' + i + ', "", "Blademaster", "", "")');i++;
//        tx.executeSql('INSERT INTO ARMOR (id, name, type, rank, img_alias) VALUES (' + i + ', "", "Blademaster", "", "")');i++;
//        tx.executeSql('INSERT INTO ARMOR (id, name, type, rank, img_alias) VALUES (' + i + ', "", "Blademaster", "", "")');i++;
//        tx.executeSql('INSERT INTO ARMOR (id, name, type, rank, img_alias) VALUES (' + i + ', "", "Blademaster", "", "")');i++;
    }

    function errorCB(err) {
        alert("Error processing SQL: " + err);
    }

    function successCB() {
        alert("SUCCESS!!!");
    }
}